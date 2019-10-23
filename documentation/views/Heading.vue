<template>
    <lk-content>
        <h1>Heading</h1>
        <p>The heading component (<code>lk-heading</code>)&hellip;</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-heading>Example Heading</lk-heading>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-heading>Example Heading</lk-heading>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>The heading component can have the size of section heading using the <code>section-heading</code> prop.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-heading section-heading>Example Section Heading</lk-heading>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-heading section-heading>Example Section Heading</lk-heading>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>The heading component can have the size of sub-section heading using the <code>sub-section-heading</code> prop.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-heading sub-section-heading>Example Sub Section Heading</lk-heading>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-heading sub-section-heading>Example Sub Section Heading</lk-heading>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Spacing and display</h3>
        <p>The Heading component implements the <router-link to="/labkit/components/wrapper">Wrapper</router-link> and <router-link to="/labkit/components/padder">Padder</router-link> components and has access to all of their props. By default <code>margin-bottom</code> is set with no value, <code>padding-top</code> is set with no value and <code>padding-bottom</code> is hardcoded with the value <code>none</code> and cannot be overwritten.</p>
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
            sampleItems: [
                {
                    label: 'Page Link',
                    link: '',
                },
                {
                    label: 'Second Link',
                    link: '#second',
                },
                {
                    label: 'Third Link',
                    link: '#third',
                },
            ],
        };
    },
};
</script>

<style module lang="scss">
@import '../../styles/variables';
</style>
