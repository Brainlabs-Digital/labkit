<template>
    <div>
        <lk-dropdown-menu 
            :disabled="isActive === false" 
            :items="items" 
            @toggled="setDropdownIsVisible">
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
        <lk-divider margin-bottom="content"/>
        <lk-content>
            <p v-if="isActive === true">
                Dropdown is
                <strong>enabled</strong>.
            </p>
            <p v-else>
                Dropdown is
                <strong>not disabled</strong>.
            </p>
            <lk-divider margin-bottom="content"/>
            <p v-if="clickedItemValue === undefined">
                <em>No item has been clicked.</em>
            </p>
            <p v-else>
                <em>Clicked item value:</em>
                <strong>{{clickedItemValue}}</strong>
            </p>
        </lk-content>
    </div>
</template>

<script>
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
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
