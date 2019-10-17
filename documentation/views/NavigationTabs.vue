<template>
    <lk-content>
        <h1>Navigation Tabs</h1>
        <p>The navigation tabs component (<code>lk-navigation-tabs</code>)&hellip;</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-navigation-tabs
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
                            iconProps: {
                                icon: 'check',
                            },
                            label: 'With Icon',
                            link: '#fourth',
                        },
                        {
                            iconProps: {
                                icon: 'ellipsis-v',
                            },
                            items: [
                                {
                                    callback: () => {},
                                    iconProps: {
                                        icon: 'check',
                                    },
                                    label: 'Item 1',
                                },
                                {
                                    callback: () => {},
                                    iconProps: {
                                        icon: 'times',
                                    },
                                    label: 'Item 2',
                                },
                            ],
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
        <h3>Badge</h3>
        <p>The <code>badge</code> prop can use used when we want no bottom border on active or hovered tabs items, instead using a badge like style to highlight the active item.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-navigation-tabs
                    badge
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
                            iconProps: {
                                icon: 'check',
                            },
                            label: 'With Icon',
                            link: '#fourth',
                        },
                        {
                            iconProps: {
                                icon: 'ellipsis-v',
                            },
                            items: [
                                {
                                    callback: () => {},
                                    iconProps: {
                                        icon: 'check',
                                    },
                                    label: 'Item 1',
                                },
                                {
                                    callback: () => {},
                                    iconProps: {
                                        icon: 'times',
                                    },
                                    label: 'Item 2',
                                },
                            ],
                        },
                    ]"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="badgeCodeExample"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Blocks</h3>
        <p>The <code>block</code> prop can use used&hellip;</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-navigation-tabs
                    block
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
                            iconProps: {
                                icon: 'check',
                            },
                            label: 'With Icon',
                            link: '#fourth',
                        },
                        {
                            iconProps: {
                                icon: 'ellipsis-v',
                            },
                            items: [
                                {
                                    callback: () => {},
                                    iconProps: {
                                        icon: 'check',
                                    },
                                    label: 'Item 1',
                                },
                                {
                                    callback: () => {},
                                    iconProps: {
                                        icon: 'times',
                                    },
                                    label: 'Item 2',
                                },
                            ],
                        },
                    ]"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="blockCodeExample"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Inactive text color</h3>
        <p>By default inactive tab text is <code>color(text, muted)</code>, however we can make it be <code>color(text)</code> using the <code>dark-text</code> prop.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-navigation-tabs
                    dark-text
                    :items="[
                        {
                            label: 'Page Link',
                            link: $route.path,
                        },
                        {
                            label: 'Second Link',
                            link: '#second',
                            textTransform: false,
                        },
                        {
                            label: 'Third Link',
                            link: '#third',
                        },
                        {
                            iconProps: {
                                icon: 'check',
                            },
                            label: 'With Icon',
                            link: '#fourth',
                        },
                        {
                            iconProps: {
                                icon: 'ellipsis-v',
                            },
                            items: [
                                {
                                    callback: () => {},
                                    iconProps: {
                                        icon: 'check',
                                    },
                                    label: 'Item 1',
                                },
                                {
                                    callback: () => {},
                                    iconProps: {
                                        icon: 'times',
                                    },
                                    label: 'Item 2',
                                },
                            ],
                        },
                    ]"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="darkTextExample"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>We can also make the incactive text be <code>color(link)</code> using the <code>link-text</code> prop.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-navigation-tabs
                    :items="[
                        {
                            label: 'Page Link',
                            link: $route.path,
                        },
                        {
                            label: 'Second Link',
                            link: '#second',
                            textTransform: false,
                        },
                        {
                            label: 'Third Link',
                            link: '#third',
                        },
                        {
                            iconProps: {
                                icon: 'check',
                            },
                            label: 'With Icon',
                            link: '#fourth',
                        },
                        {
                            iconProps: {
                                icon: 'ellipsis-v',
                            },
                            items: [
                                {
                                    callback: () => {},
                                    iconProps: {
                                        icon: 'check',
                                    },
                                    label: 'Item 1',
                                },
                                {
                                    callback: () => {},
                                    iconProps: {
                                        icon: 'times',
                                    },
                                    label: 'Item 2',
                                },
                            ],
                        },
                    ]"
                    link-text
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="linkTextExample"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Text transform</h3>
        <p>By default <code>text-transform: capitalize</code> is applied to the tab items. To turn this off for an individual item you can set the flag <code>textTransform: false</code> on the item.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-navigation-tabs
                    :items="[
                        {
                            label: 'Page Link',
                            link: $route.path,
                        },
                        {
                            label: 'no text transform',
                            link: '#second',
                            textTransform: false,
                        },
                        {
                            label: 'Third Link',
                            link: '#third',
                        },
                        {
                            iconProps: {
                                icon: 'check',
                            },
                            label: 'With Icon',
                            link: '#fourth',
                        },
                        {
                            iconProps: {
                                icon: 'ellipsis-v',
                            },
                            items: [
                                {
                                    callback: () => {},
                                    iconProps: {
                                        icon: 'check',
                                    },
                                    label: 'Item 1',
                                },
                                {
                                    callback: () => {},
                                    iconProps: {
                                        icon: 'times',
                                    },
                                    label: 'Item 2',
                                },
                            ],
                        },
                    ]"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="textTransformExample"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Force active state</h3>
        <p>The active state can be forced to be on, even when the link for the tab does not match, by setting the <code>isActive</code> to <code>true</code> flag on the item.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-navigation-tabs
                    :items="[
                        {
                            label: 'Page Link',
                            link: $route.path,
                        },
                        {
                            isActive: true,
                            label: 'Second Link (always active)',
                            link: '#second',
                        },
                        {
                            label: 'Third Link',
                            link: '#third',
                        },
                        {
                            iconProps: {
                                icon: 'check',
                            },
                            label: 'With Icon',
                            link: '#fourth',
                        },
                        {
                            iconProps: {
                                icon: 'ellipsis-v',
                            },
                            items: [
                                {
                                    callback: () => {},
                                    iconProps: {
                                        icon: 'check',
                                    },
                                    label: 'Item 1',
                                },
                                {
                                    callback: () => {},
                                    iconProps: {
                                        icon: 'times',
                                    },
                                    label: 'Item 2',
                                },
                            ],
                        },
                    ]"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="forceActiveStateExample"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Callback tabs</h3>
        <p>There may be times when we want a click on a tab to initiate a function call as opposed to route navigation, an example being using the tabs within a component that wants to be able to switch between views within itself.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <callback-example />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="callbackExampleTemplate"
                    language="html"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="callbackExampleScript"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Sizes</h3>
        <p>We can set the size of the navigation tabs using the props <code>compact</code> and <code>mini</code>.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-navigation-tabs
                    compact
                    :items="[
                        {
                            label: 'Compact sized tabs',
                            link: $route.path,
                        },
                        {
                            label: 'Third Link',
                            link: '#third',
                        },
                        {
                            iconProps: {
                                icon: 'check',
                            },
                            label: 'With Icon',
                            link: '#fourth',
                        },
                        {
                            iconProps: {
                                icon: 'ellipsis-v',
                            },
                            items: [
                                {
                                    callback: () => {},
                                    iconProps: {
                                        icon: 'check',
                                    },
                                    label: 'Item 1',
                                },
                                {
                                    callback: () => {},
                                    iconProps: {
                                        icon: 'times',
                                    },
                                    label: 'Item 2',
                                },
                            ],
                        },
                    ]"
                />
                <lk-divider />
                <lk-navigation-tabs
                    :items="[
                        {
                            label: 'Mini sized tabs',
                            link: $route.path,
                        },
                        {
                            label: 'Third Link',
                            link: '#third',
                        },
                        {
                            iconProps: {
                                icon: 'check',
                            },
                            label: 'With Icon',
                            link: '#fourth',
                        },
                        {
                            iconProps: {
                                icon: 'ellipsis-v',
                            },
                            items: [
                                {
                                    callback: () => {},
                                    iconProps: {
                                        icon: 'check',
                                    },
                                    label: 'Item 1',
                                },
                                {
                                    callback: () => {},
                                    iconProps: {
                                        icon: 'times',
                                    },
                                    label: 'Item 2',
                                },
                            ],
                        },
                    ]"
                    mini
                />
                <lk-divider />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="sizesExample"
                    language="html"
                />
            </lk-panel-body>
        </lk-panel>
    </lk-content>
