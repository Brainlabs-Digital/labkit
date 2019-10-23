<template>
    <lk-table
        :columns="columns"
        :items="items"
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
export default {
    data() {
        return {
            columns: [
                {
                    label: 'Things',
                    width: '50%',
                },
                {
                    label: 'Extra things',
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
        };
    },
};
</script>

<style module lang="scss">
@import '../../../../styles/variables';
</style>
