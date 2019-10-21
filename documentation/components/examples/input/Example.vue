<template>
    <div>
        <lk-input
            v-model="inputValue"
            :has-error="inputHasError"
            placeholder="Example placeholder"
        >
            <template slot="label">Interaction example</template>
            <template slot="hint">
                <p>When you update the value of the input below, you will see the text below the input update with the value of the input, just like magic&hellip;</p>
                <p>It will toggle to the error state if the input is longer than 10 characters.</p>
            </template>
            <template slot="error">
                <p>The length of the input must be 10 characters or less.</p>
            </template>
        </lk-input>
        <lk-divider margin-bottom="content"/>
        <lk-content>
            <p><em>The value of the input is: </em><strong>'{{inputValue}}'</strong></p>
            <lk-divider margin-bottom="content"/>
            <p><em>The length of the input is: </em><strong>{{inputValue.length}}</strong></p>
        </lk-content>
    </div>
</template>

<script>
export default {
    computed: {
        inputHasError() {
            return this.inputValue.length > 10;
        },
    },
    data() {
        return {
            inputValue: '',
        };
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
