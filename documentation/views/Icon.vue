<template>
    <lk-content>
        <h1>Icon</h1>
        <p>The icon component (<code>lk-icon</code>)&hellip;</p>
        <h3>Styling</h3>
        <p>The size and color of an icon is defined by the font size and text color it's parent element.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-content>
                    <p>
                        <lk-icon icon="exclamation-triangle"/>
                        Standard content styling.
                    </p>
                    <lk-divider margin-bottom="content"/>
                    <p>
                        <span style="font-size: 0.75em; color: #666;">
                            <lk-icon icon="exclamation-triangle"/>
                        </span>
                        Small and grey.
                    </p>
                    <lk-divider margin-bottom="content"/>
                    <p>
                        <span style="font-size: 2.5em; color: #FF0000;">
                            <lk-icon icon="exclamation-triangle"/>
                        </span>
                        Big and red.
                    </p>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<!--
    NOTE:
    As a general rule, do not use inline styles: they are used here as they were
    the most direct way to show the relationship between the font-size and
    color of the parent and the size and color of the icon.
-->
<lk-content>
    <p>
        <lk-icon icon="exclamation-triangle"></lk-icon>
        Standard content styling.
    </p>
    <lk-divider margin-bottom="content"></lk-divider>
    <p>
        <span style="font-size: 0.75em; color: #666;">
            <lk-icon icon="exclamation-triangle"></lk-icon>
        </span>
        Small and grey.
    </p>
    <lk-divider margin-bottom="content"></lk-divider>
    <p>
        <span style="font-size: 2.5em; color: #FF0000;">
            <lk-icon icon="exclamation-triangle"></lk-icon>
        </span>
        Big and red.
    </p>
</lk-content>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>The <code>flip</code> and <code>flop</code> props can be used to flip (vertical) and flop (horizontal) icons.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-content>
                    <p>
                        <lk-icon icon="external-link"/>
                        No flipping or flopping.
                    </p>
                    <lk-divider margin-bottom="content"/>
                    <p>
                        <lk-icon 
                            flip 
                            icon="external-link"/>
                        Flipped.
                    </p>
                    <lk-divider margin-bottom="content"/>
                    <p>
                        <lk-icon 
                            flop 
                            icon="external-link"/>
                        Flopped.
                    </p>
                    <lk-divider margin-bottom="content"/>
                    <p>
                        <lk-icon 
                            flip 
                            flop 
                            icon="external-link"/>
                        Flipped and flopped.
                    </p>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-content>
    <p>
        <lk-icon icon="external-link"></lk-icon>
        No flipping or flopping.
    </p>
    <lk-divider margin-bottom="content"></lk-divider>
    <p>
        <lk-icon flip icon="external-link"></lk-icon>
        Flipped.
    </p>
    <lk-divider margin-bottom="content"></lk-divider>
    <p>
        <lk-icon flop icon="external-link"></lk-icon>
        Flopped.
    </p>
    <lk-divider margin-bottom="content"></lk-divider>
    <p>
        <lk-icon flip flop icon="external-link"></lk-icon>
        Flipped and flopped.
    </p>
</lk-content>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>The <code>spin</code> and <code>spin-anticlockwise</code> props can be used to make an icon have a spinning animation.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-content>
                    <p>
                        <lk-icon 
                            spin 
                            icon="circle-outline-quarter-notch"/>
                        Clockwise.
                    </p>
                    <lk-divider margin-bottom="content"/>
                    <p>
                        <lk-icon 
                            spin-anticlockwise 
                            icon="circle-outline-quarter-notch"/>
                        Anticlockwise.
                    </p>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-content>
    <p>
        <lk-icon spin icon="circle-outline-quarter-notch"></lk-icon>
        Clockwise.
    </p>
    <lk-divider margin-bottom="content"></lk-divider>
    <p>
        <lk-icon spin-anticlockwise icon="circle-outline-quarter-notch"></lk-icon>
        Anticlockwise.
    </p>
</lk-content>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Available icons</h3>
        <lk-panel>
            <lk-panel-body>
                <lk-input v-model="searchString">
                    <template slot="label">Filter icons by name</template>
                </lk-input>
                <lk-divider 
                    margin-bottom="content"
                    thick
                />
                <lk-content>
                    <template v-for="(icon, index) in filteredIcons">
                        <p :key="icon">
                            <lk-icon :icon="icon"/>
                            <code>{{icon}}</code>
                        </p>
                        <lk-divider
                            v-if="index < filteredIcons.length - 1"
                            :key="`${icon}-divider`"
                            margin-bottom="content"
                        />
                    </template>
                </lk-content>
            </lk-panel-body>
        </lk-panel>
    </lk-content>
</template>

<script>
import Code from '@/labkit/documentation/components/Code';
import icons from '@/labkit/components/icon/icons';

export default {
    components: {
        formatCode: Code,
    },
    computed: {
        filteredIcons() {
            const searchString = this.searchString.toLowerCase();
            return this.icons.filter((icon) => {
                return icon.includes(searchString);
            });
        },
        icons() {
            return Object.keys(icons).sort();
        },
    },
    data() {
        return {
            interactionSampleTemplate: `
<!-- Component <template> content -->
...
            `,
            searchString: '',
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
