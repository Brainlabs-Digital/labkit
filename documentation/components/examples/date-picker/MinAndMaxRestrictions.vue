<template>
    <div>
        <lk-content content-font-size-primary>
            <p>
                The date and time picker below has a maximum selectable date of
                <strong>{{this.maxDate.format('MMMM D YYYY')}}</strong> and a minimum selectable date of
                <strong>{{this.minDate.format('MMMM D YYYY')}}</strong>.
            </p>
            <lk-divider/>
            <lk-date-picker
                :max-date="maxDate"
                :min-date="minDate"
                :selected-date="selectedDate"
                @date:selected="setSelectedDate"
            />
        </lk-content>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    data() {
        return {
            maxDate: moment('2018-07-15T00:00:00'),
            minDate: moment('2018-05-03T00:00:00'),
            selectedDate: moment('2018-06-09T00:00:00'),
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
@import 'styles/variables';
</style>
