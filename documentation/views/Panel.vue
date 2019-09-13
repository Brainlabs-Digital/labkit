<template>
    <lk-content>
        <h1>Panel</h1>
        <p>The panel (<code>lk-panel</code>)&mdash;and the related header (<code>lk-panel-header</code>), body (<code>lk-panel-body</code>) and footer (<code>lk-panel-footer</code>)&mdash;components are the primary means of dividing content into distinct visual sections.</p>
        <h3>Basic usage</h3>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-panel>
                    <lk-panel-body>
                        <p>Content in a panel-body component.</p>
                    </lk-panel-body>
                    <lk-panel-body>
                        <p>Some more content in another panel-body component.</p>
                    </lk-panel-body>
                </lk-panel>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-panel>
    <lk-panel-body>
        <p>Content in a panel-body component.</p>
    </lk-panel-body>
    <lk-panel-body>
        <p>Some more content in another panel-body component.</p>
    </lk-panel-body>
</lk-panel>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Spacing</h3>
        <p>The Panel component implements the <router-link to="/labkit/components/wrapper">Wrapper</router-link> and has access to all of it's props. By default <code>margin-bottom</code> is set without any value.</p>
        <h3>Styles</h3>
        <p>By default the panel has no shadow applied to it. We can add and control the strength of the shadow using the <code>shadow-deep</code>, <code>shadow-medium</code> and <code>shadow-shallow</code> props.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-panel shadow-deep>
                    <lk-panel-body>
                        <p>Panel with the shadow-deep prop.</p>
                    </lk-panel-body>
                    <lk-panel-body>
                        <p>Some more content in another panel-body component.</p>
                    </lk-panel-body>
                </lk-panel>
                <lk-panel shadow-medium>
                    <lk-panel-body>
                        <p>Panel with the shadow-medium prop.</p>
                    </lk-panel-body>
                    <lk-panel-body>
                        <p>Some more content in another panel-body component.</p>
                    </lk-panel-body>
                </lk-panel>
                <lk-panel shadow-shallow>
                    <lk-panel-body>
                        <p>Panel with the shadow-shallow prop.</p>
                    </lk-panel-body>
                    <lk-panel-body>
                        <p>Some more content in another panel-body component.</p>
                    </lk-panel-body>
                </lk-panel>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-panel shadow-deep>
    <lk-panel-body>
        <p>Panel with the shadow-deep prop.</p>
    </lk-panel-body>
    <lk-panel-body>
        <p>Some more content in another panel-body component.</p>
    </lk-panel-body>
</lk-panel>
<lk-panel shadow-medium>
    <lk-panel-body>
        <p>Panel with the shadow-medium prop.</p>
    </lk-panel-body>
    <lk-panel-body>
        <p>Some more content in another panel-body component.</p>
    </lk-panel-body>
</lk-panel>
<lk-panel shadow-shallow>
    <lk-panel-body>
        <p>Panel with the shadow-shallow prop.</p>
    </lk-panel-body>
    <lk-panel-body>
        <p>Some more content in another panel-body component.</p>
    </lk-panel-body>
</lk-panel>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>To make the panel stand out we can make the color of the panel's border darker by using the <code>highlighted</code> prop.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-panel highlighted>
                    <lk-panel-body>
                        <p>Panel with the highlighted prop.</p>
                    </lk-panel-body>
                    <lk-panel-body>
                        <p>Some more content in another panel-body component.</p>
                    </lk-panel-body>
                </lk-panel>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-panel shadow-deep>
    <lk-panel-body>
        <p>Panel with the shadow-deep prop.</p>
    </lk-panel-body>
    <lk-panel-body>
        <p>Some more content in another panel-body component.</p>
    </lk-panel-body>
</lk-panel>
<lk-panel shadow-medium>
    <lk-panel-body>
        <p>Panel with the shadow-medium prop.</p>
    </lk-panel-body>
    <lk-panel-body>
        <p>Some more content in another panel-body component.</p>
    </lk-panel-body>
