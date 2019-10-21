<template>
    <lk-content>
        <h1>Switch</h1>
        <p>The switch component (<code>lk-switch</code>)&hellip;</p>
        <lk-panel>
            <lk-panel-body>
                <lk-switch 
                    v-model="switch1"
                >Default</lk-switch>
                <lk-switch 
                    compact
                    v-model="switch2"
                >Compact</lk-switch>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code='`
<lk-switch v-model="switch1" >Default</lk-switch> 
<lk-switch v-model="switch2" compact>Compact</lk-switch>
                    `'
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
    data: function() {
        return {
            switch1: false,
            switch2: false,
        };
    },
};
</script>
