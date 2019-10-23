<template>
    <div v-if="hasLabelSlot === true || hasHintSlot === true">
        <div 
            v-if="hasLabelSlot === true" 
            :class="labelContainerClasses"
        >
            <label><slot name="label"/></label>
        </div>
        <div 
            v-if="hasHintSlot === true" 
            :class="[$style['hint-container']]"
        >
            <slot name="hint"/>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        hasHintSlot() {
            return this.$slots.hint !== undefined;
        },
        hasLabelSlot() {
            return this.$slots.label !== undefined;
        },
        labelContainerClasses() {
            const classes = [this.$style['label-container']];
            if (this.hasError === true) {
                classes.push(this.$style['label-error']);
            }
            if (this.hasHintSlot === true) {
                classes.push(this.$style['label-no-margin']);
            }
            return classes;
        },
    },
    props: {
        hasError: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import '../../../styles/variables';

.hint-container > p {
    color: color(text, muted);
    font-size: font-size();
    margin: 0 0 spacing-vertical(mini);
    max-width: $content-readable-width;
    &:last-child {
        margin: 0 0 spacing-vertical(content);
    }
}

.label-container > label {
    display: block;
    font-size: font-size(body);
    font-weight: bold;
    margin: 0 0 spacing-vertical(content);
}

.label-error > label {
    color: color(danger);
}

.label-no-margin > label {
    margin: 0 0 spacing-vertical(mini);
}
</style>
