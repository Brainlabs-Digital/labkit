<template>
    <lk-content>
        <h1>Page navigation</h1>
        <p>The page navigation component (<code>lk-page-navigation</code>)&hellip;</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <interaction-example/>
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
        <h3>Styles</h3>
        <lk-panel>
            <lk-panel-body>
                <lk-page-navigation
                    :page="5"
                    :total-pages="10"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-page-navigation
    :page="5"
    :total-pages="10"
></lk-page-navigation>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-page-navigation
                    compact
                    :page="5"
                    :total-pages="10"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-page-navigation
    compact
    :page="5"
    :total-pages="10"
></lk-page-navigation>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-page-navigation
                    mini
                    :page="5"
                    :total-pages="10"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-page-navigation
    mini
    :page="5"
    :total-pages="10"
></lk-page-navigation>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Spacing and display</h3>
        <p>The Page Navigation component implements the <router-link to="/labkit/components/wrapper">Wrapper</router-link> component and as such has access to all of it's props. By default <code>margin-bottom</code> prop is set to <code>content</code> and <code>display</code> is set to <code>inline-block</code>.</p>
        <h3>[TODO]</h3>
        <p>Varitation that displays multiple page numbers instead of just previous or next buttons.</p>
    </lk-content>
</template>

<script>
import Code from '../../documentation/components/Code';
import InteractionExample from '../../documentation/components/examples/page-navigation/InteractionExample';

export default {
    components: {
        formatCode: Code,
        InteractionExample,
    },
    data() {
        return {
            interactionSampleScript: `
// Component <script> content
export default {
    data() {
        return {
            page: 1,
        };
    },
    methods: {
        setPage(page) {
            this.page = page;
        },
    },
};
            `,
            interactionSampleTemplate: `
<!-- Component <template> content -->
<lk-page-navigation
    :page="page"
    :total-pages="10"
    @updated:page="setPage"
></lk-page-navigation>
<lk-divider margin-bottom="content"></lk-divider>
<lk-content>
    <p>Page <strong>{{page}}</strong> selected.</p>
</lk-content>
            `,
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
