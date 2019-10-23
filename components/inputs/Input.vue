<template>
    <lk-wrapper v-bind="wrapperProps">
        <input-label :has-error="hasError">
            <slot 
                name="label" 
                slot="label"
            />
            <slot 
                name="hint" 
                slot="hint"
            />
        </input-label>
        <div :class="containerClasses">
            <input
                v-model="internalValue"
                :placeholder="placeholder"
                ref="input"
                :type="type"
                @blur="blur()"
            >
            <div 
                v-if="hasPrefixSlot" 
                :class="$style.prefix"
            >
                <slot name="prefix" />
            </div>
            <div 
                v-if="hasSuffixSlot" 
                :class="$style.suffix"
            >
                <slot name="suffix" />
            </div>
            <div 
                v-if="showActionItems === true" 
                :class="$style.action"
            >
                <slot name="action" />
            </div>
            <div 
                v-if="hasClearOption" 
                :class="$style.clearbutton"
            >
                <lk-button
                    @click.native="clearText"
                    circle
                    margin-bottom="none"
                    micro
                    outline
                ><lk-icon icon="times" /></lk-button>
            </div>
        </div>
        <input-error :has-error="hasError">
            <slot 
                name="error" 
                slot="error"
            />
        </input-error>
    </lk-wrapper>
</template>

<script>
import InputError from '../../components/inputs/utils/InputError';
import InputLabel from '../../components/inputs/utils/InputLabel';

export default {
    components: {
        InputError,
        InputLabel,
    },
    computed: {
        containerClasses() {
            const classes = [this.$style.container];
            if (this.compact === true) {
                classes.push(this.$style.compact);
            }
            if (this.hasError === true) {
                classes.push(this.$style['has-error']);
            }
            if (this.hasPrefixSlot === true) {
                classes.push(this.$style['square-left-edge']);
            }
            if (this.hasSuffixSlot === true) {
                classes.push(this.$style['square-right-edge']);
            }
            if (this.hasActionSlot === true) {
                classes.push(this.$style['action-right-edge']);
            }
            if (this.hasClearOption === true) {
                classes.push(this.$style['option-right-edge']);
            }
            return classes;
        },
        hasPrefixSlot() {
            return this.$slots.prefix !== undefined;
        },
        hasSuffixSlot() {
            return this.$slots.suffix !== undefined;
        },
        wrapperProps() {
            return {
                'margin-bottom': 'content',
                ...this.$attrs,
            };
        },
    },
    data() {
        return {
            internalValue: this.value,
        };
    },
    methods: {
        focus() {
            this.$refs.input.focus();
        },
        blur() {
            this.$emit('blur', this);
        },
        clearText() {
            if (this.hasClearOption === true) {
                this.internalValue = '';
            }
            this.focus();
        },
    },
    async mounted() {
        if (this.focusOnShow === true) {
            await this.$nextTick();
            this.focus();
        }
    },
    props: {
        compact: {
            type: Boolean,
        },
        hasClearOption: {
            type: Boolean,
        },
        focusOnShow: {
            type: Boolean,
        },
        hasError: {
            type: Boolean,
        },
        placeholder: {
            type: String,
        },
        showActionItems: {
            type: Boolean,
        },
        type: {
            default: 'text',
            type: String,
        },
        value: {
            type: [Number, String],
        },
    },
    watch: {
        internalValue() {
            if (this.internalValue === '' && this.type === 'number') {
                this.$emit('input', undefined);
            } else if (this.type === 'number') {
                this.$emit('input', Number(this.internalValue));
            } else {
                this.$emit('input', this.internalValue);
            }
        },
        value() {
            /*
                If we updating the value prop external to this component, we want
                to update our internal value to reflect the change.
            */
            this.internalValue = this.value;
        },
    },
};
</script>

<style module lang="scss">
@import '../../styles/variables';

.container {
    position: relative;
    width: 100%;
    display: flex;
    align-items: stretch;
    > input {
        background: color(text, inverse);
        border: border-width() solid color(text, light);
        border-radius: border-radius(button);
        color: color(text);
        display: flex;
        font-size: font-size();
        height: auto;
        margin: 0;
        order: 1;
        padding: (spacing-vertical(button) + 0.2rem) spacing-horizontal(button)
            (spacing-vertical(button) + 0.2rem);
        position: relative;
        transition: border-color $transition-duration,
            box-shadow $transition-duration;
        transition-timing-function: $transition-timing-function;
        width: 100%;
        z-index: 1;
        &:hover {
            border-color: color(link);
            box-shadow: 0 0 0 border-width(medium) rgba(color(link), 0.125);
            + .prefix,
            + .prefix + .suffix,
            + .suffix {
                background: color(link);
                border-color: color(link);
                color: color(text, inverse);
            }
        }
        &:focus {
            outline: none;
            border-color: color(link, dark);
            box-shadow: 0 0 0 border-width(thick) rgba(color(link), 0.25);
            + .prefix,
            + .prefix + .suffix,
            + .suffix {
                background: color(link, dark);
                border-color: color(link, dark);
                color: color(text, inverse);
            }
        }
        &::placeholder {
            color: color(text, light);
        }
    }
    > .prefix,
    > .suffix {
        background: color(text, light);
        border: border-width() solid color(text, light);
        color: color(text, inverse);
        font-weight: bold;
        padding: spacing-vertical(button) spacing-horizontal(button);
        transition: background-color $transition-duration,
            border-color $transition-duration, box-shadow $transition-duration,
            color $transition-duration;
        transition-timing-function: $transition-timing-function;
        white-space: nowrap;
    }
    > .prefix {
        border-radius: border-radius(button) 0 0 border-radius(button);
        border-right: none;
        order: 0;
    }
    > .suffix {
        border-left: none;
        border-radius: 0 border-radius(button) border-radius(button) 0;
        order: 2;
    }

    &.compact {
        > input {
            padding: (spacing-vertical(button, compact) + 0.2rem)
                spacing-horizontal(button, compact);
        }
        > .prefix,
        > .suffix {
            padding: spacing-vertical(button, compact)
                spacing-horizontal(button, compact);
        }
    }
    &.square-left-edge > input {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
    }
    &.square-right-edge > input {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
    }
    &.option-right-edge > input {
        padding-right: 4rem;
    }
}
.clearbutton {
    position: absolute;
    margin: auto;
    right: spacing-horizontal(button);
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
}
.action {
    position: absolute;
    margin: auto;
    right: spacing-horizontal(button);
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
}
.has-error {
    margin-bottom: spacing-vertical(content);
    > input {
        border-color: color(danger);
        &:hover {
            border-color: color(danger);
            box-shadow: 0 0 0 border-width(medium) rgba(color(danger), 0.125);
            + .prefix,
            + .prefix + .suffix,
            + .suffix {
                background: color(danger);
                border-color: color(danger);
                color: color(text, inverse);
            }
        }
        &:focus {
            border-color: color(danger, dark);
            box-shadow: 0 0 0 border-width(thick) rgba(color(danger), 0.25);
            + .prefix,
            + .prefix + .suffix,
            + .suffix {
                background: color(danger, dark);
                border-color: color(danger, dark);
                color: color(text, inverse);
            }
        }
    }
    > .prefix,
    > .suffix {
        background: color(danger, muted);
        border-color: color(danger);
        color: color(danger, dark);
    }
}
</style>
