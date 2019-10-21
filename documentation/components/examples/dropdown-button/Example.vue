<template>
    <div>
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
            display="inline-block"
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
            <lk-icon icon="ellipsis-v"/>
        </lk-dropdown-button>
        <lk-content>
            <lk-divider margin-bottom="content"/>
            <p v-if="clickedItemValue === undefined">
                <em>No item has been clicked.</em>
            </p>
            <p v-else>
                <em>Clicked item value: </em><strong>{{clickedItemValue}}</strong>
            </p>
            <lk-divider margin-bottom="content"/>
            <p v-if="dropdownIsVisible === true">
                Dropdown is <strong>visible</strong>.
            </p>
            <p v-else>
                Dropdown is <strong>not visible</strong>.
            </p>
        </lk-content>
    </div>
</template>

<script>
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
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
