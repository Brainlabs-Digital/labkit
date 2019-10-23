<template>
    <lk-content>
        <h1>Popper</h1>
        <p>The popper component (<code>lk-popper</code>) is a utility component used to position <router-link to="/labkit/components/tooltip">tooltips</router-link>, pop-overs, <router-link to="/labkit/components/dropdown-menu">dropdown menus</router-link> and other similar elements.</p>
        <h3>Styles and activation modes</h3>
        <lk-panel>
            <lk-panel-body padding-bottom>
                <lk-popper right>
                    <lk-button margin-bottom="none">Click to toggle</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                    </div>
                </lk-popper>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-popper right>
    <lk-button margin-bottom="none">Click to toggle</lk-button>
    <div slot="content">
        <p>Popper content.</p>
    </div>
</lk-popper>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body padding-bottom>
                <lk-popper 
                    hide-on-body-click 
                    right>
                    <lk-button margin-bottom="none">Click to toggle (click anywhere to hide)</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                    </div>
                </lk-popper>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-popper hide-on-body-click right>
    <lk-button margin-bottom="none">Click to toggle (click anywhere to hide)</lk-button>
    <div slot="content">
        <p>Popper content.</p>
    </div>
</lk-popper>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body padding-bottom>
                <lk-popper 
                    hover 
                    right>
                    <lk-button margin-bottom="none">Hover</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                    </div>
                </lk-popper>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-popper hover right>
    <lk-button margin-bottom="none">Hover</lk-button>
    <div slot="content">
        <p>Popper content.</p>
    </div>
</lk-popper>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body padding-bottom>
                <lk-popper 
                    right 
                    no-arrow>
                    <lk-button margin-bottom="none">Click to toggle (no arrow)</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                    </div>
                </lk-popper>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-popper right no-arrow>
    <lk-button margin-bottom="none">Click to toggle (no arrow)</lk-button>
    <div slot="content">
        <p>Popper content.</p>
    </div>
</lk-popper>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-popper 
                    light 
                    no-arrow 
                    bottom 
                    start>
                    <lk-button margin-bottom="none">Click to toggle (light background, no arrow)</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                        <p>This is going to be a little bit longer.</p>
                    </div>
                </lk-popper>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-popper light no-arrow bottom start>
    <lk-button margin-bottom="none">Click to toggle (light background, no arrow)</lk-button>
    <div slot="content">
        <p>Popper content.</p>
        <p>This is going to be a little bit longer.</p>
    </div>
</lk-popper>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>There are circumstances where we may want to disable the Popper functionality, this can be done using the <code>disabled</code> prop.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-popper 
                    disabled 
                    right>
                    <lk-button margin-bottom="none">Disabled: click</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                        <p>This is going to be a little bit longer.</p>
                    </div>
                </lk-popper>
                <lk-popper 
                    disabled 
                    hover 
                    right>
                    <lk-button margin-bottom="none">Disabled: hover</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                        <p>This is going to be a little bit longer.</p>
                    </div>
                </lk-popper>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-popper disabled right>
    <lk-button margin-bottom="none">Disabled: click</lk-button>
    <div slot="content">
        <p>Popper content.</p>
        <p>This is going to be a little bit longer.</p>
    </div>
</lk-popper>
<lk-popper disabled hover right>
    <lk-button margin-bottom="none">Disabled: hover</lk-button>
    <div slot="content">
        <p>Popper content.</p>
        <p>This is going to be a little bit longer.</p>
    </div>
</lk-popper>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>We may want to have a delay when it comes to hiding and showing the popper content on hover, we can achieve this using the <code>show-delay-seconds</code> and <code>hide-delay-seconds</code> props.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-popper 
                    hover 
                    bottom 
                    start 
                    :show-delay-seconds="2">
                    <lk-button margin-bottom="none">2 second show delay</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                        <p>This is going to be a little bit longer.</p>
                    </div>
                </lk-popper>
                <lk-popper 
                    hover 
                    bottom 
                    start 
                    :hide-delay-seconds="2">
                    <lk-button margin-bottom="none">2 second hide delay</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                        <p>This is going to be a little bit longer.</p>
                    </div>
                </lk-popper>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-popper hover bottom start :show-delay-seconds="2">
    <lk-button margin-bottom="none">2 second show delay</lk-button>
    <div slot="content">
        <p>Popper content.</p>
        <p>This is going to be a little bit longer.</p>
    </div>
</lk-popper>
<lk-popper hover bottom start :hide-delay-seconds="2">
    <lk-button margin-bottom="none">2 second hide delay</lk-button>
    <div slot="content">
        <p>Popper content.</p>
        <p>This is going to be a little bit longer.</p>
    </div>
