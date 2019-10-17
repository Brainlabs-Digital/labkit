<template>
    <div > 
        <input-label>
            <slot 
                name="label" 
                slot="label"/>
            <slot 
                name="hint" 
                slot="hint"/>
        </input-label>
        <div :class="$style.container">
            <div
                v-for="(item, index) in internalItems"
                :key="`${_uid}-${index}-row`" 
            >
                <lk-input
                    v-model="internalItems[index]"
                    :placeholder="placeholderIfLastItem(index)"
                    :show-action-items="index < internalItems.length - 1"
                    @blur="removeIfEmpty(index)"
                >
                    <template
                        slot="action"
                    >
                        <lk-button 
                            micro 
                            margin-bottom="none"
                            circle
                            outline
                            right
                            @click.native="removeItem(index)"
                        ><lk-icon icon="times" /></lk-button>    
                    </template>
                </lk-input>
                <lk-divider 
                    v-if="index===internalItems.length-2" 
                    margin-bottom="content"/>
            </div> 
        </div>
    </div>
</template>

<script>
import InputLabel from '../../components/inputs/utils/InputLabel';

export default {
    components: {
        InputLabel,
    },
    data() {
        return {
            internalItems: [...this.value],
        };
    },
    props: {
        value: {
            default: () => [],
            type: Array,
        },
        placeholder: {
            type: String,
        },
    },
    watch: {
        internalItems: {
            handler() {
                if (
                    (this.internalItems.length > 0 &&
                        this.internalItems[this.internalItems.length - 1] !==
                            '') ||
                    this.internalItems.length === 0
                ) {
                    this.internalItems.push('');
                }
                const allItems = [...this.internalItems];
                allItems.pop();
                this.$emit('input', allItems);
            },
            immediate: true,
        },
    },

    methods: {
        placeholderIfLastItem(index) {
            if (index === this.internalItems.length - 1) {
                return this.placeholder;
            }
        },
        removeIfEmpty(index) {
            if (
                this.internalItems[index] === '' &&
                this.internalItems.length > 1
            ) {
                this.removeItem(index);
            }
        },
        removeItem(index) {
            this.internalItems.splice(index, 1);
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
.container {
    border: border-width() solid border-color();
    border-radius: border-radius(button);
    padding: (spacing-vertical()) spacing-horizontal() (spacing-vertical(mini));
    margin-bottom: spacing-vertical();
}
</style>
