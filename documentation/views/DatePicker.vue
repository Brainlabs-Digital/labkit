<template>
    <lk-content>
        <h1>Date and Time Picker</h1>
        <p>
            The date and time picker component (
            <code>lk-date-picker</code>)&hellip;
        </p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <example/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none" 
                padding-bottom="none">
                <format-code 
                    :code="exampleScriptCode" 
                    language="js"/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none" 
                padding-bottom="none">
                <format-code 
                    :code="exampleTemplateCode" 
                    language="html" 
                    rounded-bottom-corners/>
            </lk-panel-body>
        </lk-panel>
        <h3>Min and max date restrictions</h3>
        <p>
            The
            <code>max-date</code> and
            <code>min-date</code> props can be used to restrict the dates that the user is able to select.
        </p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <min-and-max-restrictions/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none" 
                padding-bottom="none">
                <format-code 
                    :code="exampleScriptCode" 
                    language="js"/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none" 
                padding-bottom="none">
                <format-code 
                    :code="exampleTemplateCode" 
                    language="html" 
                    rounded-bottom-corners/>
            </lk-panel-body>
        </lk-panel>
        <h3>Spacing and display</h3>
        <p>
            The date and time picker component implements the
            <router-link to="/labkit/components/wrapper">Wrapper</router-link>component and has access to all of it's props. By default
            <code>margin-bottom</code> is set to
            <code>content</code>.
            <code>display</code> is set to
            <code>inline-block</code> and cannot be overwritten.
        </p>
    </lk-content>
</template>

<script>
import Code from '../../documentation/components/Code';
import Example from '../../documentation/components/examples/date-picker/Example';
import MinAndMaxRestrictions from '../../documentation/components/examples/date-picker/MinAndMaxRestrictions';

export default {
    components: {
        Example,
        formatCode: Code,
        MinAndMaxRestrictions,
    },
    data() {
        return {
            exampleScriptCode: `
// Component <script> content
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
            `,
            exampleTemplateCode: `
<!-- Component <template> content -->
<lk-date-picker
    :selected-date="selectedDate"
    @date:selected="setSelectedDate"
/>
            `,
            minMaxScriptCode: `
// Component <script> content
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
            `,
            minMaxTemplateCode: `
<!-- Component <template> content -->
<lk-content content-font-size-primary>
    <p>The date and time picker below has a maximum selectable date of <strong>{{this.maxDate.format('MMMM D YYYY')}}</strong> and a minimum selectable date of <strong>{{this.minDate.format('MMMM D YYYY')}}</strong>.</p>
    <lk-divider />
    <lk-date-picker
        :max-date="maxDate"
        :min-date="minDate"
        :selected-date="selectedDate"
        @date:selected="setSelectedDate"
    />
</lk-content>
            `,
        };
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
