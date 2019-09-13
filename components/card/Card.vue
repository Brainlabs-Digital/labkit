<template>
    <lk-wrapper v-bind="wrapperProps">
        <lk-panel
            :highlighted="isSelected === true"
            :shadow-shallow="isSelected === true"
        >
            <lk-panel-header
                compact
                :highlighted="isSelected === true"
            >
                <slot
                    name="title"
                    slot="title"
                />
                <template slot="actionItems">
                    <lk-button
                        v-if="isSelected === false"
                        circle
                        mini
                        margin-bottom="none"
                        outline
                        @click.native="toggleSelection"
                    >
                        <lk-icon icon="square-outline" />
                    </lk-button>
                    <lk-button
                        v-else-if="isSelected === true"
                        circle
                        mini
                        margin-bottom="none"
                        @click.native="toggleSelection"
                    >
                        <lk-icon icon="check" />
                    </lk-button>
                </template>
            </lk-panel-header>
            <lk-panel-body
                padding-vertical="mini"
            >
                <slot
                    name="body"
                />
            </lk-panel-body>
            <lk-panel-footer
                padding-vertical="compact"
            >
                <slot
                    name="footer"
                />
            </lk-panel-footer>
        </lk-panel>
    </lk-wrapper>
</template>

<script>
export default {
    computed: {
        wrapperProps() {
            return {
                'margin-bottom': 'content',
                ...this.$attrs,
            };
        },
    },
    methods: {
        toggleSelection() {
            this.$emit('toggled:selection');
        },
    },
    props: {
        isSelected: {
            type: Boolean,
            default: null,
        },
    },
};
</script>
