<template>
    <lk-wrapper v-bind="wrapperProps" >
        <div :class="this.$style['container']">
            <div
                :class="classes" 
                @click="toggle" 
            >
                <div :class="this.$style['button']"/>
            </div>
            <div :class="this.$style['switch-button-label']">
                <slot/>
            </div>
        </div>
    </lk-wrapper>
</template>
<script>
export default {
    model: {
        event: 'toggle',
        prop: 'isEnabled',
    },
    props: {
        isEnabled: Boolean,
        rounded: {
            type: Boolean,
            required: false,
            default: false,
        },
        compact: Boolean,
    },
    computed: {
        classes() {
            const classes = [this.$style['switch']];
            if (this.isEnabled === true) {
                classes.push(this.$style['enabled']);
            }
            if (this.compact === true) {
                classes.push(this.$style['compact']);
            }
            return classes;
        },
        wrapperProps() {
            const attributes = {
                display: 'inline-block',
                'margin-bottom': 'content',
                ...this.$attrs,
            };
            return attributes;
        },
    },
    methods: {
        toggle: function() {
            this.$emit('toggle', !this.isEnabled);
        },
    },
};
</script>

<style module lang="scss">
@import '../../styles/variables';

$button-size: 3.1rem;
$compact-button-size: 3.1rem * 0.75;

// For switch-button styling
.container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.switch {
    margin-right: 2px;
    border-radius: 9999px;
    cursor: pointer;
    border: border-width() solid border-color();
    background: background-color(light);
    display: inline-block;
    transition: background $transition-duration, border $transition-duration;
    transition-timing-function: $transition-timing-function;
    width: ($button-size * 2) + (border-width() * 2);
    .button {
        background: color(text, inverse);
        border-radius: 9999px;
        border: border-width() solid border-color();
        height: $button-size;
        transition: border $transition-duration, transform $transition-duration;
        width: $button-size;
    }
}

.compact {
    width: ($compact-button-size * 2) + (border-width() * 2);
    .button {
        height: $compact-button-size;
        width: $compact-button-size;
    }
}

.enabled {
    background: color(success);
    border-color: color(success);
    box-shadow: none;
    .button {
        border-color: color(success);
        transform: translateX(100%);
    }
}
</style>
