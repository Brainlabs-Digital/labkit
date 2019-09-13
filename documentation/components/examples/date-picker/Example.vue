<template>
    <div>
        <lk-date-picker 
            :selected-date="selectedDate" 
            @date:selected="setSelectedDate"/>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    data() {
        return {
            selectedDate: moment('2019-04-01T00:00:00'),
        };
    },
    methods: {
        setSelectedDate(selectedDate) {
            this.selectedDate = selectedDate;
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
