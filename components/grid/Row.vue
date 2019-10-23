<template>
    <div :class="classes">
        <slot/>
    </div>
</template>

<script>
export default {
    computed: {
        classes() {
            const classes = [this.$style.row];
            if (this.alignItemsStart === true) {
                classes.push(this.$style['align-items-start']);
            }
            if (this.alignItemsCenter === true) {
                classes.push(this.$style['align-items-center']);
            }
            if (this.alignItemsEnd === true) {
                classes.push(this.$style['align-items-end']);
            }
            if (this.justifyContentStart === true) {
                classes.push(this.$style['justify-content-start']);
            }
            if (this.justifyContentEnd === true) {
                classes.push(this.$style['justify-content-end']);
            }
            if (this.justifyContentCenter === true) {
                classes.push(this.$style['justify-content-center']);
            }
            if (this.justifyContentBetween === true) {
                classes.push(this.$style['justify-content-between']);
            }
            if (this.justifyContentAround === true) {
                classes.push(this.$style['justify-content-around']);
            }
            if (this.justifyContentEvenly === true) {
                classes.push(this.$style['justify-content-evenly']);
            }
            if (this.gutters.base === true) {
                classes.push(this.$style['gutter']);
            } else if (this.gutters.base !== undefined) {
                classes.push(this.$style[`gutter--${this.gutters.base}`]);
            }
            if (this.gutters.sm === true) {
                classes.push(this.$style['sm__gutter']);
            } else if (this.gutters.sm !== undefined) {
                classes.push(this.$style[`sm__gutter--${this.gutters.sm}`]);
            }
            if (this.gutters.md === true) {
                classes.push(this.$style['md__gutter']);
            } else if (this.gutters.md !== undefined) {
                classes.push(this.$style[`md__gutter--${this.gutters.md}`]);
            }
            if (this.gutters.lg === true) {
                classes.push(this.$style['lg__gutter']);
            } else if (this.gutters.lg !== undefined) {
                classes.push(this.$style[`lg__gutter--${this.gutters.lg}`]);
            }
            if (this.gutters.xl === true) {
                classes.push(this.$style['xl__gutter']);
            } else if (this.gutters.xl !== undefined) {
                classes.push(this.$style[`xl__gutter--${this.gutters.xl}`]);
            }
            return classes;
        },
    },
    data() {
        return {
            /*
                Why is gutterGetter a getter/function instead of a value? To work
                around the limitations of the provide/inject interface which we use
                to inject a gutter into all child columns which we do to avoid
                having to specify a gutter for each child column.
            */
            gutterGetter: () => {
                return this.gutters;
            },
            gutters: {
                base: this.gutter,
                sm: this['sm:gutter'],
                md: this['md:gutter'],
                lg: this['lg:gutter'],
                xl: this['xl:gutter'],
            },
        };
    },
    props: {
        alignItemsStart: {
            type: Boolean,
        },
        alignItemsCenter: {
            type: Boolean,
        },
        alignItemsEnd: {
            type: Boolean,
        },
        gutter: {
            type: [Boolean, String],
        },
        'sm:gutter': {
            type: [Boolean, String],
        },
        'md:gutter': {
            type: [Boolean, String],
        },
        'lg:gutter': {
            type: [Boolean, String],
        },
        'xl:gutter': {
            type: [Boolean, String],
        },
        justifyContentStart: {
            type: Boolean,
        },
        justifyContentEnd: {
            type: Boolean,
        },
        justifyContentCenter: {
            type: Boolean,
        },
        justifyContentBetween: {
            type: Boolean,
        },
        justifyContentAround: {
            type: Boolean,
        },
        justifyContentEvenly: {
            type: Boolean,
        },
    },
    provide() {
        return {
            gutterGetter: this.gutterGetter,
        };
    },
};
</script>

<style module lang="scss">
@import '../../styles/mixins';
@import '../../styles/variables';

@mixin make-gutter-classes($prefix: '') {
    .#{$prefix}gutter {
        margin-right: 0 - ($grid-gutter-width * 0.5);
        margin-left: 0 - ($grid-gutter-width * 0.5);
    }

    .#{$prefix}gutter--compact {
        margin-right: 0 - (spacing-horizontal(compact) * 0.5);
        margin-left: 0 - (spacing-horizontal(compact) * 0.5);
    }

    .#{$prefix}gutter--content {
        margin-right: 0 - (spacing-horizontal(content) * 0.5);
        margin-left: 0 - (spacing-horizontal(content) * 0.5);
    }

    .#{$prefix}gutter--mini {
        margin-right: 0 - (spacing-horizontal(mini) * 0.5);
        margin-left: 0 - (spacing-horizontal(mini) * 0.5);
    }

    .#{$prefix}gutter--none {
        margin-right: 0;
        margin-left: 0;
    }
}

@mixin make-breakpoint($breakpoint) {
    $breakpoint-prefix: '#{$breakpoint}__';
    @include media-breakpoint-up($breakpoint) {
        @include make-gutter-classes($breakpoint-prefix);
    }
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: 0 - ($grid-gutter-width * 0.5);
    margin-left: 0 - ($grid-gutter-width * 0.5);
}

.align-items-start {
    align-items: flex-start;
}

.align-items-center {
    align-items: center;
}

.align-items-end {
    align-items: flex-end;
}

.justify-content-start {
    justify-content: flex-start;
}

.justify-content-end {
    justify-content: flex-end;
}

.justify-content-center {
    justify-content: center;
}

.justify-content-between {
    justify-content: space-between;
}

.justify-content-around {
    justify-content: space-around;
}

.justify-content-evenly {
    justify-content: space-evenly;
}

@include make-gutter-classes();

@each $breakpoint in map-keys($grid-breakpoints) {
    @include make-breakpoint($breakpoint);
}
</style>
