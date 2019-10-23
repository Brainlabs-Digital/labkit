<template>
    <div>
        <lk-card
            :is-selected="isSelected"
            @toggled:selection="toggleSelection()"
        >
            <template slot="title">One Primary Button</template>
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
                    primary
                    mini
                    margin-bottom="none"
                    display="block"
                >
                    Primary Action
                </lk-button>
            </template>
        </lk-card>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            isSelected: false,
        };
    },
    methods: {
        toggleSelection() {
            this.isSelected = !this.isSelected;
        },
    },
};
</script>

<style module lang="scss">
@import '../../../../styles/variables';
</style>
