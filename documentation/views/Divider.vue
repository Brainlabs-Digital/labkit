<template>
    <lk-content>
        <h1>Divider</h1>
        <p>The divider component (<code>lk-divider</code>)&hellip;</p>
        <h3>Styles</h3>
        <lk-panel>
            <lk-panel-body>
                <lk-divider/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-divider></lk-divider>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-divider medium/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-divider medium></lk-divider>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-divider thick/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-divider thick></lk-divider>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Spacing and display</h3>
        <p>The Divider component implements the <router-link to="/labkit/components/wrapper">Wrapper</router-link> component and has access to all of it's props. By default <code>margin-bottom</code> is set without a value.</p>
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
@import '../../styles/variables';
</style>
