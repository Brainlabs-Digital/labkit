<template>
    <lk-table
        :columns="columns"
        :items="sortedItems"
        :sort-settings="sortSettings"
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
        </template>
    </lk-table>
</template>

<script>
import orderBy from 'lodash.orderby';

export default {
    computed: {
        sortedItems() {
            return orderBy(
                this.items,
                [this.sortSettings.key, 'name'], // 'name' is used as a secondary sorting field if the primary fields are equal.
                [this.sortSettings.order, this.sortSettings.order],
            );
        },
    },
    data() {
        return {
            columns: [
                {
                    label: 'Things',
                    sortableItems: [
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
            items: [
                {
                    count: 12345,
                    id: 1,
                    info: 'A short bit of information about Item 1.',
                    link: 'https://example.com/item-1',
                    name: 'Item 1',
                },
                {
                    count: 2345,
                    id: 2,
                    info: 'A short bit of information about Item 2.',
                    link: 'https://example.com/item-2',
                    name: 'Item 2',
                },
                {
                    count: 345,
                    id: 3,
                    info: 'A short bit of information about Item 3.',
                    link: 'https://example.com/item-3',
                    name: 'Item 3',
                },
            ],
            sortSettings: {
                columnIndex: 0,
                key: 'name',
                order: 'asc',
            },
        };
    },
    methods: {
        setSortSettings(sortSettings) {
            this.sortSettings = {...sortSettings};
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
