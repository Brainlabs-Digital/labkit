<template>
    <div 
        v-if="hasError === true" 
        :class="[$style['error-container']]"
    >
        <slot name="error"/>
    </div>
</template>

<script>
export default {
    props: {
        hasError: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';

.error-container > p {
    color: color(danger);
    font-size: font-size();
    margin: 0 0 spacing-vertical-remainder(content);
    max-width: $content-readable-width;
    &:last-child {
        margin: 0;
    }
}
</style>
