<template>
    <div>
        <lk-input
            placeholder="Blur example placeholder"
            @blur="incrementCounter"
        >
            <template slot="label">Blur example</template>
        </lk-input>
        <lk-divider margin-bottom="content"/>
        <lk-content>
            <p>Number of times unfocused: {{counter}}</p>
        </lk-content>
    </div>
</template>

<script>
export default {
    methods: {
        incrementCounter() {
            this.counter++;
        },
    },
    data() {
        return {
            counter: 0,
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
