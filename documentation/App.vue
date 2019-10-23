<template>
    <div>
        <div id="app">
            <router-view />
        </div>
        <lk-glass-portal />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../styles/variables';

#app {
    min-height: 100vh;
}
</style>