</lk-popper>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Spacing and display</h3>
        <p>The Popper component implements the <router-link to="/labkit/components/wrapper">Wrapper</router-link> component to control spacing and display properties. By default the <code>margin-bottom</code> prop is set to <code>none</code> and the <code>display</code> prop is set to <code>inline-block</code>.</p>
        <h3>Positioning</h3>
        <p>The popper is able to be positioned around the element it is wrapping using the following props:</p>
        <ul>
            <li><code>bottom</code></li>
            <li><code>top</code></li>
            <li><code>left</code></li>
            <li><code>right</code></li>
        </ul>
        <p>The popper will automatically position itself to be within the viewport of the browser if it would otherwise not be. For example, when an item with the prop <code>bottom</code> is at the bottom of the viewport, the popper will automatically position itself above the element so that it is visible.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-popper 
                    hover 
                    bottom>
                    <lk-button margin-bottom="none">Hover bottom</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                        <p>An extra line of content.</p>
                        <p>The final line.</p>
                    </div>
                </lk-popper>
                <lk-popper 
                    hover 
                    top>
                    <lk-button margin-bottom="none">Hover top</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                        <p>An extra line of content.</p>
                        <p>The final line.</p>
                    </div>
                </lk-popper>
                <lk-popper 
                    hover 
                    left>
                    <lk-button margin-bottom="none">Hover left</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                        <p>An extra line of content.</p>
                        <p>The final line.</p>
                    </div>
                </lk-popper>
                <lk-popper 
                    hover 
                    right>
                    <lk-button margin-bottom="none">Hover right</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                        <p>An extra line of content.</p>
                        <p>The final line.</p>
                    </div>
                </lk-popper>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-popper hover bottom>
    <lk-button margin-bottom="none">Hover bottom</lk-button>
    <div slot="content">
        <p>Popper content.</p>
        <p>An extra line of content.</p>
        <p>The final line.</p>
    </div>
</lk-popper>
<lk-popper hover top>
    <lk-button margin-bottom="none">Hover top</lk-button>
    <div slot="content">
        <p>Popper content.</p>
        <p>An extra line of content.</p>
        <p>The final line.</p>
    </div>
</lk-popper>
<lk-popper hover left>
    <lk-button margin-bottom="none">Hover left</lk-button>
    <div slot="content">
        <p>Popper content.</p>
        <p>An extra line of content.</p>
        <p>The final line.</p>
    </div>
</lk-popper>
<lk-popper hover right>
    <lk-button margin-bottom="none">Hover right</lk-button>
    <div slot="content">
        <p>Popper content.</p>
        <p>An extra line of content.</p>
        <p>The final line.</p>
    </div>
</lk-popper>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>By default, the popper will align to the center (if using <code>left</code> or <code>right</code>) or middle (if using <code>bottom</code> or <code>top</code>) of the element it is wrapping.</p>
        <p>The <code>start</code> and <code>end</code> props can be used to align the popper with either the start or end edges of the element it is wrapping.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-popper 
                    hover 
                    bottom 
                    start>
                    <lk-button margin-bottom="none">Hover bottom start</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                        <p>An extra line of content.</p>
                        <p>The final line.</p>
                    </div>
                </lk-popper>
                <lk-popper 
                    hover 
                    bottom 
                    end>
                    <lk-button margin-bottom="none">Hover bottom end</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                        <p>An extra line of content.</p>
                        <p>The final line.</p>
                    </div>
                </lk-popper>
                <lk-popper 
                    hover 
                    top 
                    start>
                    <lk-button margin-bottom="none">Hover top start</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                        <p>An extra line of content.</p>
                        <p>The final line.</p>
                    </div>
                </lk-popper>
                <lk-popper 
                    hover 
                    top 
                    end>
                    <lk-button margin-bottom="none">Hover top end</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                        <p>An extra line of content.</p>
                        <p>The final line.</p>
                    </div>
                </lk-popper>
                <lk-popper 
                    hover 
                    left 
                    start>
                    <lk-button margin-bottom="none">Hover left start</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                        <p>An extra line of content.</p>
                        <p>The final line.</p>
                    </div>
                </lk-popper>
                <lk-popper 
                    hover 
                    left 
                    end>
                    <lk-button margin-bottom="none">Hover left end</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                        <p>An extra line of content.</p>
                        <p>The final line.</p>
                    </div>
                </lk-popper>
                <lk-popper 
                    hover 
                    right 
                    start>
                    <lk-button margin-bottom="none">Hover right start</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                        <p>An extra line of content.</p>
                        <p>The final line.</p>
                    </div>
                </lk-popper>
                <lk-popper 
                    hover 
                    right 
                    end
                >
                    <lk-button margin-bottom="none">Hover right end</lk-button>
                    <div 
                        :class="[$style['popper-content']]" 
                        slot="content">
                        <p>Popper content.</p>
                        <p>An extra line of content.</p>
                        <p>The final line.</p>
                    </div>
                </lk-popper>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-popper hover bottom start>
    <lk-button margin-bottom="none">Hover bottom start</lk-button>
    <div slot="content">
        <p>Popper content.</p>
        <p>An extra line of content.</p>
        <p>The final line.</p>
    </div>
