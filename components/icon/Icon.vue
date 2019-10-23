<template>
    <span 
        v-html="iconHtml" 
        :class="classes"/>
</template>

<script>
import icons from './icons';

export default {
    computed: {
        classes() {
            const classes = [this.$style['icon-wrapper']];
            if (this.flip === true) {
                classes.push(this.$style.flip);
            }
            if (this.flop === true) {
                classes.push(this.$style.flop);
            }
            if (this.spin === true) {
                classes.push(this.$style.spin);
            } else if (this.spinAnticlockwise === true) {
                classes.push(this.$style['spin-anticlockwise']);
            }
            return classes;
        },
        iconHtml() {
            return icons[this.icon];
        },
    },
    props: {
        flip: {
            type: Boolean,
        },
        flop: {
            type: Boolean,
        },
        icon: {
            required: true,
            type: String,
        },
        spin: {
            type: Boolean,
        },
        spinAnticlockwise: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import '../../styles/variables';

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes spin-anticlockwise {
    from {
        transform: rotate(360deg);
    }
    to {
        transform: rotate(0deg);
    }
}

.icon-wrapper {
    display: inline-block;
    height: 1em;
    width: auto;
    vertical-align: baseline;
    > svg {
        display: inline-block;
        fill: currentColor;
        height: 100%;
        overflow: visible;
        vertical-align: -0.1em;
    }
}

.flip {
    transform: scaleY(-1) translateY(-50%);
}

.flop {
    transform: scaleX(-1);
}

.flip.flop {
    transform: scaleX(-1) scaleY(-1) translateY(-50%);
}

.spin svg {
    animation: spin 0.5s infinite linear;
}

.spin-anticlockwise svg {
    animation: spin-anticlockwise 0.5s infinite linear;
}
</style>
