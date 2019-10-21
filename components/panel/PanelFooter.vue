<template>
    <lk-panel-body v-bind="panelBodyProps">
        <slot/>
    </lk-panel-body>
</template>

<script>
export default {
    computed: {
        panelBodyProps() {
            return {
                'align-content-right': true,
                'medium-border': true,
                'padding-bottom': 'content',
                'padding-vertical': 'content',
                ...this.$attrs,
            };
        },
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
