<template>
    <lk-content>
        <h1>Card</h1>
        <p>The card component (<code>lk-card</code>)&hellip;</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <example/>
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
        <h2>Card Examples</h2>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-card>
                    <template slot="title">One Primary Button And A Dropdown Menu</template>
                    <template slot="body">
                        <lk-card-row>
                            <lk-card-key-value>
                                <template slot="key">First Label</template>
                                <template slot="value">First Value</template>
                            </lk-card-key-value>
                        </lk-card-row>
                        <lk-card-row>
                            <lk-card-key-value>
                                <template slot="key">Second Lable</template>
                                <template slot="value">
                                    <lk-badge 
                                        mini 
                                        pill 
                                        success
                                    > Value</lk-badge>
                                </template>
                            </lk-card-key-value>
                        </lk-card-row>
                    </template>
                    <template slot="footer">
                        <lk-row>
                            <lk-column
                                span="fill">
                                <lk-button
                                    primary
                                    mini
                                    margin-bottom="none"
                                    display="block"
                                >
                                    Primary Action
                                </lk-button>
                            </lk-column>
                            <lk-column
                                span="auto"
                            >
                                <lk-dropdown-button
                                    circle
                                    :items="[
                                        {
                                            callback: () => setClickedItemValue('item-1-value'),
                                            label: 'Item 1',
                                        },
                                        {
                                            callback: () => setClickedItemValue('item-2-value'),
                                            label: 'Item 2',
                                        }
                                    ]"
                                    outline
                                    mini
                                    margin-bottom="none"
                                    @toggled="setDropdownIsVisible"
                                >
                                    <lk-icon icon="ellipsis-v"/>
                                </lk-dropdown-button>
                            </lk-column>
                        </lk-row>
                    </template>
                </lk-card>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="onePrimaryButtonAndADropdownMenuCode"                    
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-card>
                    <template slot="title">One Primary Button And Several Secondary Buttons</template>
                    <template slot="body">
                        <lk-card-row>
                            <lk-button
                                primary
                                mini
                                margin-bottom="none"
                                display="block"
                            >Primary Action</lk-button>
                        </lk-card-row>
                        <lk-card-row>
                            <lk-card-key-value>
                                <template slot="key">First Label</template>
                                <template slot="value">First Value</template>
                            </lk-card-key-value>
                        </lk-card-row>
                        <lk-card-row>
                            <lk-card-key-value>
                                <template slot="key">Second Label</template>
                                <template slot="value">
                                    <lk-badge 
                                        mini 
                                        pill 
                                        success
                                    > Value</lk-badge>
                                </template>
                            </lk-card-key-value>
                        </lk-card-row>
                    </template>
                    <template slot="footer">
                        <lk-button
                            danger
                            outline
                            mini
                            margin-bottom="none"
                            display="inline-block"
                        >
                            Secondary One
                        </lk-button>
                        <lk-button
                            warning
                            outline
                            mini
                            margin-bottom="none"
                            display="inline-block"
                        >
                            Secondary Two
                        </lk-button>
                        <lk-button
                            success
                            outline
                            mini
                            margin-bottom="none"
                            display="inline-block"
                        >
                            Secondary Three
                        </lk-button>
                    </template>
                </lk-card>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="onePrimaryAndSeveralSecondaryCode"                    
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-card>
                    <template slot="title">A Card With A Subsection For Extra Information</template>
                    <template slot="body">
                        <lk-card-row>
                            <lk-card-key-value>
                                <template slot="key">First Label</template>
                                <template slot="value">First Value</template>
                            </lk-card-key-value>
                        </lk-card-row>
                        <lk-card-subsection>
                            <template slot="subtitle">Sub-section Title</template>
                            <template slot="body">
                                <lk-card-row>
                                    <lk-card-key-value>
                                        <template slot="key">First Label</template>
                                        <template slot="value">First Value</template>
                                    </lk-card-key-value>
                                </lk-card-row>
                                <lk-card-row>
                                    <lk-card-key-value>
                                        <template slot="key">Second Label</template>
                                        <template slot="value">Second Value</template>
                                    </lk-card-key-value>
                                </lk-card-row>
                            </template>
                        </lk-card-subsection>
                        <lk-card-row>
                            <lk-card-key-value>
                                <template slot="key">Second Label</template>
                                <template slot="value">
                                    <lk-badge 
                                        mini 
                                        pill 
                                        success
                                    > Second Value</lk-badge>
                                </template>
                            </lk-card-key-value>
                        </lk-card-row>
                    </template>
                    <template slot="footer">
                        <lk-button
                            danger
                            outline
                            mini
                            margin-bottom="none"
                            display="inline-block"
                        >
                            Secondary One
                        </lk-button>
                        <lk-button
                            warning
                            outline
                            mini
                            margin-bottom="none"
                            display="inline-block"
                        >
                            Secondary Two
                        </lk-button>
                        <lk-button
                            success
                            outline
                            mini
                            margin-bottom="none"
                            display="inline-block"
                        >
                            Secondary Three
                        </lk-button>
                    </template>
                </lk-card>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="aCardWithASubsectionForExtraInformation"                    
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
    </lk-content>
</template>

<script>
import Code from '../../documentation/components/Code';
import Example from '../../documentation/components/examples/card/Example';

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
            isSelected: false,
        }
    },
    methods: {
        toggleSelection() {
            this.isSelected = !this.isSelected;
        }
    }
}
            `,
            interactionSampleTemplate: `
