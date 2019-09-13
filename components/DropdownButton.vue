<template>
    <lk-dropdown-menu
        v-bind="dropdownMenuProps"
        @toggled="setDropdownIsVisible"
    >
        <lk-button v-bind="buttonProps">
            <span 
                v-if="showLabel === true" 
                :class="labelClasses">
                <slot name="label"/>
            </span>
            <slot/>
            <span 
                v-if="showDownIcon === true" 
                :class="iconClasses"
            >
                <lk-icon icon="angle-down"/>
            </span>
        </lk-button>
    </lk-dropdown-menu>
</template>

<script>
export default {
    computed: {
        buttonProps() {
            return {
                ...this.$attrs,
                active: this.dropdownIsVisible,
                display: 'block',
                'margin-bottom': 'none',
            };
        },
        hasLabelSlot() {
            return this.$slots.label !== undefined;
        },
        dropdownMenuProps() {
            return {
                'margin-bottom': 'content',
                ...this.$attrs,
                items: this.items,
            };
        },
        iconClasses() {
            const classes = [this.$style.icon];
            if (this.dropdownIsVisible === true) {
                classes.push(this.$style.active);
            }
            return classes;
        },
        labelClasses() {
            const classes = [this.$style.label];
            if (this.dropdownIsVisible === true) {
                classes.push(this.$style.active);
            }
            return classes;
        },
        showDownIcon() {
            return (
                this.buttonProps.circle === undefined ||
                this.buttonProps.circle === false
            );
        },
        showLabel() {
            return (
                this.hasLabelSlot === true &&
                (this.buttonProps.circle === undefined ||
                    this.buttonProps.circle === false)
            );
        },
    },
    data() {
        return {
            dropdownIsVisible: false,
        };
    },
    methods: {
        setDropdownIsVisible(isVisible) {
            this.dropdownIsVisible = isVisible;
            this.$emit('toggled', isVisible);
        },
    },
    props: {
        items: {
            type: Array,
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';

.icon,
.label {
    opacity: 0.7;
    transition: opacity $transition-duration;
    transition-timing-function: $transition-timing-function;
    &.active {
        opacity: 1;
    }
}
</style>
