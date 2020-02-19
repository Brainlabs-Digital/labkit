<template>
	<lk-content>
		<span v-for="index in parseInt(stars)" :key="`${_uid}-${index}-row`" 
			@mouseover="mouseOver(index)"
			@mouseleave="mouseOut(index)"
			@mousedown="mouseClick(index)"
			>
		<lk-icon :class="ratingClass(index)"
		 	icon="star"></lk-icon>
		</span>
		<span>({{internalValue}})</span>
	</lk-content>
</template>

<script>
export default {
	methods: {
		ratingClass (index) {
			let returnClass = "";
			if (index<=this.internalValue)
			{
				returnClass = [this.$style['selectedStar']];
			} else {
				returnClass = [this.$style['unselectedStar']];
			}
			return returnClass;
		},
		mouseOver(index){
            this.activeStar = index;
        },
		mouseOut(index) {
			this.activeStar = 0;
		},
		mouseClick(index) {
			if (index===1 && this.internalValue===1) {
				this.internalValue = 0;
			} else {
				this.internalValue = index;
			}
		}
	},
	data() {
        return {
			stars: this.maxRating,
			activeStar: 0,
			internalValue: this.currentRating,
        };
    },
	props: {
		maxRating: {
			default: 5,
 			type: Number,
		},
        currentRating: {
			default: 0,
            type: Number,
        },
	},
	watch: {
        internalValue() {
            this.$emit('currentRating', this.internalValue);
        },
        value() {
            this.internalValue = this.currentRating;
        },
    },
}
</script>

<style module lang="scss">
@import '../../styles/variables';
	.selectedStar {
		color: rgb(239, 114, 150);
	}
	.unselectedStar {
		color: rgb(173, 173, 173);
	}
</style>
