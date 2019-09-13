<template>
    <lk-container fluid>
        <div :class="[$style['sidebar-container']]">
            <sidebar/>
        </div>
        <div :class="[$style['content-container']]">
            <component :is="component"/>
        </div>
    </lk-container>
</template>

<script>
import Sidebar from '@/labkit/documentation/components/Sidebar';

export default {
    components: {
        Sidebar,
    },
    props: {
        component: {
            required: true,
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';

$sidebar-width: 21rem;

.content-container {
    margin: 0 0 0 $sidebar-width;
    padding: 0 spacing-horizontal() spacing-vertical();
}

.sidebar-container {
    bottom: 0;
    height: 100%;
    left: 0;
    padding: 0 0 0 spacing-horizontal();
    position: fixed;
    top: 0;
    width: $sidebar-width;
}
</style>
