<template>
    <div>
        <lk-search-select
            :options="dataItems()"
            :has-error="inputHasError()"
            @selected="changedItem"
            placeholder="Select an option">
            <template slot="label">Simple Example (error state)</template>
            <template slot="hint">
                <p>This simple example shows a basic search select with a list of items.</p>
            </template>
            <template slot="error">
                <p>Example error message.</p>
                <p>This is the second line of the error message.</p>
            </template>
        </lk-search-select>
        <lk-divider margin-bottom="content"/>
        <lk-content>
            <p>
                <em>Selected Item Name:</em>
                <strong>{{selectedItem.name}}</strong>
            </p>
            <lk-divider margin-bottom="content"/>
            <p>
                <em>Selected Item ID:</em>
                <strong>{{selectedItem.id}}</strong>
            </p>
        </lk-content>
    </div>
</template>



<script>
export default {
    data() {
        return {
            selectedItem: {},
        };
    },
    methods: {
        changedItem(item) {
            this.selectedItem = item;
        },
        inputHasError() {
            return true;
        },
        dataItems() {
            const dummyData = [];
            for (let index = 0; index < 50; index++) {
                dummyData.push({
                    id: index,
                    name: `Example Item ${index}`,
                });
            }
            return dummyData;
        },
    },
};
</script>
