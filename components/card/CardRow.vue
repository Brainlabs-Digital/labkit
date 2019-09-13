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
            return classes;
        },
        padderProps() {
            return {
                padding: '',
                'padding-horizontal': 'none',
                'padding-vertical': 'mini',
                ...this.$attrs,
            };
        },
    },
    props: {
        alignContentCenter: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';

.container {
    border-top: 1px solid border-color();
    position: relative;
    border-color: border-color(light);
    &:first-child {
        border-top: none;
        border-top-left-radius: border-radius(panel);
        border-top-right-radius: border-radius(panel);
    }
}

.align-content-center {
    text-align: center;
}

.align-content-right {
    text-align: right;
}
</style>
