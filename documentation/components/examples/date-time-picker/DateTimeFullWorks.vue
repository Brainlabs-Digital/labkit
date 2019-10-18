<template>
    <div>
        <lk-date-time-picker
            type="datetime"
            v-model="dateTimeEmpty"
            input-class="my-class"
            value-zone="America/New_York"
            zone="Asia/Shanghai"
            :format="{ year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', timeZoneName: 'short' }"
            :phrases="{ok: 'Continue', cancel: 'Exit'}"
            :hour-step="2"
            :minute-step="15"
            :min-datetime="minDatetime"
            :max-datetime="maxDatetime"
            :week-start="7"
            use12-hour
            auto
        >
            <template slot="label">Enter a date and time</template>
            <template slot="hint">
                <p>Enter the date and time you would like to set</p>
            </template>
        </lk-date-time-picker>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    computed: {
        minDatetime() {
            return moment()
                .subtract(2, 'days')
                .toDate()
                .toISOString();
        },
        maxDatetime() {
            return moment()
                .add(2, 'days')
                .toDate()
                .toISOString();
        },
    },
    data() {
        return {
            dateTimeEmpty: null,
        };
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
