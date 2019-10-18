<template>
    <lk-wrapper v-bind="wrapperProps">
        <input-label>
            <slot 
                name="label" 
                slot="label"/>
            <slot 
                name="hint" 
                slot="hint"/>
        </input-label>
        <div :class="classes">
            <template v-for="(item, index) in items">
                <input
                    type="radio"
                    v-model="internalValue"
                    :id="`${_uid}-${index}`"
                    :key="`${item.value}-input`"
                    :name="_uid"
                    :value="item.value"
                >
                <label
                    :class="getItemStyleClass(item.style)"
                    :for="`${_uid}-${index}`"
                    :key="`${item.value}-label`"
                >
                    <span :class="[$style.icon]">
                        <lk-icon
                            :class="[$style['icon-selected']]"
                            icon="circle-dot"
                        />
                        <lk-icon
                            :class="[$style['icon-not-selected']]"
                            icon="circle-outline"
                        />
                    </span>
                    {{item.label}}
                </label>
            </template>
        </div>
    </lk-wrapper>
</template>

<script>
/*
    TODO:
    We may need to change this so that the stacked styling is the default,
    applying an inline style if stacked (at the breakpoint) is false.
*/
import InputLabel from '../../components/inputs/utils/InputLabel';

export default {
    components: {
        InputLabel,
    },
    computed: {
        classes() {
            const classes = [this.$style['items-container']];
            if (this.stacked === true) {
                classes.push(this.$style['items-container--stacked']);
            } else if (this.stacked === false) {
                classes.push(this.$style['items-container--inline']);
            }
            if (this['sm:stacked'] === true) {
                classes.push(this.$style[`sm__items-container--stacked`]);
            } else if (this['sm:stacked'] === false) {
                classes.push(this.$style[`sm__items-container--inline`]);
            }
            if (this['md:stacked'] === true) {
                classes.push(this.$style[`md__items-container--stacked`]);
            } else if (this['md:stacked'] === false) {
                classes.push(this.$style[`md__items-container--inline`]);
            }
            if (this['lg:stacked'] === true) {
                classes.push(this.$style[`lg__items-container--stacked`]);
            } else if (this['lg:stacked'] === false) {
                classes.push(this.$style[`lg__items-container--inline`]);
            }
            if (this['xl:stacked'] === true) {
                classes.push(this.$style[`xl__items-container--stacked`]);
            } else if (this['xl:stacked'] === false) {
                classes.push(this.$style[`xl__items-container--inline`]);
            }
            return classes;
        },
        wrapperProps() {
            return {
                'margin-bottom': 'content',
                ...this.$attrs,
                display: this.getDisplayValue(this.stacked),
                'sm:display': this.getDisplayValue(this['sm:stacked']),
                'md:display': this.getDisplayValue(this['md:stacked']),
                'lg:display': this.getDisplayValue(this['lg:stacked']),
                'xl:display': this.getDisplayValue(this['xl:stacked']),
            };
        },
    },
    created() {
        /*
            If no value for the prop `value` is provided, then we default to the
            first item in the items array.
        */
        if (
            this.items.length > 0 &&
            (this.value === undefined || this.value === null)
        ) {
            this.internalValue = this.items[0].value;
        }
    },
    data() {
        return {
            internalValue: this.value,
        };
    },
    methods: {
        getDisplayValue(isStacked) {
            if (isStacked === true) {
                return 'block';
            } else if (isStacked === false) {
                return 'inline-block';
            }
        },
        getItemStyleClass(style) {
            if (style === 'danger') {
                return this.$style.danger;
            } else if (style === 'success') {
                return this.$style.success;
            }
        },
    },
    props: {
        items: {
            default: () => [],
            type: Array,
            validator(items) {
                return items.length > 0;
            },
        },
        noMargin: {
            type: Boolean,
        },
        stacked: {
            default: undefined,
            type: Boolean,
        },
        'sm:stacked': {
            default: undefined,
            type: Boolean,
        },
        'md:stacked': {
            default: undefined,
            type: Boolean,
        },
        'lg:stacked': {
            default: undefined,
            type: Boolean,
        },
        'xl:stacked': {
            default: undefined,
            type: Boolean,
        },
        value: {},
    },
    watch: {
        internalValue() {
            this.$emit('input', this.internalValue);
        },
        value() {
            this.internalValue = this.value;
        },
    },
};
</script>

<style module lang="scss">
@import 'styles/mixins';
@import 'styles/variables';

$spacing-label-vertical: spacing-vertical(button) - border-width(thick);

.items-container {
    background: background-color(content);
    border: border-width() solid border-color();
    border-radius: border-radius(button);
    display: inline-block;
    font-size: 0;
    font-weight: bold;
    overflow: hidden;
    input[type='radio'] {
        clip: rect(1px, 1px, 1px, 1px);
        position: absolute;
        white-space: nowrap;
        opacity: 0;
        border-width: 0px;
        border-style: initial;
        border-color: initial;
        border-image: initial;
        overflow: hidden;
        padding: 0px;
    }
    > input[type='radio'] + label {
        .icon-selected {
            display: none;
        }
        .icon-not-selected {
            display: inline-block;
        }
    }
    > input[type='radio']:checked + label {
        border-color: color(text);
        color: color(text);
        pointer-events: none;
        &.danger {
            border-color: color(danger);
            color: color(danger);
        }
        &.success {
            border-color: color(success);
            color: color(success);
        }
        .icon-selected {
            display: inline-block;
        }
        .icon-not-selected {
            display: none;
        }
    }
    > label {
        border-bottom: border-width(thick) solid transparent;
        color: color(text, muted);
        cursor: pointer;
        display: inline-block;
        font-size: font-size();
        margin: 0;
        padding: ($spacing-label-vertical + border-width(thick))
            spacing-horizontal(button) $spacing-label-vertical;
        position: relative;
        text-transform: capitalize;
        transition: border-color $transition-duration,
            color $transition-duration;
        transition-timing-function: $transition-timing-function;
        user-select: none;
        &:hover {
            border-color: color(text, muted);
        }
    }
    .icon {
        display: inline-block;
        font-size: font-size(body);
        margin: (0 - (font-size(body) - font-size())) 0;
    }
}

@mixin make-classes($prefix: '') {
    .#{$prefix}items-container--stacked {
        display: block;
        > label {
            border-bottom: none;
            border-left: border-width(thick) solid transparent;
            display: block;
            padding: spacing-vertical(button, compact)
                spacing-horizontal(button) spacing-vertical(button, compact)
                (spacing-horizontal(button) - border-width(thick));
        }
    }

    .#{$prefix}items-container--inline {
        display: inline-block;
        > label {
            border-bottom: border-width(thick) solid transparent;
            border-left: none;
            display: inline-block;
            padding: ($spacing-label-vertical + border-width(thick))
                spacing-horizontal(button) $spacing-label-vertical;
        }
    }
}

@mixin make-breakpoint($breakpoint) {
    $breakpoint-prefix: '#{$breakpoint}__';
    @include media-breakpoint-up($breakpoint) {
        @include make-classes($breakpoint-prefix);
    }
}

@include make-classes();

@each $breakpoint in map-keys($grid-breakpoints) {
    @include make-breakpoint($breakpoint);
}
</style>
