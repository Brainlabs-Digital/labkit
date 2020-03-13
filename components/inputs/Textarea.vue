<template>
    <lk-wrapper v-bind="wrapperProps">
        <div :class="containerClasses">
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
            <textarea
                v-model="internalValue"
                :placeholder="placeholder"
                :rows="rows"
            />
            <input-error :has-error="hasError">
                <slot 
                    name="error" 
                    slot="error"
                />
            </input-error>
        </div>
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
            internalValue: this.value,
        };
    },
    props: {
        hasError: {
            type: Boolean,
        },
        placeholder: {
            type: String,
        },
        rows: {
            default: 8,
            type: Number,
        },
        value: {
            type: String,
        },
    },
    watch: {
        internalValue() {
            this.$emit('input', this.internalValue);
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

/*
    TODO:
    This is essentially the same styling as the Input component. Look at and think
    about pushing out to a mixin.
*/

.container > textarea {
    background: color(text, inverse);
    border: 1px solid color(text, light);
    border-radius: border-radius(button);
    color: color(text);
    display: block;
    font-family: font-family();
    font-size: font-size();
    line-height: 1em;
    max-width: 100%;
    min-width: 100%;
    padding: spacing-vertical(content) spacing-horizontal();
    transition: border-color $transition-duration,
        box-shadow $transition-duration;
    transition-timing-function: $transition-timing-function;
    width: 100%;
    &:hover {
        border-color: color(link);
        box-shadow: 0 0 0 border-width(medium) rgba(color(link), 0.125);
    }
    &:focus {
        outline: none;
        border-color: color(link, dark);
        box-shadow: 0 0 0 border-width(thick) rgba(color(link), 0.25);
    }
    &::placeholder {
        color: color(text, light);
    }
}

.has-error > textarea {
    border-color: color(danger);
    margin: 0 0 spacing-vertical(content);
    &:hover {
        border-color: color(danger);
        box-shadow: 0 0 0 border-width(medium) rgba(color(danger), 0.125);
    }
    &:focus {
        border-color: color(danger, dark);
        box-shadow: 0 0 0 border-width(thick) rgba(color(danger), 0.25);
    }
}
</style>
