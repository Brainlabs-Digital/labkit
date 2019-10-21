<template>
    <lk-content>
        <h1>Radio</h1>
        <p>The radio component (<code>lk-radio</code>)&hellip;</p>
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
        <p>The Radio component implements the <router-link to="/labkit/components/wrapper">Wrapper</router-link> component and has access to all of it's props. By default <code>margin-bottom</code> is set to <code>content</code>.</p>
        <h3>[TODO]</h3>
        <ul>
            <li>Examples with and without labels and hints.</li>
        </ul>
    </lk-content>
</template>

<script>
import Code from '../../documentation/components/Code';
import Example from '../../documentation/components/examples/radio/Example';

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
            selectedItem: 'Second Option Value',
        };
    },
};
            `,
            interactionSampleTemplate: `
<!-- Component <template> content -->
<lk-radio
    v-model="selectedItem"
    :items="[
        {
            label: 'First Option Label',
            value: 'First Option Value',
        },
        {
            hint: 'This is a short hint about the option. It should be a single line.',
            label: 'Second Option Label',
            value: 'Second Option Value',
        },
        {
            label: 'Third Option Label',
            value: 'Third Option Value',
        },
    ]"
>
    <template slot="label">Example label</template>
    <template slot="hint">
        <p>This is an example hint.</p>
    </template>
</lk-radio>
<lk-divider margin-bottom="content"></lk-divider>
<lk-content>
    <p><em>Selected item: </em> <strong>{{selectedItem}}</strong></p>
</lk-content>
            `,
        };
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