</lk-panel>
<lk-panel shadow-shallow>
    <lk-panel-body>
        <p>Panel with the shadow-shallow prop.</p>
    </lk-panel-body>
    <lk-panel-body>
        <p>Some more content in another panel-body component.</p>
    </lk-panel-body>
</lk-panel>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h2>Panel header</h2>
        <p>The Panel Header component (<code>lk-panel-header</code>)&hellip;</p>
        <lk-panel>
            <lk-panel-body>
                <lk-panel>
                    <lk-panel-header>
                        <template slot="title">This is a title</template>
                        <template slot="subtitle">This is a subtitle: it should explain or elaborate.</template>
                    </lk-panel-header>
                    <lk-panel-body padding-bottom>
                        <p>Panel body content.</p>
                    </lk-panel-body>
                </lk-panel>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-panel>
    <lk-panel-header>
        <template slot="title">This is a title</template>
        <template slot="subtitle">This is a subtitle: it should explain or elaborate.</template>
    </lk-panel-header>
    <lk-panel-body padding-bottom>
        <p>Panel body content.</p>
    </lk-panel-body>
</lk-panel>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-panel>
                    <lk-panel-header>
                        <template slot="title">This is a title (no subtitle)</template>
                    </lk-panel-header>
                    <lk-panel-body padding-bottom>
                        <p>Panel body content.</p>
                    </lk-panel-body>
                </lk-panel>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-panel>
    <lk-panel-header>
        <template slot="title">This is a title (no subtitle)</template>
    </lk-panel-header>
    <lk-panel-body padding-bottom>
        <p>Panel body content.</p>
    </lk-panel-body>
</lk-panel>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>While not recommended (it is often better to use a distinct panel to separate blocks of content), the panel header can also be used at any point in the panel to distinguish sections.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-panel>
                    <lk-panel-header>
                        <template slot="title">First panel header</template>
                    </lk-panel-header>
                    <lk-panel-body padding-bottom>
                        <p>Panel body content.</p>
                    </lk-panel-body>
                    <lk-panel-header>
                        <template slot="title">Second panel header</template>
                    </lk-panel-header>
                    <lk-panel-body padding-bottom>
                        <p>Panel body content.</p>
                    </lk-panel-body>
                </lk-panel>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-panel>
    <lk-panel-header>
        <template slot="title">First panel header</template>
    </lk-panel-header>
    <lk-panel-body padding-bottom>
        <p>Panel body content.</p>
    </lk-panel-body>
    <lk-panel-header>
        <template slot="title">Second panel header</template>
    </lk-panel-header>
    <lk-panel-body padding-bottom>
        <p>Panel body content.</p>
    </lk-panel-body>
</lk-panel>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>The <code>actionItems</code> slot can be used to place buttons in the panel header.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-panel>
                    <lk-panel-header>
                        <template slot="title">This is a title</template>
                        <template slot="actionItems">
                            <lk-button 
                                margin-bottom="none"
                                primary
                            >Example button</lk-button>
                        </template>
                    </lk-panel-header>
                    <lk-panel-body padding-bottom>
                        <p>Panel body content.</p>
                    </lk-panel-body>
                </lk-panel>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-panel>
    <lk-panel-header>
        <template slot="title">This is a title</template>
        <template slot="actionItems">
            <lk-button margin-bottom="none" primary>Example button</lk-button>
        </template>
    </lk-panel-header>
    <lk-panel-body padding-bottom>
        <p>Panel body content.</p>
    </lk-panel-body>
</lk-panel>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>The <code>muted</code> or <code>highlighted</code> props can be used to give the panel header a shaded background color.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-panel>
                    <lk-panel-header muted>
                        <template slot="title">This is a muted title</template>
                    </lk-panel-header>
                    <lk-panel-body padding-bottom>
                        <p>Panel body content.</p>
                    </lk-panel-body>
                </lk-panel>
                <lk-panel>
                    <lk-panel-header highlighted>
                        <template slot="title">This is a highlighted title</template>
                    </lk-panel-header>
                    <lk-panel-body padding-bottom>
                        <p>Panel body content.</p>
                    </lk-panel-body>
                </lk-panel>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-panel>
    <lk-panel-header muted>
        <template slot="title">This is a muted title</template>
    </lk-panel-header>
    <lk-panel-body padding-bottom>
        <p>Panel body content.</p>
    </lk-panel-body>
