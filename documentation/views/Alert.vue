<template>
    <lk-content>
        <h1>Alert</h1>
        <p>The alert component (<code>lk-alert</code>)&hellip;</p>
        <h2>Styles, layout and content</h2>
        <base-examples title="Default"/>
        <base-examples 
            title="Primary" 
            type="primary"
        />
        <base-examples 
            title="Danger" 
            type="danger"
        />
        <base-examples 
            title="Warning" 
            type="warning"
        />
        <base-examples 
            title="Success" 
            type="success"
        />
        <base-examples 
            title="Empty" 
            type="empty" 
            button-type="primary"
        />
        <h3>Spacing, display and padding</h3>
        <p>The Alert component implements the <router-link to="/labkit/components/wrapper">Wrapper</router-link> and <router-link to="/labkit/components/padder">Padder</router-link> components and has access to all of their props. By default <code>margin-bottom</code> is set to <code>content</code>, <code>padding</code> is set with no value and <code>padding-bottom</code> is set as <code>remainder-content</code>.</p>
    </lk-content>
</template>

<script>
import BaseExamples from '../../documentation/components/examples/alert/Base';
import Code from '../../documentation/components/Code';

export default {
    components: {
        BaseExamples,
        formatCode: Code,
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