</template>

<script>
import CallbackExample from '../../documentation/components/examples/navigation-tabs/Callback';
import Code from '../../documentation/components/Code';

export default {
    components: {
        CallbackExample,
        formatCode: Code,
    },
    data() {
        return {
            badgeCodeExample: `
<lk-navigation-tabs
    badge
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
            iconProps: {
                icon: 'check',
            },
            label: 'With Icon',
            link: '#fourth',
        },
        {
            iconProps: {
                icon: 'ellipsis-v',
            },
            items: [
                {
                    callback: () => {},
                    iconProps: {
                        icon: 'check',
                    },
                    label: 'Item 1',
                },
                {
                    callback: () => {},
                    iconProps: {
                        icon: 'times',
                    },
                    label: 'Item 2',
                },
            ],
        },
    ]"
/>
            `,
            blockCodeExample: `
<lk-navigation-tabs
    block
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
            iconProps: {
                icon: 'check',
            },
            label: 'With Icon',
            link: '#fourth',
        },
        {
            iconProps: {
                icon: 'ellipsis-v',
            },
            items: [
                {
                    callback: () => {},
                    iconProps: {
                        icon: 'check',
                    },
                    label: 'Item 1',
                },
                {
                    callback: () => {},
                    iconProps: {
                        icon: 'times',
                    },
                    label: 'Item 2',
                },
            ],
        },
    ]"
/>
            `,
            callbackExampleScript: `
// Component <script> content
// It's an imperfect example, but it demonstrates how it can be used.
export default {
    computed: {
        tabs() {
            const tabs = [
                {
                    callback: () => this.toggleFirstTabIsActive(),
                    isActive: this.firstTabIsActive,
                    label: 'First Tab',
                },
                {
                    callback: () => this.toggleSecondTabIsActive(),
                    isActive: this.secondTabIsActive,
                    label: 'Second Tab',
                },
                {
                    callback: () => this.toggleThirdTabIsActive(),
                    isActive: this.thirdTabIsActive,
                    label: 'Third Tab',
                },
            ];
            return tabs;
        },
    },
    data() {
        return {
            firstTabIsActive: true,
            secondTabIsActive: false,
            thirdTabIsActive: false,
        };
    },
    methods: {
        toggleFirstTabIsActive() {
            this.firstTabIsActive = true;
            this.secondTabIsActive = false;
            this.thirdTabIsActive = false;
        },
        toggleSecondTabIsActive() {
            this.firstTabIsActive = false;
            this.secondTabIsActive = true;
            this.thirdTabIsActive = false;
        },
        toggleThirdTabIsActive() {
            this.firstTabIsActive = false;
            this.secondTabIsActive = false;
            this.thirdTabIsActive = true;
        },
    },
};
            `,
            callbackExampleTemplate: `
<!-- Component <template> content -->
<lk-navigation-tabs :items="tabs" />
            `,
            codeExample: `
<lk-navigation-tabs
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
            iconProps: {
                icon: 'check',
            },
            label: 'With Icon',
            link: '#fourth',
        },
        {
            iconProps: {
                icon: 'ellipsis-v',
            },
            items: [
                {
                    callback: () => {},
                    iconProps: {
                        icon: 'check',
                    },
                    label: 'Item 1',
                },
                {
                    callback: () => {},
                    iconProps: {
                        icon: 'times',
                    },
                    label: 'Item 2',
                },
            ],
        },
    ]"
/>
            `,
            darkTextExample: `
<lk-navigation-tabs
    dark-text
    :items="[
        {
            label: 'Page Link',
            link: $route.path,
        },
        {
            label: 'Second Link',
            link: '#second',
            textTransform: false,
        },
        {
            label: 'Third Link',
            link: '#third',
        },
        {
            iconProps: {
                icon: 'check',
            },
            label: 'With Icon',
            link: '#fourth',
        },
        {
            iconProps: {
                icon: 'ellipsis-v',
            },
            items: [
                {
                    callback: () => {},
                    iconProps: {
                        icon: 'check',
                    },
                    label: 'Item 1',
                },
                {
                    callback: () => {},
                    iconProps: {
                        icon: 'times',
                    },
                    label: 'Item 2',
                },
            ],
        },
    ]"
/>
            `,
            forceActiveStateExample: `
<lk-navigation-tabs
    :items="[
        {
            label: 'Page Link',
            link: $route.path,
        },
        {
            isActive: true,
            label: 'Second Link (always active)',
            link: '#second',
        },
        {
            label: 'Third Link',
            link: '#third',
        },
        {
            iconProps: {
                icon: 'check',
            },
            label: 'With Icon',
            link: '#fourth',
        },
        {
            iconProps: {
                icon: 'ellipsis-v',
            },
            items: [
                {
                    callback: () => {},
                    iconProps: {
                        icon: 'check',
                    },
                    label: 'Item 1',
                },
                {
                    callback: () => {},
                    iconProps: {
                        icon: 'times',
                    },
                    label: 'Item 2',
                },
            ],
        },
    ]"
/>
            `,
            linkTextExample: `
<lk-navigation-tabs
    :items="[
        {
            label: 'Page Link',
            link: $route.path,
        },
        {
            label: 'Second Link',
            link: '#second',
            textTransform: false,
        },
        {
            label: 'Third Link',
            link: '#third',
        },
        {
            iconProps: {
                icon: 'check',
            },
            label: 'With Icon',
            link: '#fourth',
        },
        {
            iconProps: {
                icon: 'ellipsis-v',
            },
            items: [
                {
                    callback: () => {},
                    iconProps: {
                        icon: 'check',
                    },
                    label: 'Item 1',
                },
                {
                    callback: () => {},
                    iconProps: {
                        icon: 'times',
                    },
                    label: 'Item 2',
                },
            ],
        },
    ]"
    link-text
/>
            `,
            sizesExample: `
<lk-navigation-tabs
    compact
    :items="[
        {
            label: 'Compact sized tabs',
            link: $route.path,
        },
        {
            label: 'Third Link',
            link: '#third',
        },
        {
            iconProps: {
                icon: 'check',
            },
            label: 'With Icon',
            link: '#fourth',
        },
        {
            iconProps: {
                icon: 'ellipsis-v',
            },
            items: [
                {
                    callback: () => {},
                    iconProps: {
                        icon: 'check',
                    },
                    label: 'Item 1',
                },
                {
                    callback: () => {},
                    iconProps: {
                        icon: 'times',
                    },
                    label: 'Item 2',
                },
            ],
        },
    ]"
/>
<lk-divider />
<lk-navigation-tabs
    :items="[
        {
            label: 'Mini sized tabs',
            link: $route.path,
        },
        {
            label: 'Third Link',
            link: '#third',
        },
        {
            iconProps: {
                icon: 'check',
            },
            label: 'With Icon',
            link: '#fourth',
        },
        {
            iconProps: {
                icon: 'ellipsis-v',
            },
            items: [
                {
                    callback: () => {},
                    iconProps: {
                        icon: 'check',
                    },
                    label: 'Item 1',
                },
                {
                    callback: () => {},
                    iconProps: {
                        icon: 'times',
                    },
                    label: 'Item 2',
                },
            ],
        },
    ]"
    mini
/>
            `,
            textTransformExample: `
<lk-navigation-tabs
    :items="[
        {
            label: 'Page Link',
            link: $route.path,
        },
        {
            label: 'no text transform',
            link: '#second',
            textTransform: false,
        },
        {
            label: 'Third Link',
            link: '#third',
        },
        {
            iconProps: {
                icon: 'check',
            },
            label: 'With Icon',
            link: '#fourth',
        },
        {
            iconProps: {
                icon: 'ellipsis-v',
            },
            items: [
                {
                    callback: () => {},
                    iconProps: {
                        icon: 'check',
                    },
                    label: 'Item 1',
                },
                {
                    callback: () => {},
                    iconProps: {
                        icon: 'times',
                    },
                    label: 'Item 2',
                },
            ],
        },
    ]"
/>
            `,
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';

.dark-container {
    background: color(text);
    border-radius: border-radius(panel);
    padding: spacing-vertical() spacing-horizontal();
}
</style>
