<template>
    <lk-table
        :columns="columns"
        :items="pageItems"
        :page="page"
        :total-pages="paginationMetadata.totalPages"
        @updated:page="setPage"
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
import * as pagination from '../../../../lib/pagination';

export default {
    computed: {
        paginationMetadata() {
            return pagination.generateMetadata(
                this.page,
                this.pageSize,
                this.items.length,
            );
        },
        pageItems() {
            return pagination.getPageItems(this.paginationMetadata, this.items);
        },
    },
    created() {
        for (let i = 1; i <= 100; i += 1) {
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
                    width: '50%',
                },
                {
                    label: 'Extra things',
                    width: '50%',
                },
            ],
            items: [],
            page: 1,
            pageSize: 5,
        };
    },
    methods: {
        setPage(page) {
            this.page = page;
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
