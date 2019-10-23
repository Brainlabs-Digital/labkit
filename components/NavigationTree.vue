<template>
    <div>
        <span 
            v-if="title !== undefined" 
            :class="$style.title"
        >{{title}}</span>
        <ul :class="classes">
            <li 
                v-for="item of items" 
                :key="item.label">
                <template v-if="item.items !== undefined">
                    <lk-navigation-tree
                        :items="item.items"
                        :nesting-level="nestingLevel + 1"
                        :title="item.label"
                    />
                </template>
                <router-link
                    v-else
                    exact
                    :exact-active-class="$style['active-link']"
                    :to="item.link"
                >{{item.label}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
const maxNestingLevels = 2;

export default {
    computed: {
        classes() {
            const classes = [this.$style.container];
            if (this.nestingLevel > 0) {
                const styleNestingLevel =
                    this.nestingLevel > maxNestingLevels
                        ? maxNestingLevels
                        : this.nestingLevel;
                classes.push(this.$style[`nested_${styleNestingLevel}`]);
            }
            if (this.noOverflow === true) {
                classes.push(this.$style['no-overflow']);
            }
            if (this.noPadding === true) {
                classes.push(this.$style['no-padding']);
            }
            return classes;
        },
    },
    props: {
        items: {
            required: true,
            type: Array,
        },
        nestingLevel: {
            default: 0,
            type: Number,
        },
        noOverflow: {
            type: Boolean,
        },
        noPadding: {
            type: Boolean,
        },
        title: {
            type: String,
        },
    },
};
</script>

<style module lang="scss">
@import '../styles/variables';

.container {
    padding: 0 spacing-horizontal(badge) spacing-vertical(content) 0;
    text-transform: capitalize;
    > li {
        display: list-item;
        font-size: font-size(body);
        font-weight: bold;
        margin: 0;
    }
    a {
        border: border-width() solid transparent;
        border-radius: border-radius(badge);
        display: block;
        margin: 0 (0 - spacing-horizontal(badge));
        padding: spacing-vertical(badge) spacing-horizontal(badge);
        text-decoration: none;
        transition: background $transition-duration,
            border-color $transition-duration, color $transition-duration;
        transition-timing-function: $transition-timing-function;
        &:active,
        &:hover {
            border-color: color(link, dark);
            background: color(link, dark);
            color: color(text, inverse);
        }
    }
    a.active-link {
        background: color(text);
        border-color: color(text);
        color: color(text, inverse);
        pointer-events: none;
    }
    span {
        padding: spacing-vertical(badge) 0;
    }
}

.nested_1 {
    border-left: border-width() solid border-color();
    padding: spacing-vertical(content) 0 spacing-vertical(content)
        spacing-horizontal();
    > li {
        font-size: font-size(label);
    }
}

.nested_2 {
    @extend .nested_1;
    > li {
        font-size: font-size();
    }
}

.title {
    display: block;
    margin: 0 0 (spacing-vertical(content) * 0.25);
}

.no-overflow {
    padding-left: spacing-horizontal(badge);
}

.no-padding {
    padding-bottom: 0;
}
</style>
