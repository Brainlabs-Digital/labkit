<template>
    <ul :class="classes">
        <li 
            v-for="(item, index) in items" 
            :key="`${item.label}-${index}`">
            <router-link 
                v-if="item.link !== undefined" 
                :to="item.link">
                <lk-icon 
                    v-if="item.iconProps !== undefined" 
                    v-bind="item.iconProps" />
                {{item.label}}</router-link>
            <template v-else>
                <lk-icon 
                    v-if="item.iconProps !== undefined" 
                    v-bind="item.iconProps" />
                {{item.label}}
            </template>
            <span 
                v-if="index !== items.length - 1" 
                :class="$style.icon">
                <lk-icon icon="angle-right" />&nbsp;
            </span>
        </li>
    </ul>
</template>

<script>
export default {
    computed: {
        classes() {
            const classes = [this.$style.container];
            if (this.noMargin === true) {
                classes.push(this.$style['no-margin']);
            }
            return classes;
        },
    },
    props: {
        items: {
            type: Array,
        },
        noMargin: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import '../styles/variables';

.container {
    font-size: font-size();
    margin: 0 0 spacing-vertical(content);
    &.no-margin {
        margin: 0;
    }
    > li {
        color: color(text, muted);
        display: inline-block;
        font-weight: bold;
        &:last-child {
            color: color(text);
            font-weight: 900;
        }
        > a {
            text-decoration: none;
            &:active,
            &:hover {
                text-decoration: underline;
            }
        }
        .icon {
            color: color(text, light);
            padding: 0 0.2rem;
        }
    }
}
</style>
