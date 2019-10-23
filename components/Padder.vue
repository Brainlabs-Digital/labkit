<template>
    <div :class="classes">
        <slot />
    </div>
</template>

<script>
const breakpoints = ['sm', 'md', 'lg', 'xl'];
function generateBreakpointProps(propKey) {
    const props = {};
    props[propKey] = {
        type: [Boolean, String],
    };
    breakpoints.forEach((breakpoint) => {
        props[`${breakpoint}:${propKey}`] = {
            type: [Boolean, String],
        };
    });
    return props;
}
const paddingProps = generateBreakpointProps('padding');
const paddingVerticalProps = generateBreakpointProps('paddingVertical');
const paddingHorizontalProps = generateBreakpointProps('paddingHorizontal');
const paddingTopProps = generateBreakpointProps('paddingTop');
const paddingRightProps = generateBreakpointProps('paddingRight');
const paddingBottomProps = generateBreakpointProps('paddingBottom');
const paddingLeftProps = generateBreakpointProps('paddingLeft');

export default {
    computed: {
        classes() {
            const classes = [
                ...this.generateBreakpointClasses('padding', 'padding'),
                ...this.generateBreakpointClasses(
                    'paddingVertical',
                    'padding-vertical',
                ),
                ...this.generateBreakpointClasses(
                    'paddingHorizontal',
                    'padding-horizontal',
                ),
                ...this.generateBreakpointClasses('paddingTop', 'padding-top'),
                ...this.generateBreakpointClasses(
                    'paddingRight',
                    'padding-right',
                ),
                ...this.generateBreakpointClasses(
                    'paddingBottom',
                    'padding-bottom',
                ),
                ...this.generateBreakpointClasses(
                    'paddingLeft',
                    'padding-left',
                ),
            ];
            return classes;
        },
    },
    methods: {
        generateBreakpointClasses(propKey, classKey) {
            const classes = [];
            if (this[propKey] === true) {
                classes.push(this.$style[classKey]);
            } else if (this[propKey] !== false) {
                classes.push(this.$style[`${classKey}--${this[propKey]}`]);
            }
            if (this[`sm:${propKey}`] === true) {
                classes.push(this.$style[`sm__${classKey}`]);
            } else if (this[`sm:${propKey}`] !== false) {
                classes.push(
                    this.$style[`sm__${classKey}--${this[`sm:${propKey}`]}`],
                );
            }
            if (this[`md:${propKey}`] === true) {
                classes.push(this.$style[`md__${classKey}`]);
            } else if (this[`md:${propKey}`] !== false) {
                classes.push(
                    this.$style[`md__${classKey}--${this[`md:${propKey}`]}`],
                );
            }
            if (this[`lg:${propKey}`] === true) {
                classes.push(this.$style[`lg__${classKey}`]);
            } else if (this[`lg:${propKey}`] !== false) {
                classes.push(
                    this.$style[`lg__${classKey}--${this[`lg:${propKey}`]}`],
                );
            }
            if (this[`xl:${propKey}`] === true) {
                classes.push(this.$style[`xl__${classKey}`]);
            } else if (this[`xl:${propKey}`] !== false) {
                classes.push(
                    this.$style[`xl__${classKey}--${this[`xl:${propKey}`]}`],
                );
            }
            return classes;
        },
    },
    props: {
        ...paddingProps,
        ...paddingVerticalProps,
        ...paddingHorizontalProps,
        ...paddingTopProps,
        ...paddingRightProps,
        ...paddingBottomProps,
        ...paddingLeftProps,
    },
};
</script>

<style module lang="scss">
@import '../styles/mixins';
@import '../styles/variables';