</lk-panel>
<lk-panel>
    <lk-panel-header highlighted>
        <template slot="title">This is a highlighted title</template>
    </lk-panel-header>
    <lk-panel-body padding-bottom>
        <p>Panel body content.</p>
    </lk-panel-body>
</lk-panel>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>The <code>compact</code> prop can be used to have the panel header using a smaller font size with less spacing.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-panel>
                    <lk-panel-header compact>
                        <template slot="title">This is a compact panel header</template>
                    </lk-panel-header>
                    <lk-panel-body padding-bottom>
                        <p>Panel body content.</p>
                    </lk-panel-body>
                </lk-panel>
                <lk-panel>
                    <lk-panel-header compact>
                        <template slot="title">This is a compact panel header</template>
                        <template slot="subtitle">With a subtitle</template>
                    </lk-panel-header>
                    <lk-panel-body padding-bottom>
                        <p>Panel body content.</p>
                    </lk-panel-body>
                </lk-panel>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-panel>
    <lk-panel-header compact>
        <template slot="title">This is a compact panel header</template>
    </lk-panel-header>
    <lk-panel-body padding-bottom>
        <p>Panel body content.</p>
    </lk-panel-body>
</lk-panel>
<lk-panel>
    <lk-panel-header compact>
        <template slot="title">This is a compact panel header</template>
        <template slot="subtitle">With a subtitle</template>
    </lk-panel-header>
    <lk-panel-body padding-bottom>
        <p>Panel body content.</p>
    </lk-panel-body>
</lk-panel>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h2>Panel body</h2>
        <p>The panel body component (<code>lk-panel-body</code>) is used to vertically divide content within a panel. It does not provide any styling for it's contents.</p>
        <h3>Spacing</h3>
        <p>The Panel Body component implements the <router-link to="/labkit/components/padder">Padder</router-link> component and as such has access to all of it's props. By default <code>padding</code> is set with no value and <code>padding-bottom</code> is set as <code>remainder-content</code>.</p>
        <h3>Styles</h3>
        <p>By default the Panel Body component has a white background. You can use the <code>muted</code> or <code>light</code> props to give it a light grey background:</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-panel>
                    <lk-panel-body muted>
                        <p>The background is muted.</p>
                    </lk-panel-body>
                </lk-panel>
                <lk-panel>
                    <lk-panel-body light>
                        <p>The background is light.</p>
                    </lk-panel-body>
                </lk-panel>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-panel>
    <lk-panel-body muted>
        <p>The background is muted.</p>
    </lk-panel-body>
</lk-panel>
<lk-panel>
    <lk-panel-body light>
        <p>The background is light.</p>
    </lk-panel-body>
</lk-panel>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>Alternatively we can use the <code>highlighted</code> prop to to highlight the section:</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-panel>
                    <lk-panel-body highlighted>
                        <p>The background is highlighted.</p>
                    </lk-panel-body>
                </lk-panel>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-panel>
    <lk-panel-body highlighted>
        <p>The background is grey.</p>
    </lk-panel-body>
