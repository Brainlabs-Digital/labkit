<template>
    <lk-content>
        <h1>Dropdown menu</h1>
        <p>
            The dropdown menu component (
            <code>lk-dropdown-menu</code>) is an implementation of the
            <router-link to="/labkit/components/popper">Popper</router-link>component and has access to all of it's props.
        </p>
        <p>The following Popper props are set by default but can be overwritten:</p>
        <ul>
            <li>
                <code>hide-on-body-click</code> is set to
                <code>true</code>.
            </li>
        </ul>
        <p>The following Popper props are hard-coded and cannot be overwritten:</p>
        <ul>
            <li>
                <code>hover</code> is set to
                <code>false</code>.
            </li>
            <li>
                <code>light</code> is set to
                <code>true</code>.
            </li>
            <li>
                <code>no-arrow</code> is set to
                <code>true</code>.
            </li>
        </ul>
        <lk-alert 
            margin-bottom 
            primary>
            <template slot="content">
                <p>
                    <strong>Using a dropdown menu with a button?</strong> If you are then it is recommended that you use the dropdown button component to avoid having to repeat boilerplate code.
                </p>
            </template>
            <template slot="actionItems">
                <lk-button 
                    link="/labkit/components/dropdown-button" 
                    primary>Go To Dropdown Button Component</lk-button>
            </template>
        </lk-alert>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <example/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none" 
                padding-bottom="none">
                <format-code 
                    :code="interactionSampleScript" 
                    language="js"/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none" 
                padding-bottom="none">
                <format-code 
                    :code="interactionSampleTemplate" 
                    language="html" 
                    rounded-bottom-corners/>
            </lk-panel-body>
        </lk-panel>
        <p>A dropdown menu can be used on any element, not just buttons</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-content>
                    <p>
                        Click the
                        <lk-dropdown-menu :items="sampleItems">
                            <strong>bold text</strong>
                        </lk-dropdown-menu>to activate the dropdown menu.
                    </p>
                    <lk-divider margin-bottom="content"/>
                    <p>
                        Click the
                        <lk-dropdown-menu :items="sampleItems">
                            <a 
                                href="#" 
                                @click.prevent>link</a>
                        </lk-dropdown-menu>to activate the dropdown menu.
                    </p>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none" 
                padding-bottom="none">
                <format-code 
                    :code="code" 
                    language="html" 
                    rounded-bottom-corners/>
            </lk-panel-body>
        </lk-panel>
    </lk-content>
</template>

<script>
import Code from '../../documentation/components/Code';
import Example from '../../documentation/components/examples/dropdown-menu/Example';

export default {
    components: {
        Example,
        formatCode: Code,
    },
    data() {
        return {
            code: `

<lk-content>
    <p>
        Click the 
        <lk-dropdown-menu :items="sampleItems">
            <strong>bold text</strong>
        </lk-dropdown-menu>
        to activate the dropdown menu.
    </p>
    <lk-divider margin-bottom="content" />
    <p>
        Click the 
        <lk-dropdown-menu :items="sampleItems">
            <a href="#" @click.prevent>link</a>
        </lk-dropdown-menu>
        to activate the dropdown menu.
    </p>
</lk-content>
                    `,
            interactionSampleScript: `
// Component <script> content
export default {
    computed: {
        toggleMenuIsActiveButtonText() {
            if (this.isActive === true) {
                return 'Disable dropdown';
            } else {
                return 'Enable dropdown';
            }
        },
    },
    data() {
        return {
            clickedItemValue: undefined,
            dropdownIsVisible: false,
            isActive: true,
            items: [
                {
                    callback: () => this.setClickedItemValue('active-value'),
                    isDisabled: true,
                    label: 'Disabled item',
                },
                {
                    callback: () => this.setClickedItemValue('active-value'),
                    isDisabled: true,
                    label: 'Disabled item',
                },
                {
                    callback: () => this.setClickedItemValue('active-value'),
                    isActive: true,
                    label: 'Active item',
                },
                {
                    callback: () =>
                        this.setClickedItemValue('active-value-with-icon'),
                    iconProps: {
                        icon: 'exclamation-triangle',
                    },
                    isActive: true,
                    label: 'Active item with icon',
                },
                {
                    callback: () => this.setClickedItemValue('item-value'),
                    label: 'Item',
                },
                {
                    label: 'Item as a link to Introduction',
                    link: '/labkit/',
                },
                {
                    label: 'Item as an external link to Google',
                    externalLink: 'https://google.co.uk',
                },
                {
                    callback: () =>
                        this.setClickedItemValue('item-with-icon-value'),
                    iconProps: {
                        icon: 'check',
                    },
                    label: 'Item with icon',
                },
                {
                    callback: () =>
                        this.setClickedItemValue('item-with-divider-value'),
                    hasDivider: true,
                    label: 'Item with divider',
                },
                {
                    callback: () =>
                        this.setClickedItemValue('another-item-value'),
                    label: 'Another item',
                },
                {
                    label: 'Item with no callback',
                },
            ],
        };
    },
    methods: {
        setClickedItemValue(value) {
            this.clickedItemValue = value;
        },
        setDropdownIsVisible(isVisible) {
            this.dropdownIsVisible = isVisible;
        },
        toggleIsActive() {
            this.isActive = !this.isActive;
        },
    },
};
            `,
            interactionSampleTemplate: `
<!-- Component <template> content -->
<lk-dropdown-menu
    :disabled="isActive === false"
    :items="items"
    @toggled="setDropdownIsVisible"
>
    <lk-button
        :active="dropdownIsVisible === true"
        :disabled="isActive === false"
        margin-bottom="none"
    >Click to show menu</lk-button>
</lk-dropdown-menu>
<lk-button
    :danger="isActive === true"
    outline
    :success="isActive === false"
    @click.native="toggleIsActive"
>{{toggleMenuIsActiveButtonText}}</lk-button>
<lk-divider margin-bottom="content"></lk-divider>
<lk-content>
    <p v-if="isActive === true">
        Dropdown is <strong>enabled</strong>.
    </p>
    <p v-else>
        Dropdown is <strong>not disabled</strong>.
    </p>
    <lk-divider margin-bottom="content"></lk-divider>
    <p v-if="clickedItemValue === undefined">
        <em>No item has been clicked.</em>
    </p>
    <p v-else>
        <em>Clicked item value: </em><strong>{{clickedItemValue}}</strong>
    </p>
</lk-content>
            `,
            sampleItems: [
                {
                    callback: () => {},
                    label: 'Item One',
                },
                {
                    callback: () => {},
                    label: 'Item Two',
                },
                {
                    callback: () => {},
                    label: 'Item Three',
                },
            ],
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
