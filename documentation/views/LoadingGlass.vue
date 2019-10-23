<template>
    <lk-content>
        <h1>Loading glass</h1>
        <p>The loading glass component (<code>lk-loading-glass</code>)&hellip;</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <example/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="exampleScript"
                    language="js"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="exampleTemplate"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
    </lk-content>
</template>

<script>
import Code from '../../documentation/components/Code';
import Example from '../../documentation/components/examples/loading-glass/Example';

export default {
    components: {
        Example,
        formatCode: Code,
    },
    data() {
        return {
            exampleScript: `
// Component <script> content
/*
    NOTE:
    This example is likely complicated by the use of a countdown to hide
    the component: all that is required to hide or show the loading glass is to
    show or hide the component using a v-if directive.
*/
export default {
    data() {
        return {
            countdownSeconds: undefined,
            countdownInterval: undefined,
            loadingGlassIsVisible: false,
        };
    },
    methods: {
        activateLoadingGlass() {
            this.loadingGlassIsVisible = true;
            this.countdownSeconds = 3;
            this.countdownInterval = setInterval(() => {
                this.countdownSeconds -= 1;
                if (this.countdownSeconds === 0) {
                    clearInterval(this.countdownInterval);
                    this.loadingGlassIsVisible = false;
                }
            }, 1000);
        },
    },
};           
            `,
            exampleTemplate: `
<!-- Component <template> content -->
<lk-button @click.native="activateLoadingGlass">Show loading glass</lk-button>
<lk-loading-glass v-if="loadingGlassIsVisible === true">
    <template slot="message">Loading message will hide in&hellip; {{countdownSeconds}}</template>
</lk-loading-glass>            
            `,
        };
    },
};
</script>

<style module lang="scss">
@import '../../styles/variables';
</style>
