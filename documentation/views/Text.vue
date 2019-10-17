<template>
    <lk-content>
        <h1>Text</h1>
        <h3>[TODO]</h3>
        <ul>
            <li>Font families: <code>font-family()</code> and <code>font-family(code)</code>.</li>
            <li><code>$content-readable-width</code> as a variable to use to set the max width of copy to prevent blocks of text from spanning the width of the page in order to maintain readability.</li>
            <li>Explain how buttons and navigation should be capitalised to further distinguish it from other content.</li>
        </ul>
        <h3>Recommend sizes and weights</h3>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <div :class="$style['text-examples']">
                    <p :class="$style.heading">Heading (font-size(heading))</p>
                    <p :class="$style.description">The heading should ideally be used once per page, as the title of the page with a <code>font-weight</code> of 900.</p>
                    <p :class="$style['section-heading']">Section heading (font-size(section-heading))</p>
                    <p :class="$style.description">The section heading can be used multiple times per page and should be used to signal distinct sections on a page.</p>
                    <p :class="$style['sub-heading']">Sub-heading (font-size(sub-heading))</p>
                    <p :class="$style.description">The sub-heading can be used multiple times per page and should be used to signal a child section on a page.</p>
                    <p :class="$style['body']">Body (font-size(body))</p>
                    <p :class="$style.description">The body should be used for large blocks of text; when the text is the primary focus and readability is the main concern. It can also be used as title text (when bold) when paired with primary text.</p>
                    <p :class="$style['label']">Label (font-size(label))</p>
                    <p :class="$style.description">The label's primary use case is as a label for form input elements.</p>
                    <p :class="$style['primary']">Primary (font-size())</p>
                    <p :class="$style.description">The primary is our base font size.</p>
                    <p :class="$style['caption']">Caption (font-size(caption))</p>
                    <p :class="$style.description">The caption should only be used for text that is supplemental.</p>
                </div>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
.heading {
    font-size: font-size(heading);
    font-weight: 900;
}
.section-heading {
    font-size: font-size(section-heading);
    font-weight: bold;
}
.sub-heading {
    font-size: font-size(sub-heading);
    font-weight: bold;
}
.body {
    font-size: font-size(body);
}
.label {
    font-size: font-size(label);
    font-weight: bold;
}
.primary {
    font-size: font-size();
}
.caption {
    font-size: font-size(caption);
}
                    '
                    language="css"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
    </lk-content>
</template>

<script>
import Code from '../../documentation/components/Code';

export default {
    components: {
        formatCode: Code,
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';

.text-examples {
    .description {
        color: color(text, muted);
        font-size: font-size(caption);
        margin: 0 0 spacing-vertical(content);
        max-width: $content-readable-width;
    }
    .heading {
        font-size: font-size(heading);
        font-weight: 900;
    }
    .section-heading {
        font-size: font-size(section-heading);
        font-weight: bold;
    }
    .sub-heading {
        font-size: font-size(sub-heading);
        font-weight: bold;
    }
    .body {
        font-size: font-size(body);
    }
    .label {
        font-size: font-size(label);
        font-weight: bold;
    }
    .primary {
        font-size: font-size();
    }
    .caption {
        font-size: font-size(caption);
    }
}
</style>
