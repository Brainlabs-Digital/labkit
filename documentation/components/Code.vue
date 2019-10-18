<template>
    <div>
        <div :class="containerClasses">
            <span 
                v-if="isCollapsable === true" 
                class="code-container_toggle">
                <lk-button
                    primary
                    outline
                    mini
                    @click.native="toggleIsCollapsed"
                >{{expandButtonText}}</lk-button>
            </span>
            <pre 
                v-once 
                class="code-container"><code 
:class="classes" 
                                              ref="code">{{trimmedCode}}</code></pre>
            <span 
                v-if="isCollapsed === true" 
                class="code-container_fade"/>
        </div>
    </div>
</template>

<script>
import highlightJs from 'highlightjs';

const maxLinesOfCodeBeforeCollapsable = 15;

export default {
    computed: {
        classes() {
            const classes = [];
            if (this.language !== undefined) {
                classes.push(this.language);
            }
            if (this.roundedBottomCorners === true) {
                classes.push('rounded-bottom-corners');
            }
            return classes;
        },
        containerClasses() {
            const classes = ['code-container_wrapper'];
            if (this.isCollapsed === true) {
                classes.push('code-container_wrapper--collapsed');
            }
            if (this.roundedBottomCorners === true) {
                classes.push('rounded-bottom-corners');
            }
            return classes;
        },
        expandButtonText() {
            if (this.isCollapsed === true) {
                return 'Expand Code Sample';
            } else {
                return 'Collapse Code Sample';
            }
        },
        isCollapsable() {
            return this.linesOfCode > maxLinesOfCodeBeforeCollapsable;
        },
        trimmedCode() {
            /*
                To make our lives easier when it comes to formatting the code, we're
                going to trim the white space from the start and the end of the code
                prop.
            */
            return this.code.trim();
        },
    },
    created() {
        this.linesOfCode = this.trimmedCode.split(/\r\n|\r|\n/).length;
        this.isCollapsed = this.isCollapsable;
    },
    data() {
        return {
            isCollapsed: false,
            linesOfCode: undefined,
        };
    },
    methods: {
        toggleIsCollapsed() {
            this.isCollapsed = !this.isCollapsed;
        },
    },
    mounted() {
        highlightJs.highlightBlock(this.$refs.code);
    },
    props: {
        code: {
            required: true,
            type: String,
        },
        language: {
            type: String,
        },
        roundedBottomCorners: {
            type: Boolean,
        },
    },
};
</script>

<style lang="scss">
@import 'styles/variables';
/*
    This style block is neither scoped nor modularised because code is being generated
    by a third-party tool (highlight.js), as such we can't control it's class names.

    We make an attempt to namespace the CSS somewhat by wrapping everything in the
    `.code-contaier` class.
*/
/*
    Style pulled from https://github.com/highlightjs/highlight.js/blob/master/src/styles/github.css

    Modified to use the kind of spacing we use.
*/
.code-container {
    .rounded-bottom-corners {
        border-radius: 0 0 border-radius(panel) border-radius(panel);
    }
    .hljs {
        display: block;
        font-family: font-family(code);
        font-size: font-size();
        overflow-x: scroll;
        padding: spacing-vertical() spacing-horizontal();
        color: color(text);
        background: background-color(light);
    }

    .hljs-comment,
    .hljs-quote {
        color: #998;
        font-style: italic;
    }

    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-subst {
        color: #333;
        font-weight: bold;
    }

    .hljs-number,
    .hljs-literal,
    .hljs-variable,
    .hljs-template-variable,
    .hljs-tag .hljs-attr {
        color: #008080;
    }

    .hljs-string,
    .hljs-doctag {
        color: #d14;
    }

    .hljs-title,
    .hljs-section,
    .hljs-selector-id {
        color: #900;
        font-weight: bold;
    }

    .hljs-subst {
        font-weight: normal;
    }

    .hljs-type,
    .hljs-class .hljs-title {
        color: #458;
        font-weight: bold;
    }

    .hljs-tag,
    .hljs-name,
    .hljs-attribute {
        color: #000080;
        font-weight: normal;
    }

    .hljs-regexp,
    .hljs-link {
        color: #009926;
    }

    .hljs-symbol,
    .hljs-bullet {
        color: #990073;
    }

    .hljs-built_in,
    .hljs-builtin-name {
        color: #0086b3;
    }

    .hljs-meta {
        color: #999;
        font-weight: bold;
    }

    .hljs-deletion {
        background: #fdd;
    }

    .hljs-addition {
        background: #dfd;
    }

    .hljs-emphasis {
        font-style: italic;
    }

    .hljs-strong {
        font-weight: bold;
    }
}

.code-container_fade {
    background: linear-gradient(
        to bottom,
        rgba(background-color(light), 0),
        background-color(light)
    );
    bottom: 0;
    height: 50%;
    position: absolute;
    width: 100%;
}

.code-container_toggle {
    position: absolute;
    top: spacing-vertical();
    right: spacing-horizontal();
}

.code-container_wrapper {
    position: relative;
}

.code-container_wrapper--collapsed {
    height: font-size() * 10;
    overflow: hidden;
    &.rounded-bottom-corners {
        border-radius: 0 0 border-radius(panel) border-radius(panel);
        .code-container_fade {
            border-radius: 0 0 border-radius(panel) border-radius(panel);
        }
    }
}
</style>
