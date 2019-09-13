<template>
    <div>
        <lk-checkbox
            v-model="selectedItems"
            :has-error="hasError"
            :items="[
                {
                    label: 'First Option Label',
                    value: 'First Option Value',
                },
                {
                    hint: 'This is a short hint about the option. It should be a single line.',
                    label: 'Second Option Label',
                    value: 'Second Option Value',
                },
                {
                    label: 'Third Option Label',
                    value: 'Third Option Value',
                },
                {
                    label: 'Fourth Option Label',
                    value: 'Fourth Option Value',
                },
            ]"
        >
            <template slot="label">Example label</template>
            <template slot="hint">
                <p>This is an example hint.</p>
                <p>This input will show an error if you select more than 2 items.</p>
            </template>
            <template slot="error">
                <p>You can select a maximum of 2 items from the list.</p>
                <p><strong><em>This error is a bit contrived:</em></strong> ideally you would disable the selection of items when the user has selected the maximum allowed rather than showing an error, however it works for the purpose of demonstrating the component.</p>
            </template>
        </lk-checkbox>
        <lk-divider margin-bottom="content"/>
        <lk-content>
            <p><em>Number of items selected: </em><strong>{{selectedItems.length}}</strong></p>
            <lk-divider margin-bottom="content"/>
            <p><em>Selected items: </em><strong v-if="selectedItems.length === 0"> None</strong></p>
            <ul v-if="selectedItems.length > 0">
                <li 
                    v-for="item in selectedItems" 
                    :key="item"
                >{{item}}</li>
            </ul>
        </lk-content>
    </div>
</template>

<script>
export default {
    computed: {
        hasError() {
            return this.selectedItems.length > 2;
        },
    },
    data() {
        return {
            selectedItems: ['Second Option Value'],
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
