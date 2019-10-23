<template>
    <div>
        <lk-date-time-picker
            type="datetime"
            v-model="date"
            value-zone="America/New_York"
            zone="America/New_York"
        />
        <lk-divider/>
        <strong>Selected Date:</strong>
        <span>{{date}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: null,
        };
    },
};
</script>

<style module lang="scss">
@import '../../../../styles/variables';
</style>
