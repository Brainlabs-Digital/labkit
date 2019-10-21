<template>
    <lk-content>
        <h3>{{title}}</h3>
        <lk-panel>
            <lk-panel-body>
                <lk-button 
                    v-bind="{
                        [type]: true,
                }">Button</lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        circle: true,
                }"><lk-icon icon="check"/></lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        disabled: true,
                }">Disabled</lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        circle: true,
                        disabled: true,
                }"><lk-icon icon="check"/></lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        active: true,
                }">Active</lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        active: true,
                        circle: true,
                }"><lk-icon icon="check"/></lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        compact: true,
                }">Compact</lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        circle: true,
                        compact: true,
                }"><lk-icon icon="check"/></lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        mini: true,
                }">Mini</lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        circle: true,
                        mini: true,
                }"><lk-icon icon="check"/></lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        micro: true,
                }">Micro</lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        circle: true,
                        micro: true,
                }"><lk-icon icon="check"/></lk-button>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code='`
<lk-button${type !== undefined ? ` ${type}`: ""}>Button</lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} circle><lk-icon icon="check"></lk-icon></lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} disabled>Disabled</lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} circle disabled><lk-icon icon="check"></lk-icon></lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} active>Active</lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} active circle><lk-icon icon="check"></lk-icon></lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} compact>Compact</lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} circle compact><lk-icon icon="check"></lk-icon></lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} mini>Mini</lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} circle mini><lk-icon icon="check"></lk-icon></lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} micro>Micro</lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} circle micro><lk-icon icon="check"></lk-icon></lk-button>
                    `'
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        outline: true,
                }">Button</lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        circle: true,
                        outline: true,
                }"><lk-icon icon="ellipsis-v"/></lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        disabled: true,
                        outline: true,
                }">Disabled</lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        circle: true,
                        disabled: true,
                        outline: true,
                }"><lk-icon icon="ellipsis-v"/></lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        active: true,
                        outline: true,
                }">Active</lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        active: true,
                        circle: true,
                        outline: true,
                }"><lk-icon icon="ellipsis-v"/></lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        compact: true,
                        outline: true,
                }">Compact</lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        circle: true,
                        compact: true,
                        outline: true,
                }"><lk-icon icon="ellipsis-v"/></lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        mini: true,
                        outline: true,
                }">Mini</lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        circle: true,
                        mini: true,
                        outline: true,
                }"><lk-icon icon="ellipsis-v"/></lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        micro: true,
                        outline: true,
                }">Micro</lk-button>
                <lk-button 
                    v-bind="{
                        [type]: true,
                        circle: true,
                        micro: true,
                        outline: true,
                }"><lk-icon icon="ellipsis-v"/></lk-button>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code='`
<lk-button${type !== undefined ? ` ${type}`: ""} outline>Button</lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} circle outline><lk-icon icon="check"></lk-icon></lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} disabled outline>Disabled</lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} circle disabled outline><lk-icon icon="check"></lk-icon></lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} active outline>Active</lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} active circle outline><lk-icon icon="check"></lk-icon></lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} compact outline>Compact</lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} circle compact outline><lk-icon icon="check"></lk-icon></lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} mini outline>Mini</lk-button>
<lk-button${type !== undefined ? ` ${type}`: ""} circle mini outline><lk-icon icon="check"></lk-icon></lk-button>
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
    props: {
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
@import 'styles/variables';
</style>
