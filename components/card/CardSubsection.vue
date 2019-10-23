<template>
    <div :class="$style.container">
        <lk-padder
            padding-vertical="mini"
        >
            <lk-row>
                <lk-column>
                    <p :class="$style.subtitle">
                        <slot name="subtitle" />
                    </p>
                    <lk-padder 
                        padding="content"
                        padding-vertical="mini"
                        :class="$style.subsection"
                    >
                        <div >
                            <slot name="body" />
                        </div>
                    </lk-padder>
                </lk-column>
            </lk-row>
        </lk-padder>
    </div>
</template>

<style module lang="scss">
@import '../../styles/variables';

.container {
    background: color(text, inverse);
    border-top: 1px solid border-color();
    position: relative;
    border-color: border-color(light);
    &:first-child {
        border-top: none;
        border-top-left-radius: border-radius(panel);
        border-top-right-radius: border-radius(panel);
    }
}

.subsection {
    border-radius: border-radius(button);
    background: background-color(light);
}

.subtitle {
    font-weight: bold;
}
</style>
