<template>
    <lk-content>
        <h3>{{title}}</h3>
        <lk-panel>
            <lk-panel-body>
                <lk-alert 
                    v-bind="{
                        [type]: true,
                }">
                    <template slot="title">An alert with everything</template>
                    <template slot="content">
                        <p>Some content that explains something.</p>
                        <ul>
                            <li>We can even have some items in a list.</li>
                            <li>This is the second item in the list.</li>
                            <li>This is the third and final item in the list.</li>
                        </ul>
                        <p>Code tags can be used to <code>highlight code</code> too.</p>
                    </template>
                    <template slot="actionItems">
                        <lk-button 
                            v-bind="{
                                [internalButtonType]: true,
                                outline: true,
                        }">Secondary action</lk-button>
                        <lk-button 
                            v-bind="{
                                [buttonType || type]: true,
                        }">Primary action</lk-button>
                    </template>
                </lk-alert>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code='`
<lk-alert${type !== undefined ? ` ${type}`: ""}>
    <template slot="title">An alert with everything</template>
    <template slot="content">
        <p>Some content that explains something.</p>
        <ul>
            <li>We can even have some items in a list.</li>
            <li>This is the second item in the list.</li>
            <li>This is the third and final item in the list.</li>
        </ul>
        <p>Code tags can be used to <code>highlight code</code> too.</p>
    </template>
    <template slot="actionItems">
        <lk-button${internalButtonType !== undefined ? ` ${internalButtonType}`: ""} outline>Secondary action</lk-button>
        <lk-button${internalButtonType !== undefined ? ` ${internalButtonType}`: ""}>Primary action</lk-button>
    </template>
</lk-alert>
                    `'
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel v-if="type !== 'empty'">
            <lk-panel-body>
                <lk-alert 
                    v-bind="{
                        [type]: true,
                        solid: true,
                }">
                    <template slot="title">An alert with everything and the solid prop</template>
                    <template slot="content">
                        <p>Using the solid prop we can make the alert stand out even more.</p>
                    </template>
                    <template slot="actionItems">
                        <lk-button 
                            v-bind="{
                                [internalButtonType]: true,
                                outline: true,
                                inverse: true,
                        }">Secondary action</lk-button>
                        <lk-button 
                            v-bind="{
                                [buttonType || type]: true,
                                inverse: true,
                        }">Primary action</lk-button>
                    </template>
                </lk-alert>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code='`
<lk-alert${type !== undefined ? ` ${type}`: ""} solid>
    <template slot="title">An alert with everything and the solid prop</template>
    <template slot="content">
        <p>Using the solid prop we can make the alert stand out even more.</p>
    </template>
    <template slot="actionItems">
        <lk-button${internalButtonType !== undefined ? ` ${internalButtonType}`: ""} outline inverse>Secondary action</lk-button>
        <lk-button${internalButtonType !== undefined ? ` ${internalButtonType}`: ""} inverse>Primary action</lk-button>
    </template>
</lk-alert>
                    `'
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-alert 
                    v-bind="{
                        [type]: true,
                        actionItemsInline: true,
                }">
                    <template slot="title">An alert with inline action items</template>
                    <template slot="content">
                        <p>Some content that explains or notifies about something.</p>
                    </template>
                    <template slot="actionItems">
                        <lk-button 
                            v-bind="{
                                [internalButtonType]: true,
                                outline: true,
                        }">Secondary action</lk-button>
                        <lk-button 
                            v-bind="{
                                [buttonType || type]: true,
                        }">Primary action</lk-button>
                    </template>
                </lk-alert>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code='`
<lk-alert${type !== undefined ? ` ${type}`: ""} action-items-inline>
    <template slot="title">An alert with inline action items</template>
    <template slot="content">
        <p>Some content that explains or notifies about something.</p>
    </template>
    <template slot="actionItems">
        <lk-button${internalButtonType !== undefined ? ` ${internalButtonType}`: ""} outline>Secondary action</lk-button>
        <lk-button${internalButtonType !== undefined ? ` ${internalButtonType}`: ""}>Primary action</lk-button>
    </template>
</lk-alert>
                    `'
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-alert 
                    v-bind="{
                        [type]: true,
                }">
                    <template slot="title">An alert with no action items</template>
                    <template slot="content">
                        <p>This alert has no action items, so the only purpose that it serves is to stand out from normal content in order to highlight a bit of information.</p>
                    </template>
                </lk-alert>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code='`
<lk-alert${type !== undefined ? ` ${type}`: ""}>
    <template slot="title">An alert with no action items</template>
    <template slot="content">
        <p>This alert has no action items, so the only purpose that it serves is to stand out from normal content in order to highlight a bit of information.</p>
    </template>
</lk-alert>
                    `'
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-alert 
                    v-bind="{
                        [type]: true,
                        actionItemsInline: true,
                }">
                    <template slot="title">
                        <lk-icon icon="exclamation-triangle"/>
                        An alert with a title and an icon
                    </template>
                </lk-alert>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code='`
<lk-alert${type !== undefined ? ` ${type}`: ""} action-items-inline>
    <template slot="title">
        <lk-icon icon="exclamation-triangle"/>
	An alert with a title and an icon
    </template>
</lk-alert>
                    `'
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-alert 
                    v-bind="{
                        [type]: true,
                }">
                    <template slot="content">
                        <p>An alert only a single block of content.</p>
                    </template>
                </lk-alert>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code='`
<lk-alert${type !== undefined ? ` ${type}`: ""}>
    <template slot="content">
        <p>An alert only a single block of content.</p>
    </template>
</lk-alert>
                    `'
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-alert 
                    v-bind="{
                        [type]: true,
                        'padding-bottom': 'none',
                        'padding-top': 'content',
                }">
                    <template slot="content">
                        <p>An alert with the <code>padding-bottom="none"</code> and <code>padding-top="content"</code>.</p>
                    </template>
                </lk-alert>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code='`
<lk-alert${type !== undefined ? ` ${type}`: ""} padding-bottom="none" padding-top="content">
    <template slot="content">
        <p>An alert with the <code>padding-bottom="none"</code> and <code>padding-top="content"</code>.</p>
    </template>
</lk-alert>
                    `'
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
    </lk-content>
</template>

<script>
import Code from '../../../../documentation/components/Code';

export default {
    components: {
        formatCode: Code,
    },
    computed: {
        internalButtonType() {
            return this.buttonType || this.type;
        },
    },
    props: {
        buttonType: {
            type: String,
        },
        title: {
            required: true,
            type: String,
        },
        type: {
            type: String,
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
