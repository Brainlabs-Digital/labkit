<template>
    <lk-glass unbreakable>
        <div :class="$style.container">
            <span :class="$style['loading-spinner-container']">
                <lk-loading-spinner />
            </span>
            <h1 
                v-if="hasMessageSlot === true" 
                :class="$style.message">
                <slot name="message"/>
            </h1>
        </div>
    </lk-glass>
</template>

<script>
export default {
    computed: {
        hasMessageSlot() {
            return this.$slots.message !== undefined;
        },
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';

.container {
    color: color(text, muted);
    text-align: center;
}

.loading-spinner-container {
    font-size: font-size(heading) * 1.25;
}

.message {
    font-size: font-size(section-heading);
    font-weight: bold;
}
</style>
