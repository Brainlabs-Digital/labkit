<template>
    <lk-content>
        <h1>Modal</h1>
        <p>The modal component (<code>lk-modal</code>)&hellip;</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <example />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="interactionSampleScript"
                    language="js"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="interactionSampleTemplate"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>No 'close' button</h3>
        <p>By default the modal component will display a 'close' button in the top right corner of the browser window which can be used to close the modal. We can hide this button by setting the `show-close-button` prop to `false`.</p>
    </lk-content>
</template>

<script>
import Code from '../../documentation/components/Code';
import Example from '../../documentation/components/examples/modal/Example';

export default {
    components: {
        Example,
        formatCode: Code,
    },
    data() {
        return {
            interactionSampleScript: `
// Component <script> content
export default {
    data() {
        return {
            modalIsVisible: false,
        };
    },
    methods: {
        toggleModalIsVisible() {
            this.modalIsVisible = !this.modalIsVisible;
        },
    },
};
            `,
            interactionSampleTemplate: `
<!-- Component <template> content -->
<lk-modal
    v-if="modalIsVisible === true"
    @closed="toggleModalIsVisible"
>
    <lk-panel-header>
        <template slot="title">Modal title</template>
        <template slot="subtitle">Modal subtitle</template>
    </lk-panel-header>
    <lk-panel-body>
        <lk-content>
            <p>Example modal content.</p>
        </lk-content>
    </lk-panel-body>
    <lk-panel-footer>
        <lk-button
            danger
            margin-bottom="none"
            outline
            @click.native="toggleModalIsVisible"
        >Secondary action</lk-button>
        <lk-button
            margin-bottom="none"
            primary
            @click.native="toggleModalIsVisible"
        >Primary action</lk-button>
    </lk-panel-footer>
</lk-modal>
            `,
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
