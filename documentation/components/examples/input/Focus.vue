<template>
    <div>
        <lk-input
            placeholder="Focus example placeholder"
            ref="input"
        >
            <template slot="label">Focus example</template>
        </lk-input>
        <lk-divider margin-bottom="content"/>
        <lk-button 
            primary 
            @click.native="focusInput">
            Click me to focus the input
        </lk-button>
    </div>
</template>

<script>
export default {
    methods: {
        focusInput() {
            this.$refs.input.focus();
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
