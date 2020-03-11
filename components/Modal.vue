<template>
    <lk-glass 
        :container-size="readSizeProperty" 
        unbreakable>
        <lk-panel shadow-shallow>
			 <div 
				v-if="showCloseButton === true" 
				:class="$style['close-button-container']">
				<lk-button 
					circle 
					mini
					danger 
					shadow 
					@click.native="close">
					<lk-icon icon="times" />
				</lk-button>
			</div>
            <slot />
        </lk-panel>
       
    </lk-glass>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit('closed');
        },
    },
    computed: {
        readSizeProperty() {
            return this.size;
        },
    },
    props: {
        showCloseButton: {
            default: true,
            type: Boolean,
        },
        size: {
            default: 'md',
            type: String,
        },
    },
};
</script>

<style module lang="scss">
@import '../styles/variables';

.close-button-container {
	margin-top: spacing-vertical(button, compact);
	margin-right: (spacing-horizontal(button, compact)-0.2rem);
	float:right;
    z-index: 1;
}
</style>
