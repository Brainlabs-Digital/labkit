<template>
    <div>
        <lk-notification
            :notifications="notifications"
            @notification:removed="removeNotification"
        />
        <lk-content content-font-size-primary>
            <p>Notifications can have a title, a description, a type and a timeout:</p>
            <lk-button @click.native="addNotificationWithTitleDescriptionAndTimeout()">
                Show Notification
            </lk-button>
            <lk-button
                primary
                @click.native="addNotificationWithTitleDescriptionAndTimeout('primary')"
            >Show Notification</lk-button>
            <lk-button
                danger
                @click.native="addNotificationWithTitleDescriptionAndTimeout('danger')"
            >Show Notification</lk-button>
            <lk-button
                warning
                @click.native="addNotificationWithTitleDescriptionAndTimeout('warning')"
            >Show Notification</lk-button>
            <lk-button
                success
                @click.native="addNotificationWithTitleDescriptionAndTimeout('success')"
            >Show Notification</lk-button>
            <lk-divider />
            <p>Alternatively you can have a description or a title only:</p>
            <lk-button @click.native="addNotificationWithTitle()">
                Show Title Only
            </lk-button>
            <lk-button @click.native="addNotificationWithDescription()">
                Show Description Only
            </lk-button>
            <lk-divider />
            <p>The normal behaviour of a notification is to disapear after a set period of time, however we can have perminant notifications if we set the value of <code>timeout</code> as <code>false</code>.</p>
            <lk-button @click.native="addNotificationWithNoTimeout()">
                Show No Timeout
            </lk-button>
        </lk-content>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0,
            notifications: [],
        };
    },
    methods: {
        addNotificationWithDescription() {
            this.counter += 1;
            this.notifications.push({
                description: 'This notification only has a description.',
                id: this.counter,
                timeout: 10,
            });
        },
        addNotificationWithNoTimeout() {
            this.counter += 1;
            this.notifications.push({
                description:
                    'This will not disappear unless manually dismissed.',
                id: this.counter,
                timeout: false,
                title: 'Something happened',
            });
        },
        addNotificationWithTitle() {
            this.counter += 1;
            this.notifications.push({
                id: this.counter,
                timeout: 10,
                title: 'Title only notification',
            });
        },
        addNotificationWithTitleDescriptionAndTimeout(type) {
            this.counter += 1;
            this.notifications.push({
                description: 'This is letting you know that it happened.',
                id: this.counter,
                timeout: 10,
                title: 'Something happened',
                type,
            });
        },
        removeNotification(id) {
            this.notifications = this.notifications.filter((notification) => {
                return notification.id !== id;
            });
        },
    },
};
</script>

<style module lang="scss">
@import '../../../../styles/variables';
</style>
