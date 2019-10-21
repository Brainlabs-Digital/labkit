<template>
    <lk-tree
        :no-branch="isRoot"
        :root="isRoot"
        :layout-margin="layoutMargin"
    >
        <div
            :class="containerClasses"
            @click="toggle(undefined, [])"
        >
            <lk-row align-items-center>
                <lk-column>
                    <h5 :class="$style['parent-title']">
                        <span :class="$style['toggled-state-icon']">
                            <lk-icon :icon="expandedIcon" />
                        </span>
                        {{label}}
                        <span :class="$style['picked-count']">
                            <template v-if="showOptionsCount === true && showSelectedCount === true">
                                ({{counters.selected}}/{{counters.options}})
                            </template>
                            <template v-else-if="showOptionsCount === true">
                                ({{counters.options}})
                            </template>
                            <template v-else-if="showSelectedCount === true">
                                ({{counters.selected}})
                            </template>
                        </span>
                    </h5>
                </lk-column>
                <lk-column span="auto">
                    <span @click.stop.prevent>
                        <lk-dropdown-button
                            bottom
                            end
                            :items="bulkSelectionOptions"
                            mini
                            margin-bottom="none"
                            outline
                        >
                            <lk-icon :icon="bulkSelectionIcon"/>
                        </lk-dropdown-button>
                    </span>
                    <template v-if="parents.length > 0">
                        <span @click.stop.prevent>
                            <lk-dropdown-button
                                bottom
                                circle
                                end
                                :items="[
                                    {
                                        callback: expandAll,
                                        label: 'Expand All',
                                    },
                                    {
                                        callback: collapseAll,
                                        label: 'Collapse All',
                                    }
                                ]"
                                mini
                                margin-bottom="none"
                                outline
                            >
                                <lk-icon icon="ellipsis-v"/>
                            </lk-dropdown-button>
                        </span>
                    </template>
                </lk-column>
            </lk-row>
        </div>
        <template v-if="isExpandedTree.isExpanded === true">
            <lk-tree-picker-node
                v-for="(parent, index) in parents"
                :counters="counters.children[parent.value]"
                :is-expanded-tree="isExpandedTree.children[parent.value]"
                :items="parent.items"
                :key="parent.value"
                :label="parent.label"
                :layout-margin="childHasLayoutMargin(
                    parent.label,
                    parents.length > 1,
                    (parents.length - 1) === index,
                    options.length > 0
                )"
                :show-bulk-deselection="showBulkDeselection"
                :show-bulk-selection="showBulkSelection"
                :show-options-count="showOptionsCount"
                :show-selected-count="showSelectedCount"
                :value="value"
                :value-set="valueSet"
                @input="emitInput"
                @toggled="toggle(parent.value, $event)"
            />
            <lk-tree v-if="options.length > 0">
                <lk-checkbox
                    :items="options"
                    margin-bottom="none"
                    :value="value"
                    @input="emitInput"
                />
            </lk-tree>
        </template>
    </lk-tree>
</template>

