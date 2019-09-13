<template>
    <div>
        <lk-multi-input
            placeholder="Add New Item"
            v-model="items"
        >
            <template slot="label">Multi Select Input Title</template>
            <template slot="hint"><p>This is a sub title describing the multi select box</p></template>
        </lk-multi-input>

        <lk-content>
            <p><em>Number of items: </em><strong>{{items.length}}</strong></p>
            <lk-divider margin-bottom="content"/>
            <p><em>Items: </em><strong v-if="items.length === 0"> None</strong></p>
            <ul v-if="items.length > 0">
                <li 
                    v-for="item in items" 
                    :key="item"
                >{{item}}</li>
            </ul>
        </lk-content>
    </div>
</template>



<script>
export default {
    data() {
        return {
            items: ['First Item', 'Second Item', 'Third Item', 'Fourth Item'],
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
