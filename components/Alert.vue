<template>
    <lk-wrapper v-bind="wrapperProps">
        <div :class="containerClasses">
            <lk-padder v-bind="padderProps">
                <lk-row align-items-center>
                    <lk-column :span="contentColumnSpan">
                        <div :class="[$style['content-container']]">
                            <h3 v-if="hasTitleSlot === true"><slot name="title"/></h3>
                            <slot name="content"/>
                        </div>
                    </lk-column>
                    <lk-column 
                        v-if="hasActionItemsSlot" 
                        :span="actionItemsColumnSpan">
                        <div :class="actionItemsClasses">
                            <slot name="actionItems"/>
                        </div>
                    </lk-column>
                </lk-row>
            </lk-padder>
        </div>
    </lk-wrapper>
</template>

<script>
export default {
    computed: {
        actionItemsClasses() {
            const classes = [this.$style['action-items-container']];
            if (this.actionItemsInline === true) {
                classes.push(this.$style['action-items-inline']);
            }
            return classes;
        },
        actionItemsColumnSpan() {
            if (this.actionItemsInline === true) {
                return 'auto';
            } else {
                return 12;
            }
        },
        containerClasses() {
            const classes = [this.$style.container];
            if (this.empty === true) {
                classes.push(this.$style.empty);
            } else if (this.danger === true) {
                classes.push(this.$style.danger);
            } else if (this.primary === true) {
                classes.push(this.$style.primary);
            } else if (this.success === true) {
                classes.push(this.$style.success);
            } else if (this.warning === true) {
                classes.push(this.$style.warning);
            }
            if (this.solid === false && this.empty === false) {
                classes.push(this.$style.muted);
            }
            return classes;
        },
        contentColumnSpan() {
            if (
                this.hasActionItemsSlot === true &&
                this.actionItemsInline === true
            ) {
                return;
            } else {
                return 12;
            }
        },
        hasActionItemsSlot() {
            return this.$slots.actionItems !== undefined;
        },
        hasTitleSlot() {
            return this.$slots.title !== undefined;
        },
        padderProps() {
            return {
                padding: true,
                'padding-bottom': 'remainder-content',
                ...this.$attrs,
            };
        },
        wrapperProps() {
            return {
                'margin-bottom': 'content',
                ...this.$attrs,
            };
        },
    },
    props: {
        actionItemsInline: {
            type: Boolean,
        },
        danger: {
            type: Boolean,
        },
        empty: {
            type: Boolean,
        },
        primary: {
            type: Boolean,
        },
        solid: {
            type: Boolean,
        },
        success: {
            type: Boolean,
        },
        warning: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';

@mixin make-alert($color, $color-dark, $color-muted, $color-semi-muted) {
    background: $color;
    border-color: $color-dark;
    color: color(text, inverse);
    .action-items-container {
        border-color: color(text, inverse);
    }
    &.muted {
        background: $color-muted;
        border-color: $color;
        color: $color-dark;
        .action-items-container {
            border-color: $color-semi-muted;
        }
    }
}

.container {
    background: color(text);
    border-left: border-radius(button) solid color(text, muted);
    border-radius: border-radius(button);
    color: color(text, inverse);
    margin: 0;
    padding: 0;
    &:before,
    &:after {
        content: '';
        display: table;
    }
    &:after {
        clear: both;
    }
    &.muted {
        background: background-color(muted);
        border-color: color(text);
        color: color(text);
        .action-items-container {
            border-color: color(text, light);
        }
    }
    .action-items-container {
        border-top: border-width() solid color(text, inverse);
        padding: spacing-vertical(content) 0 0;
        text-align: right;
    }
    .action-items-inline {
        border-top: none;
        padding: 0;
    }
}

.content-container {
    > h3,
    > p {
        margin: 0 0 spacing-vertical(content);
    }
    > h3 {
        font-size: font-size(sub-heading);
        font-weight: bold;
    }
    > p {
        max-width: $content-readable-width;
    }
    ul {
        max-width: $content-readable-width;
        padding: 0 0 0 (spacing-horizontal() * 2);
        > li {
            display: list-item;
            font-size: font-size();
            list-style: disc;
            margin: 0 0 spacing-vertical(mini);
            &:last-child {
                margin-bottom: spacing-vertical(content);
            }
        }
    }
    > p,
    > ul > li {
        > code {
            font-family: font-family(code);
            font-weight: bold;
            white-space: nowrap;
        }
    }
}

.danger {
    @include make-alert(
        color(danger),
        color(danger, dark),
        color(danger, muted),
        color(danger, semi-muted)
    );
}

.empty {
    background: none;
    border: border-width(thick) dashed border-color();
    color: color(text, muted);
    .action-items-container {
        border-top: border-width(medium) dashed border-color();
    }
    .action-items-inline {
        border-top: none;
    }
}

.primary {
    @include make-alert(
        color(link),
        color(link, dark),
        color(link, muted),
        color(link, semi-muted)
    );
}

.success {
    @include make-alert(
        color(success),
        color(success, dark),
        color(success, muted),
        color(success, semi-muted)
    );
}

.warning {
    @include make-alert(
        color(warning),
        color(warning, dark),
        color(warning, muted),
        color(warning, semi-muted)
    );
}
</style>