</lk-popper>
<lk-popper hover bottom end>
    <lk-button margin-bottom="none">Hover bottom end</lk-button>
    <div slot="content">
        <p>Popper content.</p>
        <p>An extra line of content.</p>
        <p>The final line.</p>
    </div>
</lk-popper>
<lk-popper hover top start>
    <lk-button margin-bottom="none">Hover top start</lk-button>
    <div slot="content">
        <p>Popper content.</p>
        <p>An extra line of content.</p>
        <p>The final line.</p>
    </div>
</lk-popper>
<lk-popper hover top end>
    <lk-button margin-bottom="none">Hover top end</lk-button>
    <div slot="content">
        <p>Popper content.</p>
        <p>An extra line of content.</p>
        <p>The final line.</p>
    </div>
</lk-popper>
<lk-popper hover left start>
    <lk-button margin-bottom="none">Hover left start</lk-button>
    <div slot="content">
        <p>Popper content.</p>
        <p>An extra line of content.</p>
        <p>The final line.</p>
    </div>
</lk-popper>
<lk-popper hover left end>
    <lk-button margin-bottom="none">Hover left end</lk-button>
    <div slot="content">
        <p>Popper content.</p>
        <p>An extra line of content.</p>
        <p>The final line.</p>
    </div>
</lk-popper>
<lk-popper hover right start>
    <lk-button margin-bottom="none">Hover right start</lk-button>
    <div slot="content">
        <p>Popper content.</p>
        <p>An extra line of content.</p>
        <p>The final line.</p>
    </div>
</lk-popper>
<lk-popper hover right end>
    <lk-button margin-bottom="none">Hover right end</lk-button>
    <div slot="content">
        <p>Popper content.</p>
        <p>An extra line of content.</p>
        <p>The final line.</p>
    </div>
</lk-popper>
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
                    code='
// Component <script> content
export default {
    data() {
        return {
            clickPopperIsVisible: false,
            hoverPopperIsVisible: false,
        };
    },
    methods: {
        setClickPopperStatus(isVisible) {
            this.clickPopperIsVisible = isVisible;
        },
        setHoverPopperStatus(isVisible) {
            this.hoverPopperIsVisible = isVisible;
        },
    },
};
                    '
                    language="js"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<!-- Component <template> content -->
<lk-content>
    <p v-if="clickPopperIsVisible === true">
        The click popper <strong><em>is</em></strong> visible.
    </p>
    <p v-else>
        The click popper <strong><em>is not</em></strong> visible.
    </p>
    <lk-divider margin-bottom="content"></lk-divider>
    <p v-if="hoverPopperIsVisible === true">
        The hover popper <strong><em>is</em></strong> visible.
    </p>
    <p v-else>
        The hover popper <strong><em>is not</em></strong> visible.
    </p>
</lk-content>
<lk-divider margin-bottom="content"></lk-divider>
<lk-popper bottom @toggled="setClickPopperStatus">
    <lk-button margin-bottom="none">Click to toggle</lk-button>
    <div slot="content">
        <p>Popper content.</p>
    </div>
</lk-popper>
<lk-popper bottom hover @toggled="setHoverPopperStatus">
    <lk-button margin-bottom="none">Hover</lk-button>
    <div slot="content">
        <p>Popper content.</p>
    </div>
</lk-popper>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
    </lk-content>
</template>

<script>
import Code from '../../documentation/components/Code';
import Example from '../../documentation/components/examples/popper/Example';

export default {
    components: {
        Example,
        formatCode: Code,
    },
};
</script>

<style module lang="scss">
@import '../../styles/variables';

.popper-content {
    padding: spacing-vertical(content) spacing-horizontal();
    p {
        margin: 0 0 spacing-vertical(content);
        &:last-child {
            margin: 0;
        }
    }
}
</style>
