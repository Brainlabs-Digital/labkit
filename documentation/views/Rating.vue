<template>
    <lk-content>
        <h1>Rating</h1>
		<lk-rating maxRating="10" currentRating="3">
		</lk-rating>
    </lk-content>
</template>

<script>
import Code from '../../documentation/components/Code';
import Example from '../../documentation/components/examples/popper/Example';

export default {
    components: {
        Example,
        formatCode: Code,
    },
};
</script>

<style module lang="scss">
@import '../../styles/variables';


</style>
