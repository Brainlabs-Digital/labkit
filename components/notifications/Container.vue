<template>
    <div :class="$style.container">
        <notification
            v-for="notification in notifications"
            :description="notification.description"
            :key="notification.id"
            :timeout-seconds="notification.timeout"
            :title="notification.title"
            :type="notification.type"
            @close="removeNotification(notification.id)"
        />
    </div>
</template>

<script>
import Notification from './Notification';

export default {
    components: {
        Notification,
    },
    methods: {
        removeNotification(id) {
            this.$emit('notification:removed', id);
        },
    },
    props: {
        notifications: {
            default: () => [],
            type: Array,
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';

.container {
    left: 50%;
    max-width: 100%;
    padding: 0 spacing-horizontal();
    position: fixed;
    top: 0;
    transform: translateX(-50%);
    width: 40rem;
    z-index: 1;
}
</style>
