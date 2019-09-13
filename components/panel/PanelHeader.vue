<template>
    <div :class="classes">
        <lk-row align-items-center>
            <lk-column>
                <h3 :class="$style.title">
                    <slot name="title">[Placeholder title]</slot>
                </h3>
                <h5 
                    v-if="hasSubtitle === true" 
                    :class="$style.subtitle">
                    <slot name="subtitle"/>
                </h5>
            </lk-column>
            <lk-column 
                v-if="hasActionItems" 
                span="auto">
                <div :class="$style['action-items-container']">
                    <slot name="actionItems"/>
                </div>
            </lk-column>
        </lk-row>
    </div>
</template>

<script>
export default {
    computed: {
        classes() {
            const classes = [this.$style.container];
            if (this.muted === true) {
                classes.push(this.$style.muted);
            }
            if (this.compact === true) {
                classes.push(this.$style.compact);
            }
            if (this.highlighted === true) {
                classes.push(this.$style.highlighted);
            }
            return classes;
        },
        hasActionItems() {
            return this.$slots.actionItems !== undefined;
        },
        hasSubtitle() {
            return this.$slots.subtitle !== undefined;
        },
    },
    props: {
        compact: {
            type: Boolean,
        },
        highlighted: {
            type: Boolean,
        },
        muted: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';

.action-items-container {
    margin: (0 - spacing-vertical(compact)) 0;
}

.container {
    background: background-color(content);
    border-bottom: border-width() solid border-color();
    border-top: border-width(medium) solid border-color();
    padding: spacing-vertical() spacing-horizontal();
    transition: background $transition-duration;
    transition-timing-function: $transition-timing-function;
    &:first-child {
        border-radius: border-radius(panel) border-radius(panel) 0 0;
        border-top: none;
    }
    &.compact {
        padding: spacing-vertical(content) spacing-horizontal();
        .title {
            font-size: font-size(body);
        }
    }
}

.muted {
    background: background-color(light);
}

.highlighted {
    background: background-color(highlight, primary);
}

.subtitle {
    color: color(text, muted);
    font-size: font-size(caption);
}

.title {
    font-size: font-size(sub-heading);
    font-weight: 900;
}
</style>
