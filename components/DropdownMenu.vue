<template>
    <lk-popper 
        v-bind="popperProps" 
        @toggled="emitToggledState">
        <slot/>
        <div 
            :class="$style.container" 
            slot="content">
            <ul>
                <li
                    v-for="(item, index) in items"
                    :class="liClass(item, index)"
                    :key="`${item.label}-${index}`"
                >
                    <span 
                        v-if="item.isDisabled === true" 
                        :class="$style.disabled">
                        <span 
                            v-if="itemHasIcon(item)" 
                            :class="[$style.icon]">
                            <lk-icon v-bind="item.iconProps"/>
                        </span>
                        {{item.label}}
                    </span>
                    <span 
                        v-else-if="item.isActive === true" 
                        :class="itemClasses(item)">
                        <span 
                            v-if="itemHasIcon(item)" 
                            :class="[$style.icon]">
                            <lk-icon v-bind="item.iconProps"/>
                        </span>
                        {{item.label}}
                    </span>
                    <router-link
                        v-else-if="item.link !== undefined"
                        :class="itemClasses(item)"
                        :to="item.link"
                    >
                        <span 
                            v-if="itemHasIcon(item)" 
                            :class="[$style.icon]">
                            <lk-icon v-bind="item.iconProps"/>
                        </span>
                        {{item.label}}
                    </router-link>
                    <a
                        v-else-if="item.externalLink !== undefined"
                        :class="itemClasses(item)"
                        :href="item.externalLink"
                    >
                        <span 
                            v-if="itemHasIcon(item)" 
                            :class="[$style.icon]">
                            <lk-icon v-bind="item.iconProps"/>
                        </span>
                        {{item.label}}
                    </a>
                    <a
                        v-else-if="item.callback !== undefined"
                        :class="itemClasses(item)"
                        href="#"
                        @click.prevent="item.callback"
                    >
                        <span 
                            v-if="itemHasIcon(item)" 
                            :class="[$style.icon]">
                            <lk-icon v-bind="item.iconProps"/>
                        </span>
                        {{item.label}}
                    </a>
                    <span 
                        v-else 
                        :class="itemClasses(item)">
                        <span 
                            v-if="itemHasIcon(item)" 
                            :class="[$style.icon]">
                            <lk-icon v-bind="item.iconProps"/>
                        </span>
                        {{item.label}}
                    </span>
                </li>
            </ul>
        </div>
    </lk-popper>
</template>

<script>
export default {
    computed: {
        defaultToBottom() {
            return (
                this.top === false &&
                this.bottom === false &&
                this.left === false &&
                this.right === false
            );
        },
        defaultToStart() {
            return this.end === false && this.start === false;
        },
        popperProps() {
            return {
                bottom: this.$attrs.top === undefined,
                'hide-on-body-click': true,
                start: this.$attrs.end === undefined,
                ...this.$attrs,
                hover: false,
                light: true,
                'no-arrow': true,
            };
        },
    },
    methods: {
        emitToggledState(isVisible) {
            this.$emit('toggled', isVisible);
        },
        itemHasIcon(item) {
            return item.iconProps !== undefined;
        },
        liClass(item, index) {
            if (item.hasDivider === true && index < this.items.length - 1) {
                return [this.$style['bottom-border']];
            }
        },
        itemClasses(item) {
            const classes = [];

            if (item.isActive === true) {
                classes.push(this.$style.active);
            }

            if (item.iconProps !== undefined) {
                classes.push(this.$style['has-icon']);
            }

            return classes;
        },
    },
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style module lang="scss">
@import '../styles/variables';

.container {
    min-width: 23rem;
    padding: border-radius(button) 0;
    text-transform: capitalize;
    > ul > li {
        display: block;
        font-size: font-size();
        font-weight: bold;
        margin: 0;
        position: relative;
        &.bottom-border {
            border-bottom: border-width() solid border-color();
            margin: 0 0 spacing-vertical(badge);
            padding: 0 0 spacing-vertical(badge);
        }
        > a,
        > span {
            display: block;
            padding: spacing-vertical(badge) spacing-horizontal();
            text-decoration: none;
            transition: background $transition-duration,
                color $transition-duration;
            transition-timing-function: $transition-timing-function;
            &.has-icon {
                padding-right: (
                    spacing-horizontal() + font-size() + spacing-horizontal()
                );
            }
            &.disabled {
                color: color(text, muted);
                text-decoration: line-through;
            }
        }
        > a:active,
        > a:hover {
            background: color(link, dark);
            color: color(text, inverse);
            text-decoration: none;
        }
        > span.active {
            background: color(text);
            color: color(text, inverse);
        }
        .icon {
            padding-right: spacing-horizontal();
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
        }
    }
}
</style>
