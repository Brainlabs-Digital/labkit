<template>
    <div>
        <lk-button @click.native="activateLoadingGlass">Show loading glass</lk-button>
        <lk-loading-glass v-if="loadingGlassIsVisible === true">
            <template slot="message">Loading message will hide in&hellip; {{countdownSeconds}}</template>
        </lk-loading-glass>
    </div>
</template>

<script>
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
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
