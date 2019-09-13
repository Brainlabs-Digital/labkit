<template>
    <div :class="classes">
        <lk-padder v-bind="padderProps">
            <slot/>
        </lk-padder>
    </div>
</template>

<script>
export default {
    computed: {
        classes() {
            const classes = [this.$style.container];
            if (this.alignContentRight === true) {
                classes.push(this.$style['align-content-right']);
            } else if (this.alignContentCenter === true) {
                classes.push(this.$style['align-content-center']);
            }
            if (this.highlighted === true) {
                classes.push(this.$style.highlighted);
            }
            if (this.mediumBorder === true) {
                classes.push(this.$style['medium-border']);
            }
            if (this.muted === true) {
                classes.push(this.$style.muted);
            } else if (this.light === true) {
                classes.push(this.$style.light);
            }
            if (this.thickBorder === true) {
                classes.push(this.$style['thick-border']);
            }
            if (this.dashedBorder === true) {
                classes.push(this.$style['dashed-border']);
            }
            if (this.lightBorder === true) {
                classes.push(this.$style['light-border']);
            }
            return classes;
        },
        padderProps() {
            return {
                padding: '',
                'padding-bottom': 'remainder-content',
                ...this.$attrs,
            };
        },
    },
    props: {
        alignContentCenter: {
            type: Boolean,
        },
        alignContentRight: {
            type: Boolean,
        },
        dashedBorder: {
            type: Boolean,
        },
        highlighted: {
            type: Boolean,
        },
        light: {
            type: Boolean,
        },
        lightBorder: {
            type: Boolean,
        },
        mediumBorder: {
            type: Boolean,
        },
        muted: {
            type: Boolean,
        },
        thickBorder: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';

.container {
    background: color(text, inverse);
    border-top: 1px solid border-color();
    position: relative;
    &.medium-border {
        border-top-width: border-width(medium);
    }
    &.thick-border {
        border-top-width: border-width(thick);
    }
    &.dashed-border {
        border-style: dashed;
    }
    &.light-border {
        border-color: border-color(light);
    }
    &:first-child {
        border-top: none;
        border-top-left-radius: border-radius(panel);
        border-top-right-radius: border-radius(panel);
    }
    &:last-child {
        border-bottom-left-radius: border-radius(panel);
        border-bottom-right-radius: border-radius(panel);
    }
}

.align-content-center {
    text-align: center;
}

.align-content-right {
    text-align: right;
}

.highlighted {
    background: background-color(highlight, primary);
}

.muted {
    background: background-color(light);
}

.light {
    background: background-color(extra-light);
}
</style>
