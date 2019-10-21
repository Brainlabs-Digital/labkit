<template>
    <div>
        <lk-tree 
            no-branch 
            :no-trunk="showFirstChildren === false" 
            root>
            <lk-panel 
                :margin-bottom="showFirstChildren === false ? 'none' : true" 
            >
                <lk-panel-body>
                    <lk-radio
                        v-model="firstToggleValue"
                        :items="[
                            {
                                label: 'Hide Children',
                                value: 'hide',
                            },
                            {
                                label: 'Show Children',
                                value: 'show',
                            },
                        ]"
                    >
                        <template slot="label">First label</template>
                        <template slot="hint">
                            <p>Select 'Show Children' to expand the tree.</p>
                        </template>
                    </lk-radio>
                </lk-panel-body>
            </lk-panel>
            <lk-tree 
                v-if="showFirstChildren === true" 
                :no-trunk="showSecondChildren === false">
                <lk-panel 
                    :margin-bottom="showSecondChildren === false ? 'none' : true" 
                >
                    <lk-panel-body>
                        <lk-radio
                            v-model="secondToggleValue"
                            :items="[
                                {
                                    label: 'Hide Children',
                                    value: 'hide',
                                },
                                {
                                    label: 'Show Children',
                                    value: 'show',
                                },
                            ]"
                        >
                            <template slot="label">Second label</template>
                            <template slot="hint">
                                <p>Select 'Show Children' to expand the tree.</p>
                            </template>
                        </lk-radio>
                    </lk-panel-body>
                </lk-panel>
                <lk-tree v-if="showSecondChildren === true">
                    <lk-alert 
                        margin-bottom
                        warning
                    >
                        <template slot="content">
                            <p>This is an example of using an alert component in the tree.</p>
                            <p>It should be used to highlight something important.</p>
                        </template>
                    </lk-alert>
                    <lk-panel 
                        :margin-bottom="thirdToggleValues.length === 0 ? 'none' : true" 
                    >
                        <lk-panel-body>
                            <lk-checkbox
                                v-model="thirdToggleValues"
                                :items="[
                                    {
                                        label: 'One',
                                        value: 1,
                                    },
                                    {
                                        label: 'Two',
                                        value: 2,
                                    },
                                ]"
                            >
                                <template slot="label">Third label</template>
                                <template slot="hint">
                                    <p>Select one or more of the options to expand the tree.</p>
                                </template>
                            </lk-checkbox>
                        </lk-panel-body>
                    </lk-panel>
                    <lk-tree 
                        v-if="showThirdChildren.firstChild === true" 
                        no-trunk>
                        <lk-panel 
                            :margin-bottom="showThirdChildren.secondChild === false ? 'none' : true" 
                        >
                            <lk-panel-body padding-bottom>
                                <p>Shown when 'One' is selected.</p>
                            </lk-panel-body>
                        </lk-panel>
                    </lk-tree>
                    <lk-tree 
                        v-if="showThirdChildren.secondChild === true" 
                        no-trunk>
                        <lk-panel margin-bottom="none">
                            <lk-panel-body padding-bottom>
                                <p>Shown when 'Two' is selected.</p>
                            </lk-panel-body>
                        </lk-panel>
                    </lk-tree>
                </lk-tree>
            </lk-tree>
        </lk-tree>
    </div>
</template>

<script>
export default {
    computed: {
        showFirstChildren() {
            return this.firstToggleValue === 'show';
        },
        showSecondChildren() {
            return this.secondToggleValue === 'show';
        },
        showThirdChildren() {
            return {
                firstChild: this.thirdToggleValues.includes(1),
                secondChild: this.thirdToggleValues.includes(2),
            };
        },
    },
    data() {
        return {
            firstToggleValue: 'hide',
            secondToggleValue: 'hide',
            thirdToggleValues: [],
        };
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
