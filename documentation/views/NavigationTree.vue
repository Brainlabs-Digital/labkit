<template>
    <lk-content>
        <h1>Navigation tree</h1>
        <p>The navigation tree component (<code>lk-navigation-tree</code>)&hellip;</p>
        <p>The active state of a link is automatically handled: if we are on the path that the link points to then it will have an active state.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-navigation-tree
                    :items="[
                        {
                            label: 'Page Link',
                            link: $route.path,
                        },
                        {
                            label: 'Second Link',
                            link: '#second',
                        },
                        {
                            label: 'Third Link',
                            link: '#third',
                        },
                        {
                            label: 'First Parent',
                            items: [
                                {
                                    label: 'First Child Link',
                                    link: '#first-child',
                                },
                                {
                                    label: 'Second Child Link',
                                    link: '#second-child',
                                },
                                {
                                    label: 'First Child Parent',
                                    items: [
                                        {
                                            label: 'First Child Child Link',
                                            link: '#first-child-child',
                                        },
                                        {
                                            label: 'Second Child Child Link',
                                            link: '#second-child-child',
                                        }
                                    ]
                                },
                                {
                                    label: 'Third Child Link',
                                    link: '#third-child',
                                },
                            ]
                        },
                        {
                            label: 'Fourth Link',
                            link: '#fourth',
                        },
                    ]"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="codeExample"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Spacing</h3>
        <p>If we do not want any spacing at the bottom of the component then we can use the <code>no-padding</code> prop.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-navigation-tree
                    :items="items"
                    no-padding
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-navigation-tree
    :items="items"
    no-padding
/>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>By default the edges of active or hovered links will overflow over the left hand edge of the component. If we do not want this behavior, to ensure that the edge is aligned with other items on the page, then we can use the <code>no-overflow</code> prop.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-content>
                    <p>The edges of the active items should be aligned with the horizontal line.</p>
                    <lk-divider 
                        margin-bottom="content"
                        thick
                    />
                </lk-content>
                <lk-navigation-tree
                    :items="items"
                    no-overflow
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-navigation-tree
    :items="items"
    no-overflow
/>
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

export default {
    components: {
        formatCode: Code,
    },
    data() {
        return {
            codeExample: `
<lk-navigation-tree
    :items="[
        {
            label: 'First Link',
            link: '#',
        },
        {
            label: 'First Parent',
            items: [
                {
                    label: 'First Child Link',
                    link: '#',
                },
                {
                    label: 'Active Child Link',
                    link: $route.path,
                },
                {
                    label: 'First Child Parent',
                    items: [
                        {
                            label: 'First Child Child Link',
                            link: '#',
                        },
                        {
                            label: 'Active Child Child Link',
                            link: $route.path,
                        }
                    ]
                },
                {
                    label: 'Second Child Link',
                    link: '#',
                },
            ]
        },
        {
            label: 'Active Link',
            link: $route.path,
        },
    ]"
/>
            `,
            items: [
                {
                    label: 'First Link',
                    link: this.$route.path,
                },
                {
                    label: 'First Parent',
                    items: [
                        {
                            label: 'First Child Link',
                            link: '#',
                        },
                        {
                            label: 'Active Child Link',
                            link: this.$route.path,
                        },
                    ],
                },
                {
                    label: 'Second Link',
                    link: '#',
                },
                {
                    label: 'Third Link',
                    link: '#',
                },
            ],
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
