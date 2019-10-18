<template>
    <div>
        <portal-target
            v-for="name of glassPortalNames"
            :key="name"
            :name="name"
            slim
        />
    </div>
</template>

<script>
import EventBus from '../lib/event-bus';

export default {
    beforeDestroy() {
        EventBus.$off('add:glass-portal', this.addGlassPortal);
        EventBus.$off('remove:glass-portal', this.removeGlassPortal);
    },
    created() {
        EventBus.$on('add:glass-portal', this.addGlassPortal);
        EventBus.$on('remove:glass-portal', this.removeGlassPortal);
    },
    data() {
        return {
            glassPortalNames: [],
        };
    },
    methods: {
        addGlassPortal(newGlassPortalName) {
            this.glassPortalNames = [
                ...this.glassPortalNames,
                newGlassPortalName,
            ];
        },
        removeGlassPortal(glassPortalName) {
            this.glassPortalNames = this.glassPortalNames.filter((name) => {
                return name !== glassPortalName;
            });
        },
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
