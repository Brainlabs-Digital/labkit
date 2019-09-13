<template>
    <div>
        <lk-date-time-picker 
            type="datetime" 
            has-error>
            <template slot="label">Enter a date and time</template>
            <template slot="hint">
                <p>Enter the date and time you would like to set</p>
            </template>
            <template slot="error">
                <p>Example error message.</p>
                <p>This is the second line of the error message.</p>
            </template>
        </lk-date-time-picker>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {},
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
