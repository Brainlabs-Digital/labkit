<template>
    <div :class="classes">
        <slot/>
    </div>
</template>

<script>
export default {
    computed: {
        classes() {
            const classes = [this.$style.container];
            if (this.contentFontSizePrimary === true) {
                classes.push(this.$style['content-primary']);
            }
            return classes;
        },
    },
    props: {
        contentFontSizePrimary: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';

.container {
    > h1,
    > h2,
    > h3,
    > p {
        margin: 0 0 spacing-vertical(content);
    }
    > h1 {
        border-bottom: border-width(medium) solid border-color();
        font-size: font-size(heading);
        font-weight: 900;
        padding: spacing-vertical() 0 spacing-vertical(mini);
    }
    > h2 {
        border-bottom: border-width(medium) solid border-color();
        font-size: font-size(section-heading);
        font-weight: bold;
        padding: spacing-vertical() 0 spacing-vertical(mini);
    }
    > h3 {
        font-size: font-size(sub-heading);
        font-weight: bold;
        padding: spacing-vertical() 0 0;
    }
    > p {
        font-size: font-size(body);
        max-width: $content-readable-width;
    }
    > p > code,
    > ul > li > code {
        background: background-color(muted);
        border-radius: border-radius(badge);
        font-family: font-family(code);
        font-size: font-size();
        font-weight: bold;
        padding: spacing-vertical(badge) spacing-horizontal(badge);
        white-space: nowrap;
        vertical-align: baseline;
    }
    > ul {
        max-width: $content-readable-width;
        padding: 0 0 0 (spacing-horizontal() * 2);
        > li {
            display: list-item;
            font-size: font-size(body);
            list-style: disc;
            margin: 0 0 spacing-vertical(mini);
            &:last-child {
                margin-bottom: spacing-vertical(content);
            }
        }
    }
    &.content-primary {
        > p,
        > ul > li {
            font-size: font-size();
        }
        > p > code,
        > ul > li > code {
            font-size: font-size(caption);
        }
    }
}
</style>
