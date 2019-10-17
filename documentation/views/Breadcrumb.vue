<template>
    <lk-content>
        <h1>Breadcrumb</h1>
        <p>The breadcrumb component (<code>lk-breadcrumb</code>)&hellip;</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-breadcrumb 
                    :items="[
                        {
                            label: 'First Item',
                            link: '',
                        },
                        {
                            label: 'Second Item',
                            link: '',
                        },
                        {
                            label: 'Third Item',
                            link: '',
                        },
                        {
                            label: 'Last Item',
                        },
                ]" />
                <lk-divider margin-bottom="content" />
                <lk-panel margin-bottom="content">
                    <lk-panel-body
                        padding-bottom="content"
                        padding-vertical="content"
                    >
                        <lk-breadcrumb
                            :items="[
                                {
                                    label: 'First Item',
                                    link: '',
                                },
                                {
                                    label: 'Second Item',
                                    link: '',
                                },
                                {
                                    label: 'Third Item',
                                    link: '',
                                },
                                {
                                    label: 'Breadcrumb with no-margin prop',
                                },
                            ]"
                            no-margin
                        />
                    </lk-panel-body>
                </lk-panel>
                <lk-divider margin-bottom="content" />
                <lk-breadcrumb 
                    :items="[
                        {
                            iconProps: {
                                icon: 'circle-dot',
                            },
                            label: 'This breadcrumb has icons',
                            link: '',
                        },
                        {
                            iconProps: {
                                icon: 'circle-outline-quarter-notch',
                                spin: true,
                            },
                        },
                        {
                            iconProps: {
                                icon: 'check',
                            },
                            label: 'Third Item',
                            link: '',
                        },
                        {
                            iconProps: {
                                icon: 'circle-outline-quarter-notch',
                                spin: true,
                            },
                            label: 'Loading',
                        },
                ]" />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="sampleTemplate"
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
            sampleTemplate: `
<lk-breadcrumb :items="[
    {
        label: 'First Item',
        link: '',
    },
    {
        label: 'Second Item',
        link: '',
    },
    {
        label: 'Third Item',
        link: '',
    },
    {
        label: 'Last Item',
    },
]" />
<lk-divider margin-bottom="content" />
<lk-panel margin-bottom="content">
    <lk-panel-body
        padding-bottom="content"
        padding-vertical="content"
    >
        <lk-breadcrumb
            :items="[
                {
                    label: 'First Item',
                    link: '',
                },
                {
                    label: 'Second Item',
                    link: '',
                },
                {
                    label: 'Third Item',
                    link: '',
                },
                {
                    label: 'Breadcrumb with no-margin prop',
                },
            ]"
            no-margin
        />
    </lk-panel-body>
</lk-panel>
<lk-divider margin-bottom="content" />
<lk-breadcrumb :items="[
    {
        iconProps: {
            icon: 'circle-dot',
        },
        label: 'This breadcrumb has icons',
        link: '',
    },
    {
        iconProps: {
            icon: 'circle-outline-quarter-notch',
            spin: true,
        },
    },
    {
        iconProps: {
            icon: 'check',
        },
        label: 'Third Item',
        link: '',
    },
    {
        iconProps: {
            icon: 'circle-outline-quarter-notch',
            spin: true,
        },
        label: 'Loading',
    },
]" />
            `,
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
