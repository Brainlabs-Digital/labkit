<template>
    <div :class="classes">
        <slot/>
    </div>
</template>

<script>
export default {
    computed: {
        classes() {
            const classes = [];
            if (this.fluid === true) {
                classes.push(this.$style.fluid);
            } else {
                classes.push(this.$style.fixed);
            }
            return classes;
        },
    },
    props: {
        fluid: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';

/*
    TODO:
    The container should have reduced padding at sm and below breakpoints.
*/

.fixed {
    margin: 0 auto;
    max-width: $container-max-width;
    padding: 0 spacing-horizontal();
    width: 100%;
}

.fluid {
    margin: 0 auto;
    padding: 0 spacing-horizontal();
}
</style>
