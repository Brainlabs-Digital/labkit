<template>
    <lk-wrapper v-bind="wrapperProps">
        <lk-row
            gutter="mini"
            align-items-center
        >
            <lk-column span="auto">
                <lk-button
                    :compact="compact"
                    :disabled="page === 1"
                    :mini="mini"
                    margin-bottom="none"
                    outline
                    :primary="page !== 1"
                    @click.native="emitPage(1)"
                >First</lk-button>
            </lk-column>
            <lk-column span="auto">
                <lk-button
                    :compact="compact"
                    :disabled="page === 1"
                    :mini="mini"
                    margin-bottom="none"
                    outline
                    :primary="page !== 1"
                    @click.native="emitPage(page - 1)"
                >Previous</lk-button>
            </lk-column>
            <lk-column span="auto">
                <p :class="currentPageTextClasses">
                    Page <strong>{{page}}</strong> of {{totalPages}}
                </p>
            </lk-column>
            <lk-column span="auto">
                <lk-button
                    :compact="compact"
                    :disabled="page === totalPages"
                    :mini="mini"
                    margin-bottom="none"
                    outline
                    :primary="page !== totalPages"
                    @click.native="emitPage(page + 1)"
                >Next</lk-button>
            </lk-column>
            <lk-column span="auto">
                <lk-button
                    :compact="compact"
                    :disabled="page === totalPages"
                    :mini="mini"
                    margin-bottom="none"
                    outline
                    :primary="page !== totalPages"
                    @click.native="emitPage(totalPages)"
                >Last</lk-button>
            </lk-column>
        </lk-row>
    </lk-wrapper>
</template>

<script>
export default {
    computed: {
        currentPageTextClasses() {
            const classes = [this.$style['current-page-text']];
            if (this.compact === true) {
                classes.push(this.$style.compact);
            }
            if (this.mini === true) {
                classes.push(this.$style.mini);
            }
            return classes;
        },
        wrapperProps() {
            return {
                'margin-bottom': 'content',
                ...this.$attrs,
                display: 'inline-block',
            };
        },
    },
    methods: {
        emitPage(page) {
            this.$emit('updated:page', page);
        },
    },
    props: {
        compact: {
            default: false,
            type: Boolean,
        },
        mini: {
            default: false,
            type: Boolean,
        },
        page: {
            required: true,
            type: Number,
        },
        totalPages: {
            required: true,
            type: Number,
        },
    },
};
</script>

<style module lang="scss">
@import '../styles/variables';

.current-page-text {
    display: inline-block;
    font-size: font-size();
    margin: 0 spacing-horizontal(mini);
    &.mini {
        font-size: font-size(caption);
    }
}
</style>
