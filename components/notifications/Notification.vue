<template>
    <transition
        appear
        name="fade-scale"
    >
        <div
            :class="classes"
            @mouseenter="disableCountdown"
            @mouseleave="enableCountdown"
        >
            <template v-if="showTimerBar === true">
                <div :class="$style['timer-bar--empty']" />
                <div
                    :class="$style['timer-bar']"
                    :style="{
                        width: timerBarWidth,
                    }"
                />
            </template>
            <lk-row align-items-center>
                <lk-column>
                    <h3 v-if="title !== undefined">{{title}}</h3>
                    <p v-if="description !== undefined">{{description}}</p>
                </lk-column>
                <lk-column span="auto">
                    <lk-button
                        circle
                        :danger="type === 'danger'"
                        inverse
                        margin-bottom="none"
                        mini
                        outline
                        :primary="type === 'primary'"
                        :success="type === 'success'"
                        :warning="type === 'warning'"
                        @click.native="close"
                    >
                        <lk-icon icon="times" />
                    </lk-button>
                </lk-column>
            </lk-row>
        </div>
    </transition>
</template>

<script>
export default {
    computed: {
        classes() {
            const classes = [this.$style.container, this.$style[this.type]];
            return classes;
        },
        showTimerBar() {
            return this.timeoutSeconds !== false;
        },
        timerBarWidth() {
            return `${(1 - this.secondsAlive / this.timeoutSeconds) * 100}%`;
        },
    },
    async created() {
        if (this.timeoutSeconds !== false) {
            this.previousTickMs = Date.now();
            while (this.secondsAlive <= this.timeoutSeconds) {
                await this.tick();
                const currentMs = Date.now();
                if (this.countdownIsActive === true) {
                    const diff = currentMs - this.previousTickMs;
                    this.secondsAlive += diff / 1000;
                }
                this.previousTickMs = currentMs;
            }
            this.close();
        }
    },
    data() {
        return {
            countdownIsActive: true,
            previousTickMs: undefined,
            secondsAlive: 0,
        };
    },
    methods: {
        close() {
            this.$emit('close');
        },
        disableCountdown() {
            this.countdownIsActive = false;
        },
        enableCountdown() {
            this.countdownIsActive = true;
        },
        tick() {
            return new Promise((resolve) => {
                window.requestAnimationFrame(resolve);
            });
        },
    },
    props: {
        description: {
            type: String,
        },
        timeoutSeconds: {
            default: 13,
            type: [Number, Boolean],
        },
        title: {
            type: String,
        },
        type: {
            default: 'base',
            type: String,
            validator(value) {
                return [
                    'base',
                    'danger',
                    'primary',
                    'success',
                    'warning',
                ].includes(value);
            },
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';

.container {
    background: color(text);
    border-radius: border-radius(button);
    box-shadow: shadow(deep);
    color: color(text, inverse);
    margin: spacing-vertical(content) 0 0;
    overflow: hidden;
    padding: spacing-vertical(compact) spacing-horizontal(compact)
        (spacing-vertical(compact) + border-width(thick)) spacing-horizontal();
    position: relative;
    width: 100%;
    &.base {
        background: color(text);
    }
    &.danger {
        background: color(danger);
    }
    &.primary {
        background: color(link);
    }
    &.success {
        background: color(success);
    }
    &.warning {
        background: color(warning);
    }
    h3 {
        font-size: font-size(body);
        font-weight: bold;
    }
    p {
        font-size: font-size(primary);
    }
}

.timer-bar,
.timer-bar--empty {
    background: color(text, inverse);
    bottom: 0;
    height: border-width(thick);
    left: 0;
    position: absolute;
}

.timer-bar--empty {
    opacity: 0.5;
    width: 100%;
}
</style>
