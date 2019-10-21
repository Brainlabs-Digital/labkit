<template>
    <lk-panel margin-bottom="content">
        <lk-tree-picker
            v-model="selectedItems"
            :items="items"
            options-label="Accounts"
        />
    </lk-panel>
</template>

<script>
export default {
    data() {
        const items = [];
        const selectedItems = [];
        for (let i = 0; i < 10; i++) {
            items.push({
                label: `Parent ${i}`,
                value: `parent-${i}`,
                items: [],
            });
            for (let ii = 0; ii < 6; ii++) {
                items[i].items.push({
                    label: `Parent ${i} Parent ${ii}`,
                    value: `parent-${i}-parent-${ii}`,
                    items: [],
                });
                for (let iii = 0; iii < 10; iii++) {
                    const value = `parent-${i}-parent-${ii}-option-${iii}`;
                    items[i].items[ii].items.push({
                        label: `Parent ${i} Parent ${ii} Option ${iii}`,
                        value,
                    });
                    if (Math.random() < 0.3) {
                        selectedItems.push(value);
                    }
                }
            }
        }
        return {
            items,
            selectedItems,
        };
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
