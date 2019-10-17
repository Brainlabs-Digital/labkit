<template>
    <lk-content>
        <h1>Dropdown button</h1>
        <p>The dropdown button component (<code>lk-dropdown-menu</code>) is a wrapper around the <router-link to="/labkit/components/button">button</router-link> and <router-link to="/labkit/components/dropdown-menu">dropdown menu</router-link> components.</p>
        <p>It exists to allow us to avoid common boilerplate code that is required when hooking up button and dropdown menu interactions and states.</p>
        <p>Props are passed directly through, with only the <code>active</code> button prop being overwritten by the dropdown button component. As such please refer to the documentation for <router-link to="/labkit/components/button">button</router-link> and <router-link to="/labkit/components/dropdown-menu">dropdown menu</router-link>.</p>
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
    </lk-content>
</template>

<script>
import Code from '../../documentation/components/Code';
import Example from '../../documentation/components/examples/dropdown-button/Example';

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
            clickedItemValue: undefined,
            dropdownIsVisible: false,
        };
    },
    methods: {
        setClickedItemValue(value) {
            this.clickedItemValue = value;
        },
        setDropdownIsVisible(isVisible) {
            this.dropdownIsVisible = isVisible;
        },
    },
};
            `,
            interactionSampleTemplate: `
<!-- Component <template> content -->
<lk-dropdown-button
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
    @toggled="setDropdownIsVisible"
>
    Dropdown button
</lk-dropdown-button>
<lk-dropdown-button
    :items="[
        {
            callback: () => setClickedItemValue('item-3-value'),
            label: 'Item 3',
        },
        {
            callback: () => setClickedItemValue('item-4-value'),
            label: 'Item 4',
        }
    ]"
    outline
    @toggled="setDropdownIsVisible"
>
    <template slot="label">Label:</template>
    Dropdown button
</lk-dropdown-button>
<lk-dropdown-button
    circle
    :items="[
        {
            callback: () => setClickedItemValue('item-5-value'),
            label: 'Item 5',
        },
        {
            callback: () => setClickedItemValue('item-6-value'),
            label: 'Item 6',
        }
    ]"
    outline
    right
    @toggled="setDropdownIsVisible"
>
    <lk-icon icon="ellipsis-v"></lk-icon>
</lk-dropdown-button>
<lk-content>
    <lk-divider margin-bottom="content"></lk-divider>
    <p v-if="clickedItemValue === undefined">
        <em>No item has been clicked.</em>
    </p>
    <p v-else>
        <em>Clicked item value: </em><strong>{{clickedItemValue}}</strong>
    </p>
    <lk-divider margin-bottom="content"></lk-divider>
    <p v-if="dropdownIsVisible === true">
        Dropdown is <strong>visible</strong>.
    </p>
    <p v-else>
        Dropdown is <strong>not visible</strong>.
    </p>
</lk-content>
            `,
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
