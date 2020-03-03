<template>
    <lk-content>
		<div :class="$style.slidercontainer">
			<div :class="sliderbox">
			 	<input type="range" :min="minRange" :max="maxRange" v-model="internalValue" id="myRange" :class="$style.slider" @change="valueChange">
			</div>
			<div :class="sliderLabel">
				<label v-if="showValue === true">{{internalValue}}</label>
			</div>
		</div>
    </lk-content>
</template>

<script>
export default {
	methods: {
        valueChange() {
			 this.$emit('input', this.internalValue);
		},
	},
    data() {
        return {
            internalValue: this.value,
        };
	},
	computed: {
        sliderLabel() {
            if (this.showValue === true) {
                return this.$style['sliderLabel'];
            }
		},
		sliderbox() {
			if (this.showValue === true) {
                return this.$style['sliderWithLabel'];
            }
		}
	},
    props: {
        maxRange: {
            default: 10,
            type: Number,
		},
		minRange: {
            default: 1,
            type: Number,
        },
        value: {
            default: 1,
            type: Number,
        },
        showValue: {
            default: true,
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import '../../styles/variables';

.sliderLabel {margin-top:-16px;}
.sliderWithLabel { margin-right:38px}

.slidercontainer  { display: inline-block; text-align: right; width:100%;}

.slider {
	-webkit-appearance: none;
	height: 10px;
	border-radius: 5px;
	background: #d3d3d3;
	outline: none;
	-webkit-transition: opacity .15s ease-in-out;
	transition: opacity .15s ease-in-out;
	border-width: 0px;
	padding: 1px;
	width:100%;
	margin-right: 20px
}
.slider:hover {
	opacity:1;
}
.slider::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background: rgb(239, 114, 150);
	cursor: pointer;
}
.slider::-moz-range-thumb {
	width: 25px;
	height: 25px;
	border: 0;
	border-radius: 50%;
	background: rgb(239, 114, 150);
	cursor: pointer;
}

</style>