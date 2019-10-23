<template>
    <div :class="classes">
        <b 
            v-if="noTrunk === false" 
            :class="$style.trunk" />
        <b 
            v-if="noBranch === false" 
            :class="$style.branch" />
        <div :class="$style.content">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        classes() {
            const classes = [this.$style.container];
            if (this.root === false) {
                classes.push(this.$style.child);
            } else {
                classes.push(this.$style.root);
            }
            if (this.contentMargin === true) {
                classes.push(this.$style['content-margin']);
            } else if (this.layoutMargin === true) {
                classes.push(this.$style['layout-margin']);
            }
            return classes;
        },
    },
    props: {
        contentMargin: {
            type: Boolean,
        },
        layoutMargin: {
            type: Boolean,
        },
        noBranch: {
            type: Boolean,
        },
        noTrunk: {
            type: Boolean,
        },
        root: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import '../styles/variables';

.branch {
    border-top: border-width(thick) solid border-color();
    display: block;
    left: spacing-horizontal();
    position: absolute;
    top: spacing-vertical();
    width: spacing-horizontal() + border-width(thick);
}

.container {
    margin: 0 0 spacing-vertical(content);
    padding: 0;
    position: relative;
    &:after {
        content: '';
        display: table;
        clear: both;
    }
    &.child {
        margin: 0;
        padding: 0 0 0 ((spacing-horizontal() * 2) + border-width(thick));
        .trunk {
            left: (spacing-horizontal() * 3) + border-width(thick);
        }
    }
    &.content-margin {
        margin: 0 0 spacing-vertical(content);
    }
    &.layout-margin {
        margin: 0 0 spacing-vertical();
    }
}

.content {
    position: relative;
    z-index: 1;
}

.trunk {
    border-left: border-width(thick) solid border-color();
    bottom: 0;
    display: block;
    left: spacing-horizontal();
    position: absolute;
    top: 0;
    z-index: 0;
}

.root > .trunk {
    left: spacing-horizontal() !important;
}
</style>
