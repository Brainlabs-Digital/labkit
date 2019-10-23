<template>
    <lk-content>
        <h1>Loading spinner</h1>
        <p>The loading spinner component (<code>lk-divider</code>) should be used to indicate that <em>something</em> is happening when we are loading or saving data.</p>
        <p>The loading spinner inherits the color and font size of the parent element, however the <code>muted</code> and <code>heading</code> props are provided as a convenient way to make the spinner large and muted.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-content>
                    <h1><lk-loading-spinner /> It can be used as part of a title</h1>
                    <p>Or in a panel (using the <code>muted</code> and <code>heading</code> props to hardcode the color and size):</p>
                    <lk-panel margin-bottom="content">
                        <lk-panel-body 
                            align-content-center 
                            padding-bottom
                        >
                            <lk-loading-spinner 
                                heading 
                                muted />
                        </lk-panel-body>
                    </lk-panel>
                    <p>Or in a button:</p>
                    <lk-button primary><lk-loading-spinner /></lk-button>
                    <ul>
                        <li>Anywhere that text can go actually: <lk-loading-spinner /></li>
                    </ul>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-content>
    <h1><lk-loading-spinner /> It can be used as part of a title</h1>
    <p>Or in a panel (using the <code>muted</code> and <code>heading</code> props to hardcode the color and size):</p>
    <lk-panel margin-bottom="content">
        <lk-panel-body align-content-center padding-bottom>
            <lk-loading-spinner heading muted />
        </lk-panel-body>
    </lk-panel>
    <p>Or in a button:</p>
    <lk-button primary><lk-loading-spinner /></lk-button>
    <ul>
        <li>Anywhere that text can go actually: <lk-loading-spinner /></li>
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

export default {
    components: {
        formatCode: Code,
    },
};
</script>

<style module lang="scss">
@import '../../styles/variables';
</style>
