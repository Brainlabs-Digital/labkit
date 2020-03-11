
<template>
    <lk-content>
        <h1>Slider</h1>
        <p>The slider component (<code>lk-slider</code>)&hellip;</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-slider/>
            </lk-panel-body>
            <lk-panel-body
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="standardTemplate"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>Properties for slider component (<code>lk-slider</code>)&hellip;</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-slider
                    :min-range="1"
                    :max-range="100"
                    v-model="currentValue"
                    :show-value="false"/>
                <span>
                    Current Value {{currentValue}}
                </span>
            </lk-panel-body>
            <lk-panel-body
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="allParamsCode"
                    language="js"
                />
            </lk-panel-body>
            <lk-panel-body
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="allParamsTemplate"
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
            currentValue: 51,
            standardTemplate: `
<!-- Component <template> content -->
<lk-slider/>
			`,
            allParamsCode: `
// Component <script> content
data() {
   return {
      currentValue: 51,
   }
},
};
            `,
            allParamsTemplate: `
<!-- Component <template> content -->
<lk-slider
:minRange="1" :maxRange="100"
v-model="currentValue"
:showValue="false"/>
            `,
        };
    },
};
</script>

<style module lang="scss">
@import '../../styles/variables';
</style>
