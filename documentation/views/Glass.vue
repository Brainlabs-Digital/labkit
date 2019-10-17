<template>
    <lk-content>
        <h1>Glass</h1>
        <p>The glass component (<code>lk-glass</code>) is a utility component used to provide a layer over the content for components such as <router-link to="/labkit/components/modal">modals</router-link>, full-screen alerts and full-screen loading messages.</p>
        <lk-alert margin-bottom>
            <template slot="content">
                <p>The glass component requires the <code>lk-glass-portal</code> component be used, ideally towards the end of the markup in App.vue. Without it the glass component will not be functional.</p>
            </template>
        </lk-alert>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <example/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="interactionSampleScript"
                    language="js"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<!-- Component <template> content -->
<lk-button @click.native="toggleGlassIsVisible">Show glass</lk-button>
<lk-button @click.native="toggleUnbreakableGlassIsVisible">
    Show unbreakable glass
</lk-button>
<lk-glass
    v-if="glassIsVisible === true"
    @closed="toggleGlassIsVisible"
>
    <lk-alert success>
        <template slot="title">
            <lk-icon icon="square-check"></lk-icon>
            Breakable glass
        </template>
        <template slot="content">
            <p>This glass can be broken by clicking anywhere on the page.</p>
        </template>
    </lk-alert>
</lk-glass>
<lk-glass
    v-if="unbreakableGlassIsVisible === true"
    unbreakable
    @closed="toggleUnbreakableGlassIsVisible"
>
    <lk-alert danger>
        <template slot="title">
            <lk-icon icon="exclamation-triangle"></lk-icon>
            Unbreakable glass
        </template>
        <template slot="content">
            <p>This glass cannot be broken by clicking on it, so we need to use a button to manually break it.</p>
        </template>
        <template slot="actionItems">
            <lk-button
                danger
                @click.native="toggleUnbreakableGlassIsVisible"
            >Click to break glass in emergency</lk-button>
        </template>
    </lk-alert>
</lk-glass>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
    </lk-content>
</template>

<script>
import Code from '../../documentation/components/Code';
import Example from '../../documentation/components/examples/glass/Example';

export default {
    components: {
        Example,
        formatCode: Code,
    },
    data() {
        return {
            interactionSampleScript: `\
// Component <script> content
export default {
    data() {
        return {
            glassIsVisible: false,
            unbreakableGlassIsVisible: false,
        };
    },
    methods: {
        toggleGlassIsVisible() {
            this.glassIsVisible = !this.glassIsVisible;
        },
        toggleUnbreakableGlassIsVisible() {
            this.unbreakableGlassIsVisible = !this.unbreakableGlassIsVisible;
        },
    },
};
            `,
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
