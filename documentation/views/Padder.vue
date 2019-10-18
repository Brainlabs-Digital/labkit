<template>
    <lk-content>
        <h1>Padder</h1>
        <p>The padder component (<code>lk-padder</code>) is a utility componet intended to be implemented by other components that wish to provide responsive padding properties.</p>
        <h3>Styling and props</h3>
        <p>By default the Padder component has no props set.</p>
        <p>Props that have a higher degree of specificity will overwrite props with a lower degree of specificity. For example setting <code>padding</code> to <code>content</code>, <code>padding-vertical</code> to <code>compact</code> and <code>padding-bottom</code> to <code>mini</code> will mean that the component has <code>content</code> padding left and right, <code>compact</code> padding top and <code>mini</code> padding bottom.</p>
        <lk-panel margin-bottom="content">  
            <lk-panel-body>
                <lk-content content-font-size-primary>
                    <p><code>padding</code></p>
                    <p>The <code>padding</code> prop accepts the following arguments:</p>
                    <ul>
                        <li>With no arguments, but specified as a prop: applies styling equivalent to the CSS <code>padding: spacing-vertical() spacing-horizontal()</code>.</li>
                        <li><code>content</code> applies styling equivalent to the CSS <code>padding: spacing-vertical(content) spacing-horizontal(content)</code>.</li>
                        <li><code>compact</code> applies styling equivalent to the CSS <code>padding: spacing-vertical(compact) spacing-horizontal(compact)</code>.</li>
                        <li><code>mini</code> applies styling equivalent to the CSS <code>padding: spacing-vertical(mini) spacing-horizontal(mini)</code>.</li>
                        <li><code>none</code> applies styling equivalent to the CSS <code>padding: 0</code>.</li>
                    </ul>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body>
                <lk-content content-font-size-primary>
                    <p><code>padding-vertical</code></p>
                    <p>The <code>padding-vertical</code> prop accepts the following arguments:</p>
                    <ul>
                        <li>With no arguments, but specified as a prop: applies styling equivalent to the CSS <code>padding-top: spacing-vertical(); padding-bottom: spacing-vertical()</code>.</li>
                        <li><code>content</code> applies styling equivalent to the CSS <code>padding-top: spacing-vertical(content); padding-bottom: spacing-vertical(content)</code>.</li>
                        <li><code>compact</code> applies styling equivalent to the CSS <code>padding-top: spacing-vertical(compact); padding-bottom: spacing-vertical(compact)</code>.</li>
                        <li><code>mini</code> applies styling equivalent to the CSS <code>padding-top: spacing-vertical(mini); padding-bottom: spacing-vertical(mini)</code>.</li>
                        <li><code>none</code> applies styling equivalent to the CSS <code>padding-top: 0; padding-bottom: 0</code>.</li>
                    </ul>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body>
                <lk-content content-font-size-primary>
                    <p><code>padding-horizontal</code></p>
                    <p>The <code>padding-horizontal</code> prop accepts the following arguments:</p>
                    <ul>
                        <li>With no arguments, but specified as a prop: applies styling equivalent to the CSS <code>padding-left: spacing-horizontal(); padding-right: spacing-horizontal()</code>.</li>
                        <li><code>content</code> applies styling equivalent to the CSS <code>padding-left: spacing-horizontal(content); padding-right: spacing-horizontal(content)</code>.</li>
                        <li><code>compact</code> applies styling equivalent to the CSS <code>padding-left: spacing-horizontal(compact); padding-right: spacing-horizontal(compact)</code>.</li>
                        <li><code>mini</code> applies styling equivalent to the CSS <code>padding-left: spacing-horizontal(mini); padding-right: spacing-horizontal(mini)</code>.</li>
                        <li><code>none</code> applies styling equivalent to the CSS <code>padding-left: 0; padding-right: 0</code>.</li>
                    </ul>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body>
                <lk-content content-font-size-primary>
                    <p><code>padding-top</code></p>
                    <p>The <code>padding-top</code> prop accepts the following arguments:</p>
                    <ul>
                        <li>With no arguments, but specified as a prop: applies styling equivalent to the CSS <code>padding-top: spacing-vertical()</code>.</li>
                        <li><code>content</code> applies styling equivalent to the CSS <code>padding-top: spacing-vertical(content)</code>.</li>
                        <li><code>compact</code> applies styling equivalent to the CSS <code>padding-top: spacing-vertical(compact)</code>.</li>
                        <li><code>mini</code> applies styling equivalent to the CSS <code>padding-top: spacing-vertical(mini)</code>.</li>
                        <li><code>none</code> applies styling equivalent to the CSS <code>padding-top: 0</code>.</li>
                    </ul>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body>
                <lk-content content-font-size-primary>
                    <p><code>padding-right</code></p>
                    <p>The <code>padding-right</code> prop accepts the following arguments:</p>
                    <ul>
                        <li>With no arguments, but specified as a prop: applies styling equivalent to the CSS <code>padding-right: spacing-horizontal()</code>.</li>
                        <li><code>content</code> applies styling equivalent to the CSS <code>padding-right: spacing-horizontal(content)</code>.</li>
                        <li><code>compact</code> applies styling equivalent to the CSS <code>padding-right: spacing-horizontal(compact)</code>.</li>
                        <li><code>mini</code> applies styling equivalent to the CSS <code>padding-right: spacing-horizontal(mini)</code>.</li>
                        <li><code>none</code> applies styling equivalent to the CSS <code>padding-right: 0</code>.</li>
                    </ul>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body>
                <lk-content content-font-size-primary>
                    <p><code>padding-bottom</code></p>
                    <p>The <code>padding-bottom</code> prop accepts the following arguments:</p>
                    <ul>
                        <li>With no arguments, but specified as a prop: applies styling equivalent to the CSS <code>padding-bottom: spacing-vertical()</code>.</li>
                        <li><code>content</code> applies styling equivalent to the CSS <code>padding-bottom: spacing-vertical(content)</code>.</li>
                        <li><code>compact</code> applies styling equivalent to the CSS <code>padding-bottom: spacing-vertical(compact)</code>.</li>
                        <li><code>mini</code> applies styling equivalent to the CSS <code>padding-bottom: spacing-vertical(mini)</code>.</li>
                        <li><code>remainder-content</code> applies styling equivalent to the CSS <code>padding-bottom: spacing-vertical-remainder(content)</code>.</li>
                        <li><code>remainder-compact</code> applies styling equivalent to the CSS <code>padding-bottom: spacing-vertical-remainder(compact)</code>.</li>
                        <li><code>remainder-compact-content</code> applies styling equivalent to the CSS <code>padding-bottom: spacing-vertical-remainder(compact-content)</code>.</li>
                        <li><code>remainder-mini</code> applies styling equivalent to the CSS <code>padding-bottom: spacing-vertical-remainder(mini)</code>.</li>
                        <li><code>remainder-mini-content</code> applies styling equivalent to the CSS <code>padding-bottom: spacing-vertical-remainder(mini-content)</code>.</li>
                        <li><code>content-remainder-compact</code> applies styling equivalent to the CSS <code>padding-bottom: spacing-vertical-remainder(content, compact)</code>.</li>
                        <li><code>content-remainder-compact-content</code> applies styling equivalent to the CSS <code>padding-bottom: spacing-vertical-remainder(content, compact-content)</code>.</li>
                        <li><code>content-remainder-mini</code> applies styling equivalent to the CSS <code>padding-bottom: spacing-vertical-remainder(content, mini)</code>.</li>
                        <li><code>content-remainder-mini-content</code> applies styling equivalent to the CSS <code>padding-bottom: spacing-vertical-remainder(content, mini-content)</code>.</li>
                        <li><code>compact-remainder-compact-content</code> applies styling equivalent to the CSS <code>padding-bottom: spacing-vertical-remainder(compact, compact-content)</code>.</li>
                        <li><code>compact-remainder-mini</code> applies styling equivalent to the CSS <code>padding-bottom: spacing-vertical-remainder(compact, mini)</code>.</li>
                        <li><code>compact-remainder-mini-content</code> applies styling equivalent to the CSS <code>padding-bottom: spacing-vertical-remainder(compact, mini-content)</code>.</li>
                        <li><code>mini-remainder-mini-content</code> applies styling equivalent to the CSS <code>padding-bottom: spacing-vertical-remainder(mini, mini-content)</code>.</li>
                        <li><code>none</code> applies styling equivalent to the CSS <code>padding-bottom: 0</code>.</li>
                    </ul>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body>
                <lk-content content-font-size-primary>
                    <p><code>padding-left</code></p>
                    <p>The <code>padding-left</code> prop accepts the following arguments:</p>
                    <ul>
                        <li>With no arguments, but specified as a prop: applies styling equivalent to the CSS <code>padding-left: spacing-horizontal()</code>.</li>
                        <li><code>content</code> applies styling equivalent to the CSS <code>padding-left: spacing-horizontal(content)</code>.</li>
                        <li><code>compact</code> applies styling equivalent to the CSS <code>padding-left: spacing-horizontal(compact)</code>.</li>
                        <li><code>mini</code> applies styling equivalent to the CSS <code>padding-left: spacing-horizontal(mini)</code>.</li>
                        <li><code>none</code> applies styling equivalent to the CSS <code>padding-left: 0</code>.</li>
                    </ul>
                </lk-content>
            </lk-panel-body>
        </lk-panel>
        <h3>Responsive breakpoints</h3>
        <p>All props of this component can be prefixed with the following prefixes to provide responsive functionality:</p>
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
import Code from '../../documentation/components/Code';

export default {
    components: {
        formatCode: Code,
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
