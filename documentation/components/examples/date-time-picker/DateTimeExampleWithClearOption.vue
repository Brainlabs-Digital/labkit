<template>
    <div>
        <lk-date-time-picker 
            type="datetime" 
            v-model="date" 
            has-clear-option/>
        <lk-divider/>
        <strong>Selected Date:</strong>
        <span>{{currenttime}}</span>
    </div>
</template>

<script>
export default {
    computed: {
        currenttime() {
            return this.date;
        },
    },
    data() {
        return {
            date: '2001-01-01T01:01:01+00:00',
        };
    },
    methods: {},
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