</lk-panel>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>There may be situations where we want to have a thicker border between two panel-body components. This can be achieved using the <code>medium-border</code> and <code>thick-border</code> props.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-panel>
                    <lk-panel-body thick-border>
                        <p>Thick border, but at the top of the panel, so it will not do anything</p>
                    </lk-panel-body>
                    <lk-panel-body>
                        <p>Standard border</p>
                    </lk-panel-body>
                    <lk-panel-body thick-border>
                        <p>Thick border</p>
                    </lk-panel-body>
                    <lk-panel-body medium-border>
                        <p>Medium border</p>
                    </lk-panel-body>
                </lk-panel>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-panel>
    <lk-panel-body thick-border>
        <p>Thick border, but at the top of the panel, so it will not do anything</p>
    </lk-panel-body>
    <lk-panel-body>
        <p>Standard border</p>
    </lk-panel-body>
    <lk-panel-body thick-border>
        <p>Thick border</p>
    </lk-panel-body>
    <lk-panel-body medium-border>
        <p>Medium border</p>
    </lk-panel-body>
</lk-panel>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>We can control the style and color of the border using the <code>dashed-border</code> and <code>light-border</code> props.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-panel>
                    <lk-panel-body dashed-border>
                        <p>Dashed border, but at the top of the panel, so it will not do anything</p>
                    </lk-panel-body>
                    <lk-panel-body dashed-border>
                        <p>Dashed border</p>
                    </lk-panel-body>
                    <lk-panel-body light-border>
                        <p>Light border</p>
                    </lk-panel-body>
                    <lk-panel-body
                        dashed-border
                        light-border
                    >
                        <p>Dashed and light border</p>
                    </lk-panel-body>
                </lk-panel>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-panel>
    <lk-panel-body dashed-border>
        <p>Dashed border, but at the top of the panel, so it will not do anything</p>
    </lk-panel-body>
    <lk-panel-body dashed-border>
        <p>Dashed border</p>
    </lk-panel-body>
    <lk-panel-body light-border>
        <p>Light border</p>
    </lk-panel-body>
    <lk-panel-body
        dashed-border
        light-border
    >
        <p>Dashed and light border</p>
    </lk-panel-body>
</lk-panel>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Alignment</h3>
        <p>If we want to be able to align the content of the component we can use the <code>align-content-right</code> and <code>align-content-center</code> props. By default content will be aligned to the left.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-panel>
                    <lk-panel-body align-content-right>
                        <p>Aligned right</p>
                    </lk-panel-body>
                    <lk-panel-body align-content-center>
                        <p>Aligned center</p>
                    </lk-panel-body>
                    <lk-panel-body>
                        <p>Default (aligned left)</p>
                    </lk-panel-body>
                </lk-panel>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-panel>
    <lk-panel-body align-content-right>
        <p>Aligned right</p>
    </lk-panel-body>
    <lk-panel-body align-content-center>
        <p>Aligned center</p>
    </lk-panel-body>
    <lk-panel-body>
        <p>Default (aligned left)</p>
    </lk-panel-body>
</lk-panel>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h2>Panel footer</h2>
        <p>The Panel Footer (<code>lk-panel-footer</code>) component is a wrapper around the Panel Body component with some predefined props. As such, refer to the documentation for the Panel Body component.</p>
        <p>The props that are predefined are:</p>
        <ul>
            <li><code>align-content-right</code> is set with no value.</li>
            <li><code>medium-border</code> is set with no value.</li>
            <li><code>padding-bottom</code> is set to <code>content</code>.</li>
            <li><code>padding-vertical</code> is set to <code>content</code>.</li>
        </ul>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-panel>
                    <lk-panel-body>
                        <p>Panel body content.</p>
                    </lk-panel-body>
                    <lk-panel-footer>
                        <lk-button
                            margin-bottom="none"
                            outline
                        >Secondary button</lk-button>
                        <lk-button margin-bottom="none">Primary button</lk-button>
                    </lk-panel-footer>
                </lk-panel>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-panel>
    <lk-panel-body>
        <p>Panel body content.</p>
    </lk-panel-body>
    <lk-panel-footer>
        <lk-button
            margin-bottom="none"
            outline
        >Secondary button</lk-button>
        <lk-button margin-bottom="none">Primary button</lk-button>
    </lk-panel-footer>
</lk-panel>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
    </lk-content>
</template>

<script>
import Code from '@/labkit/documentation/components/Code';

export default {
    components: {
        formatCode: Code,
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
