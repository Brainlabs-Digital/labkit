<template>
    <div>
        <div :class="$style['table-container']">
            <table :class="classes">
                <colgroup>
                    <col v-if="selectedItemIds !== undefined">
                    <col 
                        v-for="(column, index) in columns" 
                        :width="column.width" 
                        :key="index">
                </colgroup>
                <thead>
                    <tr>
                        <th 
                            v-if="selectedItemIds !== undefined" 
                            :class="$style.select">
                            <lk-dropdown-button 
                                :items="bulkSelectOptions" 
                                mini 
                                margin-bottom="none" 
                                outline>
                                <lk-icon :icon="bulkSelectIcon"/>
                            </lk-dropdown-button>
                        </th>
                        <th
                            v-for="(column, index) in columns"
                            :class="sortSettings.columnIndex === index ? $style.active : ''"
                            :key="index"
                        >
                            {{column.label}}
                            <template v-if="columnSortItems[index] !== undefined">
                                <lk-dropdown-menu :items="columnSortItems[index]">
                                    <span :class="$style['sort-icon']">
                                        <lk-icon icon="sort"/>
                                    </span>
                                </lk-dropdown-menu>
                            </template>
                            <p 
                                :class="$style['sort-label']" 
                                v-if="index === sortSettings.columnIndex">
                                <lk-icon v-bind="sortIconProps"/>
                                {{sortedItemLabel}}
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="item in items"
                        :class="selectedItemIds !== undefined && selectedItemIds.has(item.id) === true ? $style.selected : ''"
                        :key="item.id"
                    >
                        <td 
                            v-if="selectedItemIds !== undefined" 
                            :class="$style.select">
                            <lk-button
                                circle
                                mini
                                margin-bottom="none"
                                :outline="selectedItemIds.has(item.id) === false"
                                @click.native="toggleItemSelection(item.id)"
                            >
                                <lk-icon 
                                    v-if="selectedItemIds.has(item.id) === true" 
                                    icon="check"/>
                                <lk-icon 
                                    v-else 
                                    icon="square-outline"/>
                            </lk-button>
                        </td>
                        <slot 
                            :item="item" 
                            :styles="$style"/>
                    </tr>
                </tbody>
            </table>
        </div>
        <div 
            v-if="showPageNavigation === true" 
            :class="$style['page-navigation-container']">
            <lk-page-navigation 
                compact 
                :page="page" 
                :total-pages="totalPages" 
                @updated:page="emitPage"/>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        bulkSelectIcon() {
            const visibleSelectedItems = this.items.filter(({id}) => {
                return this.selectedItemIds.has(id) === true;
            });
            if (visibleSelectedItems.length === this.items.length) {
                return 'square-check';
            } else if (visibleSelectedItems.length > 0) {
                return 'minus-square';
            } else {
                return 'square-outline';
            }
        },
        bulkSelectOptions() {
            const options = [
                {
                    callback: () => this.handleBulkSelection('selectAll'),
                    label: 'Select All',
                },
                {
                    callback: () => this.handleBulkSelection('selectVisible'),
                    hasDivider: true,
                    label: `Select ${this.items.length} Visible Item${
                        this.items.length > 1 ? 's' : ''
                    }`,
                },
                {
                    callback: () => this.handleBulkSelection('deselectAll'),
                    isDisabled: this.visibleSelectedItems.length === 0,
                    label: 'Deselect All',
                },
                {
                    callback: () => this.handleBulkSelection('deselectVisible'),
                    isDisabled: this.visibleSelectedItems.length === 0,
                    label: `Deselect ${
                        this.visibleSelectedItems.length
                    } Selected Visible Item${
                        this.visibleSelectedItems.length === 1 ? '' : 's'
                    }`,
                },
            ];
            return options;
        },
        classes() {
            const classes = [this.$style.table];
            if (this.flush === true) {
                classes.push(this.$style.flush);
            }
            if (this.roundedBottomCorners === true) {
                classes.push(this.$style['rounded-bottom-corners']);
            }
            if (this.showPageNavigation) {
                classes.push(this.$style['thick-bottom-border']);
            }
            return classes;
        },
        columnSortItems() {
            return this.columns.map((column, index) => {
                if (column.sortableItems === undefined) {
                    return undefined;
                } else {
                    const items = [];
                    for (const sortableItem of column.sortableItems) {
                        items.push(
                            {
                                callback: () =>
                                    this.emitSortSettings({
                                        columnIndex: index,
                                        key: sortableItem.key,
                                        order: 'asc',
                                    }),
                                iconProps: {
                                    flip: true,
                                    icon: 'sort-amount-up',
                                },
                                isActive:
                                    this.sortSettings.key ===
                                        sortableItem.key &&
                                    this.sortSettings.order === 'asc',
                                label: sortableItem.label,
                            },
                            {
                                callback: () =>
                                    this.emitSortSettings({
                                        columnIndex: index,
                                        key: sortableItem.key,
                                        order: 'desc',
                                    }),
                                hasDivider: true,
                                iconProps: {
                                    icon: 'sort-amount-down',
                                },
                                isActive:
                                    this.sortSettings.key ===
                                        sortableItem.key &&
                                    this.sortSettings.order === 'desc',
                                label: sortableItem.label,
                            },
                        );
                    }
                    return items;
                }
            });
        },
        visibleSelectedItems() {
            return this.items.filter(({id}) => {
                return this.selectedItemIds.has(id) === true;
            });
        },
        showPageNavigation() {
            return this.page !== undefined && this.totalPages !== undefined;
        },
        sortIconProps() {
            if (this.sortSettings.order === 'asc') {
                return {
                    flip: true,
                    icon: 'sort-amount-up',
                };
            } else if (this.sortSettings.order === 'desc') {
                return {
                    icon: 'sort-amount-down',
                };
            }
        },
        sortedItemLabel() {
            const sortedItem = this.columns[
                this.sortSettings.columnIndex
            ].sortableItems.find((item) => {
                return item.key === this.sortSettings.key;
            });
            return sortedItem.label;
        },
    },
    methods: {
        emitPage(page) {
            this.$emit('updated:page', page);
        },
        emitSortSettings(sortSettings) {
            this.$emit('updated:sort-settings', sortSettings);
        },
        handleBulkSelection(selectionType) {
            if (selectionType === 'selectAll') {
                this.$emit('selected:all-items');
            } else if (selectionType === 'selectVisible') {
                this.$emit('selected:items', this.items.map(({id}) => id));
            } else if (selectionType === 'deselectAll') {
                this.$emit('deselected:all-items');
            } else if (selectionType === 'deselectVisible') {
                this.$emit('deselected:items', this.items.map(({id}) => id));
            }
        },
        toggleItemSelection(itemId) {
            if (this.selectedItemIds.has(itemId) === true) {
                this.$emit('deselected:items', [itemId]);
            } else {
                this.$emit('selected:items', [itemId]);
            }
        },
    },
    props: {
        columns: {
            required: true,
            type: Array,
        },
        flush: {
            type: Boolean,
        },
        items: {
            required: true,
            type: Array,
        },
        page: {
            type: Number,
        },
        roundedBottomCorners: {
            type: Boolean,
        },
        selectedItemIds: {
            type: Set,
        },
        sortSettings: {
            default: () => {
                return {};
            },
            type: Object,
            validator(value) {
                return (
                    Object.keys(value).length === 0 ||
                    (value.columnIndex !== undefined &&
                        value.key !== undefined &&
                        (value.order !== 'asc' || value.order !== 'desc'))
                );
            },
        },
        totalPages: {
            type: Number,
        },
    },
};
</script>

