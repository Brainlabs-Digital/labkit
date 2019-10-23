<template>
    <span 
        v-html="svgHtml" 
        :class="$style['icon-wrapper']" />
</template>
<script>
import appicons from './appicons';
export default {
    computed: {
        svgHtml() {
            return appicons[this.application];
        },
    },
    props: {
        application: {
            required: true,
            type: String,
            in: [
                '247_bidder',
                'spell_checker',
                'big_red_stop_button',
                'experiments_dashboard',
                'negative_lists',
                'sqrt',
                'structure_checker',
                'url_checker',
            ],
        },
        icon: {
            type: String,
            required: false,
            default: '',
        },
    },
};
</script><style module lang="scss">
@import '../../styles/variables';

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
</style>
