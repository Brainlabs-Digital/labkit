<template>
    <div>
        <lk-content>
            <p v-if="clickPopperIsVisible === true">
                The click popper <strong><em>is</em></strong> visible.
            </p>
            <p v-else>
                The click popper <strong><em>is not</em></strong> visible.
            </p>
            <lk-divider margin-bottom="content"/>
            <p v-if="hoverPopperIsVisible === true">
                The hover popper <strong><em>is</em></strong> visible.
            </p>
            <p v-else>
                The hover popper <strong><em>is not</em></strong> visible.
            </p>
        </lk-content>
        <lk-divider margin-bottom="content"/>
        <lk-popper 
            bottom 
            @toggled="setClickPopperStatus">
            <lk-button margin-bottom="none">Click to toggle</lk-button>
            <div 
                :class="[$style['popper-content']]" 
                slot="content">
                <p>Popper content.</p>
            </div>
        </lk-popper>
        <lk-popper 
            bottom 
            hover 
            @toggled="setHoverPopperStatus">
            <lk-button margin-bottom="none">Hover</lk-button>
            <div 
                :class="[$style['popper-content']]" 
                slot="content">
                <p>Popper content.</p>
            </div>
        </lk-popper>
    </div>
</template>

<script>
export default {
    data() {
        return {
            clickPopperIsVisible: false,
            hoverPopperIsVisible: false,
        };
    },
    methods: {
        setClickPopperStatus(isVisible) {
            this.clickPopperIsVisible = isVisible;
        },
        setHoverPopperStatus(isVisible) {
            this.hoverPopperIsVisible = isVisible;
        },
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';

.popper-content {
    padding: spacing-vertical(content) spacing-horizontal();
    p {
        margin: 0 0 spacing-vertical(content);
        &:last-child {
            margin: 0;
        }
    }
}
</style>
