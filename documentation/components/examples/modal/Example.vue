<template>
    <div>
        <lk-button @click.native="toggleModalIsVisible">Show modal</lk-button>
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
    </div>
</template>

<script>
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
</script>

<style module lang="scss">
@import '../../../../styles/variables';
</style>
