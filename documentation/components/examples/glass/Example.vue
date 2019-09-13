<template>
    <div>
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
                    <lk-icon icon="square-check"/>
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
                    <lk-icon icon="exclamation-triangle"/>
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
    </div>
</template>

<script>
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
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
