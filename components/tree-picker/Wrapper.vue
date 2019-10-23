<template>
    <div>
        <lk-panel-body 
            padding="none"
            padding-bottom="none">
            <lk-navigation-tabs :items="tabs" />
        </lk-panel-body>
        <lk-panel-body
            v-if="filteredItems.length > 0 || searchTerm !== ''"
            padding-bottom="compact"
            padding-vertical="compact"
            muted
        >
            <lk-input
                v-model="searchTerm"
                margin-bottom="none"
                :placeholder="searchPlaceholder"
            >
                <template slot="prefix">
                    <lk-icon icon="search" />
                </template>
            </lk-input>
        </lk-panel-body>
        <input-error :has-error="hasError">
            <slot 
                name="error" 
                slot="error"
            />
        </input-error>
        <lk-panel-body>
            <lk-alert
                v-if="filteredItems.length === 0"
                empty
            >
                <template slot="title">{{emptyTitle}}</template>
            </lk-alert>
            <node
                v-else
                :counters="filteredCounters"
                :has-error="hasError"
                :is-expanded-tree="isExpandedTree"
                :is-root="true"
                :items="filteredItems"
                :label="rootLabel"
                :show-bulk-deselection="showBulkDeselection"
                :show-bulk-selection="showBulkSelection"
                :show-options-count="showBulkSelection"
                :show-selected-count="showBulkDeselection"
                :value="value"
                :value-set="valueSet"
                @input="emitInput"
                @toggled="toggleNode"
            />
        </lk-panel-body>
    </div>
</template>

<script>
import InputError from '../inputs/utils/InputError';
import Node from './Node';

const filters = {
    ALL: 'all',
    SELECTED: 'selected',
    UNSELECTED: 'unselected',
};
const tabs = {
    ALL: 'all',
    SELECTED: 'selected',
    UNSELECTED: 'unselected',
};