<!-- Component <template> content -->
<lk-card
    :isSelected="isSelected"
    @toggled:selection="toggleSelection()"
>
    <template slot="title">One Primary Button</template>
    <template slot="body">
        <lk-card-row>
            <lk-card-key-value>
                <template slot="key">Number Of Issues</template>
                <template slot="value">10,000</template>
            </lk-card-key-value>
        </lk-card-row>
        <lk-card-row>
            <lk-card-key-value>
                <template slot="key">Status</template>
                <template slot="value">
                    <lk-badge 
                        mini 
                        pill 
                        success
                    > Active</lk-badge>
                </template>
            </lk-card-key-value>
        </lk-card-row>
    </template>
    <template slot="footer">
        <lk-button
            primary
            mini
            margin-bottom="none"
            display="block"
        >
            Primary Action
        </lk-button>
    </template>
</lk-card>
            `,
            onePrimaryButtonAndADropdownMenuCode: `
<lk-card>
    <template slot="title">One Primary Button And A Dropdown Menu</template>
    <template slot="body">
        <lk-card-row>
            <lk-card-key-value>
                <template slot="key">First Label</template>
                <template slot="value">First Value</template>
            </lk-card-key-value>
        </lk-card-row>
        <lk-card-row>
            <lk-card-key-value>
                <template slot="key">Second Lable</template>
                <template slot="value">
                    <lk-badge 
                        mini 
                        pill 
                        success
                    > Value</lk-badge>
                </template>
            </lk-card-key-value>
        </lk-card-row>
    </template>
    <template slot="footer">
        <lk-row>
            <lk-column
                span="fill">
                <lk-button
                    primary
                    mini
                    margin-bottom="none"
                    display="block"
                >
                    Primary Action
                </lk-button>
            </lk-column>
            <lk-column
                span="auto"
            >
                <lk-dropdown-button
                    circle
                    :items="[
                        {
                            callback: () => setClickedItemValue('item-1-value'),
                            label: 'Item 1',
                        },
                        {
                            callback: () => setClickedItemValue('item-2-value'),
                            label: 'Item 2',
                        }
                    ]"
                    outline
                    mini
                    margin-bottom="none"
                    @toggled="setDropdownIsVisible"
                >
                    <lk-icon icon="ellipsis-v"></lk-icon>
                </lk-dropdown-button>
            </lk-column>
        </lk-row>
    </template>
</lk-card>
            `,
            onePrimaryAndSeveralSecondaryCode: `
<lk-card>
    <template slot="title">One Primary Button And Several Secondary Buttons</template>
    <template slot="body">
        <lk-card-row>
            <lk-button
                primary
                mini
                margin-bottom="none"
                display="block"
            >Primary Action</lk-button>
        </lk-card-row>
        <lk-card-row>
            <lk-card-key-value>
                <template slot="key">First Label</template>
                <template slot="value">First Value</template>
            </lk-card-key-value>
        </lk-card-row>
        <lk-card-row>
            <lk-card-key-value>
                <template slot="key">Second Label</template>
                <template slot="value">
                    <lk-badge 
                        mini 
                        pill 
                        success
                    > Value</lk-badge>
                </template>
            </lk-card-key-value>
        </lk-card-row>
    </template>
    <template slot="footer">
        <lk-button
            danger
            outline
            mini
            margin-bottom="none"
            display="inline-block"
        >
            Secondary One
        </lk-button>
        <lk-button
            warning
            outline
            mini
            margin-bottom="none"
            display="inline-block"
        >
            Secondary Two
        </lk-button>
        <lk-button
            success
            outline
            mini
            margin-bottom="none"
            display="inline-block"
        >
            Secondary Three
        </lk-button>
    </template>
</lk-card>
        `,
            aCardWithASubsectionForExtraInformation: `
<lk-card>
    <template slot="title">A Card With A Subsection For Extra Information</template>
    <template slot="body">
        <lk-card-row>
            <lk-card-key-value>
                <template slot="key">First Label</template>
                <template slot="value">First Value</template>
            </lk-card-key-value>
        </lk-card-row>
        <lk-card-subsection>
            <template slot="subtitle">Sub-section Title</template>
            <template slot="body">
                <lk-card-row>
                    <lk-card-key-value>
                        <template slot="key">First Label</template>
                        <template slot="value">First Value</template>
                    </lk-card-key-value>
                </lk-card-row>
                <lk-card-row>
                    <lk-card-key-value>
                        <template slot="key">Second Label</template>
                        <template slot="value">Second Value</template>
                    </lk-card-key-value>
                </lk-card-row>
            </template>
        </lk-card-subsection>
        <lk-card-row>
            <lk-card-key-value>
                <template slot="key">Second Label</template>
                <template slot="value">
                    <lk-badge 
                        mini 
                        pill 
                        success
                    > Second Value</lk-badge>
                </template>
            </lk-card-key-value>
        </lk-card-row>
    </template>
    <template slot="footer">
        <lk-button
            danger
            outline
            mini
            margin-bottom="none"
            display="inline-block"
        >
            Secondary One
        </lk-button>
        <lk-button
            warning
            outline
            mini
            margin-bottom="none"
            display="inline-block"
        >
            Secondary Two
        </lk-button>
        <lk-button
            success
            outline
            mini
            margin-bottom="none"
            display="inline-block"
        >
            Secondary Three
        </lk-button>
    </template>
    </lk-card>
        `,
        };
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
