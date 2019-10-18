<template>
    <lk-glass unbreakable>
        <lk-panel shadow-shallow>
            <slot/>
        </lk-panel>
        <span
            v-if="showCloseButton === true"
            :class="$style['close-button-container']"
        >
            <lk-button 
                circle 
                danger 
                shadow 
                @click.native="close"
            >
                <lk-icon icon="times"/>
            </lk-button>
        </span>
    </lk-glass>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit('closed');
        },
    },
    props: {
        showCloseButton: {
            default: true,
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';

.close-button-container {
    position: fixed;
    top: spacing-vertical();
    right: spacing-horizontal();
    z-index: 1;
}
</style>
