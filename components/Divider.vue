<template>
    <lk-wrapper v-bind="wrapperProps">
        <hr :class="classes" >
    </lk-wrapper>
</template>

<script>
export default {
    computed: {
        classes() {
            const classes = [this.$style.divider];
            if (this.medium === true) {
                classes.push(this.$style.medium);
            }
            if (this.thick === true) {
                classes.push(this.$style.thick);
            }
            return classes;
        },
        wrapperProps() {
            return {
                'margin-bottom': true,
                ...this.$attrs,
            };
        },
    },
    props: {
        medium: {
            type: Boolean,
        },
        thick: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';

.divider {
    border: none;
    border-top: border-width() solid border-color();
    margin: 0;
    min-height: 0.1rem;
    &.medium {
        border-top-width: border-width(medium);
    }
    &.thick {
        border-top-width: border-width(thick);
    }
}
</style>
