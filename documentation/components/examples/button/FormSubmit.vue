<template>
    <div>
        <form @submit.prevent="submitForm">
            <lk-input v-model="input">
                <template slot="label">Example Input Label</template>
            </lk-input>
            <lk-divider margin-bottom="content" />
            <lk-button 
                submit 
                primary>Submit</lk-button>
        </form>
        <lk-divider margin-bottom="content" />
        <lk-content>
            <p>{{submittedMessage}}</p>
        </lk-content>
    </div>
</template>

<script>
export default {
    computed: {
        submittedMessage() {
            if (this.hasSubmitted === false) {
                return 'The form has no been submitted.';
            } else {
                return `The value that was submitted was '${
                    this.submittedInput
                }'.`;
            }
        },
    },
    data() {
        return {
            hasSubmitted: false,
            input: '',
            submittedInput: '',
        };
    },
    methods: {
        submitForm() {
            this.hasSubmitted = true;
            this.submittedInput = this.input;
        },
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
