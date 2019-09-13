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
        <div :class="$style.container">
            <select
                v-model="internalValue"
                :class="$style.select"
            >
                <option 
                    v-for="option of options" 
                    :value="option.value"
                    :key="option.value">
                    {{option.label}}
                </option>
            </select>
            <div :class="containerClass">
                <div
                    :class="this.$style['nowrap-row']">
                    <div
                        :class="this.$style['value-column']">
                        {{selectedLabel}}
                    </div>
                    <div
                        :class="this.$style['icon-column']">
                        <lk-icon icon="bars"/>
                    </div>
                </div>
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
import InputError from '@/labkit/components/inputs/utils/InputError';
import InputLabel from '@/labkit/components/inputs/utils/InputLabel';

export default {
    components: {
        InputError,
        InputLabel,
    },
    computed: {
        containerClass() {
            const classes = [this.$style.display];
            if (this.compact === true) {
                classes.push(this.$style.compact);
            }
            if (this.hasError === true) {
                classes.push(this.$style['has-error']);
            }
            return classes;
        },
        selectedLabel() {
            const selectedOption = this.options.find(
                (option) => option.value === this.internalValue,
            );
            return selectedOption.label;
        },
        wrapperProps() {
            return {
                'margin-bottom': 'content',
                ...this.$attrs,
            };
        },
    },
    created() {
        const initialOption = this.options.find(
            (option) => option.value === this.internalValue,
        );
        if (initialOption === undefined) {
            this.internalValue = this.options[0].value;
        }
    },
    data() {
        return {
            internalValue: this.value,
        };
    },
    props: {
        compact: {
            type: Boolean,
        },
        hasError: {
            type: Boolean,
        },
        options: {
            required: true,
            type: Array,
        },
        value: {},
    },
    watch: {
        internalValue() {
            this.$emit('input', this.internalValue);
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';

.container {
    position: relative;
    > select {
        bottom: 0;
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        z-index: 1;
        cursor: pointer;
        -webkit-appearance: none;
    }

    > select:hover + .display {
        border-color: color(link);
        box-shadow: 0 0 0 border-width(medium) rgba(color(link), 0.125);
        .icon-column {
            color: color(link);
        }
    }
    > select:focus + .display {
        outline: none;
        border-color: color(link, dark);
        box-shadow: 0 0 0 border-width(thick) rgba(color(link), 0.25);
        .icon-column {
            color: color(link);
        }
    }
}

.display {
    background: color(text, inverse);
    border: border-width() solid color(text, light);
    border-radius: border-radius(button);
    color: color(text);
    font-size: font-size();
    margin: 0;
    overflow: hidden;
    padding: (spacing-vertical(button)) spacing-horizontal(button);
    position: relative;
    text-overflow: ellipsis;
    transition: border-color $transition-duration,
        box-shadow $transition-duration;
    transition-timing-function: $transition-timing-function;
    &.compact {
        padding: (spacing-vertical(button, compact))
            spacing-horizontal(button, compact)
            (spacing-vertical(button, compact));
    }
}

> .icon-column {
    flex: 0 0 auto;
    padding-left: spacing-horizontal(compact);
}

.value-column {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.has-error {
    border-color: color(danger);
    margin-bottom: spacing-vertical(content);
    &:hover {
        border-color: color(danger);
    }
}

.nowrap-row {
    display: flex;
}
</style>
