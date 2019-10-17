<template>
    <lk-content>
        <h1>Multi Input</h1>
        <p>Multi Input (<code>lk-multi-input</code>)&hellip;</p>
        <lk-panel>
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
    </lk-content>
</template>

<script>
import Example from '../../documentation/components/examples/multi-input/Example';
import Code from '../../documentation/components/Code';

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
            items: ['First Item', 'Second Item', 'Third Item', 'Fourth Item'],
        };
    },
};
            `,
            interactionSampleTemplate: `
<!-- Component <template> content -->
<lk-multi-input
    placeholder="Add New Item"
    v-model="items"
>
    <template slot="label">Multi Select Input Title</template>
    <template slot="hint"><p>This is a sub title describing the multi select box</p></template>
</lk-multi-input>

<lk-content>
    <p><em>Number of items: </em><strong>{{items.length}}</strong></p>
    <lk-divider margin-bottom="content"/>
    <p><em>Items: </em><strong v-if="items.length === 0"> None</strong></p>
    <ul v-if="items.length > 0">
        <li 
            v-for="item in items" 
            :key="item"
        >{{item}}</li>
    </ul>
</lk-content>
            `,
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
