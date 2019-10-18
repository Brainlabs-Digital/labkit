<template>
    <lk-padder v-bind="padderProps">
        <lk-wrapper v-bind="wrapperProps">
            <div :class="classes">
                <h1 :class="titleClasses"><slot /></h1>
            </div>
        </lk-wrapper>
    </lk-padder>
</template>

<script>
export default {
    computed: {
        classes() {
            const classes = [this.$style.container];
            if (this.sectionHeading === true) {
                classes.push(this.$style['section-heading']);
            } else if (this.subSectionHeading === true) {
                classes.push(this.$style['sub-section-heading']);
            }
            return classes;
        },
        padderProps() {
            return {
                'padding-top': true,
                ...this.$attrs,
                'padding-bottom': 'none',
            };
        },
        titleClasses() {
            const classes = [this.$style.title];
            if (this.sectionHeading === true) {
                classes.push(this.$style['section-heading']);
            } else if (this.subSectionHeading === true) {
                classes.push(this.$style['sub-section-heading']);
            }
            return classes;
        },
        wrapperProps() {
            return {
                'margin-bottom': true,
                ...this.$attrs,
            };
        },
    },
    props: {
        sectionHeading: {
            type: Boolean,
        },
        subSectionHeading: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';

.container {
    border-bottom: border-width(medium) solid border-color();
    &.section-heading {
        border-width: border-width(medium);
    }
    &.sub-section-heading {
        border-width: border-width();
    }
}

.title {
    font-size: font-size(heading);
    font-weight: 900;
    padding: 0 0 spacing-vertical(mini);
    &.section-heading {
        font-size: font-size(section-heading);
    }
    &.sub-section-heading {
        font-size: font-size(sub-heading);
        font-weight: bold;
    }
}
</style>
