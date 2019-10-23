<template>
    <div>
        <lk-button 
            primary 
            @click.native="incrementClickCounter">
            {{clickButtonMessage}}
        </lk-button>
        <lk-button 
            danger 
            :disabled="hasClicks === false"
            outline
            @click.native="resetClickCounter"
        >Reset Click Counter</lk-button>
    </div>
</template>

<script>
export default {
    computed: {
        clickButtonMessage() {
            if (this.clickCounter === 1) {
                return `Button clicked ${this.clickCounter} time`;
            } else {
                return `Button clicked ${this.clickCounter} times`;
            }
        },
        hasClicks() {
            return this.clickCounter > 0;
        },
    },
    data() {
        return {
            clickCounter: 0,
        };
    },
    methods: {
        incrementClickCounter() {
            this.clickCounter += 1;
        },
        resetClickCounter() {
            this.clickCounter = 0;
        },
    },
};
</script>

<style module lang="scss">
@import '../../../../styles/variables';
</style>
