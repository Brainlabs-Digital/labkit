<template>
    <span :class="classes"><slot/></span>
</template>

<script>
export default {
    computed: {
        classes() {
            const classes = [];
            if (this.primary === true) {
                classes.push(this.$style.primary);
            } else if (this.danger === true) {
                classes.push(this.$style.danger);
            } else if (this.success === true) {
                classes.push(this.$style.success);
            } else if (this.warning === true) {
                classes.push(this.$style.warning);
            } else {
                classes.push(this.$style.default);
            }
            if (this.inverse === true) {
                classes.push(this.$style.inverse);
            }
            if (this.mini === true) {
                classes.push(this.$style.mini);
            }
            if (this.pill === true) {
                classes.push(this.$style.pill);
            }
            return classes;
        },
    },
    props: {
        danger: {
            type: Boolean,
        },
        inverse: {
            type: Boolean,
        },
        mini: {
            type: Boolean,
        },
        pill: {
            type: Boolean,
        },
        primary: {
            type: Boolean,
        },
        success: {
            type: Boolean,
        },
        warning: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';

@mixin make-badge(
    $color,
    $color-dark,
    $color-muted,
    $text-color: color(text, inverse),
    $inverse-text-color: $color-dark
) {
    background: $color;
    border-color: $color-dark;
    border-left: border-radius(badge) solid $color-dark;
    border-radius: border-radius(badge);
    color: $text-color;
    display: inline-block;
    font-size: font-size();
    font-weight: bold;
    max-width: 100%;
    overflow: hidden;
    padding: spacing-vertical(badge) spacing-horizontal(badge);
    text-overflow: ellipsis;
    white-space: nowrap;
    &.inverse {
        background: $color-muted;
        border-color: $color;
        color: $inverse-text-color;
    }
}

.danger {
    @include make-badge(
        color(danger),
        color(danger, dark),
        color(danger, muted)
    );
}

.default {
    @include make-badge(
        color(text),
        color(text, muted),
        background-color(muted),
        $inverse-text-color: color(text)
    );
}

.primary {
    @include make-badge(color(link), color(link, dark), color(link, muted));
}

.success {
    @include make-badge(
        color(success),
        color(success, dark),
        color(success, muted)
    );
}

.warning {
    @include make-badge(
        color(warning),
        color(warning, dark),
        color(warning, muted)
    );
}

.mini {
    font-size: font-size(caption);
}

.pill {
    border: none;
    border-radius: 100rem;
    padding: spacing-vertical(badge) (spacing-horizontal(badge) * 2);
}
</style>
