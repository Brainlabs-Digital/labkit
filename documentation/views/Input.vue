<template>
    <lk-content>
        <h1>Input</h1>
        <p>The input component (<code>lk-input</code>)&hellip;</p>
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
                <lk-input
                    placeholder="Example placeholder"
                >
                    <template slot="label">Example label</template>
                    <template slot="hint">
                        <p>Example short hint that is only a single paragraph.</p>
                    </template>
                </lk-input>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-input
    placeholder="Example placeholder"
>
    <template slot="label">Example label</template>
    <template slot="hint">
        <p>Example short hint that is only a single paragraph.</p>
    </template>
</lk-input>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-input
                    placeholder="Example placeholder"
                >
                    <template slot="label">Example label (multi-line hint)</template>
                    <template slot="hint">
                        <p>Example longer hint that spans multiple paragraphs. This line is going to be a little bit longer so that it eventually wraps onto a new line.</p>
                        <p>This is the second line.</p>
                    </template>
                </lk-input>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-input
    placeholder="Example placeholder"
>
    <template slot="label">Example label (multi-line hint)</template>
    <template slot="hint">
        <p>Example longer hint that spans multiple paragraphs. This line is going to be a little bit longer so that it eventually wraps onto a new line.</p>
        <p>This is the second line.</p>
    </template>
</lk-input>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-input
                    placeholder="Example placeholder"
                >
                    <template slot="label">Example label (no hint)</template>
                </lk-input>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-input
    placeholder="Example placeholder"
>
    <template slot="label">Example label (no hint)</template>
</lk-input>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-input
                    placeholder="Example placeholder (No label, no hint)"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-input
    placeholder="Example placeholder (No label, no hint)"
></lk-input>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>The input can be made smaller by using the <code>compact</code> prop.</p>
        <lk-panel>
            <lk-panel-body>
                <lk-input
                    compact
                    placeholder="Example placeholder (compact prop)"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-input
    compact
    placeholder="Example placeholder (compact prop)"
></lk-input>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-input
                    placeholder="Example placeholder"
                    type="number"
                >
                    <template slot="label">Example label (number input)</template>
                    <template slot="hint">
                        <p>By setting the `type` prop to `number`, we are able to limit the input so that it only accepts number characters.</p>
                    </template>
                </lk-input>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-input
    placeholder="Example placeholder"
    type="number"
>
    <template slot="label">Example label (number input)</template>
    <template slot="hint">
        <p>By setting the `type` prop to `number`, we are able to limit the input so that it only accepts number characters.</p>
    </template>
</lk-input>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-input
                    placeholder="Example placeholder"
                    type="password"
                >
                    <template slot="label">Example label (password input)</template>
                    <template slot="hint">
                        <p>By setting the `type` prop to `password`, the input will obscure the content of the input.</p>
                    </template>
                </lk-input>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-input
    placeholder="Example placeholder"
    type="password"
>
    <template slot="label">Example label (password input)</template>
    <template slot="hint">
        <p>By setting the `type` prop to `password`, the input will obscure the content of the input.</p>
    </template>
</lk-input>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-input
                    has-error
                    placeholder="Example placeholder"
                >
                    <template slot="label">Example label (error state)</template>
                    <template slot="hint">
                        <p>Example short hint.</p>
                    </template>
                    <template slot="error">
                        <p>Example error message.</p>
                        <p>This is the second line of the error message.</p>
                    </template>
                </lk-input>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-input
    has-error
    placeholder="Example placeholder"
>
    <template slot="label">Example label (error state)</template>
    <template slot="hint">
        <p>Example short hint.</p>
    </template>
    <template slot="error">
        <p>Example error message.</p>
        <p>This is the second line of the error message.</p>
    </template>
</lk-input>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>If we want to place the input inline with other content then we can use the <code>display</code> prop with a value of <code>inline-block</code>.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-input
                    display="inline-block"
                    placeholder="Example placeholder (inline)"
                    style="min-width: 300px;"
                />
                <lk-button primary>Example Button</lk-button>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-input
    display="inline-block"
    placeholder="Example placeholder (inline)"
    style="min-width: 300px;"