@mixin make-classes($prefix: '') {
    .#{$prefix}padding {
        padding: spacing-vertical();
    }

    .#{$prefix}padding--content {
        padding: spacing-vertical(content);
    }

    .#{$prefix}padding--compact {
        padding: spacing-vertical(compact);
    }

    .#{$prefix}padding--mini {
        padding: spacing-vertical(mini);
    }

    .#{$prefix}padding--none {
        padding: 0;
    }

    .#{$prefix}padding-vertical {
        padding-bottom: spacing-vertical();
        padding-top: spacing-vertical();
    }

    .#{$prefix}padding-vertical--content {
        padding-bottom: spacing-vertical(content);
        padding-top: spacing-vertical(content);
    }

    .#{$prefix}padding-vertical--compact {
        padding-bottom: spacing-vertical(compact);
        padding-top: spacing-vertical(compact);
    }

    .#{$prefix}padding-vertical--mini {
        padding-bottom: spacing-vertical(mini);
        padding-top: spacing-vertical(mini);
    }

    .#{$prefix}padding-vertical--none {
        padding-bottom: 0;
        padding-top: 0;
    }

    .#{$prefix}padding-horizontal {
        padding-left: spacing-horizontal();
        padding-right: spacing-horizontal();
    }

    .#{$prefix}padding-horizontal--content {
        padding-left: spacing-horizontal(content);
        padding-right: spacing-horizontal(content);
    }

    .#{$prefix}padding-horizontal--compact {
        padding-left: spacing-horizontal(compact);
        padding-right: spacing-horizontal(compact);
    }

    .#{$prefix}padding-horizontal--mini {
        padding-left: spacing-horizontal(mini);
        padding-right: spacing-horizontal(mini);
    }

    .#{$prefix}padding-horizontal--none {
        padding-left: 0;
        padding-right: 0;
    }

    .#{$prefix}padding-top {
        padding-top: spacing-vertical();
    }

    .#{$prefix}padding-top--content {
        padding-top: spacing-vertical(content);
    }

    .#{$prefix}padding-top--compact {
        padding-top: spacing-vertical(compact);
    }

    .#{$prefix}padding-top--mini {
        padding-top: spacing-vertical(mini);
    }

    .#{$prefix}padding-top--none {
        padding-top: 0;
    }

    .#{$prefix}padding-right {
        padding-right: spacing-horizontal();
    }

    .#{$prefix}padding-right--content {
        padding-right: spacing-horizontal(content);
    }

    .#{$prefix}padding-right--compact {
        padding-right: spacing-horizontal(compact);
    }

    .#{$prefix}padding-right--mini {
        padding-right: spacing-horizontal(mini);
    }

    .#{$prefix}padding-right--none {
        padding-right: 0;
    }

    .#{$prefix}padding-bottom {
        padding-bottom: spacing-vertical();
    }

    .#{$prefix}padding-bottom--content {
        padding-bottom: spacing-vertical(content);
    }

    .#{$prefix}padding-bottom--compact {
        padding-bottom: spacing-vertical(compact);
    }

    .#{$prefix}padding-bottom--mini {
        padding-bottom: spacing-vertical(mini);
    }

    .#{$prefix}padding-bottom--remainder-content {
        padding-bottom: spacing-vertical-remainder(content);
    }

    .#{$prefix}padding-bottom--remainder-compact {
        padding-bottom: spacing-vertical-remainder(compact);
    }

    .#{$prefix}padding-bottom--remainder-compact-content {
        padding-bottom: spacing-vertical-remainder(compact-content);
    }

    .#{$prefix}padding-bottom--remainder-mini {
        padding-bottom: spacing-vertical-remainder(mini);
    }

    .#{$prefix}padding-bottom--remainder-mini-content {
        padding-bottom: spacing-vertical-remainder(mini-content);
    }

    .#{$prefix}padding-bottom--content-remainder-compact {
        padding-bottom: spacing-vertical-remainder(content, compact);
    }

    .#{$prefix}padding-bottom--content-remainder-compact-content {
        padding-bottom: spacing-vertical-remainder(content, compact-content);
    }

    .#{$prefix}padding-bottom--content-remainder-mini {
        padding-bottom: spacing-vertical-remainder(content, mini);
    }

    .#{$prefix}padding-bottom--content-remainder-mini-content {
        padding-bottom: spacing-vertical-remainder(content, mini-content);
    }

    .#{$prefix}padding-bottom--compact-remainder-compact-content {
        padding-bottom: spacing-vertical-remainder(compact, compact-content);
    }

    .#{$prefix}padding-bottom--compact-remainder-mini {
        padding-bottom: spacing-vertical-remainder(compact, mini);
    }

    .#{$prefix}padding-bottom--compact-remainder-mini-content {
        padding-bottom: spacing-vertical-remainder(compact, mini-content);
    }

    .#{$prefix}padding-bottom--mini-remainder-mini-content {
        padding-bottom: spacing-vertical-remainder(mini, mini-content);
    }

    .#{$prefix}padding-bottom--none {
        padding-bottom: 0;
    }

    .#{$prefix}padding-left {
        padding-left: spacing-horizontal();
    }

    .#{$prefix}padding-left--content {
        padding-left: spacing-horizontal(content);
    }

    .#{$prefix}padding-left--compact {
        padding-left: spacing-horizontal(compact);
    }

    .#{$prefix}padding-left--mini {
        padding-left: spacing-horizontal(mini);
    }

    .#{$prefix}padding-left--none {
        padding-left: 0;
    }
}

@mixin make-breakpoint($breakpoint) {
    $breakpoint-prefix: '#{$breakpoint}__';
    @include media-breakpoint-up($breakpoint) {
        @include make-classes($breakpoint-prefix);
    }
}

@include make-classes();

@each $breakpoint in map-keys($grid-breakpoints) {
    @include make-breakpoint($breakpoint);
}
</style>
