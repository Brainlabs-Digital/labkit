<template>
    <lk-popper
        v-bind="popperProps"
        @toggled="emitToggledState"
    >
        <slot />
        <div 
            :class="containerClasses" 
            slot="content"
        ><slot name="content" /></div>
    </lk-popper>
</template>

<script>
export default {
    computed: {
        containerClasses() {
            const classes = [this.$style.container];
            if (this.compact === true) {
                classes.push(this.$style.compact);
            }
            return classes;
        },
        popperProps() {
            return {
                bottom:
                    this.$attrs.top === undefined &&
                    this.$attrs.bottom === undefined &&
                    this.$attrs.left === undefined &&
                    this.$attrs.right === undefined,
                ...this.$attrs,
                hover: true,
                light: false,
                'no-arrow': false,
            };
        },
    },
    methods: {
        emitToggledState(isVisible) {
            this.$emit('toggled', isVisible);
        },
    },
    props: {
        compact: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
.container {
    max-width: 30rem;
    padding: spacing-vertical(button) spacing-horizontal(button);
    &.compact {
        font-size: font-size(caption);
        padding: spacing-vertical(button, compact)
            spacing-horizontal(button, compact);
    }
}
</style>
