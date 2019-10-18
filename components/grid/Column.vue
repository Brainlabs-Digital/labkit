<template>
    <div :class="classes">
        <slot/>
    </div>
</template>

<script>
const breakpoints = ['sm', 'md', 'lg', 'xl'];
function generateBreakpointProps(propKey) {
    const props = {};
    props[propKey] = {
        type: [Number, String],
    };
    breakpoints.forEach((breakpoint) => {
        props[`${breakpoint}:${propKey}`] = {
            type: [Number, String],
        };
    });
    return props;
}
const offsetProps = generateBreakpointProps('offset');
const orderProps = generateBreakpointProps('order');
const spanProps = generateBreakpointProps('span');

export default {
    computed: {
        classes() {
            const classes = [
                this.$style.col,
                ...this.generateBreakpointClasses('offset', 'offset'),
                ...this.generateBreakpointClasses('order', 'order'),
                ...this.generateBreakpointClasses('span', 'col'),
            ];
            if (this.alignSelfStart === true) {
                classes.push(this.$style['align-self-start']);
            }
            if (this.alignSelfCenter === true) {
                classes.push(this.$style['align-self-center']);
            }
            if (this.alignSelfEnd === true) {
                classes.push(this.$style['align-self-end']);
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
    created() {
        this.gutters = this.gutterGetter();
    },
    data() {
        return {
            gutters: {},
        };
    },
    inject: ['gutterGetter'],
    methods: {
        generateBreakpointClasses(propKey, classKey) {
            const classes = [];
            if (this[propKey] !== undefined) {
                classes.push(this.$style[`${classKey}-${this[propKey]}`]);
            }
            if (this[`sm:${propKey}`] !== undefined) {
                classes.push(
                    this.$style[`${classKey}-sm-${this[`sm:${propKey}`]}`],
                );
            }
            if (this[`md:${propKey}`] !== undefined) {
                classes.push(
                    this.$style[`${classKey}-md-${this[`md:${propKey}`]}`],
                );
            }
            if (this[`lg:${propKey}`] !== undefined) {
                classes.push(
                    this.$style[`${classKey}-lg-${this[`lg:${propKey}`]}`],
                );
            }
            if (this[`xl:${propKey}`] !== undefined) {
                classes.push(
                    this.$style[`${classKey}-xl-${this[`xl:${propKey}`]}`],
                );
            }
            return classes;
        },
    },
    props: {
        alignSelfStart: {
            type: Boolean,
        },
        alignSelfCenter: {
            type: Boolean,
        },
        alignSelfEnd: {
            type: Boolean,
        },
        ...offsetProps,
        ...orderProps,
        ...spanProps,
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';
@import 'styles/mixins';

@mixin make-gutter-classes($prefix: '') {
    .#{$prefix}gutter {
        padding-left: $grid-gutter-width * 0.5;
        padding-right: $grid-gutter-width * 0.5;
    }

    .#{$prefix}gutter--compact {
        padding-left: spacing-horizontal(compact) * 0.5;
        padding-right: spacing-horizontal(compact) * 0.5;
    }

    .#{$prefix}gutter--content {
        padding-left: spacing-horizontal(content) * 0.5;
        padding-right: spacing-horizontal(content) * 0.5;
    }

    .#{$prefix}gutter--mini {
        padding-left: spacing-horizontal(mini) * 0.5;
        padding-right: spacing-horizontal(mini) * 0.5;
    }

    .#{$prefix}gutter--none {
        padding-left: 0;
        padding-right: 0;
    }
}

@mixin make-breakpoint($breakpoint) {
    $breakpoint-prefix: '#{$breakpoint}__';
    @include media-breakpoint-up($breakpoint) {
        @include make-gutter-classes($breakpoint-prefix);
    }
}

@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {
    @return if(breakpoint-min($name, $breakpoints) == null, '', '-#{$name}');
}

@mixin make-col($size, $columns: $grid-columns) {
    flex: 0 0 percentage($size / $columns);
    max-width: percentage($size / $columns);
}

@mixin make-col-offset($size, $columns: $grid-columns) {
    $num: $size / $columns;
    margin-left: if($num == 0, 0, percentage($num));
}

@mixin make-grid-columns(
    $columns: $grid-columns,
    $gutter: $grid-gutter-width,
    $breakpoints: $grid-breakpoints
) {
    %grid-column {
        position: relative;
        width: 100%;
        min-height: 1px; // Prevent columns from collapsing when empty
        padding-right: ($gutter * 0.5);
        padding-left: ($gutter * 0.5);
    }
    @each $breakpoint in map-keys($breakpoints) {
        $infix: breakpoint-infix($breakpoint, $breakpoints);
        @for $i from 1 through $columns {
            .col#{$infix}-#{$i} {
                @extend %grid-column;
            }
        }
        .col#{$infix},
        .col#{$infix}-auto {
            @extend %grid-column;
        }
        @include media-breakpoint-up($breakpoint, $breakpoints) {
            .col#{$infix},
            .col#{$infix}-fill {
                flex-basis: 0;
                flex-grow: 1;
                max-width: 100%;
            }
            .col#{$infix}-auto {
                flex: 0 0 auto;
                width: auto;
                max-width: 100%;
            }
            @for $i from 1 through $columns {
                .col#{$infix}-#{$i} {
                    @include make-col($i, $columns);
                }
            }
            .order#{$infix}-first {
                order: -1;
            }
            .order#{$infix}-last {
                order: $columns + 1;
            }
            @for $i from 0 through $columns {
                .order#{$infix}-#{$i} {
                    order: $i;
                }
            }
            // `$columns - 1` because offsetting by the width of an entire row isn't possible
            @for $i from 0 through ($columns - 1) {
                @if not($infix == '' and $i == 0) {
                    // Avoid emitting useless .offset-0
                    .offset#{$infix}-#{$i} {
                        @include make-col-offset($i, $columns);
                    }
                }
            }
        }
    }
}

@include make-grid-columns();

.align-self-start {
    align-self: flex-start;
}

.align-self-center {
    align-self: center;
}

.align-self-end {
    align-self: flex-end;
}

@include make-gutter-classes();

@each $breakpoint in map-keys($grid-breakpoints) {
    @include make-breakpoint($breakpoint);
}
</style>
