<template>
    <div>
        <lk-input v-model="searchString">
            <template slot="label">Name filter</template>
            <template slot="hint">
                <p>Type a name in below to filter out other table items.</p>
                <p><strong>Hint: </strong><em>Type numbers to see the filter gradually filter out items.</em></p>
            </template>
        </lk-input>
        <lk-divider margin-bottom="content"/>
        <lk-content>
            <p>{{selectedItemsMessage}}</p>
        </lk-content>
        <lk-alert 
            v-if="filteredItems.length === 0" 
            empty>
            <template slot="content">
                <p>Your search for '<strong><em>{{searchString}}</em></strong>' did not match any items.</p>
            </template>
        </lk-alert>
        <lk-panel v-else>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <lk-table
                    :columns="columns"
                    flush
                    :items="pageItems"
                    :page="page"
                    :total-pages="paginationMetadata.totalPages"
                    :selected-item-ids="selectedItemIds"
                    :sort-settings="sortSettings"
                    @deselected:all-items="removeAllItemsFromSelection"
                    @deselected:items="removeItemsFromSelection"
                    @selected:items="addItemsToSelection"
                    @selected:all-items="addAllItemsToSelection"
                    @updated:page="setPage"
                    @updated:sort-settings="setSortSettings"
                >
                    <template slot-scope="{item, styles}">
                        <td>
                            <p :class="styles.title"><a :href="item.link">{{item.name}}</a></p>
                            <p>{{item.info}}</p>
                        </td>
                        <td>
                            <p><span :class="styles.label">Link: </span><a :href="item.link">{{item.link}}</a></p>
                            <p><span :class="styles.label">Count:</span> {{item.count}}</p>
                        </td>
                        <td :class="styles['action-items']">
                            <lk-button 
                                mini 
                                margin-bottom="none"
                                primary
                            >
                                Primary
                            </lk-button>
                            <lk-button 
                                mini 
                                margin-bottom="none"
                                outline 
                                primary
                            >
                                Secondary
                            </lk-button>
                            <lk-dropdown-button
                                circle
                                end
                                :items="[
                                    {
                                        callback: () => {},
                                        label: 'Third action',
                                    },
                                    {
                                        callback: () => {},
                                        label: 'Fourth action',
                                    },
                                ]"
                                mini
                                margin-bottom="none"
                                outline
                                primary
                            >
                                <lk-icon icon="ellipsis-v"/>
                            </lk-dropdown-button>
                        </td>
                    </template>
                </lk-table>
            </lk-panel-body>
        </lk-panel>
    </div>
</template>

<script>
import orderBy from 'lodash.orderby';
import * as pagination from '../../../../lib/pagination';

export default {
    computed: {
        filteredItems() {
            const lowerCaseSearchString = this.searchString.toLowerCase();
            return this.items.filter((item) => {
                return item.name.toLowerCase().includes(lowerCaseSearchString);
            });
        },
        paginationMetadata() {
            return pagination.generateMetadata(
                this.page,
                this.pageSize,
                this.sortedItems.length,
            );
        },
        pageItems() {
            return pagination.getPageItems(
                this.paginationMetadata,
                this.sortedItems,
            );
        },
        selectedItemsMessage() {
            if (this.selectedItemIds.size === 1) {
                return `There is ${this.selectedItemIds.size} selected item.`;
            } else {
                return `There are ${this.selectedItemIds.size} selected items.`;
            }
        },
        sortedItems() {
            return orderBy(
                this.filteredItems,
                [this.sortSettings.key, 'name'], // 'name' is used as a secondary sorting field if the primary fields are equal.
                [this.sortSettings.order, this.sortSettings.order],
            );
        },
    },
    created() {
        for (let i = 1; i <= 1000; i += 1) {
            this.items.push({
                count: i * i,
                id: i,
                info: `A short bit of information about Item ${i}.`,
                link: `https://example.com/item-${i}`,
                name: `Item ${i}`,
            });
        }
    },
    data() {
        return {
            columns: [
                {
                    label: 'Things',
                    sortableItems: [
                        {
                            key: 'id',
                            label: 'ID',
                        },
                        {
                            key: 'name',
                            label: 'Name',
                        },
                    ],
                    width: '50%',
                },
                {
                    label: 'Extra things',
                    sortableItems: [
                        {
                            key: 'link',
                            label: 'Link',
                        },
                        {
                            key: 'count',
                            label: 'Count',
                        },
                    ],
                    width: '50%',
                },
            ],
            items: [],
            page: 1,
            pageSize: 5,
            searchString: '',
            selectedItemIds: new Set(),
            sortSettings: {
                columnIndex: 0,
                key: 'name',
                order: 'asc',
            },
        };
    },
    methods: {
        addAllItemsToSelection() {
            this.selectedItemIds = new Set(this.items.map(({id}) => id));
        },
        addItemsToSelection(itemIds) {
            for (const itemId of itemIds) {
                this.selectedItemIds.add(itemId);
            }
            this.selectedItemIds = new Set([...this.selectedItemIds.values()]);
        },
        removeAllItemsFromSelection() {
            this.selectedItemIds = new Set();
        },
        removeItemsFromSelection(itemIds) {
            for (const itemId of itemIds) {
                this.selectedItemIds.delete(itemId);
            }
            this.selectedItemIds = new Set([...this.selectedItemIds.values()]);
        },
        resetPage() {
            this.page = 1;
        },
        setPage(page) {
            this.page = page;
        },
        setSortSettings(sortSettings) {
            this.sortSettings = {...sortSettings};
        },
    },
    watch: {
        filteredItems() {
            this.resetPage();
        },
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
