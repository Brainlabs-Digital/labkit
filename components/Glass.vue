<template>
    <portal :to="portalTarget">
        <transition name="fade-scale">
            <div 
                :class="[$style.wrapper]" 
                ref="glass" 
                @click="click"
            >
                <div :class="[$style.container]">
                    <slot/>
                </div>
            </div>
        </transition>
    </portal>
</template>

<script>
import EventBus from '@/labkit/lib/event-bus';

let instanceId = 0;

export default {
    beforeDestroy() {
        window.glassCounter -= 1;
        if (window.glassCounter === 0) {
            document.body.classList.remove(this.$style['no-scroll']);
        }
    },
    beforeMount() {
        /*
            The reason this global glass counter exists is so that we do not
            remove the no-scroll class from the body until we should (when no glass
            is being shown) if we are hiding/showing multiple glass components
            at the same time/nested within eachother.
        */
        if (window.glassCounter === undefined) {
            window.glassCounter = 0;
        }
        window.glassCounter += 1;
    },
    created() {
        instanceId += 1;
        this.portalTarget = `glass-${instanceId}`;
        EventBus.$emit('add:glass-portal', this.portalTarget);
        if (document.activeElement) {
            document.activeElement.blur();
        }
    },
    data() {
        return {
            portalTarget: undefined,
        };
    },
    destroyed() {
        EventBus.$emit('remove:glass-portal', this.portalTarget);
    },
    methods: {
        click() {
            if (this.unbreakable === false) {
                this.close();
            }
        },
        close() {
            this.$emit('closed');
        },
    },
    mounted() {
        if (window.glassCounter === 1) {
            document.body.classList.add(this.$style['no-scroll']);
        }
    },
    props: {
        unbreakable: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';

.container {
    margin: auto;
    max-width: map-get($grid-breakpoints, 'md');
    width: 100%;
}

.no-scroll {
    overflow: hidden;
}

.wrapper {
    align-items: center;
    background: rgba(background-color(content), 0.85);
    bottom: 0;
    display: flex;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
    padding: spacing-vertical() spacing-horizontal();
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
}
</style>