<style module lang="scss">
@import '../styles/variables';

.page-navigation-container {
    text-align: center;
}

.table {
    background-color: transparent;
    border-bottom: border-width() solid border-color();
    border-collapse: collapse;
    margin: 0 0 spacing-vertical(content);
    min-width: 100%;
    width: content;
    white-space: nowrap;
    > tbody > tr {
        border-top: border-width() solid border-color();
        transition: background $transition-duration;
        transition-timing-function: $transition-timing-function;
        &:first-child {
            border-top: border-width(thick) solid border-color();
        }
        &.selected {
            background: background-color(highlight, primary);
        }
        > td {
            font-size: font-size();
            padding: spacing-vertical(compact) spacing-horizontal();
            vertical-align: middle;
            width: auto;
            &:first-child {
                padding-left: spacing-horizontal() * 0.5;
            }
            &:last-child {
                padding-right: spacing-horizontal() * 0.5;
            }
            &.action-items {
                text-align: right;
                width: 1%;
                white-space: nowrap;
            }
            &.select {
                text-align: center;
                padding-right: spacing-horizontal() * 0.5;
            }
            .label {
                color: color(text, muted);
            }
            .title {
                font-size: font-size(body);
                font-weight: bold;
                a {
                    text-decoration: none;
                    &:active,
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
    > thead > tr > th {
        padding: 0 spacing-horizontal() spacing-vertical(content);
        font-size: font-size(label);
        font-weight: bold;
        text-align: left;
        vertical-align: bottom;
        &:first-child {
            padding-left: spacing-horizontal() * 0.5;
        }
        &:last-child {
            padding-right: spacing-horizontal() * 0.5;
        }
        &.active {
            border-bottom: border-width(thick) solid color(text);
        }
        &.select {
            padding-right: spacing-horizontal() * 0.5;
            text-align: center;
        }
        .sort-icon {
            color: color(link);
            cursor: pointer;
            &:active,
            &:hover {
                color: color(link, dark);
            }
        }
        .sort-label {
            color: color(text, muted);
            font-size: font-size(caption);
            font-weight: normal;
        }
    }
    &.flush {
        background-color: transparent;
        border-bottom: none;
        border-collapse: collapse;
        margin: 0;
        > tbody > tr {
            > td {
                padding: spacing-vertical(compact) spacing-horizontal();
                &:first-child {
                    padding: spacing-vertical(compact) spacing-horizontal();
                }
                &:last-child {
                    padding: spacing-vertical(compact) spacing-horizontal();
                }
                &.select {
                    padding-right: spacing-horizontal() * 0.5;
                }
            }
        }
        > thead > tr > th {
            padding: spacing-vertical(content) spacing-horizontal();
            &:first-child {
                padding: spacing-vertical(content) spacing-horizontal();
            }
            &:last-child {
                padding: spacing-vertical(content) spacing-horizontal();
            }
            &.select {
                padding-right: spacing-horizontal() * 0.5;
            }
        }
    }
    &.rounded-bottom-corners {
        > tbody > tr:last-child {
            > td:first-child {
                border-radius: 0 0 0 border-radius(panel);
            }
            > td:last-child {
                border-radius: 0 0 border-radius(panel) 0;
            }
        }
    }
    &.thick-bottom-border {
        border-bottom: border-width(thick) solid border-color();
        &.flush {
            margin: 0 0 spacing-vertical(content);
        }
    }
}

.table-container {
    overflow-x: auto;
    width: 100%;
}
</style>
