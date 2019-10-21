<template>
    <div>
        <lk-navigation-tabs :items="tabs" />
    </div>
</template>

<script>
export default {
    computed: {
        tabs() {
            const tabs = [
                {
                    callback: () => this.toggleFirstTabIsActive(),
                    isActive: this.firstTabIsActive,
                    label: 'First Tab',
                },
                {
                    callback: () => this.toggleSecondTabIsActive(),
                    isActive: this.secondTabIsActive,
                    label: 'Second Tab',
                },
                {
                    callback: () => this.toggleThirdTabIsActive(),
                    isActive: this.thirdTabIsActive,
                    label: 'Third Tab',
                },
            ];
            return tabs;
        },
    },
    data() {
        return {
            firstTabIsActive: true,
            secondTabIsActive: false,
            thirdTabIsActive: false,
        };
    },
    methods: {
        toggleFirstTabIsActive() {
            this.firstTabIsActive = true;
            this.secondTabIsActive = false;
            this.thirdTabIsActive = false;
        },
        toggleSecondTabIsActive() {
            this.firstTabIsActive = false;
            this.secondTabIsActive = true;
            this.thirdTabIsActive = false;
        },
        toggleThirdTabIsActive() {
            this.firstTabIsActive = false;
            this.secondTabIsActive = false;
            this.thirdTabIsActive = true;
        },
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
