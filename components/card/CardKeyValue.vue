<template>
    <lk-row align-items-center>
        <lk-column>
            <p :class="$style.label">
                <slot name="key" />
            </p>
        </lk-column>
        <lk-column span="auto">
            <p :class="$style.value">
                <slot name="value" />
            </p>
        </lk-column>
    </lk-row>
</template>

<style module lang="scss">
@import '../../styles/variables';

.label {
    color: color(text, muted);
    font-size: font-size(caption);
}

.value {
    font-size: font-size(caption);
    font-weight: bold;
}
</style>
