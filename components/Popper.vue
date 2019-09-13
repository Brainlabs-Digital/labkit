<template>
    <lk-wrapper v-bind="wrapperProps">
        <div
            :class="$style.container"
            :id="_uid"
            @click="toggle"
            @mouseover="mouseover"
            @mouseout="mouseout"
        >
            <span ref="element">
                <slot/>
            </span>
            <div 
                v-if="showContent === true"
                :class="$style.wrapper"
                ref="content"
            >
                <transition
                    appear
                    name="fade-scale"
                >
                    <div :class="contentClasses">
                        <slot name="content"/>
                        <span 
                            v-if="noArrow === false" 
                            :class="$style.arrow" 
                            ref="arrow"
                        />
                    </div>
                </transition>
            </div>
        </div>
    </lk-wrapper>
</template>

<script>
import Popper from 'popper.js';

export default {
    beforeDestroy() {
        clearTimeout(this.hideTimeout);
        if (this.hideOnBodyClick === true) {
            document.body.removeEventListener('click', this.hide, true);
        }
        if (this.$refs.content !== undefined) {
            this.$refs.content.parentNode.removeChild(this.$refs.content);
        }
    },
    computed: {
        contentClasses() {
            const classes = [this.$style.content];
            if (this.noArrow === true) {
                classes.push(this.$style['no-arrow']);
            }
            if (this.light === true) {
                classes.push(this.$style.light);
            }
            return classes;
        },
        placement() {
            let placement;
            if (this.bottom === true) {
                placement = 'bottom';
            } else if (this.left === true) {
                placement = 'left';
            } else if (this.right === true) {
                placement = 'right';
            } else if (this.top === true) {
                placement = 'top';
            } else {
                placement = 'auto';
            }
            let variation;
            if (this.end === true) {
                variation = 'end';
            } else if (this.start === true) {
                variation = 'start';
            }
            if (variation !== undefined) {
                return `${placement}-${variation}`;
            } else {
                return placement;
            }
        },
        wrapperProps() {
            return {
                display: 'inline-block',
                'margin-bottom': 'none',
                ...this.$attrs,
            };
        },
    },
    data() {
        return {
            hideAnimationFrame: undefined,
            hideTimeout: undefined,
            popper: undefined,
            showContent: false,
            showTimeout: undefined,
        };
    },
    methods: {
        hide(evt) {
            /*
                If `hideOnBodyClick` is true, then a click on the popper's element
                triggers both the hiding of the content and the showing of the
                content, meaning that the content is never hidden.

                To fix this, we traverse the element tree triggered by the click
                to check if the button is part of it: if it is then we do not
                attempt to hide the content and allow the click on the element
                to handle the toggling.
            */
            const uidString = String(this._uid);
            let componentClicked = false;
            let currentElem = evt.target;
            while (currentElem !== null && componentClicked === false) {
                componentClicked = uidString === currentElem.id;
                currentElem = currentElem.parentElement;
            }
            if (componentClicked === false) {
                this.showContent = false;
            }
        },
        mouseout() {
            if (this.hover === true) {
                /*
                    The reason why we wait for an animation frame is to
                    prevent flickering that occurs when hovering over items
                    contained within the popper wrapper: going between
                    items causes mouseout/mouseover events in very quick
                    succession.

                    By using an animation frame as a delay we can cancel it
                    in the subsequent mouseover (if there is one).
                */
                this.hideAnimationFrame = requestAnimationFrame(() => {
                    clearTimeout(this.showTimeout);
                    this.showTimeout = undefined;
                    if (this.hideDelaySeconds !== undefined) {
                        this.hideTimeout = setTimeout(() => {
                            this.showContent = false;
                        }, this.hideDelaySeconds * 1000);
                    } else {
                        this.showContent = false;
                    }
                });
            }
        },
        mouseover() {
            if (this.hover === true && this.disabled === false) {
                clearTimeout(this.hideTimeout);
                this.hideTimeout = undefined;
                cancelAnimationFrame(this.hideAnimationFrame);
                this.hideAnimationFrame = undefined;
                if (
                    this.showDelaySeconds !== undefined &&
                    this.showContent === false
                ) {
                    if (this.showTimeout === undefined) {
                        this.showTimeout = setTimeout(() => {
                            this.showContent = true;
                        }, this.showDelaySeconds * 1000);
                    }
                } else {
                    this.showContent = true;
                }
            }
        },
        toggle() {
            if (this.hover === false && this.disabled === false) {
                this.showContent = !this.showContent;
            }
        },
    },
    mounted() {
        if (this.hideOnBodyClick === true) {
            document.addEventListener('click', this.hide, true);
        }
    },
    props: {
        bottom: {
            type: Boolean,
        },
        disabled: {
            type: Boolean,
        },
        end: {
            type: Boolean,
        },
        hideDelaySeconds: {
            type: Number,
        },
        hideOnBodyClick: {
            type: Boolean,
        },
        hover: {
            type: Boolean,
        },
        left: {
            type: Boolean,
        },
        light: {
            type: Boolean,
        },
        noArrow: {
            type: Boolean,
        },
        right: {
            type: Boolean,
        },
        showDelaySeconds: {
            type: Number,
        },
        start: {
            type: Boolean,
        },
        top: {
            type: Boolean,
        },
    },
    watch: {
        disabled() {
            if (this.disabled === true) {
                this.showContent = false;
            }
        },
        showContent: {
            async handler(showContent, previous) {
                if (previous !== undefined) {
                    this.$emit('toggled', showContent);
                }
                if (showContent === true) {
                    await this.$nextTick();
                    document.body.appendChild(this.$refs.content);
                    this.popper = new Popper(
                        this.$refs.element,
                        this.$refs.content,
                        {
                            modifiers: {
                                arrow: {
                                    element: this.$refs.arrow,
                                    enabled: this.noArrow === false,
                                },
                                preventOverflow: {
                                    boundariesElement: 'window',
                                },
                            },
                            offset: 10,
                            placement: this.placement,
                        },
                    );
                }
            },
            immediate: true,
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';

$arrow-size: 0.7rem;
$arrow-length: 1.2rem;
$background-color-default: rgba(color(text), 0.95);
$popper-no-arrow-offset: 0.4rem;
$popper-offset: 1.4rem;

.container {
    display: inline-block;
    position: relative;
    width: 100%;
    > span {
        display: inline-block;
        width: 100%;
    }
}

.content {
    background: $background-color-default;
    border-radius: border-radius(button);
    color: color(text, inverse);
    position: relative;
    &.light {
        background: color(text, inverse);
        box-shadow: shadow(deep);
        color: color(text);
        .arrow {
            border-color: transparent transparent background-color(light)
                transparent;
        }
    }
    .arrow {
        border-style: solid;
        height: 0;
        margin: $arrow-size;
        position: absolute;
        width: 0;
    }
}

.wrapper {
    z-index: 1;
    &[x-placement^='top'] .content {
        margin-bottom: $popper-offset;
        &.no-arrow {
            margin-bottom: $popper-no-arrow-offset;
        }
        .arrow {
            border-color: $background-color-default transparent transparent
                transparent;
            border-width: $arrow-length $arrow-size 0 $arrow-size;
            bottom: 0 - ($arrow-length);
            left: calc(50% - #{$arrow-size});
            margin-bottom: 0;
            margin-top: 0;
        }
    }
    &[x-placement^='bottom'] .content {
        margin-top: $popper-offset;
        &.no-arrow {
            margin-top: $popper-no-arrow-offset;
        }
        .arrow {
            border-color: transparent transparent $background-color-default
                transparent;
            border-width: 0 $arrow-size $arrow-length $arrow-size;
            left: calc(50% - #{$arrow-size});
            margin-bottom: 0;
            margin-top: 0;
            top: 0 - ($arrow-length);
        }
    }
    &[x-placement^='right'] .content {
        margin-left: $popper-offset;
        &.no-arrow {
            margin-left: $popper-no-arrow-offset;
        }
        .arrow {
            border-color: transparent $background-color-default transparent
                transparent;
            border-width: $arrow-size $arrow-length $arrow-size 0;
            left: 0 - ($arrow-length);
            margin-left: 0;
            margin-right: 0;
            top: calc(50% - #{$arrow-size});
        }
    }
    &[x-placement^='left'] .content {
        margin-right: $popper-offset;
        &.no-arrow {
            margin-left: $popper-no-arrow-offset;
        }
        .arrow {
            border-color: transparent transparent transparent
                $background-color-default;
            border-width: $arrow-size 0 $arrow-size $arrow-length;
            margin-left: 0;
            margin-right: 0;
            right: 0 - ($arrow-length);
            top: calc(50% - #{$arrow-size});
        }
    }
}
</style>
