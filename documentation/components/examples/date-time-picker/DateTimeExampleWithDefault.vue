<template>
    <div>
        <lk-date-time-picker 
            type="datetime" 
            v-model="date"/>
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
            date: '23 Feb 2012 11:48',
        };
    },
    methods: {},
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
