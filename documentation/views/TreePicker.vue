<template>
    <lk-content>
        <h1>Tree picker</h1>
        <p>The tree picker component (<code>lk-tree-picker</code>)&hellip;</p>
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
    </lk-content>
</template>

<script>
import Code from '../../documentation/components/Code';
import Example from '../../documentation/components/examples/tree-picker/Example';

export default {
    components: {
        Example,
        formatCode: Code,
    },
    data() {
        return {
            interactionSampleScript: `
// Component <script> content
/*
    The below is an example of the structure of the data that the component
    expects; the data used above is automatically generated for demonstration
    purposes.
*/
export default {
    data() {
        return {
            items: [
                {
                    label: 'Option 1',
                    value: 'option-1',
                },
                {
                    label: 'Option 2',
                    value: 'option-2',
                },
                {
                    label: 'Option 3',
                    value: 'option-3',
                },
                {
                    label: 'Option 4',
                    value: 'option-4',
                },
                {
                    label: 'Parent 1',
                    value: 'parent-1',
                    items: [
                        {
                            label: 'Parent 1 Option 1',
                            value: 'parent-1-option-1',
                        },
                        {
                            label: 'Parent 1 Option 2',
                            value: 'parent-1-option-2',
                        },
                        {
                            label: 'Parent 1 Option 3',
                            value: 'parent-1-option-3',
                        },
                        {
                            label: 'Parent 1 Parent 1',
                            value: 'parent-1-parent-1',
                            items: [
                                {
                                    label: 'Parent 1 Parent 1 Option 1',
                                    value: 'parent-1-parent-1-option-1',
                                },
                                {
                                    label: 'Parent 1 Parent 1 Option 2',
                                    value: 'parent-1-parent-1-option-2',
                                },
                                {
                                    label: 'Parent 1 Parent 1 Parent 1',
                                    value: 'parent-1-parent-1-parent-1',
                                    items: [
                                        {
                                            label:
                                                'Parent 1 Parent 1 Parent 1 Option 1',
                                            value:
                                                'parent-1-parent-1-parent-1-option-1',
                                        },
                                        {
                                            label:
                                                'Parent 1 Parent 1 Parent 1 Option 2',
                                            value:
                                                'parent-1-parent-1-parent-1-option-2',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Parent 2',
                    value: 'parent-2',
                    items: [
                        {
                            label: 'Parent 2 Option 1',
                            value: 'parent-2-option-1',
                        },
                        {
                            label: 'Parent 2 Option 2',
                            value: 'parent-2-option-2',
                        },
                        {
                            label: 'Parent 2 Option 3',
                            value: 'parent-2-option-3',
                        },
                    ],
                },
                {
                    label: 'Option 5',
                    value: 'option-5',
                },
                {
                    label: 'Parent 3',
                    value: 'parent-3',
                    items: [
                        {
                            label: 'Parent 3 Option 1',
                            value: 'parent-3-option-1',
                        },
                        {
                            label: 'Parent 3 Option 2',
                            value: 'parent-3-option-2',
                        },
                        {
                            label: 'Parent 3 Option 3',
                            value: 'parent-3-option-3',
                        },
                    ],
                },
                {
                    label: 'Parent 4',
                    value: 'parent-4',
                    items: [
                        {
                            label: 'Parent 4 Parent 1',
                            value: 'parent-4-parent-1',
                            items: [
                                {
                                    label: 'Parent 4 Parent 1 Option 1',
                                    value: 'parent-4-parent-1-option-1',
                                },
                                {
                                    label: 'Parent 4 Parent 1 Option 2',
                                    value: 'parent-4-parent-1-option-2',
                                },
                            ],
                        },
                        {
                            label: 'Parent 4 Parent 2',
                            value: 'parent-4-parent-2',
                            items: [
                                {
                                    label: 'Parent 4 Parent 2 Option 1',
                                    value: 'parent-4-parent-2-option-1',
                                },
                                {
                                    label: 'Parent 4 Parent 2 Option 2',
                                    value: 'parent-4-parent-2-option-2',
                                },
                            ],
                        },
                    ],
                },
            ],
            selectedItems: [
                'option-1',
                'parent-2-option-1',
                'parent-4-parent-1-option-1',
                'parent-4-parent-1-option-2',
            ],
        };
    },
};
            `,
            interactionSampleTemplate: `
<!-- Component <template> content -->
<lk-panel margin-bottom="content">
    <lk-tree-picker
        v-model="selectedItems"
        :items="items"
        options-label="Accounts"
    />
</lk-panel>
            `,
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
