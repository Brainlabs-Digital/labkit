<template>
    <lk-content>
        <h1>Select</h1>
        <p>The select component (<code>lk-select</code>) &hellip;</p>
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
        <h3>Style and content</h3>
        <lk-panel>
            <lk-panel-body
                padding="none"
                padding-bottom="none">
                <format-code
                    code="
// Component <script> content for following examples unless specified otherwise
export default {
    options: [
        {
            'label': 'Apple',
            'value': 1,
        },
        {
            'label': 'Banana',
            'value': 2,
        },
        {
            'label': 'Cheddar',
            'value': 3,
        }
    ],
    value: 1,
}"                    
                    language="js"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-select
                    v-model="value"
                    :options="options"
                >
                    <template slot="label"> Example label </template>
                    <template slot="hint"> 
                        <p>A short example hint</p>
                    </template>
                </lk-select>
            </lk-panel-body>
            <lk-panel-body
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-select
    v-model="value"
    :options="options"
>
    <template slot="label"> Example label </template>
    <template slot="hint"> 
        <p>A short example hint</p>
    </template>
</lk-select>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-select
                    v-model="value"
                    :options="options"
                >
                    <template slot="label"> Example label (with multiline hint)</template>
                    <template slot="hint"> 
                        <p>Example longer hint that spans multiple paragraphs. This line is going to be a little bit longer so that it eventually wraps onto a new line.</p>
                        <p>This is the second line</p>
                    </template>
                </lk-select>
            </lk-panel-body>
            <lk-panel-body
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-select
    v-model="value"
    :options="options"
>
    <template slot="label"> Example label (with multiline hint)</template>
    <template slot="hint"> 
        <p>Example longer hint that spans multiple paragraphs. This line is going to be a little bit longer so that it eventually wraps onto a new line.</p>
        <p>This is the second line</p>
    </template>
</lk-select>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-select
                    v-model="value"
                    :options="options"
                >
                    <template slot="label"> Example label (no hint)</template>
                </lk-select>
            </lk-panel-body>
            <lk-panel-body
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-select
    v-model="value"
    :options="options"
>
    <template slot="label"> Example label (no hint) </template>
</lk-select>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>The select can be made smaller by using the <code>compact</code> prop.</p>
        <lk-panel>
            <lk-panel-body>
                <lk-select
                    compact
                    v-model="value"
                    :options="options"
                />
            </lk-panel-body>
            <lk-panel-body
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-select
    compact
    v-model="value"
    :options="options"
>
</lk-select>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-select
                    v-model="value"
                    :options="options"
                    :has-error="selectHasError"
                >
                    <template slot="label">Example label (error state)</template>
                    <template slot="hint">
                        <p>Select the <em>Cheddar</em> option to display an error message</p>
                    </template>
                    <template slot="error">
                        <p>Example error message.</p>
                        <p>Cheddar is a bad choice.</p>
                    </template>
                </lk-select>
            </lk-panel-body>
            <lk-panel-body
                padding="none"
                padding-bottom="none">
                <format-code
                    code="
// Component <script> content
export default {
    computed: {
        selectHasError() {
            return this.value === 3;
        }
    }
    options: [
        {
            'label': 'Apple',
            'value': 1,
        },
        {
            'label': 'Banana',
            'value': 2,
        },
        {
            'label': 'Cheddar',
            'value': 3,
        }
    ],
    value: 1,
}"
                    language="js"
                    rounded-bottom-corners
                />
            </lk-panel-body>
            <lk-panel-body
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-select
    v-model="value"
    :options="options"
    :has-error="selectHasError"
>
    <template slot="label">Example label (error state)</template>
    <template slot="hint">
        <p>Select the <em>cheddar</em> option to display an error message</p>
    </template>
    <template slot="error">
        <p>Example error message.</p>
        <p>Cheddar is a bad choice.</p>
    </template>
</lk-select>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>If we want to place the select inline with other content then we can use the <code>display</code> prop with a value of <code>inline-block</code></p>
        <lk-panel>
            <lk-panel-body>
                <lk-select
                    display="inline-block"
                    v-model="value"
                    :options="options"
                />
                <lk-button primary>Example Button</lk-button>
            </lk-panel-body>
            <lk-panel-body
                padding="none"
                padding-bottom="none">
                <format-code
                    code="
// Component <script> content
export default {
    longOptions: [
        {
            'label': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'value': 1,
        },
    ],
    value: 1,
}"
                    language="js"
                    rounded-bottom-corners
                />
            </lk-panel-body>
            <lk-panel-body
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-select
    display="inline-block"
    v-model="value"
    :options="longOptions"
>
</lk-select>
<lk-button primary>Example Button</lk-button>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-select
                    v-model="value"
                    :options="longOptions"
                >
                    <template slot="label">A select with an overflowing option</template>
                </lk-select>
            </lk-panel-body>
            <lk-panel-body
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-select
    v-model="value"
    :options="options"
>
    <template slot="label">A select with an overflowing option</template>
</lk-select>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
    </lk-content>
</template>

<script>
import Example from '../../documentation/components/examples/select/Example';
import Code from '../../documentation/components/Code';

export default {
    components: {
        Example,
        formatCode: Code,
    },
    computed: {
        selectHasError() {
            return this.value === 3;
        },
    },
    data() {
        return {
            interactionSampleScript: `
// Component <script> content
export default {
    data(){
        return {
            options: [
                {
                    'label': 'Will',
                    'value': 1,
                },
                {
                    'label': 'Dave',
                    'value': 2,
                }
            ],
            value: 2,
        }
    }
};
            `,
            interactionSampleTemplate: `
<!-- Component <template> content -->
<lk-select
    v-model="value"
    :options="options"
>
    <template slot="label"> Interaction example</template>
    <template slot="hint">
        <p>When you update your selection from the select below, you will see the value corresponding to the selected option below the select update with the value of the select, just like magic...</p>
    </template>
</lk-select>
<lk-divider margin-bottom="content"/>
<lk-content>
        <p><em>The value of the select is </em><strong>{{value}}</strong></p>
</lk-content>
            `,
            longOptions: [
                {
                    label:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    value: 1,
                },
            ],
            options: [
                {
                    label: 'Apple',
                    value: 1,
                },
                {
                    label: 'Banana',
                    value: 2,
                },
                {
                    label: 'Cheddar',
                    value: 3,
                },
            ],
            value: 1,
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
