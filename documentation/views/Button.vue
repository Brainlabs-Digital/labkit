<template>
    <lk-content>
        <h1>Button</h1>
        <p>The button component (<code>lk-button</code>)&hellip;</p>
        <h2>Styles</h2>
        <base-examples title="Default"/>
        <base-examples 
            title="Primary" 
            type="primary"/>
        <base-examples 
            title="Danger" 
            type="danger"/>
        <base-examples 
            title="Warning" 
            type="warning"/>
        <base-examples 
            title="Success" 
            type="success"/>
        <h3>Responsiveness and spacing</h3>
        <p>The Button component implements the <router-link to="/labkit/components/wrapper">Wrapper</router-link> component to control spacing and as such has access to all of it's props. By default the <code>margin-bottom</code> prop is set to <code>content</code> and <code>display</code> prop is set to <code>inline-block</code>.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-content content-font-size-primary>
                    <p>The buttons below will display alongside each other until the browser window is less than the medium breakpoint (768px) at which point they will stack.</p>
                </lk-content>
                <lk-divider />
                <lk-button
                    display="block"
                    margin-bottom="mini"
                    md:display="inline-block"
                    md:margin-bottom="content"
                >First Button</lk-button>
                <lk-button
                    display="block"
                    md:display="inline-block"
                >Second Button</lk-button>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-button
    display="block"
    margin-bottom="mini"
    md:display="inline-block"
    md:margin-bottom="content"
>First Button</lk-button>
<lk-button
    display="block"
    md:display="inline-block"
>Second Button</lk-button>
                    '
                    rounded-bottom-corners
                    language="html"
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Shadow</h3>
        <p>There are times when we want a button to appear as though it sits above the content. To achive this we can use the <code>shadow</code> prop.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-button shadow>Has shadow</lk-button>
                <lk-button 
                    outline 
                    shadow>Has shadow</lk-button>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-button shadow>Has shadow</lk-button>
<lk-button outline shadow>Has shadow</lk-button>
                    '
                    rounded-bottom-corners
                    language="html"
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Inverse</h3>
        <p>When the background that the button is being used on is dark, meaning that normal buttons would have low contrast, we can use the <code>inverse</code> prop.</p>
        <lk-panel>
            <lk-panel-body>
                <div :class="[$style['inverse-background']]">
                    <lk-button inverse>Default inverse</lk-button>
                    <lk-button 
                        inverse 
                        primary>Primary inverse</lk-button>
                    <lk-button 
                        inverse 
                        danger>Danger inverse</lk-button>
                    <lk-button 
                        inverse 
                        warning>Warning inverse</lk-button>
                    <lk-button 
                        inverse 
                        success>Success inverse</lk-button>
                </div>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-button inverse>Default inverse</lk-button>
<lk-button inverse primary>Primary inverse</lk-button>
<lk-button inverse danger>Danger inverse</lk-button>
<lk-button inverse warning>Warning inverse</lk-button>
<lk-button inverse success>Success inverse</lk-button>
                    '
                    rounded-bottom-corners
                    language="html"
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <div :class="[$style['inverse-background']]">
                    <lk-button 
                        inverse 
                        outline>Default outline inverse</lk-button>
                    <lk-button 
                        inverse 
                        outline 
                        primary>Primary outline inverse</lk-button>
                    <lk-button 
                        inverse 
                        danger 
                        outline>Danger outline inverse</lk-button>
                    <lk-button 
                        inverse 
                        outline 
                        warning>Warning outline inverse</lk-button>
                    <lk-button 
                        inverse 
                        outline 
                        success>Success outline inverse</lk-button>
                </div>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-button inverse outline>Default outline inverse</lk-button>
<lk-button inverse outline primary>Primary outline inverse</lk-button>
<lk-button inverse danger outline>Danger outline inverse</lk-button>
<lk-button inverse outline warning>Warning outline inverse</lk-button>
<lk-button inverse outline success>Success outline inverse</lk-button>
                    '
                    rounded-bottom-corners
                    language="html"
                />
            </lk-panel-body>
        </lk-panel>
        <h2>Interaction</h2>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <click-counter/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="interactionButtonSampleTemplate"
                    language="html"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="interactionButtonSampleScript"
                    language="js"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Button as link</h3>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-button 
                    primary 
                    link="/labkit">
                    Button as internal link to Introduction
                </lk-button>
                <lk-button 
                    primary 
                    external-link="https://google.com">
                    Button as link to Google
                </lk-button>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
// Use the `link` prop to allow the apps router to handle internal links.
<lk-button primary link="/labkit">
    Button as internal link to Introduction
</lk-button>
// Use the `external-link` prop to let the browser handle the link.
<lk-button primary external-link="https://google.com">
    Button as link to Google
</lk-button>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Button as form submit button</h3>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <form-submit />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="formSubmitSampleTemplate"
                    language="html"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="formSubmitSampleScript"
                    language="js"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
    </lk-content>
</template>

<script>
import BaseExamples from '../../documentation/components/examples/button/Base';
import ClickCounter from '../../documentation/components/examples/button/ClickCounter';
import Code from '../../documentation/components/Code';
import FormSubmit from '../../documentation/components/examples/button/FormSubmit';

export default {
    components: {
        BaseExamples,
        ClickCounter,
        formatCode: Code,
        FormSubmit,
    },
    data() {
        return {
            formSubmitSampleScript: `
// Component <script> content
export default {
computed: {
    submittedMessage() {
        if (this.hasSubmitted === false) {
            return 'The form has no been submitted.';
        } else {
            return \`The value that was submitted was '\${
                this.submittedInput
            }'.\`;
        }
    },
},
data() {
    return {
        hasSubmitted: false,
        input: '',
        submittedInput: '',
    };
},
methods: {
    submitForm() {
        this.hasSubmitted = true;
        this.submittedInput = this.input;
    },
},
};
            `,
            formSubmitSampleTemplate: `
<!-- Component <template> content -->
<form @submit.prevent="submitForm">
    <lk-input v-model="input">
        <template slot="label">Example Input Label</template>
    </lk-input>
    <lk-divider margin-bottom="content" />
    <lk-button submit primary>Submit</lk-button>
</form>
<lk-divider margin-bottom="content" />
<lk-content>
    <p>{{submittedMessage}}</p>
</lk-content>
            `,
            interactionButtonSampleScript: `
// Component <script> content
export default {
    computed: {
        clickButtonMessage() {
            if (this.clickCounter === 1) {
                return \`Button clicked \${this.clickCounter} time\`;
            } else {
                return \`Button clicked \${this.clickCounter} times\`;
            }
        },
        hasClicks() {
            return this.clickCounter > 0;
        },
    },
    data() {
        return {
            clickCounter: 0,
        };
    },
    methods: {
        incrementClickCounter() {
            this.clickCounter += 1;
        },
        resetClickCounter() {
            this.clickCounter = 0;
        },
    },
};
            `,
            interactionButtonSampleTemplate: `
<!-- Component <template> content -->
<lk-button primary @click.native="incrementClickCounter">
    {{clickButtonMessage}}
</lk-button>
<lk-button 
    danger 
    :disabled="hasClicks === false"
    outline
    @click.native="resetClickCounter"
>Reset Click Counter</lk-button>
            `,
        };
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';

.inverse-background {
    background: color(text);
    border-radius: border-radius(panel);
    margin: 0 0 spacing-vertical(content);
    padding: spacing-vertical(content) spacing-horizontal() 0;
}
</style>
