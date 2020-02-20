<template>
    <lk-content>
        <h1>Rating</h1>
        <p>The rating component (<code>lk-rating</code>)&hellip;</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-rating/>
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
        <p>Properties (<code>lk-rating</code>)&hellip;</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-rating 
                    max-rating="10" 
                    v-model="currentRating" 
                    show-rating-label="false"/>
                <span>
                    Current Rating {{currentRating}}
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
            currentRating: 5,
            standardTemplate: `
<!-- Component <template> content -->
<lk-rating currentRating="3">
</lk-rating>
			`,
            allParamsCode: `
// Component <script> content
data() {
   return {
      currentRating: 5,
   }
},
};
            `,
            allParamsTemplate: `
<!-- Component <template> content -->
<lk-rating maxRating="10" v-model="currentRating" showRatingLabel="false">
</lk-rating>
            `,
        };
    },
};
</script>

<style module lang="scss">
@import '../../styles/variables';
</style>