export default {
    components: {
        InputError,
        Node,
    },
    computed: {
        rootLabel() {
            if (this.filter === filters.SELECTED) {
                return `Selected ${this.optionsLabel}`;
            } else if (this.filter === filters.UNSELECTED) {
                return `Unselected ${this.optionsLabel}`;
            } else {
                return `All ${this.optionsLabel}`;
            }
        },
        counters() {
            return this.generateCounters({}, [], this.valueSet, ...this.items);
        },
        emptyTitle() {
            const optionsLabel = this.optionsLabel.toLowerCase();
            if (this.searchTerm === '') {
                if (this.filter === filters.SELECTED) {
                    return `There are no selected ${optionsLabel}`;
                } else if (this.filter === filters.UNSELECTED) {
                    return `There are no unselected ${optionsLabel}`;
                } else {
                    return `There are no ${optionsLabel}`;
                }
            } else {
                if (this.filter === filters.SELECTED) {
                    return `There are no selected ${optionsLabel} matching '${
                        this.searchTerm
                    }'`;
                } else if (this.filter === filters.UNSELECTED) {
                    return `There are no unselected ${optionsLabel} matching '${
                        this.searchTerm
                    }'`;
                } else {
                    return `There are no ${optionsLabel} matching '${
                        this.searchTerm
                    }'`;
                }
            }
        },
        filteredCounters() {
            if (this.searchTerm === '' && this.filter === filters.ALL) {
                return this.counters;
            } else {
                return this.generateCounters(
                    {},
                    [],
                    this.valueSet,
                    ...this.filteredItems,
                );
            }
        },
        filteredItems() {
            if (this.searchTerm === '' && this.filter === filters.ALL) {
                return this.items;
            } else {
                const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
                const filteredItems = this.filterItems(
                    this.items,
                    this.filter,
                    lowerCaseSearchTerm,
                );
                return filteredItems;
            }
        },
        searchPlaceholder() {
            if (this.filter === filters.SELECTED) {
                return `Search Selected ${this.optionsLabel}`;
            } else if (this.filter === filters.UNSELECTED) {
                return `Search Unselected ${this.optionsLabel}`;
            } else {
                return `Search All ${this.optionsLabel}`;
            }
        },
        showBulkDeselection() {
            return this.filter !== filters.UNSELECTED;
        },
        showBulkSelection() {
            return this.filter !== filters.SELECTED;
        },
        tabs() {
            return [
                {
                    callback: () => {
                        this.setActiveTab(tabs.ALL);
                        this.setFilter(filters.ALL);
                    },
                    isActive: this.activeTab === tabs.ALL,
                    label: `All (${this.counters.options})`,
                },
                {
                    callback: () => {
                        this.setActiveTab(tabs.SELECTED);
                        this.setFilter(filters.SELECTED);
                    },
                    isActive: this.activeTab === tabs.SELECTED,
                    label: `Selected (${this.counters.selected})`,
                },
                {
                    callback: () => {
                        this.setActiveTab(tabs.UNSELECTED);
                        this.setFilter(filters.UNSELECTED);
                    },
                    isActive: this.activeTab === tabs.UNSELECTED,
                    label: `Unselected (${this.counters.options -
                        this.counters.selected})`,
                },
            ];
        },
        valueSet() {
            return new Set(this.value);
        },
    },
    data() {
        return {
            activeTab: tabs.ALL,
            filter: filters.ALL,
            isExpandedTree: {},
            rootIsExpandedTree: {},
            searchTerm: '',
            treeResetByFilter: false,
        };
    },
    methods: {
        emitInput(selectedOptions) {
            this.$emit('input', selectedOptions);
        },
        filterItems(items, filter, searchTerm) {
            /*
                We filter options only: if a parent has no options (or children that
                have options) then we filter out the parent.

                TODO:
                We may want to add a toggle option to filter by parent label, but
                we'll ignore that for now.
            */
            return items.reduce((list, item) => {
                if (
                    item.items === undefined &&
                    (searchTerm === '' ||
                        item.label.toLowerCase().includes(searchTerm) ===
                            true) &&
                    (filter !== filters.SELECTED ||
                        this.valueSet.has(item.value) === true) &&
                    (filter !== filters.UNSELECTED ||
                        this.valueSet.has(item.value) === false)
                ) {
                    list.push(item);
                } else if (item.items !== undefined) {
                    const children = this.filterItems(
                        item.items,
                        filter,
                        searchTerm,
                    );
                    if (children.length > 0) {
                        list.push({
                            ...item,
                            items: children,
                        });
                    }
                }
                return list;
            }, []);
        },
        generateCounters(counters, path, selectedItems, item, ...siblings) {
            if (item === undefined) {
                return counters;
            } else if (item.items === undefined) {
                const itemIsSelected = selectedItems.has(item.value);
                if (counters.options === undefined) {
                    counters.options = 0;
                    counters.selected = 0;
                }
                counters.options += 1;
                if (itemIsSelected === true) {
                    counters.selected += 1;
                }
                if (path.length > 0 && counters.children === undefined) {
                    counters.children = {};
                }
                let node = counters;
                for (const key of path) {
                    if (node.children === undefined) {
                        node.children = {};
                    }
                    if (node.children[key] === undefined) {
                        node.children[key] = {
                            options: 0,
                            selected: 0,
                        };
                    }
                    node = node.children[key];
                    node.options += 1;
                    if (itemIsSelected === true) {
                        node.selected += 1;
                    }
                }
            } else {
                this.generateCounters(
                    counters,
                    [...path, item.value],
                    selectedItems,
                    ...item.items,
                );
            }
            return this.generateCounters(
                counters,
                path,
                selectedItems,
                ...siblings,
            );
        },
        generateIsExpandedTree(tree, expandAll, item, ...siblings) {
            /*
                TODO:
                We want this to generate isExpanded and children at the root of
                the object.

                Currently we hack around this by supplying an initial tree with
                these values.
            */
            if (item === undefined) {
                return tree;
            } else if (item.items !== undefined) {
                tree[item.value] = {
                    isExpanded: expandAll,
                };
                const isParentOfParent = item.items.some((child) => {
                    return child.items !== undefined;
                });
                if (isParentOfParent === true) {
                    tree[item.value].children = {};
                    this.generateIsExpandedTree(
                        tree[item.value].children,
                        expandAll,
                        ...item.items,
                    );
                }
            }
            return this.generateIsExpandedTree(tree, expandAll, ...siblings);
        },
        setActiveTab(activeTab) {
            this.activeTab = activeTab;
        },
        setFilter(filter) {
            this.filter = filter;
        },
        toggleNode([path, isExpanded]) {
            let tree = this.isExpandedTree;
            for (const key of path) {
                tree = tree.children[key];
            }
            tree.isExpanded = isExpanded;
        },
    },
    props: {
        hasError: {
            default: false,
            type: Boolean,
        },
        items: {
            required: true,
            type: Array,
        },
        optionsLabel: {
            default: 'Options',
            type: String,
        },
        value: {
            default: () => [],
            type: Array,
        },
    },
    watch: {
        filter() {
            this.isExpandedTree = {
                isExpanded: false,
                children: this.generateIsExpandedTree({}, false, ...this.items),
            };
            if (this.searchTerm !== '') {
                this.searchTerm = '';
                /*
                    The reason we set rootIsExpandedTree to isExpandedTree is
                    because resetting the searchTerm triggers setting
                    isExpandedTree to rootIsExpandedTree which would then have
                    the side effect of carrying over the expanded state between
                    filters, which is not something we want.
                */
                this.rootIsExpandedTree = this.isExpandedTree;
            }
        },
        items: {
            handler() {
                this.isExpandedTree = {
                    isExpanded: false,
                    children: this.generateIsExpandedTree(
                        {},
                        false,
                        ...this.items,
                    ),
                };
            },
            immediate: true,
        },
        searchTerm(searchTerm, previousSearchTerm) {
            /*
                TODO:
                We may want to debounce this function for large amounts of
                items.

                Alternatively, if search results are greater than N we may want
                to limit the number of items that are rendered as that is where
                the bottleneck is.
                    - This should probably be a computed value (displayItems?),
                      with the limit being data that can be increased at the
                      click of a button.

                As a last resort we may need to rework some things and implement
                server side filtering and fetching.
            */
            if (searchTerm === '' && previousSearchTerm !== '') {
                this.isExpandedTree = this.rootIsExpandedTree;
                return;
            }
            if (searchTerm !== '' && previousSearchTerm === '') {
                this.rootIsExpandedTree = this.isExpandedTree;
            }
            this.isExpandedTree = {
                isExpanded: true,
                children: this.generateIsExpandedTree({}, true, ...this.items),
            };
        },
    },
};
</script>

<style module lang="scss">
@import '../../styles/variables';
</style>
