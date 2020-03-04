<template>
    <lk-content>
        <span
            v-for="index in parseInt(stars)"
            :key="`${_uid}-${index}-row`"
            @mouseover="mouseOver(index)"
            @mouseleave="mouseOut()"
            @mousedown="mouseClick(index)"
        >
            <lk-icon
                :class="ratingClass(index)"
                icon="star"/>
        </span>
        <span v-if="showRatingLabel === true">({{internalValue}})</span>
    </lk-content>
</template>

<script>
export default {
    methods: {
        ratingClass(index) {
            let returnClass = '';
            if (index <= this.tempInternalValue) {
                returnClass = [this.$style['selectedStar']];
            } else {
                returnClass = [this.$style['unselectedStar']];
            }
            return returnClass;
        },
        mouseOver(index) {
            this.tempInternalValue = index;
        },
        mouseOut() {
            this.tempInternalValue = this.internalValue;
        },
        mouseClick(index) {
            if (index === 1 && this.internalValue === 1) {
                this.internalValue = 0;
            } else {
                this.internalValue = index;
            }

            this.$emit('input', this.internalValue);
        },
    },
    data() {
        return {
            stars: this.maxRating,
            internalValue: this.value,
            tempInternalValue: this.value,
        };
    },
    props: {
        maxRating: {
            default: 5,
            type: Number,
        },
        value: {
            default: 0,
            type: Number,
        },
        showRatingLabel: {
            default: true,
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import '../../styles/variables';
.selectedStar {
    color: rgb(239, 114, 150);
}
.unselectedStar {
    color: rgb(240, 240, 240);
}
</style>
