<template>
    <div>
        <lk-textarea
            v-model="inputValue"
            :has-error="hasError"
            placeholder="Example placeholder"
        >
            <template slot="label">Example label</template>
            <template slot="hint">
                <p>This textarea will have an error if the content contains the word "error" anywhere within it.</p>
            </template>
            <template slot="error">
                <p>Please remove the word "error" from the textarea content.</p>
            </template>
        </lk-textarea>
        <lk-divider margin-bottom="content"/>
        <lk-content>
            <p v-if="inputValue === ''"><em>The textarea has no content.</em></p>
            <p v-else><em>Textarea content:</em></p>
            <p><pre>{{inputValue}}</pre></p>
        </lk-content>
    </div>
</template>

<script>
export default {
    computed: {
        hasError() {
            return this.inputValue.includes('error');
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
