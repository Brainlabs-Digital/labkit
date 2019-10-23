<template>
    <div>
        <lk-select
            v-model="value"
            :options="options"
        >
            <template slot="label"> Interaction example</template>
            <template slot="hint">
                <p>When you update your selection from the select below, you will see the value corresponding to the selected option below the select update with the value of the select, just like magic...</p>
            </template>
        </lk-select>
        <lk-divider margin-bottom="content"/>
        <lk-content>
            <p><em>The value of the select is </em><strong>{{value}}</strong></p>
        </lk-content>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [
                {
                    label: 'Will',
                    value: 1,
                },
                {
                    label: 'Dave',
                    value: 2,
                },
            ],
            value: 2,
        };
    },
};
</script>

<style module lang="scss">
@import '../../../../styles/variables';
</style>
