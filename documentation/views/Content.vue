<template>
    <lk-content>
        <h1>Content</h1>
        <p>The content component (<code>lk-content</code>) is a container component that provides appropriate styling for large bodies of content.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-content>
                    <h1>Page heading</h1>
                    <h2>Section heading</h2>
                    <h3>Sub heading</h3>
                    <p>Body content.</p>
                    <p>Body content with a <code>code tag</code>.</p>
                    <ul>
                        <li>A list item.</li>
                        <li>Yet another list item.</li>
                        <li>A list item with a <code>code tag</code>.</li>
                    </ul>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-content>
    <h1>Page heading</h1>
    <h2>Section heading</h2>
    <h3>Sub heading</h3>
    <p>Body content.</p>
    <p>Body content with a <code>code tag</code>.</p>
    <ul>
        <li>A list item.</li>
        <li>Yet another list item.</li>
        <li>A list item with a <code>code tag</code>.</li>
    </ul>
</lk-content>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>We can optionally use the <code>content-font-size-primary</code> prop to make the font size used for <code>p</code> and <code>li</code> tags to be <code>font-size()</code> instead of <code>font-size(body)</code>.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-content content-font-size-primary>
                    <h1>Page heading</h1>
                    <h2>Section heading</h2>
                    <h3>Sub heading</h3>
                    <p>Body content.</p>
                    <p>Body content with a <code>code tag</code>.</p>
                    <ul>
                        <li>A list item.</li>
                        <li>Yet another list item.</li>
                        <li>A list item with a <code>code tag</code>.</li>
                    </ul>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-content content-font-size-primary>
    <h1>Page heading</h1>
    <h2>Section heading</h2>
    <h3>Sub heading</h3>
    <p>Body content.</p>
    <p>Body content with a <code>code tag</code>.</p>
    <ul>
        <li>A list item.</li>
        <li>Yet another list item.</li>
        <li>A list item with a <code>code tag</code>.</li>
    </ul>
</lk-content>
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
import icons from '../../components/icon/icons';

export default {
    components: {
        formatCode: Code,
    },
    computed: {
        filteredIcons() {
            const searchString = this.searchString.toLowerCase();
            return this.icons.filter((icon) => {
                return icon.includes(searchString);
            });
        },
        icons() {
            return Object.keys(icons).sort();
        },
    },
    data() {
        return {
            interactionSampleTemplate: `
<!-- Component <template> content -->
...
            `,
            searchString: '',
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
