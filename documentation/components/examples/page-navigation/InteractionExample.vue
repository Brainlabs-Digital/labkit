<template>
    <div>
        <lk-page-navigation
            :page="page"
            :total-pages="10"
            @updated:page="setPage"
        />
        <lk-divider margin-bottom="content"/>
        <lk-content>
            <p>Page <strong>{{page}}</strong> selected.</p>
        </lk-content>
    </div>
</template>

<script>
export default {
    data() {
        return {
            page: 1,
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
