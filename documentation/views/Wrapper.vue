<template>
    <lk-content>
        <h1>Wrapper</h1>
        <p>The wrapper component (<code>lk-wrapper</code>) is a utility componet intended to be implemented by other components that wish to provide responsive spacing and display properties.</p>
        <h3>Styling and props</h3>
        <p>By default the wrapper component will have no bottom margin and will be <code>display: block</code>.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-content content-font-size-primary>
                    <p><code>display</code></p>
                    <p>The <code>display</code> prop accepts the following arguments:</p>
                    <ul>
                        <li><code>block</code>: applies styling equivalent to the CSS <code>display: block</code>.</li>
                        <li><code>inline-block</code>: applies styling equivalent to the CSS <code>display: block</code>.</li>
                        <li><code>none</code>: applies styling equivalent to the CSS <code>display: block</code>.</li>
                    </ul>
                </lk-content>
            </lk-panel-body>       
            <lk-panel-body>
                <lk-content content-font-size-primary>
                    <p><code>margin-bottom</code></p>
                    <p>The <code>margin-bottom</code> prop accepts the following arguments:</p>
                    <ul>
                        <li>With no arguments, but specified as a prop: applies styling equivalent to the CSS <code>margin-bottom: spacing-vertical()</code>.</li>
                        <li><code>compact</code> applies styling equivalent to the CSS <code>margin-bottom: spacing-vertical(compact)</code>.</li>
                        <li><code>compact-content</code> applies styling equivalent to the CSS <code>margin-bottom: spacing-vertical(compact-content)</code>.</li>
                        <li><code>content</code> applies styling equivalent to the CSS <code>margin-bottom: spacing-vertical(content)</code>.</li>
                        <li><code>mini</code> applies styling equivalent to the CSS <code>margin-bottom: spacing-vertical(mini)</code>.</li>
                        <li><code>mini-content</code> applies styling equivalent to the CSS <code>margin-bottom: spacing-vertical(mini-content)</code>.</li>
                        <li><code>none</code> applies styling equivalent to the CSS <code>margin-bottom: 0</code>.</li>
                    </ul>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body>
                <lk-content content-font-size-primary>
                    <p><code>margin-top</code></p>
                    <p>The <code>margin-bottom</code> prop accepts the following arguments:</p>
                    <ul>
                        <li><code>-compact</code> applies styling equivalent to the CSS <code>margin-top: (0 - spacing-vertical(compact))</code>.</li>
                        <li><code>-compact-content</code> applies styling equivalent to the CSS <code>margin-top: (0 - spacing-vertical(compact-content))</code>.</li>
                        <li><code>-content</code> applies styling equivalent to the CSS <code>margin-top: (0 - spacing-vertical(content))</code>.</li>
                        <li><code>-mini</code> applies styling equivalent to the CSS <code>margin-top: (0 - spacing-vertical(mini))</code>.</li>
                        <li><code>-mini-content</code> applies styling equivalent to the CSS <code>margin-top: (0 - spacing-vertical(mini-content))</code>.</li>
                        <li><code>none</code> applies styling equivalent to the CSS <code>margin-top: 0</code>.</li>
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
export default {};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
