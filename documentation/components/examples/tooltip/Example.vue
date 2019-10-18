<template>
    <div>
        <lk-tooltip disabled>
            <lk-button margin-bottom="none">Disabled</lk-button>
            <template slot="content">
                Disabled
            </template>
        </lk-tooltip>
        <lk-tooltip @toggled="setTooltipIsVisible">
            <lk-button margin-bottom="none">{{buttonText}}</lk-button>
            <template slot="content">
                Tooltip message
            </template>
        </lk-tooltip>
    </div>
</template>

<script>
export default {
    computed: {
        buttonText() {
            if (this.tooltipIsVisible === true) {
                return 'Tooltip is visible';
            } else {
                return 'Tooltip is hidden';
            }
        },
    },
    data() {
        return {
            tooltipIsVisible: false,
        };
    },
    methods: {
        setTooltipIsVisible(isVisible) {
            this.tooltipIsVisible = isVisible;
        },
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