/>
<lk-button primary>Example Button</lk-button>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Spacing and display</h3>
        <p>The Input component implements the <router-link to="/labkit/components/wrapper">Wrapper</router-link> component and has access to all of it's props. By default <code>margin-bottom</code> is set to <code>content</code>.</p>
        <h3>Prefixes and suffixes</h3>
        <p>There are times when we want to be able to give more context to an input by using text or an icon as a prefix or suffix, a good example being using a currency symbol as a prefix. We can do this using the <code>prefix</code> and/or <code>suffix</code> slots.</p>
        <lk-panel>
            <lk-panel-body>
                <lk-input placeholder="Example placeholder">
                    <template slot="prefix">Prefix</template>
                    <template slot="suffix">Suffix</template>
                </lk-input>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-input placeholder="Example placeholder">
    <template slot="prefix">Prefix</template>
    <template slot="suffix">Suffix</template>
</lk-input>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-input placeholder="Example placeholder">
                    <template slot="prefix">Prefix</template>
                </lk-input>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-input placeholder="Example placeholder">
    <template slot="prefix">Prefix</template>
</lk-input>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-input placeholder="Example placeholder">
                    <template slot="suffix">Suffix</template>
                </lk-input>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-input placeholder="Example placeholder">
    <template slot="suffix">Suffix</template>
</lk-input>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-input placeholder="Example placeholder">
                    <template slot="prefix">&pound;</template>
                    <template slot="suffix"><lk-icon icon="check" /></template>
                </lk-input>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-input placeholder="Example placeholder">
    <template slot="prefix">&pound;</template>
    <template slot="suffix"><lk-icon icon="check" /></template>
</lk-input>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-input 
                    compact 
                    placeholder="Example placeholder (compact)">
                    <template slot="prefix">&pound;</template>
                    <template slot="suffix"><lk-icon icon="check" /></template>
                </lk-input>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-input compact placeholder="Example placeholder (compact)">
    <template slot="prefix">&pound;</template>
    <template slot="suffix"><lk-icon icon="check" /></template>
</lk-input>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-input 
                    placeholder="Example placeholder" 
                    has-error>
                    <template slot="prefix"><lk-icon icon="exclamation-triangle" /></template>
                    <template slot="suffix">Has Error</template>
                </lk-input>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-input placeholder="Example placeholder" has-error>
    <template slot="prefix"><lk-icon icon="exclamation-triangle" /></template>
    <template slot="suffix">Has Error</template>
</lk-input>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Focus</h3>
        <p>The prop <code>focus-on-show</code> can be used to focus the input when it is first created and shown.</p>
        <p>An alternative approach is to manually focus the input, as is demonstrated in the example below:</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <focus-example />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="focusSampleScript"
                    language="js"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="focusSampleTemplate"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>

        <h3>Blur</h3>
        <p>The <code>blur</code> event occurs when the input element loses focus. You can attache a method to run when a blur event occurs. </p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <blur-example />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="blurSampleScript"
                    language="js"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="blurSampleTemplate"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>

        <h3>Clear Button</h3>
        <p>The <code>has-clear-option</code> will add a cross to the right hand side of the box. When clicked it will clear any text in the box.</p>
        
        
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <clear-example/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="clearSampleTemplate"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>

        <h3>Action Item</h3>
        <p>There are times when we want to have additional actions that can be used in conjunction with an input box. The Action Item provides the ability to add a custom action, for example a drop down menu or button. </p> 
        <p>We can acheive this using the <code>show-action-items</code> and/or <code>action</code> slots.</p>
        
        
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <action-example/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="actionSampleScript"
                    language="js"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="actionSampleTemplate"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
    </lk-content>
</template>

<script>
import Code from '../../documentation/components/Code';
import FocusExample from '../../documentation/components/examples/input/Focus';
import BlurExample from '../../documentation/components/examples/input/Blur';
import ClearExample from '../../documentation/components/examples/input/Clear';
import ActionExample from '../../documentation/components/examples/input/Action';
import Example from '../../documentation/components/examples/input/Example';

