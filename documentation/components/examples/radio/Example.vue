<template>
    <div>
        <lk-radio
            v-model="selectedItem"
            style="position: relative;"
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
            ]"
        >
            <template slot="label">Example label</template>
            <template slot="hint">
                <p>This is an example hint.</p>
            </template>
        </lk-radio>
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
            selectedItem: 'Second Option Value',
        };
    },
};
</script>

<style module lang="scss">
@import '../../../../styles/variables';
</style>
