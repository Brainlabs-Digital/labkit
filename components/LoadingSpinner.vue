<template>
    <span :class="classes">
        <lk-icon 
            icon="circle-outline-quarter-notch" 
            spin />
    </span>
</template>

<script>
export default {
    computed: {
        classes() {
            const classes = [this.$style.wrapper];
            if (this.heading === true) {
                classes.push(this.$style.heading);
            }
            if (this.muted === true) {
                classes.push(this.$style.muted);
            }
            return classes;
        },
    },
    props: {
        heading: {
            type: Boolean,
        },
        muted: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';

.wrapper {
    &.heading {
        font-size: font-size(heading);
    }
    &.muted svg {
        color: color(text, muted);
    }
}
</style>