<script>
export default {
    computed: {
        bulkSelectionIcon() {
            if (this.counters.options === this.counters.selected) {
                return 'square-check';
            } else if (this.counters.selected > 0) {
                return 'minus-square';
            } else {
                return 'square-outline';
            }
        },
        bulkSelectionOptions() {
            const options = [];
            if (this.showBulkSelection === true) {
                options.push({
                    callback: () => {
                        this.selectAll();
                    },
                    label: 'Select All',
                });
                if (this.options.length > 0 && this.parents.length > 0) {
                    options.push({
                        callback: () => {
                            this.selectDirectChildren();
                        },
                        label: 'Select All Direct Children',
                    });
                }
            }
            if (this.showBulkDeselection === true) {
                options.push({
                    callback: () => {
                        this.deselectAll();
                    },
                    label: 'Deselect All',
                });
                if (this.options.length > 0 && this.parents.length > 0) {
                    options.push({
                        callback: () => {
                            this.deselectDirectChildren();
                        },
                        label: 'Deselect All Direct Children',
                    });
                }
            }
            return options;
        },
        containerClasses() {
            const classes = [this.$style['parent-container']];
            if (this.isRoot === true) {
                classes.push(this.$style['root-container']);
            }
            if (this.isExpandedTree.isExpanded === true) {
                classes.push(this.$style.expanded);
            }
            if (this.hasError === true) {
                classes.push(this.$style['has-error']);
            }
            return classes;
        },
        expandedIcon() {
            if (this.isExpandedTree.isExpanded === true) {
                return 'minus-square-outline';
            } else {
                return 'plus-square';
            }
        },
        options() {
            return this.items.filter((item) => item.items === undefined);
        },
        parents() {
            return this.items.filter((item) => item.items !== undefined);
        },
    },
    methods: {
        childHasLayoutMargin(
            label,
            hasSiblings,
            isLastChild,
            parentHasOptions,
        ) {
            return (
                (hasSiblings === true && isLastChild === false) ||
                parentHasOptions === true
            );
        },
        collapseAll() {
            const paths = this.getAllPaths([], [], ...this.items);
            for (const path of paths) {
                this.$emit('toggled', [path, false]);
            }
        },
        deselectAll() {
            const options = new Set(this.getAllValues([], ...this.items));
            this.$emit(
                'input',
                this.value.filter((value) => options.has(value) === false),
            );
        },
        deselectDirectChildren() {
            const options = new Set(this.options.map((option) => option.value));
            this.$emit(
                'input',
                this.value.filter((value) => options.has(value) === false),
            );
        },
        emitInput(selectedOptions) {
            this.$emit('input', selectedOptions);
        },
        expandAll() {
            const paths = this.getAllPaths([], [], ...this.items);
            for (const path of paths) {
                this.$emit('toggled', [path, true]);
            }
        },
        getAllPaths(paths, path, item, ...siblings) {
            if (item === undefined) {
                paths.push(path);
                return paths;
            } else if (item.items !== undefined) {
                this.getAllPaths(paths, [...path, item.value], ...item.items);
            }
            return this.getAllPaths(paths, path, ...siblings);
        },
        getAllValues(items, item, ...siblings) {
            if (item === undefined) {
                return items;
            } else if (item.items === undefined) {
                items.push(item.value);
            } else {
                this.getAllValues(items, ...item.items);
            }
            return this.getAllValues(items, ...siblings);
        },
        selectAll() {
            const allValues = this.getAllValues([], ...this.items);
            this.$emit('input', [
                ...this.value,
                ...allValues.filter(
                    (value) => this.valueSet.has(value) === false,
                ),
            ]);
        },
        selectDirectChildren() {
            this.$emit('input', [
                ...this.value,
                ...this.options
                    .map((option) => option.value)
                    .filter((value) => this.valueSet.has(value) === false),
            ]);
        },
        toggle(parent, [path = [], isExpanded]) {
            if (parent === undefined) {
                this.$emit('toggled', [[], !this.isExpandedTree.isExpanded]);
            } else {
                this.$emit('toggled', [[parent, ...path], isExpanded]);
            }
        },
    },
    name: 'LkTreePickerNode',
    props: {
        counters: {
            type: Object,
        },
        hasError: {
            default: false,
            type: Boolean,
        },
        isExpandedTree: {
            type: Object,
        },
        isRoot: {
            type: Boolean,
        },
        items: {
            required: true,
            type: Array,
        },
        label: {
            required: true,
            type: String,
        },
        layoutMargin: {
            type: Boolean,
        },
        showBulkDeselection: {
            type: Boolean,
        },
        showBulkSelection: {
            type: Boolean,
        },
        showOptionsCount: {
            type: Boolean,
        },
        showSelectedCount: {
            type: Boolean,
        },
        value: {
            default: () => [],
            type: Array,
        },
        valueSet: {
            type: Set,
        },
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';

.parent-container {
    background: background-color(content);
    border: border-width() solid border-color();
    border-left-width: border-width(thick);
    border-radius: border-radius(button);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    cursor: pointer;
    padding: spacing-vertical(compact) spacing-horizontal();
    &:hover {
        border-color: color(text);
    }
    &.expanded {
        margin: 0 0 spacing-vertical();
    }
}

.has-error {
    background: color(danger, muted);
    border: border-width() solid color(danger, base);
}

.root-container {
    border-left-width: border-width();
    border-radius: border-radius(button);
}

.parent-title {
    font-size: font-size(body);
    font-weight: bold;
    margin: 0;
}

.picked-count {
    color: color(text, muted);
    font-size: font-size();
    font-weight: normal;
}

.toggled-state-icon {
    color: color(text, muted);
}
</style>
