<template>
    <div>
        <lk-search-select
            :options="dataItems()"
            @selected="changedItem"
            :selected-item="selectedItem"
            option-display-field="fruit"
            placeholder="Select an option"
        >
            <template slot="label">Example with Preselect</template>
            <template slot="hint">
                <p>This example shows a list of items with one preselected and a custom display field.</p>
            </template>
        </lk-search-select>

        <lk-divider margin-bottom="content"/>
        <lk-content>
            <p>
                <em>Selected Item Name:</em>
                <strong>{{selectedItem.fruit}}</strong>
            </p>
            <lk-divider margin-bottom="content"/>
        </lk-content>
    </div>
</template>



<script>
export default {
    data() {
        return {
            selectedItem: this.dataItems()[3],
        };
    },
    methods: {
        changedItem(item) {
            this.selectedItem = item;
        },
        dataItems() {
            const dummyData = [
                {fruit: 'Apple'},
                {fruit: 'Banana'},
                {fruit: 'Clementine'},
                {fruit: 'Dragonfruit'},
                {fruit: 'Fig'},
                {fruit: 'Grape'},
                {fruit: 'Orange'},
                {fruit: 'Pear'},
                {fruit: 'Strawberry'},
                {fruit: 'Quince'},
            ];

            return dummyData;
        },
    },
};
</script>
