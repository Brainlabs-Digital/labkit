<template>
    <lk-wrapper
        v-bind="wrapperProps"
        :style="wrapperStyle"
    >
        <router-link
            v-if="link !== undefined"
            :class="classes"
            :to="link"
        ><span><slot /></span></router-link>
        <a
            v-else-if="externalLink !== undefined"
            :class="classes"
            :href="externalLink"
        ><span><slot /></span></a>
        <button
            v-else
            :class="classes"
            :disabled="disabled"
            :type="buttonType"
        ><span><slot /></span></button>
    </lk-wrapper>
</template>

<script>
export default {
    computed: {
        buttonType() {
            return this.submit === true ? 'submit' : 'button';
        },
        classes() {
            const classes = [this.$style.button];
            if (this.primary === true) {
                classes.push(this.$style.primary);
            } else if (this.danger === true) {
                classes.push(this.$style.danger);
            } else if (this.success === true) {
                classes.push(this.$style.success);
            } else if (this.warning === true) {
                classes.push(this.$style.warning);
            } else {
                classes.push(this.$style.default);
            }
            if (this.active === true) {
                classes.push(this.$style.active);
            }
            if (this.circle === true) {
                classes.push(this.$style.circle);
            }
            if (this.compact === true) {
                classes.push(this.$style.compact);
            } else if (this.mini === true) {
                classes.push(this.$style.mini);
            } else if (this.micro === true) {
                classes.push(this.$style.micro);
            }
            if (this.disabled === true) {
                classes.push(this.$style.disabled);
            }
            if (this.outline === true) {
                classes.push(this.$style.outline);
            }
            if (this.inverse === true) {
                classes.push(this.$style.inverse);
            }
            if (this.shadow === true) {
                classes.push(this.$style.shadow);
            }
            return classes;
        },
        wrapperProps() {
            return {
                display: 'inline-block',
                'margin-bottom': 'content',
                ...this.$attrs,
            };
        },
        wrapperStyle() {
            const style = {};
            if (this.disabled === true) {
                style.pointerEvents = 'none';
            }
            return style;
        },
    },
    props: {
        active: {
            type: Boolean,
        },
        circle: {
            type: Boolean,
        },
        compact: {
            type: Boolean,
        },
        danger: {
            type: Boolean,
        },
        disabled: {
            type: Boolean,
        },
        externalLink: {
            type: String,
        },
        inverse: {
            type: Boolean,
        },
        link: {
            type: String,
        },
        mini: {
            type: Boolean,
        },
        micro: {
            type: Boolean,
        },
        outline: {
            type: Boolean,
        },
        primary: {
            type: Boolean,
        },
        shadow: {
            type: Boolean,
        },
        submit: {
            type: Boolean,
        },
        success: {
            type: Boolean,
        },
        warning: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';

@mixin make-button($color, $color-dark, $color-muted) {
    background: $color;
    color: color(text, inverse);
    text-decoration: none;
    &.active,
    &:active {
        box-shadow: 0 0 0 border-width(thick) rgba($color, 0.25),
            inset 0 0.5rem 0.5rem rgba(0, 0, 0, 0.25) !important;
    }
    &:focus {
        box-shadow: 0 0 0 border-width(medium) rgba($color, 0.25);
    }
    &.active,
    &:hover {
        background: $color-dark;
        border-color: $color-dark;
        text-decoration: none;
    }
    &.inverse {
        background: color(text, inverse);
        border-color: color(text, inverse);
        color: $color;
        &.active,
        &:active {
            box-shadow: 0 0 0 border-width(thick)
                    rgba(color(text, inverse), 0.4),
                inset 0 0.5rem 0.5rem rgba(0, 0, 0, 0.25) !important;
        }
        &:focus {
            box-shadow: 0 0 0 border-width(medium)
                rgba(color(text, inverse), 0.4);
        }
        &.active,
        &:hover {
            background: $color-dark;
            border-color: color(text, inverse);
            color: color(text, inverse);
        }
    }
    &.outline {
        background: color(text, inverse);
        border-color: $color-muted;
        color: $color;
        &:focus {
            box-shadow: 0 0 0 border-width(medium) rgba($color, 0.25);
        }
        &.active,
        &:hover {
            background: $color-dark;
            border-color: $color-dark;
            color: color(text, inverse);
        }
        &.inverse {
            background: none;
            border-color: color(text, inverse);
            color: color(text, inverse);
            &.active,
            &:active {
                box-shadow: 0 0 0 border-width(thick)
                        rgba(color(text, inverse), 0.4),
                    inset 0 0.5rem 0.5rem rgba(0, 0, 0, 0.25) !important;
            }
            &:focus {
                box-shadow: 0 0 0 border-width(medium)
                    rgba(color(text, inverse), 0.4);
            }
            &.active,
            &:hover {
                background: $color-dark;
                border-color: color(text, inverse);
                color: color(text, inverse);
            }
        }
    }
}

.button {
    border: 1px solid transparent;
    border-radius: border-radius(button);
    cursor: pointer;
    display: inline-block;
    font-size: font-size();
    font-weight: bold;
    margin: 0;
    max-width: 100%;
    overflow: hidden;
    padding: spacing-vertical(button) spacing-horizontal(button);
    text-align: center;
    text-overflow: ellipsis;
    text-transform: capitalize;
    transition: background $transition-duration,
        border-color $transition-duration, box-shadow $transition-duration,
        color $transition-duration;
    transition-timing-function: $transition-timing-function;
    vertical-align: top;
    white-space: nowrap;
    width: 100%;
    will-change: background, border-color, box-shadow;
    &:focus {
        outline: none;
    }
}

@mixin make-circle-button($icon-size) {
    $circle-size: $icon-size * 2;
    border-radius: $circle-size;
    font-size: $icon-size;
    height: $circle-size;
    min-height: $circle-size;
    min-width: $circle-size;
    padding: 0;
    position: relative;
    width: $circle-size;
}

.circle {
    @include make-circle-button(2.45rem);
    > span {
        position: absolute;
        right: 50%;
        top: 50%;
        transform: translateY(-50%) translateX(50%);
    }
}

.compact {
    padding: spacing-vertical(button, compact)
        spacing-horizontal(button, compact);
    &.circle {
        @include make-circle-button(2.05rem);
    }
}

.mini {
    font-size: font-size(caption);
    padding: spacing-vertical(button, mini) spacing-horizontal(button, mini);
    &.circle {
        @include make-circle-button(1.65rem);
    }
}

.micro {
    font-size: font-size(caption);
    padding: spacing-vertical(button, micro) spacing-horizontal(button, micro);
    &.circle {
        @include make-circle-button(1rem);
    }
}

a.danger,
.danger {
    @include make-button(
        color(danger),
        color(danger, dark),
        color(danger, semi-muted)
    );
}

a.default,
.default {
    @include make-button(color(text), color(text, muted), color(text, light));
}

a.primary,
.primary {
    @include make-button(
        color(link),
        color(link, dark),
        color(link, semi-muted)
    );
}

a.success,
.success {
    @include make-button(
        color(success),
        color(success, dark),
        color(success, semi-muted)
    );
}

a.warning,
.warning {
    @include make-button(
        color(warning),
        color(warning, dark),
        color(warning, semi-muted)
    );
}

.disabled {
    opacity: 0.5;
    pointer-events: none;
    text-decoration: line-through;
}

.shadow {
    box-shadow: shadow();
}
</style>
