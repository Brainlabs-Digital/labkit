<template>
    <lk-wrapper v-bind="wrapperProps">
        <input-label :has-error="hasError">
            <slot 
                name="label" 
                slot="label"/>
            <slot 
                name="hint" 
                slot="hint"/>
        </input-label>
        <div :class="itemsContainerClasses">
            <template v-for="(item, index) in items">
                <input
                    type="checkbox"
                    v-model="internalSelectedValues"
                    :id="`${_uid}-${index}`"
                    :key="`${item.value}-input`"
                    :value="item.value"
                >
                <label 
                    :for="`${_uid}-${index}`" 
                    :key="`${item.value}-label`">
                    <span :class="[$style.icon]">
                        <lk-icon
                            :class="[$style['icon-selected']]"
                            icon="square-check"
                        />
                        <lk-icon
                            :class="[$style['icon-not-selected']]"
                            icon="square-outline"
                        />
                    </span>
                    {{item.label}}
                </label>
            </template>
        </div>
        <input-error :has-error="hasError">
            <slot 
                name="error" 
                slot="error"/>
        </input-error>
    </lk-wrapper>
</template>

<script>
import InputError from '../../components/inputs/utils/InputError';
import InputLabel from '../../components/inputs/utils/InputLabel';

/*
    TODO:
    The logic of this is identical (maybe?) to the Checkbox component.
        Look into making a base component.
*/

export default {
    components: {
        InputError,
        InputLabel,
    },
    computed: {
        itemsContainerClasses() {
            const classes = [this.$style['items-container']];
            if (this.hasError === true) {
                classes.push(this.$style['has-error']);
            }
            return classes;
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
            internalSelectedValues: [...this.value],
        };
    },
    props: {
        hasError: {
            type: Boolean,
        },
        items: {
            default: () => [],
            type: Array,
            validator(items) {
                return items.length > 0;
            },
        },
        value: {
            default: () => [],
            type: Array,
        },
    },
    watch: {
        internalSelectedValues() {
            this.$emit('input', this.internalSelectedValues);
        },
        value() {
            this.internalSelectedValues = this.value;
        },
    },
};
</script>

<style module lang="scss">
@import '../../styles/mixins';
@import '../../styles/variables';

.items-container {
    background: background-color(content);
    border: border-width() solid border-color();
    border-radius: border-radius(button);
    font-size: 0;
    padding: 0 0 spacing-vertical(mini) spacing-vertical(mini);
    &.has-error {
        border-color: color(danger);
        margin: 0 0 spacing-vertical(content);
    }
    input[type='checkbox'] {
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
    > input[type='checkbox'] + label {
        &:hover {
            background: color(text, muted);
            border-color: color(text, muted);
            color: color(text, inverse);
        }
        .icon-selected {
            display: none;
        }
        .icon-not-selected {
            display: inline-block;
        }
    }
    > input[type='checkbox']:checked + label {
        background: color(text);
        border-color: color(text);
        color: color(text, inverse);
        &:hover {
            background: color(text, muted);
            border-color: color(text, muted);
            text-decoration: line-through;
        }
        .icon-selected {
            display: inline-block;
        }
        .icon-not-selected {
            display: none;
        }
    }
    > label {
        border: border-width() solid color(text, light);
        border-radius: border-radius(button);
        color: color(text, muted);
        display: inline-block;
        font-size: font-size();
        font-weight: bold;
        margin: spacing-vertical(mini) spacing-vertical(mini) 0 0;
        padding: spacing-vertical(button) spacing-horizontal(button);
        transition: background $transition-duration,
            border-color $transition-duration, color $transition-duration;
        transition-timing-function: $transition-timing-function;
        &:hover {
            cursor: pointer;
        }
    }
}
</style>
