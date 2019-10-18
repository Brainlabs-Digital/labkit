<template>
    <div>
        <lk-radio-tabs
            v-model="selectedItem"
            :items="[
                {
                    label: 'Admin',
                    value: 'admin',
                },
                {
                    label: 'Edit',
                    value: 'edit',
                },
                {
                    label: 'View',
                    value: 'view',
                },
                {
                    label: 'None',
                    value: 'none',
                },
            ]"
        >
            <template slot="label">Example label</template>
            <template slot="hint">
                <p>This is an example hint.</p>
            </template>
        </lk-radio-tabs>
        <lk-divider margin-bottom="content"/>
        <lk-content>
            <p><em>Selected item: </em> <strong>{{selectedItem}}</strong></p>
        </lk-content>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedItem: 'admin',
        };
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
