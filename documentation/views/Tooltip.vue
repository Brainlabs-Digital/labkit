<template>
    <lk-content>
        <h1>Tooltip</h1>
        <p>The tooltip component (<code>lk-tooltip</code>) is a component used to display short contextual hints, usually describing what a button does or clarifying the meaning of an icon.</p>
        <p>The content of a tooltip should be kept to a minimum: ideally no longer than 3 or 4 words.</p>
        <p>The tooltip is an implementation of the <router-link to="/labkit/components/popper">Popper</router-link> component and has access to all of it's props.</p>
        <p>The following Popper props are hard-coded and cannot be overwritten:</p>
        <ul>
            <li><code>hover</code> is set to <code>true</code>.</li>
            <li><code>light</code> is set to <code>false</code>.</li>
            <li><code>no-arrow</code> is set to <code>false</code>.</li>
        </ul>
        <h3>Style and content</h3>
        <lk-panel>
            <lk-panel-body padding-bottom>
                <lk-tooltip>
                    <lk-button margin-bottom="none">Default</lk-button>
                    <template slot="content">
                        Default
                    </template>
                </lk-tooltip>
                <lk-tooltip compact>
                    <lk-button margin-bottom="none">Compact</lk-button>
                    <template slot="content">
                        Compact
                    </template>
                </lk-tooltip>
                <lk-tooltip>
                    <lk-button margin-bottom="none">Content with HTML</lk-button>
                    <template slot="content">
                        <strong>Strong text</strong> and <em>italic text</em>
                    </template>
                </lk-tooltip>
                <lk-tooltip>
                    <lk-button margin-bottom="none">Content with an icon</lk-button>
                    <template slot="content">
                        <lk-icon icon="exclamation-triangle"/> Iconic
                    </template>
                </lk-tooltip>
            </lk-panel-body>
            <lk-panel-body padding-bottom>
                <p>
                    Tooltips can also be used on text such as
                    <lk-tooltip>
                        <a 
                            href="#" 
                            @click.prevent>links</a>
                        <template slot="content">
                            This link goes nowhere
                        </template>
                    </lk-tooltip>
                    or
                    <lk-tooltip>
                        <strong>bold text</strong>
                        <template slot="content">
                            Hovering <strong>bold</strong> text!
                        </template>
                    </lk-tooltip>
                    .
                </p>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-tooltip>
    <lk-button margin-bottom="none">Default</lk-button>
    <template slot="content">
        Default
    </template>
</lk-tooltip>
<lk-tooltip compact>
    <lk-button margin-bottom="none">Compact</lk-button>
    <template slot="content">
        Compact
    </template>
</lk-tooltip>
<lk-tooltip>
<lk-button margin-bottom="none">Content with HTML</lk-button>
    <template slot="content">
        <strong>Strong text</strong> and <em>italic text</em>
    </template>
</lk-tooltip>
<lk-tooltip>
<lk-button margin-bottom="none">Content with an icon</lk-button>
    <template slot="content">
        <lk-icon icon="exclamation-triangle"></lk-icon> Iconic
    </template>
</lk-tooltip>
                    '
                    language="html"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<p>
    Tooltips can also be used on text such as
    <lk-tooltip>
        <a href="#" @click.prevent>links</a>
        <template slot="content">
            Tooltip for a link
        </template>
    </lk-tooltip>
    or
    <lk-tooltip>
        <strong>bold text</strong>
        <template slot="content">
            Hovering <strong>bold</strong> text!
        </template>
    </lk-tooltip>.
</p>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Positioning</h3>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-tooltip>
                    <lk-button margin-bottom="none">None</lk-button>
                    <template slot="content">
                        Defaults to bottom
                    </template>
                </lk-tooltip>
                <lk-tooltip top>
                    <lk-button margin-bottom="none">Top</lk-button>
                    <template slot="content">
                        Top
                    </template>
                </lk-tooltip>
                <lk-tooltip bottom>
                    <lk-button margin-bottom="none">Bottom</lk-button>
                    <template slot="content">
                        Bottom
                    </template>
                </lk-tooltip>
                <lk-tooltip left>
                    <lk-button margin-bottom="none">Left</lk-button>
                    <template slot="content">
                        Left
                    </template>
                </lk-tooltip>
                <lk-tooltip right>
                    <lk-button margin-bottom="none">Right</lk-button>
                    <template slot="content">
                        Right
                    </template>
                </lk-tooltip>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-tooltip>
    <lk-button margin-bottom="none">None</lk-button>
    <template slot="content">
        Defaults to bottom
    </template>
</lk-tooltip>
<lk-tooltip top>
    <lk-button margin-bottom="none">Top</lk-button>
    <template slot="content">
        Top
    </template>
</lk-tooltip>
<lk-tooltip bottom>
    <lk-button margin-bottom="none">Bottom</lk-button>
    <template slot="content">
        Bottom
    </template>
</lk-tooltip>
<lk-tooltip left>
    <lk-button margin-bottom="none">Left</lk-button>
    <template slot="content">
        Left
    </template>
</lk-tooltip>
<lk-tooltip right>
    <lk-button margin-bottom="none">Right</lk-button>
    <template slot="content">
        Right
    </template>
</lk-tooltip>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Show and hide delays</h3>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-tooltip :show-delay-seconds="2">
                    <lk-button margin-bottom="none">2 second show delay</lk-button>
                    <template slot="content">
                        Tooltip
                    </template>
                </lk-tooltip>
                <lk-tooltip :hide-delay-seconds="2">
                    <lk-button margin-bottom="none">2 second hide delay</lk-button>
                    <template slot="content">
                        Tooltip
                    </template>
                </lk-tooltip>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-tooltip :show-delay-seconds="2">
    <lk-button margin-bottom="none">2 second show delay</lk-button>
    <template slot="content">
        Tooltip
    </template>
</lk-tooltip>
<lk-tooltip :hide-delay-seconds="2">
    <lk-button margin-bottom="none">2 second hide delay</lk-button>
    <template slot="content">
        Tooltip
    </template>
</lk-tooltip>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Interaction</h3>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
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
import Code from '../../documentation/components/Code';
import Example from '../../documentation/components/examples/tooltip/Example';

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
        buttonText() {
            if (this.tooltipIsVisible === true) {
                return 'Tooltip is visible';
            } else {
                return 'Tooltip is hidden';
            }
        },
    },
    data() {
        return {
            tooltipIsVisible: false,
        };
    },
    methods: {
        setTooltipIsVisible(isVisible) {
            this.tooltipIsVisible = isVisible;
        },
    },
};
            `,
            interactionSampleTemplate: `
<!-- Component <template> content -->
<lk-tooltip disabled>
    <lk-button margin-bottom="none">Disabled</lk-button>
    <template slot="content">
        Disabled
    </template>
</lk-tooltip>
<lk-tooltip @toggled="setTooltipIsVisible">
    <lk-button margin-bottom="none">{{buttonText}}</lk-button>
    <template slot="content">
        Tooltip message
    </template>
</lk-tooltip>
            `,
        };
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
