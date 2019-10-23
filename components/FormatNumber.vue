<template>
    <span>{{formattedNumber}}</span>
</template>

<script>
export default {
    computed: {
        formattedNumber() {
            if (this.number === undefined || this.number === null) {
                return '—';
            } else {
                return this.number.toLocaleString(this.locale, this.options);
            }
        },
        options() {
            const maximumFractionDigits =
                this.minimumFractionDigits > this.maximumFractionDigits ||
                this.maximumFractionDigits === undefined
                    ? this.minimumFractionDigits
                    : this.maximumFractionDigits;
            const options = {
                maximumFractionDigits: maximumFractionDigits || 4,
                minimumFractionDigits: this.minimumFractionDigits || 0,
            };
            if (this.currency !== undefined) {
                options.currency = this.currency;
                options.maximumFractionDigits = maximumFractionDigits || 2;
                options.minimumFractionDigits = this.minimumFractionDigits || 2;
                options.style = 'currency';
            } else if (this.percent === true) {
                options.style = 'percent';
            }
            if (this.thousandSeperators === false) {
                options.useGrouping = false;
            }
            return options;
        },
    },
    props: {
        currency: {
            type: String,
        },
        locale: {
            default: () => [],
            type: [String, Array],
        },
        maximumFractionDigits: {
            type: Number,
        },
        minimumFractionDigits: {
            default: 0,
            type: Number,
        },
        number: {
            type: Number,
        },
        percent: {
            type: Boolean,
        },
        thousandSeperators: {
            default: true,
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import '../styles/variables';
</style>
