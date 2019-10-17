<template>
    <lk-content>
        <h1>Textarea</h1>
        <p>The textarea component (<code>lk-textarea</code>)&hellip;</p>
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
            <lk-panel-body>
                <lk-textarea placeholder="Example placeholder">
                    <template slot="label">Example label</template>
                    <template slot="hint">
                        <p>Example short hint that is only a single paragraph.</p>
                    </template>
                </lk-textarea>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-textarea placeholder="Example placeholder">
    <template slot="label">Example label</template>
    <template slot="hint">
        <p>Example short hint that is only a single paragraph.</p>
    </template>
</lk-textarea>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-textarea placeholder="Example placeholder">
                    <template slot="label">Example label (multi-line hint)</template>
                    <template slot="hint">
                        <p>Example hint that contains multiple paragraphs.</p>
                        <p>This is the second paragraph, it is very informative.</p>
                    </template>
                </lk-textarea>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-textarea placeholder="Example placeholder">
    <template slot="label">Example label (multi-line hint)</template>
    <template slot="hint">
        <p>Example hint that contains multiple paragraphs.</p>
        <p>This is the second paragraph, it is very informative.</p>
    </template>
</lk-textarea>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-textarea placeholder="Example placeholder">
                    <template slot="label">Example label (no hint)</template>
                </lk-textarea>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-textarea placeholder="Example placeholder">
    <template slot="label">Example label (no hint)</template>
</lk-textarea>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-textarea placeholder="Example placeholder (no label, no hint)"/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-textarea placeholder="Example placeholder (no label, no hint)"></lk-textarea>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>By default the textarea component will have 8 rows of text. This can be overwritten using the <code>rows</code> prop.</p>
        <lk-panel>
            <lk-panel-body>
                <lk-textarea 
                    placeholder="Example placeholder (3 rows of text visible)" 
                    :rows="3"/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-textarea placeholder="Example placeholder (3 rows of text visible)" :rows="3"></lk-textarea>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-textarea 
                    has-error 
                    placeholder="Example placeholder">
                    <template slot="label">Example label (error state)</template>
                    <template slot="hint">
                        <p>Example short hint that is only a single paragraph.</p>
                    </template>
                    <template slot="error">
                        <p>Example error message.</p>
                        <p>This is the second line of the error message.</p>
                    </template>
                </lk-textarea>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-textarea has-error placeholder="Example placeholder">
    <template slot="label">Example label (error state)</template>
    <template slot="hint">
        <p>Example short hint that is only a single paragraph.</p>
    </template>
    <template slot="error">
        <p>Example error message.</p>
        <p>This is the second line of the error message.</p>
    </template>
</lk-textarea>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Spacing and display</h3>
        <p>The Textarea component implements the <router-link to="/labkit/components/wrapper">Wrapper</router-link> component and has access to all of it's props. By default <code>margin-bottom</code> is set to <code>content</code>.</p>
    </lk-content>
</template>

<script>
import Code from '../../documentation/components/Code';
import Example from '../../documentation/components/examples/textarea/Example';

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
    computed: {
        hasError() {
            return this.inputValue.includes('error');
        },
    },
    data() {
        return {
            inputValue: '',
        };
    },
};
            `,
            interactionSampleTemplate: `
<!-- Component <template> content -->
<lk-textarea
    v-model="inputValue"
    :has-error="hasError"
    placeholder="Example placeholder"
>
    <template slot="label">Example label</template>
    <template slot="hint">
        <p>This textarea will have an error if the content contains the word "error" anywhere within it.</p>
    </template>
    <template slot="error">
        <p>Please remove the word "error" from the textarea content.</p>
    </template>
</lk-textarea>
<lk-divider margin-bottom="content"></lk-divider>
<lk-content>
    <p v-if="inputValue === ''"><em>The textarea has no content.</em></p>
    <p v-else><em>Textarea content:</em></p>
    <p><pre>{{inputValue}}</pre></p>
</lk-content>
            `,
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