export default {
    components: {
        FocusExample,
        BlurExample,
        ClearExample,
        ActionExample,
        Example,
        formatCode: Code,
    },
    data() {
        return {
            actionSampleScript: `
// Component <script> content
export default {
    methods: {
        incrementCounter() {
            this.counter++;
        },
        setInputText(value) {
            this.textValue=value;
        },
        crossClicked() {
            this.crossInputText="Cross button clicked"
        },
        plusMinusClicked(value) {
            this.plusMinusText=value;
        },
    },
    data() {
        return {
            counter: 0,
            textValue: "",
            crossInputText: "",
            plusMinusText: "",
        };
    },
};
            `,
            actionSampleTemplate: `
<!-- Component <template> content -->
<lk-input
    placeholder="Action Slot example"
    show-action-items
    v-model="textValue"
>
    <template slot="action">
        
        <lk-dropdown-button 
            micro 
            margin-bottom="none"
            circle
            :items="[
                {
                    callback: () =>this.setInputText('Some Action'),
                    label: 'Some Action',
                },
                {
                    callback: () =>this.setInputText('Another Action'),
                    label: 'Another Action',
                }
            ]"
            outline
            right
        >
            <lk-icon icon="ellipsis-v"/>
        </lk-dropdown-button>    
            
    </template>
</lk-input>

<lk-input
    placeholder="Action Slot example"
    show-action-items
    v-model="crossInputText"
>
    <template slot="action">
        
        <lk-button 
            mini 
            margin-bottom="none"
            circle
            danger
            right
            @click.native="crossClicked"
        >
            <lk-icon icon="times"/>
        </lk-button>    
            
    </template>
</lk-input>

        <lk-input
    placeholder="Action Slot example"
    show-action-items
    v-model="plusMinusText"
>
    <template slot="action">
        
        <lk-button 
            micro 
            margin-bottom="none"
            circle
            success
            right
            @click.native="plusMinusClicked('Plus Clicked')"
        >
            <lk-icon icon="plus"/>
        </lk-button>    

        <lk-button 
            micro 
            margin-bottom="none"
            circle
            warning
            right
            @click.native="plusMinusClicked('Minus Clicked')"
        >
            <lk-icon icon="minus"/>
        </lk-button>    
            
    </template>
</lk-input>
            `,
            focusSampleScript: `
// Component <script> content
export default {
    methods: {
        focusInput() {
            this.$refs.input.focus();
        },
    },
};
            `,
            focusSampleTemplate: `
<!-- Component <template> content -->
<lk-input
    v-model="inputValue"
    placeholder="Focus example placeholder"
    ref="input"
>
    <template slot="label">Focus example</template>
</lk-input>
<lk-divider margin-bottom="content"></lk-divider>
<lk-button primary @click.native="focusInput">
    Click me to focus the input
</lk-button>
            `,
            blurSampleScript: `
// Component <script> content
export default {
    methods: {
        incrementCounter() {
            this.counter++;
        },
    },
    data() {
        return {
            counter: 0,
        };
    },
};
            `,
            blurSampleTemplate: `
<!-- Component <template> content -->
<lk-input
    placeholder="Blur example placeholder"
    @blur="incrementCounter"
>
    <template slot="label">Blur example</template>
</lk-input>
<lk-divider margin-bottom="content"/>
<lk-content>
    <p>Number of times unfocused: {{counter}}</p>
</lk-content>`,
            clearSampleTemplate: `
<!-- Component <template> content -->
<lk-input
    placeholder="Clear example placeholder"
    has-clear-option
>
    <template slot="label">Clear example</template>
</lk-input>

            `,
            interactionSampleScript: `
// Component <script> content
export default {
    computed: {
        inputHasError() {
            return this.inputValue.length > 10;
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
<lk-input
    v-model="inputValue"
    :has-error="inputHasError"
    placeholder="Example placeholder"
>
    <template slot="label">Interaction example</template>
    <template slot="hint">
        <p>When you update the value of the input below, you will see the text below the input update with the value of the input, just like magic&hellip;</p>
        <p>It will toggle to the error state if the input is longer than 10 characters.</p>
    </template>
    <template slot="error">
        <p>The length of the input must be 10 characters or less.</p>
    </template>
</lk-input>
<lk-divider margin-bottom="content"></lk-divider>
<lk-content>
    <p><em>The value of the input is: </em><strong>'{{inputValue}}'</strong></p>
    <lk-divider margin-bottom="content"></lk-divider>
    <p><em>The length of the input is: </em><strong>{{inputValue.length}}</strong></p>
</lk-content>
            `,
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
