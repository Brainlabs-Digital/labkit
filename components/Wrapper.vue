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
const displayProps = generateBreakpointProps('display');
const marginTopProps = generateBreakpointProps('marginTop');
const marginBottomProps = generateBreakpointProps('marginBottom');

export default {
    computed: {
        classes() {
            const classes = [
                this.$style.base,
                ...this.generateBreakpointClasses('display', 'display'),
                ...this.generateBreakpointClasses('marginTop', 'margin-top'),
                ...this.generateBreakpointClasses(
                    'marginBottom',
                    'margin-bottom',
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
        ...displayProps,
        ...marginBottomProps,
        ...marginTopProps,
    },
};
</script>

<style module lang="scss">
@import '../styles/mixins';
@import '../styles/variables';

@mixin make-classes($prefix: '') {
    .#{$prefix}display--block {
        display: block;
    }

    .#{$prefix}display--inline-block {
        display: inline-block;
    }

    .#{$prefix}display--none {
        display: none;
    }

    .#{$prefix}margin-bottom {
        margin-bottom: spacing-vertical();
    }

    .#{$prefix}margin-bottom--compact {
        margin-bottom: spacing-vertical(compact);
    }

    .#{$prefix}margin-bottom--compact-content {
        margin-bottom: spacing-vertical(compact-content);
    }

    .#{$prefix}margin-bottom--content {
        margin-bottom: spacing-vertical(content);
    }

    .#{$prefix}margin-bottom--mini {
        margin-bottom: spacing-vertical(mini);
    }

    .#{$prefix}margin-bottom--mini-content {
        margin-bottom: spacing-vertical(mini-content);
    }

    .#{$prefix}margin-bottom--none {
        margin-bottom: 0;
    }

    .#{$prefix}margin-top---base {
        margin-top: (0 - spacing-vertical());
    }

    .#{$prefix}margin-top---compact {
        margin-top: (0 - spacing-vertical(compact));
    }

    .#{$prefix}margin-top---compact-content {
        margin-top: (0 - spacing-vertical(compact-content));
    }

    .#{$prefix}margin-top---content {
        margin-top: (0 - spacing-vertical(content));
    }

    .#{$prefix}margin-top---mini {
        margin-top: (0 - spacing-vertical(mini));
    }

    .#{$prefix}margin-top---mini-content {
        margin-top: (0 - spacing-vertical(mini-content));
    }

    .#{$prefix}margin-top---none {
        margin-top: 0;
    }
}

@mixin make-breakpoint($breakpoint) {
    $breakpoint-prefix: '#{$breakpoint}__';
    @include media-breakpoint-up($breakpoint) {
        @include make-classes($breakpoint-prefix);
    }
}

.base {
    display: block;
    margin: 0;
    max-width: 100%;
    padding: 0;
}

@include make-classes();

@each $breakpoint in map-keys($grid-breakpoints) {
    @include make-breakpoint($breakpoint);
}
</style>
