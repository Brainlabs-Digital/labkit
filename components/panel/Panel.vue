<template>
    <lk-wrapper v-bind="wrapperProps">
        <div :class="classes">
            <slot/>
        </div>
    </lk-wrapper>
</template>

<script>
export default {
    computed: {
        classes() {
            const classes = [this.$style.container];
            if (this.highlighted === true) {
                classes.push(this.$style.highlighted);
            }
            if (this.shadowShallow === true) {
                classes.push(this.$style['shadow-shallow']);
            } else if (this.shadowDeep === true) {
                classes.push(this.$style['shadow-deep']);
            } else if (this.shadowMedium === true) {
                classes.push(this.$style['shadow-medium']);
            }
            return classes;
        },
        wrapperProps() {
            return {
                'margin-bottom': true,
                ...this.$attrs,
            };
        },
    },
    props: {
        highlighted: {
            type: Boolean,
        },
        shadowDeep: {
            type: Boolean,
        },
        shadowMedium: {
            type: Boolean,
        },
        shadowShallow: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';

.container {
    background: background-color(content);
    border: border-width() solid border-color();
    border-radius: border-radius(panel);
    margin: 0;
    overflow: hidden;
    transition: border-color $transition-duration;
    transition-timing-function: $transition-timing-function;
}

.highlighted {
    border-color: color(text, muted);
}

.shadow-deep {
    box-shadow: shadow(deep);
}

.shadow-medium {
    box-shadow: shadow();
}

.shadow-shallow {
    box-shadow: shadow(shallow);
}
</style>
