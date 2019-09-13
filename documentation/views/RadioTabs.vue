<template>
    <lk-content>
        <h1>Radio tabs</h1>
        <p>The radio tabs component (<code>lk-radio-tabs</code>)&hellip;</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <example/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="interactionSampleScript"
                    language="js"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="interactionSampleTemplate"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Spacing and display</h3>
        <p>The Radio Tabs component implements the <router-link to="/labkit/components/wrapper">Wrapper</router-link> component and has access to all of it's props. By default <code>margin-bottom</code> is set to <code>content</code>. The <code>display</code> prop is controlled internally within the component depending on the value of the <code>stacked</code> prop and as such setting it as a prop of this component will have no effect.</p>
        <h3>Styling</h3>
        <p>We can add color, danger or success, to the selected item by specifying a style in for the item in the <code>items</code> prop.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-radio-tabs 
                    :items="[
                        {
                            label: 'Success',
                            style: 'success',
                            value: 1,
                        },
                        {
                            label: 'Danger',
                            style: 'danger',
                            value: 2,
                        },
                        {
                            label: 'Default',
                            value: 3,
                        },
                ]" />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="styleTemplateExample"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Stacking</h3>
        <p>We can make the radio tabs display as a stack as opposed to inline using the <code>stacked</code> prop.</p>
        <lk-panel>
            <lk-panel-body>
                <lk-radio-tabs 
                    :items="[
                        {
                            label: 'Success',
                            style: 'success',
                            value: 1,
                        },
                        {
                            label: 'Danger',
                            style: 'danger',
                            value: 2,
                        },
                        {
                            label: 'Default',
                            value: 3,
                        },
                    ]"
                    stacked
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="stackedTemplateExample"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Responsive breakpoints</h3>
        <p>The <code>stacked</code> prop can be prefixed with the following breakpoints to provide responsive functionality:</p>
        <ul>
            <li>Props with no prefix will apply when the browser window is >= 0px wide.</li>
            <li>Props prefixed with <code>sm:</code> will apply when the browser window is >= 576px wide.</li>
            <li>Props prefixed with <code>md:</code> will apply when the browser window is >= 768px wide.</li>
            <li>Props prefixed with <code>lg:</code> will apply when the browser window is >= 992px wide.</li>
            <li>Props prefixed with <code>xl:</code> will apply when the browser window is >= 1200px wide.</li>
        </ul>
    </lk-content>
</template>

<script>
import Code from '@/labkit/documentation/components/Code';
import Example from '@/labkit/documentation/components/examples/radio-tabs/Example';

export default {
    components: {
        Example,
        formatCode: Code,
    },
    data() {
        return {
            interactionSampleScript: `
// Component <script> content
export default {
    data() {
        return {
            selectedItem: 'admin',
        };
    },
};
            `,
            interactionSampleTemplate: `
<!-- Component <template> content -->
<lk-radio-tabs
    v-model="selectedItem"
    :items="[
        {
            label: 'Admin',
            value: 'admin',
        },
        {
            label: 'Edit',
            value: 'edit',
        },
        {
            label: 'View',
            value: 'view',
        },
        {
            label: 'None',
            value: 'none',
        },
    ]"
>
    <template slot="label">Example label</template>
    <template slot="hint">
        <p>This is an example hint.</p>
    </template>
</lk-radio-tabs>
<lk-divider margin-bottom="content"></lk-divider>
<lk-content>
    <p><em>Selected item: </em> <strong>{{selectedItem}}</strong></p>
</lk-content>
            `,
            items: [
                {
                    label: 'One',
                    value: 1,
                },
                {
                    label: 'Two',
                    value: 2,
                },
                {
                    label: 'Three',
                    value: 3,
                },
            ],
            stackedTemplateExample: `
<lk-radio-tabs 
    :items="[
        {
            label: 'Success',
            style: 'success',
            value: 1,
        },
        {
            label: 'Danger',
            style: 'danger',
            value: 2,
        },
        {
            label: 'Default',
            value: 3,
        },
    ]"
    stacked
/>
            `,
            styleTemplateExample: `
<lk-radio-tabs :items="[
    {
        label: 'Success',
        style: 'success',
        value: 1,
    },
    {
        label: 'Danger',
        style: 'danger',
        value: 2,
    },
    {
        label: 'Default',
        value: 3,
    },
]" />
            `,
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
