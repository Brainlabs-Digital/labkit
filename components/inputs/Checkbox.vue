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
                    <p>
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
                    </p>
                    <p v-if="item.hint !== undefined">{{item.hint}}</p>
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
    It's possible that we could nest checkboxes by allowing an item to have
    an items array and using this component recursively.

    Only bother to do this if a use case comes up.
*/
/*
    TODO:
    It's possible that we may want to implement a grid based version of this,
    where we could specify a breakpoint and the number of columns we want.
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
@import 'src/labkit/styles/mixins';
@import 'src/labkit/styles/variables';

.items-container {
    @include make-input-label-container('checkbox');
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
}
</style>
