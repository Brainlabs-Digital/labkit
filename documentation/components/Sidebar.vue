<template>
    <div :class="[$style.container]">
        <router-link
            :class="[$style.logo]"
            :exact-active-class="$style['logo-link-active']"
            to="/labkit"
        >
        <!--- FIXME
            <img src="@/assets/brainlabs-logo.png">
        --->
        </router-link>
        <lk-navigation-tree :items="navigationItems"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navigationItems: [
                {
                    label: 'Introduction',
                    link: '/labkit',
                },
                {
                    label: 'Components',
                    items: [
                        {
                            label: 'Alert',
                            link: '/labkit/components/alert',
                        },
                        {
                            label: 'App Icon',
                            link: '/labkit/components/app-icon',
                        },
                        {
                            label: 'Badge',
                            link: '/labkit/components/badge',
                        },
                        {
                            label: 'Breadcrumb',
                            link: '/labkit/components/breadcrumb',
                        },
                        {
                            label: 'Button',
                            link: '/labkit/components/button',
                        },
                        {
                            label: 'Card',
                            link: '/labkit/components/card',
                        },
                        {
                            label: 'Checkbox',
                            link: '/labkit/components/checkbox',
                        },
                        {
                            label: 'Checkbox Buttons',
                            link: '/labkit/components/checkbox-buttons',
                        },
                        {
                            label: 'Content',
                            link: '/labkit/components/content',
                        },
                        {
                            label: 'Date Picker',
                            link: '/labkit/components/date-picker',
                        },
                        {
                            label: 'Date Time Picker',
                            link: '/labkit/components/date-time-picker',
                        },
                        {
                            label: 'Divider',
                            link: '/labkit/components/divider',
                        },
                        {
                            label: 'Dropdown button',
                            link: '/labkit/components/dropdown-button',
                        },
                        {
                            label: 'Dropdown menu',
                            link: '/labkit/components/dropdown-menu',
                        },
                        {
                            label: 'File upload',
                            link: '/labkit/components/file-upload',
                        },
                        {
                            label: 'Format number',
                            link: '/labkit/components/format-number',
                        },
                        {
                            label: 'Glass',
                            link: '/labkit/components/glass',
                        },
                        {
                            label: 'Grid',
                            link: '/labkit/components/grid',
                        },
                        {
                            label: 'Heading',
                            link: '/labkit/components/heading',
                        },
                        {
                            label: 'Icon',
                            link: '/labkit/components/icon',
                        },
                        {
                            label: 'Input',
                            link: '/labkit/components/input',
                        },
                        {
                            label: 'Loading Glass',
                            link: '/labkit/components/loading-glass',
                        },
                        {
                            label: 'Loading Spinner',
                            link: '/labkit/components/loading-spinner',
                        },
                        {
                            label: 'Modal',
                            link: '/labkit/components/modal',
                        },
                        {
                            label: 'Multi Input',
                            link: '/labkit/components/multi-input',
                        },
                        {
                            label: 'Navigation Tabs',
                            link: '/labkit/components/navigation-tabs',
                        },
                        {
                            label: 'Navigation tree',
                            link: '/labkit/components/navigation-tree',
                        },
                        {
                            label: 'Notification',
                            link: '/labkit/components/notification',
                        },
                        {
                            label: 'Padder',
                            link: '/labkit/components/padder',
                        },
                        {
                            label: 'Page navigation',
                            link: '/labkit/components/page-navigation',
                        },
                        {
                            label: 'Panel',
                            link: '/labkit/components/panel',
                        },
                        {
                            label: 'Popper',
                            link: '/labkit/components/popper',
                        },
                        {
                            label: 'Radio',
                            link: '/labkit/components/radio',
                        },
                        {
                            label: 'Search Select',
                            link: '/labkit/components/search-select',
                        },
                        {
                            label: 'Switch',
                            link: '/labkit/components/switch',
                        },
                        {
                            label: 'Radio Tabs',
                            link: '/labkit/components/radio-tabs',
                        },
                        {
                            label: 'Select',
                            link: '/labkit/components/select',
                        },
                        {
                            label: 'Table',
                            link: '/labkit/components/table',
                        },
                        {
                            label: 'Textarea',
                            link: '/labkit/components/textarea',
                        },
                        {
                            label: 'Tooltip',
                            link: '/labkit/components/tooltip',
                        },
                        {
                            label: 'Tree',
                            link: '/labkit/components/tree',
                        },
                        {
                            label: 'Tree Picker',
                            link: '/labkit/components/tree-picker',
                        },
                        {
                            label: 'Wrapper',
                            link: '/labkit/components/wrapper',
                        },
                    ],
                },
                {
                    label: 'Style guide',
                    items: [
                        {
                            label: 'Colors',
                            link: '/labkit/style-guide/colors',
                        },
                        {
                            label: 'Text',
                            link: '/labkit/style-guide/text',
                        },
                        {
                            label: 'Spacing',
                            link: '/labkit/style-guide/spacing',
                        },
                    ],
                },
            ],
        };
    },
};
</script>

<style module lang="scss">
@import '../../styles/variables';

.container {
    background: background-color(content);
    border-right: border-width() solid border-color();
    height: 100%;
    margin: 0 0 0 (0 - spacing-horizontal());
    overflow-y: auto;
    padding: spacing-vertical() spacing-horizontal() 0 spacing-horizontal();
}

.logo {
    display: inline-block;
    margin: 0 0 spacing-vertical(content);
    width: 5rem;
    &:hover > img {
        transform: translate(0.5rem, 0.5rem) rotate(40deg);
    }
    &:active > img {
        transform: translate(0.5rem, 0.7rem) rotate(40deg);
    }
    > img {
        display: inline-block;
        transform-origin: 100% 100%;
        transition: transform $transition-duration;
        transition-timing-function: $transition-timing-function;
        width: 100%;
    }
}

.logo-link-active {
    pointer-events: none;
}
</style>
