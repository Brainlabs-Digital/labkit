<template>
    <div>
        <lk-input v-model="searchString">
            <template slot="label">Name filter</template>
            <template slot="hint">
                <p>Type a name in below to filter out other table items.</p>
                <p><strong>Hint: </strong><em>Type 'bcd' to see the filter gradually filter out items.</em></p>
            </template>
        </lk-input>
        <lk-divider margin-bottom="content"/>
        <lk-alert 
            v-if="filteredItems.length === 0" 
            empty>
            <template slot="content">
                <p>Your search for '<strong><em>{{searchString}}</em></strong>' did not match any items.</p>
            </template>
        </lk-alert>
        <lk-table
            v-else
            :columns="columns"
            :items="filteredItems"
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
    </div>
</template>

<script>
export default {
    computed: {
        filteredItems() {
            const lowerCaseSearchString = this.searchString.toLowerCase();
            return this.items.filter((item) => {
                return item.name.toLowerCase().includes(lowerCaseSearchString);
            });
        },
    },
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
                    info: 'A short bit of information about A.',
                    link: 'https://example.com/a',
                    name: 'Item A',
                },
                {
                    count: 2345,
                    id: 2,
                    info: 'A short bit of information about Item AB.',
                    link: 'https://example.com/ab',
                    name: 'Item AB',
                },
                {
                    count: 345,
                    id: 3,
                    info: 'A short bit of information about Item ABC.',
                    link: 'https://example.com/abc',
                    name: 'Item ABC',
                },
                {
                    count: 345,
                    id: 4,
                    info: 'A short bit of information about Item ABCD.',
                    link: 'https://example.com/abcd',
                    name: 'Item ABCD',
                },
            ],
            searchString: '',
        };
    },
};
</script>

<style module lang="scss">
@import '../../../../styles/variables';
</style>
