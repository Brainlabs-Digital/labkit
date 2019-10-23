<template>
    <div :class="[$style.container]">
        <ul
            :class="classes"
            ref="nav"
            @scroll="setScrollOffset"
        >
            <li
                v-for="(item, index) of items"
                :class="[
                    item.textTransform === false ? $style['no-text-transform'] : '',
                ]"
                :key="item.label"
            >
                <router-link
                    v-if="item.link !== undefined"
                    exact
                    :active-class="$style['active-link']"
                    :class="item.isActive === true ? $style['active-link'] : ''"
                    :to="item.link"
                >
                    <lk-icon
                        v-if="item.iconProps !== undefined"
                        v-bind="item.iconProps" 
                    />
                    {{item.label}}
                </router-link>
                <span
                    v-else-if="item.callback !== undefined"
                    :class="[
                        item.isActive === true ? $style['active-link'] : '',
                    ]"
                    @click="item.callback"
                >
                    <lk-icon
                        v-if="item.iconProps !== undefined"
                        v-bind="item.iconProps" 
                    />
                    {{item.label}}
                </span>
                <lk-dropdown-menu
                    v-else
                    bottom
                    :items="item.items"
                    @toggled="setDropdownIsVisible(index, ...arguments)"
                >
                    <span 
                        :class="[
                            $style.dropdown,
                            activeDropdowns[index] === true ? $style.active : '',
                    ]">
                        <lk-icon
                            v-if="item.iconProps !== undefined"
                            v-bind="item.iconProps" 
                        />
                        {{item.label}}
                        <span :class="$style.icon">
                            <lk-icon icon="angle-down"/>
                        </span>
                    </span>
                </lk-dropdown-menu>
            </li>
        </ul>
        <transition name="fade">
            <div
                v-if="hasOverflowLeft === true"
                :class="[$style.fade, $style['fade-left']]"
            ><lk-icon
                flop
                icon="angle-right"
            /></div>
        </transition>
        <transition name="fade">
            <div 
                v-if="hasOverflowRight === true"
                :class="[$style.fade, $style['fade-right']]"
            ><lk-icon icon="angle-right" /></div>
        </transition>
    </div>
</template>

<script>
/*
    TODO:
    Maybe the scrollability should be made into a general component so that it can
    be used to wrap other things, such as rows of buttons.
*/
const overflowIndicatorWidth = 16;

export default {
    beforeDestroy() {
        window.removeEventListener('resize', this.setParameters, true);
    },
    computed: {
        classes() {
            const classes = [this.$style.content];
            if (this.badge === true) {
                classes.push(this.$style.badge);
            } else if (this.block === true) {
                classes.push(this.$style.block);
            }
            if (this.compact === true) {
                classes.push(this.$style.compact);
            } else if (this.mini === true) {
                classes.push(this.$style.mini);
            }
            if (this.darkText === true) {
                classes.push(this.$style['dark-text']);
            }
            if (this.linkText === true) {
                classes.push(this.$style['link-text']);
            }
            return classes;
        },
        hasOverflowLeft() {
            return this.scrollOffset > 0;
        },
        hasOverflowRight() {
            return this.scrollOffset < this.maxScroll;
        },
    },
    created() {
        window.addEventListener('resize', this.setParameters, true);
    },
    data() {
        return {
            activeDropdowns: {},
            maxScroll: undefined,
            scrollOffset: undefined,
        };
    },
    methods: {
        setDropdownIsVisible(index, isVisible) {
            this.activeDropdowns = {
                ...this.activeDropdowns,
                [index]: isVisible,
            };
        },
        setMaxScroll() {
            this.maxScroll =
                this.$refs.nav.scrollWidth - this.$refs.nav.offsetWidth;
        },
        setParameters() {
            this.setMaxScroll();
            this.setScrollOffset();
        },
        setScrollOffset() {
            this.scrollOffset = this.$refs.nav.scrollLeft;
        },
        showActiveElement() {
            const [activeElement] = this.$refs.nav.getElementsByClassName(
                this.$style['active-link'],
            );
            if (activeElement !== undefined) {
                const activeElementIsFullyVisible =
                    this.$refs.nav.getBoundingClientRect().width >
                    activeElement.getBoundingClientRect().right;
                if (activeElementIsFullyVisible === false) {
                    this.$refs.nav.scrollLeft =
                        activeElement.getBoundingClientRect().left -
                        overflowIndicatorWidth;
                }
            }
        },
    },
    mounted() {
        this.showActiveElement();
        this.setParameters();
    },
    props: {
        badge: {
            type: Boolean,
        },
        block: {
            type: Boolean,
        },
        compact: {
            type: Boolean,
        },
        darkText: {
            type: Boolean,
        },
        items: {
            required: true,
            type: Array,
        },
        linkText: {
            type: Boolean,
        },
        mini: {
            type: Boolean,
        },
        title: {
            type: String,
        },
    },
    watch: {
        async items() {
            /*
                If the contents of the navigation change then we want to recompute
                the width and scrollable width of the navigation.
            */
            await this.$nextTick();
            this.setParameters();
        },
    },
};
</script>

