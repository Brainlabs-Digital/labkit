<template>
    <lk-content>
        <h1>Date / Time Picker</h1>
        <p>
            The datetime picker is a wrapper for the 3rd party component
            <a
                href="https://www.npmjs.com/package/vue-datetime"
            >Vue Datetime</a>, customised to fit with the PX UI style.
        </p>
        <p>
            Further documentation can be found
            <a
                href="https://github.com/mariomka/vue-datetime#readme"
            >(here)</a> and a demo
            <a href="https://mariomka.github.io/vue-datetime/?ref=madewithvuejs.com">(here)</a>.
        </p>
        <h3>Date Picker</h3>
        <p>
            The default date picker (
            <code>lk-date-time-picker</code>)&hellip;
        </p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <defaultExample/>
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

        <h3>Date Picker with Error</h3>
        <p>
            The default date picker (
            <code>lk-date-time-picker</code>)&hellip;
        </p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <dateTimeExampleWithError/>
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

        <h3>Time Picker</h3>
        <p>
            Time picker (
            <code>lk-date-time-picker</code>)&hellip;
        </p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <timeExample/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none" 
                padding-bottom="none">
                <format-code 
                    :code="timeExampleTemplateCode" 
                    language="html" 
                    rounded-bottom-corners/>
            </lk-panel-body>
        </lk-panel>

        <h3>Date and Time Picker</h3>
        <p>
            The date and time picker (
            <code>lk-date-time-picker</code>)&hellip;
        </p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <dateTimeExample/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none" 
                padding-bottom="none">
                <format-code 
                    :code="datetimeExampleTemplateCode" 
                    language="html" 
                    rounded-bottom-corners/>
            </lk-panel-body>
        </lk-panel>

        <h3>Preset Date and Time</h3>
        <p>
            The date and time picker (
            <code>lk-date-time-picker</code>)&hellip;
        </p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <dateTimeExampleWithDefault/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none" 
                padding-bottom="none">
                <format-code 
                    :code="datetimeExampleDefaultTemplateScript" 
                    language="js"/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none" 
                padding-bottom="none">
                <format-code
                    :code="datetimeExampleDefaultTemplateCode"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>

        <h3>Clear Date and Time Option</h3>
        <p>
            The date and time picker with a clear button(
            <code>lk-date-time-picker</code>)&hellip;
        </p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <dateTimeExampleWithClearOption/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none" 
                padding-bottom="none">
                <format-code 
                    :code="datetimeExampleClearScript" 
                    language="js"/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none" 
                padding-bottom="none">
                <format-code 
                    :code="datetimeExampleClearCode" 
                    language="html" 
                    rounded-bottom-corners/>
            </lk-panel-body>
        </lk-panel>

        <h3>Time Value Zone</h3>
        <p>
            Time zone set to: America/New_York (GMT-4) (
            <code>lk-date-time-picker</code>)&hellip;
        </p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <zoneExample/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none" 
                padding-bottom="none">
                <format-code 
                    :code="datetimeExampleZoneScript" 
                    language="js"/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none" 
                padding-bottom="none">
                <format-code 
                    :code="datetimeExampleZoneCode" 
                    language="html" 
                    rounded-bottom-corners/>
            </lk-panel-body>
        </lk-panel>

        <h3>Date Time Picker with All Options</h3>
        <p>
            Example with all the options (
            <code>lk-date-time-picker</code>)&hellip;
        </p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <everythingExample/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none" 
                padding-bottom="none">
                <format-code 
                    :code="datetimeExampleEverythingScript" 
                    language="js"/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none" 
                padding-bottom="none">
                <format-code 
                    :code="datetimeExampleEverythingCode" 
                    language="html" 
                    rounded-bottom-corners/>
            </lk-panel-body>
        </lk-panel>
    </lk-content>
</template>

<script>
import Code from '../../documentation/components/Code';
import DefaultExample from '../../documentation/components/examples/date-time-picker/DefaultExample';
import DateTimeExampleWithError from '../../documentation/components/examples/date-time-picker/DateTimeExampleWithError';
import DateTimeExample from '../../documentation/components/examples/date-time-picker/DateTimeExample';
import DateTimeExampleWithDefault from '../../documentation/components/examples/date-time-picker/DateTimeExampleWithDefault';
import DateTimeExampleWithClearOption from '../../documentation/components/examples/date-time-picker/DateTimeExampleWithClearOption';
import TimeExample from '../../documentation/components/examples/date-time-picker/TimeExample';
import ZoneExample from '../../documentation/components/examples/date-time-picker/DateTimeExampleWithValueZone';
import Everything from '../../documentation/components/examples/date-time-picker/DateTimeFullWorks';

export default {
    components: {
        defaultExample: DefaultExample,
        dateTimeExampleWithError: DateTimeExampleWithError,
        dateTimeExample: DateTimeExample,
        dateTimeExampleWithDefault: DateTimeExampleWithDefault,
        dateTimeExampleWithClearOption: DateTimeExampleWithClearOption,
        timeExample: TimeExample,
        zoneExample: ZoneExample,
        everythingExample: Everything,
        formatCode: Code,
    },
    data() {
        return {
            exampleTemplateCode: `
<!-- Component <template> content -->
  <div>
    <lk-date-time-picker>
      <template slot="label">Enter a date</template>
      <template slot="hint">
        <p>Enter the date you would like to set</p>
      </template>
    </lk-date-time-picker>
  </div>
            `,
            datetimeExampleTemplateCode: `
<!-- Component <template> content -->
 <lk-date-time-picker type="datetime"/>
            `,
            timeExampleTemplateCode: `
<!-- Component <template> content -->
 <lk-date-time-picker type="time"/>
            `,
            datetimeExampleDefaultTemplateCode: `
<!-- Component <template> content -->         
<div>
    <lk-date-time-picker 
        type="datetime" 
        v-model="date"/>
    <lk-divider/>
    <strong>Selected Date:</strong>
    <span>{{currenttime}}</span>
</div>  
            `,
            datetimeExampleZoneScript: `
// Component <script> content
export default {
    data() {
        return {
            date: null,
        };
    },
};
            `,
            datetimeExampleClearCode: `
<!-- Component <template> content -->     
    <div>
        <lk-date-time-picker 
            type="datetime" 
            v-model="date" 
            has-clear-option/>
        <lk-divider/>
        <strong>Selected Date:</strong>
        <span>{{currenttime}}</span>
    </div>
`,
            datetimeExampleClearScript: `
// Component <script> content
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
`,
            datetimeExampleZoneCode: `
<!-- Component <template> content -->     
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
            `,
            datetimeExampleDefaultTemplateScript: `
// Component <script> content
import moment from 'moment';

export default {
    computed: {
        currenttime() {
            return moment(this.date);
        },
    },
    data() {
        return {
            date: '2001-01-01T01:01:01+00:00',
        };
    },
};
            `,
            datetimeExampleEverythingScript: `
// Component <script> content
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
};`,
            datetimeExampleEverythingCode: `
<!-- Component <template> content -->   
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
</lk-date-time-picker>`,
        };
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
