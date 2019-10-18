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
        <div :class="itemsContainerClasses">
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
                    :for="`${_uid}-${index}`" 
                    :key="`${item.value}-label`">
                    <p>
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
                    </p>
                    <p v-if="item.hint !== undefined">{{item.hint}}</p>
                </label>
            </template>
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

.items-container {
    @include make-input-label-container('radio');
    &.has-error {
        margin: 0 0 spacing-vertical(content) 0;
        > label {
            border-left-color: color(danger);
            border-right-color: color(danger);
            &:first-of-type {
                border-top-color: color(danger);
            }
            &:last-of-type {
                border-bottom-color: color(danger);
            }
            &:hover {
                border-color: color(text);
            }
        }
    }

    /*
        We disable pointer events as we don't want a hover or active state on
        the selected item since clicking it should do nothing.
    */
    > input[type='radio']:checked + label {
        pointer-events: none;
        &:hover > p {
            text-decoration: none;
        }
    }
}
</style>