<style module lang="scss">
@import '../styles/variables';

$spacing-link-vertical: spacing-vertical(button) - border-width(thick);

.container {
    position: relative;
    width: 100%;
}

.content {
    font-size: font-size(body);
    overflow-x: scroll;
    scrollbar-width: none;
    text-transform: capitalize;
    white-space: nowrap;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
    &.dark-text > li {
        > a,
        > span,
        .dropdown {
            color: color(text);
        }
    }
    &.link-text > li {
        > a,
        > span,
        .dropdown {
            color: color(link);
            > .icon {
                color: color(link, semi-muted);
            }
        }
    }
    > li {
        display: inline-block;
        font-weight: bold;
        margin: 0;
        &.no-text-transform {
            text-transform: none;
        }
        > a,
        > span,
        .dropdown {
            border-bottom: border-width(thick) solid transparent;
            color: color(text, muted);
            cursor: pointer;
            display: block;
            padding: (($spacing-link-vertical + border-width(thick)) - 0.1rem)
                spacing-horizontal(button) $spacing-link-vertical;
            text-decoration: none;
            transition: border-color $transition-duration, color,
                $transition-duration;
            transition-timing-function: $transition-timing-function;
            &:active,
            &:hover {
                border-color: color(link, dark);
                color: color(link, dark);
                > .icon {
                    color: color(link, dark);
                }
            }
            &.active > .icon {
                color: color(text);
            }
            > .icon {
                color: color(text, muted);
                transition: color, $transition-duration;
                transition-timing-function: $transition-timing-function;
            }
            &.active {
                border-color: color(text);
                color: color(text);
            }
        }
        a.active-link,
        span.active-link {
            border-color: color(text);
            color: color(text);
        }
    }
    a.active-link,
    span.active-link {
        pointer-events: none;
    }
    &.badge {
        > li {
            margin: 0
                (
                    (spacing-horizontal(button) * 1.25) -
                        (spacing-horizontal(badge) * 2)
                )
                0 0;
            padding: (spacing-vertical(button) - spacing-vertical(badge)) 0;
            &:last-child {
                margin: 0;
            }
            > a,
            > span,
            .dropdown {
                border: border-width() solid transparent;
                border-radius: border-radius(badge);
                cursor: pointer;
                display: block;
                margin: 0;
                padding: spacing-vertical(badge) spacing-horizontal(badge);
                text-decoration: none;
                transition: background $transition-duration,
                    border-color $transition-duration, color,
                    $transition-duration;
                transition-timing-function: $transition-timing-function;
                &:active,
                &:hover {
                    border-color: color(link, dark);
                    background: color(link, dark);
                    color: color(text, inverse);
                    > .icon {
                        color: color(link, semi-muted);
                    }
                }
                &.active > .icon {
                    color: color(text, inverse);
                }
                &.active {
                    background: color(text);
                    border-color: color(text);
                    color: color(text, inverse);
                }
            }
        }
        a.active-link,
        span.active-link {
            background: color(text);
            border-color: color(text);
            color: color(text, inverse);
            pointer-events: none;
        }
    }
    &.block {
        > li {
            > a,
            > span,
            .dropdown {
                border: none;
                cursor: pointer;
                display: block;
                margin: 0;
                padding: spacing-vertical(button) spacing-horizontal(button);
                text-decoration: none;
                transition: background $transition-duration,
                    border-color $transition-duration, color,
                    $transition-duration;
                transition-timing-function: $transition-timing-function;
                &:active,
                &:hover {
                    background: color(link, dark);
                    color: color(text, inverse);
                    > .icon {
                        color: color(link, semi-muted);
                    }
                }
                &.active > .icon {
                    color: color(text, inverse);
                }
                &.active {
                    background: color(text);
                    color: color(text, inverse);
                }
            }
        }
        a.active-link,
        span.active-link {
            background: color(text);
            color: color(text, inverse);
            pointer-events: none;
        }
    }
    &.compact {
        font-size: font-size(label);
    }
    &.mini {
        font-size: font-size();
    }
}

.fade {
    align-items: center;
    bottom: 0;
    display: flex;
    font-size: font-size(sub-heading);
    line-height: 0;
    padding: 0 0 spacing-vertical(mini);
    position: absolute;
    top: 0;
    width: spacing-horizontal();
}

.fade-left {
    background: linear-gradient(
        to right,
        background-color(body) 45%,
        rgba(background-color(body), 0)
    );
    left: 0;
}

.fade-right {
    background: linear-gradient(
        to left,
        background-color(body) 45%,
        rgba(background-color(body), 0)
    );
    justify-content: flex-end;
    right: 0;
}
</style>
