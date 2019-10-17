<template>
    <lk-content>
        <h1>Grid</h1>
        <p>The grid is composed of 3 components: container (<code>lk-container</code>), row (<code>lk-row</code>) and column (<code>lk-column</code>). They provide a way to structure and layout items on the page.</p>
        <h2>Container</h2>
        <p>The container component (<code>lk-container</code>) is used to center and/or horizontally pad content. By default it has a maximum width of 1280px, falling back to 100% of the browser window when it is below that size.</p>
        <p>The prop <code>fluid</code> can be used to have the container always be 100% of the browser window (or the width of the parent element).</p>
        <h2>Rows and columns</h2>
        <p>The grid is composed of rows and columns (the <code>lk-row</code> and <code>lk-column</code> components) where there can be up to 12 columns in a row. If a row has more than 12 columns, the columns will overflow onto a new line.</p>
        <p>By default all columns in a row will be of equal width:</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-row>
                    <lk-column :class="[$style.column]">Auto width column</lk-column>
                    <lk-column :class="[$style.column]">Auto width column</lk-column>
                    <lk-column :class="[$style.column]">Auto width column</lk-column>
                </lk-row>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-row>
    <lk-column>Auto width column</lk-column>
    <lk-column>Auto width column</lk-column>
    <lk-column>Auto width column</lk-column>
</lk-row>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Specifying column width</h3>
        <p>The width of a column can be specified using the <code>span</code> prop, where the value is the number of columns that you want the column to span. Columns without a <code>span</code> defined will take up an equal share of the remaining space:</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-row>
                    <lk-column 
                        :class="[$style.column]" 
                        span="6">Half Width Column</lk-column>
                    <lk-column :class="[$style.column]">Auto width column</lk-column>
                    <lk-column :class="[$style.column]">Auto width column</lk-column>
                </lk-row>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-row>
<lk-column span="6">Half Width</lk-column>
<lk-column>Auto width column</lk-column>
<lk-column>Auto width column</lk-column>
</lk-row>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>Setting the <code>span</code> to <code>auto</code> will make the column fit it's contents:</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-row>
                    <lk-column 
                        span="auto" 
                        :class="[$style.column]">Fit Content Column</lk-column>
                    <lk-column :class="[$style.column]">Auto width column</lk-column>
                    <lk-column :class="[$style.column]">Auto width column</lk-column>
                </lk-row>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-row>
    <lk-column span="auto">Auto width column</lk-column>
    <lk-column>Auto width column</lk-column>
    <lk-column>Auto width column</lk-column>
</lk-row>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>If a column has a specific width set at a small screen size (for example it's set at <code>12</code> at the <code>sm</code> breakpoint) but we want the column to fill the remaining space at a larger screen sizes we can set the <code>span</code> prop to <code>fill</code>.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-row>
                    <lk-column 
                        span="12"
                        md:span="fill"
                        :class="[$style.column]">Full width below <code>sm</code>, otherwise fills the remaining space</lk-column>
                    <lk-column
                        span="3"
                        :class="[$style.column]"
                    >Quarter width column</lk-column>
                    <lk-column
                        span="3"
                        :class="[$style.column]"
                    >Quarter width column</lk-column>
                </lk-row>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-row>
    <lk-column 
        span="12"
        md:span="fill"
    >Full width below <code>sm</code>, otherwise fills the remaining space</lk-column>
    <lk-column span="3">Quarter width column</lk-column>
    <lk-column span="3">Quarter width column</lk-column>
</lk-row>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <p>The <code>span</code> prop accepts values from <code>1</code> to <code>12</code>, <code>auto</code> and <code>fill</code>.</p>
        <h3>Column offset</h3>
        <p>The <code>offset</code> prop can be used on the column component offset the column from the left hand side.</p>
        <p>This prop exists so that we can have control over columns spacing without having to use empty columns.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-row>
                    <lk-column 
                        :class="[$style.column]" 
                        offset="3">Offset Column</lk-column>
                    <lk-column :class="[$style.column]">Auto width column</lk-column>
                </lk-row>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-row>
    <lk-column offset="3">Offset Column</lk-column>
    <lk-column>Auto width column</lk-column>
</lk-row>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Gutter</h3>
        <p>The size of the gutter between columns can be set on per row basis by using the <code>gutter</code> prop.</p>
        <p>The <code>gutter</code> prop accepts the following arguments:</p>
        <ul>
            <li>If the prop is set but no value is provided then the gutter will be the standard/default size of <code>spacing-horizontal()</code>.</li>
            <li><code>content</code> will set a gutter size of <code>spacing-horizontal(content)</code>.</li>
            <li><code>compact</code> will set a gutter size of <code>spacing-horizontal(compact)</code>.</li>
            <li><code>mini</code> will set a gutter size of <code>spacing-horizontal(mini)</code>.</li>
            <li><code>none</code> will make the columns have no gutter.</li>
        </ul>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom="none">
                <lk-row>
                    <lk-column>
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                Standard gutter
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                    <lk-column>
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                Standard gutter
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                    <lk-column>
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                Standard gutter
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                </lk-row>
                <lk-row gutter="content">
                    <lk-column>
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                Content gutter
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                    <lk-column>
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                Content gutter
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                    <lk-column>
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                Content gutter
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                </lk-row>
                <lk-row gutter="compact">
                    <lk-column>
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                Compact gutter
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                    <lk-column>
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                Compact gutter
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                    <lk-column>
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                Compact gutter
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                </lk-row>
                <lk-row gutter="mini">
                    <lk-column>
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                Mini gutter
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                    <lk-column>
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                Mini gutter
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                    <lk-column>
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                Mini gutter
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                </lk-row>
                <lk-row gutter="none">
                    <lk-column>
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                No gutter
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                    <lk-column>
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                No gutter
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                    <lk-column>
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                No gutter
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                </lk-row>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-row>
    <lk-column>
        <lk-panel>
            <lk-panel-body padding-bottom>
                Standard gutter
            </lk-panel-body>
        </lk-panel>
    </lk-column>
    <lk-column>
        <lk-panel>
            <lk-panel-body padding-bottom>
                Standard gutter
            </lk-panel-body>
        </lk-panel>
    </lk-column>
    <lk-column>
        <lk-panel>
            <lk-panel-body padding-bottom>
                Standard gutter
            </lk-panel-body>
        </lk-panel>
    </lk-column>
</lk-row>
<lk-row gutter="content">
    <lk-column>
        <lk-panel>
            <lk-panel-body padding-bottom>
                Content gutter
            </lk-panel-body>
        </lk-panel>
    </lk-column>
    <lk-column>
        <lk-panel>
            <lk-panel-body padding-bottom>
                Content gutter
            </lk-panel-body>
        </lk-panel>
    </lk-column>
    <lk-column>
        <lk-panel>
            <lk-panel-body padding-bottom>
                Content gutter
            </lk-panel-body>
        </lk-panel>
    </lk-column>
</lk-row>
<lk-row gutter="compact">
    <lk-column>
        <lk-panel>
            <lk-panel-body padding-bottom>
                Compact gutter
            </lk-panel-body>
        </lk-panel>
    </lk-column>
    <lk-column>
        <lk-panel>
            <lk-panel-body padding-bottom>
                Compact gutter
            </lk-panel-body>
        </lk-panel>
    </lk-column>
    <lk-column>
        <lk-panel>
            <lk-panel-body padding-bottom>
                Compact gutter
            </lk-panel-body>
        </lk-panel>
    </lk-column>
</lk-row>
<lk-row gutter="mini">
    <lk-column>
        <lk-panel>
            <lk-panel-body padding-bottom>
                Mini gutter
            </lk-panel-body>
        </lk-panel>
    </lk-column>
    <lk-column>
        <lk-panel>
            <lk-panel-body padding-bottom>
                Mini gutter
            </lk-panel-body>
        </lk-panel>
    </lk-column>
    <lk-column>
        <lk-panel>
            <lk-panel-body padding-bottom>
                Mini gutter
            </lk-panel-body>
        </lk-panel>
    </lk-column>
</lk-row>
<lk-row gutter="none">
    <lk-column>
        <lk-panel>
            <lk-panel-body padding-bottom>
                No gutter
            </lk-panel-body>
        </lk-panel>
    </lk-column>
    <lk-column>
        <lk-panel>
            <lk-panel-body padding-bottom>
                No gutter
            </lk-panel-body>
        </lk-panel>
    </lk-column>
    <lk-column>
        <lk-panel>
            <lk-panel-body padding-bottom>
                No gutter
            </lk-panel-body>
        </lk-panel>
    </lk-column>
</lk-row>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Column ordering</h3>
        <p>It is possible to re-order columns at different breakpoints using values from <code>1</code> to <code>12</code>. <code>first</code> and <code>last</code> can also be used as values to set the column to be placed first or last in the row.</p>
        <ul>
            <li>Columns with a higher value will be placed towards the end of the row. For example a column with an <code>order</code> value of <code>3</code> will be placed before a column with an <code>order</code> value of <code>4</code>.</li>
            <li>If a column in the row has an order specified then columns with no order specified will be placed at the start of the row.</li>
            <li>Columns with the same <code>order</code> value will be ordered in the same order as they appear in the markup.</li>
        </ul>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom="none">
                <lk-row>
                    <lk-column
                        sm:order="4"
                        md:order="3"
                        lg:order="1"
                        span="12"
                    >
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                1st when window is >= 992px. 2nd when window is >= 768px. 3rd when window is >= 576px
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                    <lk-column
                        order="2"
                        span="12"
                    >
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                2nd column in markup
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                    <lk-column
                        order="3"
                        span="12"
                    >
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                3rd column in markup
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                </lk-row>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-row>
    <lk-column
        sm:order="4"
        md:order="3"
        lg:order="1"
        span="12"
    >
        <lk-panel>
            <lk-panel-body padding-bottom>
                1st when window is >= 992px. 2nd when window is >= 768px. 3rd when window is >= 576px
            </lk-panel-body>
        </lk-panel>
    </lk-column>
    <lk-column
        order="2"
        span="12"
    >
        <lk-panel>
            <lk-panel-body padding-bottom>
                2nd column in markup
            </lk-panel-body>
        </lk-panel>
    </lk-column>
    <lk-column
        order="3"
        span="12"
    >
        <lk-panel>
            <lk-panel-body padding-bottom>
                3rd column in markup
            </lk-panel-body>
        </lk-panel>
    </lk-column>
</lk-row>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Responsive breakpoints</h3>
        <p>The <code>span</code>, <code>offset</code>, <code>gutter</code> and <code>order</code> props can be prefixed with the following prefixes to provide responsive functionality:</p>
        <ul>
            <li>Props with no prefix will apply when the browser window is >= 0px wide.</li>
            <li>Props prefixed with <code>sm:</code> will apply when the browser window is >= 576px wide.</li>
            <li>Props prefixed with <code>md:</code> will apply when the browser window is >= 768px wide.</li>
            <li>Props prefixed with <code>lg:</code> will apply when the browser window is >= 992px wide.</li>
            <li>Props prefixed with <code>xl:</code> will apply when the browser window is >= 1200px wide.</li>
        </ul>
        <lk-panel>
            <lk-panel-body padding-bottom>
                <lk-row>
                    <lk-column 
                        sm:span="12" 
                        md:span="6" 
                        lg:span="3" 
                        :class="[$style.column]">3 When >= 992px, 6 when >= 768px, 12 when >= 576px, auto when less than 576px</lk-column>
                    <lk-column :class="[$style.column]">Auto width column</lk-column>
                    <lk-column :class="[$style.column]">Auto width column</lk-column>
                </lk-row>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-row>
    <lk-column sm:span="12" md:span="6" lg:span="3">
        3 When >= 992px, 6 when >= 768px, 12 when >= 576px, auto when less than 576px
    </lk-column>
    <lk-column>Auto width column</lk-column>
    <lk-column>Auto width column</lk-column>
</lk-row>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body padding-bottom>
                <lk-row>
                    <lk-column 
                        :class="[$style.column]" 
                        md:offset="3" 
                        lg:offset="6">
                        Offset 6 when >= 992px, offset 3 when >= 768px, no offset when less than 768px
                    </lk-column>
                    <lk-column :class="[$style.column]">Auto width column</lk-column>
                </lk-row>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-row>
    <lk-column md:offset="3" lg:offset="6">
        Offset 6 when >= 992px, offset 3 when >= 768px, no offset when less than 768px
    </lk-column>
    <lk-column>Auto width column</lk-column>
</lk-row>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom="none">
                <lk-content content-font-size-primary>
                    <p>The following row columns will have a standard gutter when the window is >= 992px wide, a compact gutter when the window is >= 768px, a mini gutter when the window is >= 576px and no gutter below that.</p>
                </lk-content>
                <lk-divider />
                <lk-row
                    gutter="none"
                    sm:gutter="mini"
                    md:gutter="compact"
                    lg:gutter
                >
                    <lk-column>
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                Content
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                    <lk-column>
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                Content
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                    <lk-column>
                        <lk-panel>
                            <lk-panel-body padding-bottom>
                                Content
                            </lk-panel-body>
                        </lk-panel>
                    </lk-column>
                </lk-row>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-row
    gutter="none"
    sm:gutter="mini"
    md:gutter="compact"
    lg:gutter
>
    <lk-column>
        <lk-panel>
            <lk-panel-body padding-bottom>
                Content
            </lk-panel-body>
        </lk-panel>
    </lk-column>
    <lk-column>
        <lk-panel>
            <lk-panel-body padding-bottom>
                Content
            </lk-panel-body>
        </lk-panel>
    </lk-column>
    <lk-column>
        <lk-panel>
            <lk-panel-body padding-bottom>
                Content
            </lk-panel-body>
        </lk-panel>
    </lk-column>
</lk-row>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Row vertically align items</h3>
        <p>The <code>align-items-{start|center|end}</code> props can be used on the row component to vertically align all columns in the row:</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-row 
                    align-items-start 
                    :class="[$style['fixed-height-row']]">
                    <lk-column :class="[$style.column]">Auto width column</lk-column>
                    <lk-column :class="[$style.column]">Auto width column<br> An extra line to demonstrate alignment</lk-column>
                    <lk-column :class="[$style.column]">Auto width column</lk-column>
                </lk-row>
                <lk-row 
                    align-items-center 
                    :class="[$style['fixed-height-row']]">
                    <lk-column :class="[$style.column]">Auto width column</lk-column>
                    <lk-column :class="[$style.column]">Auto width column<br> An extra line to demonstrate alignment</lk-column>
                    <lk-column :class="[$style.column]">Auto width column</lk-column>
                </lk-row>
                <lk-row 
                    align-items-end 
                    :class="[$style['fixed-height-row']]">
                    <lk-column :class="[$style.column]">Auto width column</lk-column>
                    <lk-column :class="[$style.column]">Auto width column<br> An extra line to demonstrate alignment</lk-column>
                    <lk-column :class="[$style.column]">Auto width column</lk-column>
                </lk-row>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-row align-items-start>
    <lk-column>Auto width column</lk-column>
    <lk-column>
        Auto width column
        <br> An extra line to demonstrate alignment
    </lk-column>
    <lk-column>Auto width column</lk-column>
</lk-row>
<lk-row align-items-center>
    <lk-column>Auto width column</lk-column>
    <lk-column>
        Auto width column
        <br> An extra line to demonstrate alignment
    </lk-column>
    <lk-column>Auto width column</lk-column>
</lk-row>
<lk-row align-items-end>
    <lk-column>Auto width column</lk-column>
    <lk-column>
        Auto width column
        <br> An extra line to demonstrate alignment
    </lk-column>
    <lk-column>Auto width column</lk-column>
</lk-row>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Row horizontally align items</h3>
        <p>The <code>justify-content-{start|end|center|between|around|evenly}</code> props can be used on the row component to horizontally align all columns in the row:</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-row justify-content-start>
                    <lk-column 
                        :class="[$style.column]" 
                        span="auto">Auto width column</lk-column>
                    <lk-column 
                        :class="[$style.column]" 
                        span="auto">Auto width column. An extra sentence to demonstrate alignment</lk-column>
                    <lk-column 
                        :class="[$style.column]" 
                        span="auto">Auto width column</lk-column>
                </lk-row>
            </lk-panel-body>
            <lk-panel-body padding-bottom>
                <lk-row justify-content-end>
                    <lk-column 
                        :class="[$style.column]" 
                        span="auto">Auto width column</lk-column>
                    <lk-column 
                        :class="[$style.column]" 
                        span="auto">Auto width column. An extra sentence to demonstrate alignment</lk-column>
                    <lk-column 
                        :class="[$style.column]" 
                        span="auto">Auto width column</lk-column>
                </lk-row>
            </lk-panel-body>
            <lk-panel-body padding-bottom>
                <lk-row justify-content-center>
                    <lk-column 
                        :class="[$style.column]" 
                        span="auto">Auto width column</lk-column>
                    <lk-column 
                        :class="[$style.column]" 
                        span="auto">Auto width column. An extra sentence to demonstrate alignment</lk-column>
                    <lk-column 
                        :class="[$style.column]" 
                        span="auto">Auto width column</lk-column>
                </lk-row>
            </lk-panel-body>
            <lk-panel-body padding-bottom>
                <lk-row justify-content-between>
                    <lk-column 
                        :class="[$style.column]" 
                        span="auto">Auto width column</lk-column>
                    <lk-column 
                        :class="[$style.column]" 
                        span="auto">Auto width column. An extra sentence to demonstrate alignment</lk-column>
                    <lk-column 
                        :class="[$style.column]" 
                        span="auto">Auto width column</lk-column>
                </lk-row>
            </lk-panel-body>
            <lk-panel-body padding-bottom>
                <lk-row justify-content-around>
                    <lk-column 
                        :class="[$style.column]" 
                        span="auto">Auto width column</lk-column>
                    <lk-column 
                        :class="[$style.column]" 
                        span="auto">Auto width column. An extra sentence to demonstrate alignment</lk-column>
                    <lk-column 
                        :class="[$style.column]" 
                        span="auto">Auto width column</lk-column>
                </lk-row>
            </lk-panel-body>
            <lk-panel-body padding-bottom>
                <lk-row justify-content-evenly>
                    <lk-column 
                        :class="[$style.column]" 
                        span="auto">Auto width column</lk-column>
                    <lk-column 
                        :class="[$style.column]" 
                        span="auto">Auto width column. An extra sentence to demonstrate alignment</lk-column>
                    <lk-column 
                        :class="[$style.column]" 
                        span="auto">Auto width column</lk-column>
                </lk-row>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-row justify-content-start>
    <lk-column span="auto">Auto width column</lk-column>
    <lk-column span="auto">Auto width column. An extra sentence to demonstrate alignment</lk-column>
    <lk-column span="auto">Auto width column</lk-column>
</lk-row>
                    '
                    language="html"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-row justify-content-end>
    <lk-column span="auto">Auto width column</lk-column>
    <lk-column span="auto">Auto width column. An extra sentence to demonstrate alignment</lk-column>
    <lk-column span="auto">Auto width column</lk-column>
</lk-row>
                    '
                    language="html"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-row justify-content-center>
    <lk-column span="auto">Auto width column</lk-column>
    <lk-column span="auto">Auto width column. An extra sentence to demonstrate alignment</lk-column>
    <lk-column span="auto">Auto width column</lk-column>
</lk-row>
                    '
                    language="html"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-row justify-content-between>
    <lk-column span="auto">Auto width column</lk-column>
    <lk-column span="auto">Auto width column. An extra sentence to demonstrate alignment</lk-column>
    <lk-column span="auto">Auto width column</lk-column>
</lk-row>
                    '
                    language="html"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-row justify-content-around>
    <lk-column span="auto">Auto width column</lk-column>
    <lk-column span="auto">Auto width column. An extra sentence to demonstrate alignment</lk-column>
    <lk-column span="auto">Auto width column</lk-column>
</lk-row>
                    '
                    language="html"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-row justify-content-evenly>
    <lk-column span="auto">Auto width column</lk-column>
    <lk-column span="auto">Auto width column. An extra sentence to demonstrate alignment</lk-column>
    <lk-column span="auto">Auto width column</lk-column>
</lk-row>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Column align self</h3>
        <p>The <code>align-self-{start|center|end}</code> props can be used on the column component to vertically the column in a row:</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body padding-bottom>
                <lk-row :class="[$style['fixed-height-row']]">
                    <lk-column 
                        align-self-start 
                        :class="[$style.column]">Align Self start</lk-column>
                    <lk-column 
                        align-self-center 
                        :class="[$style.column]">Align Self Center</lk-column>
                    <lk-column 
                        align-self-end 
                        :class="[$style.column]">Align Self End</lk-column>
                </lk-row>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<lk-row>
    <lk-column align-self-start>Align Self Start</lk-column>
    <lk-column align-self-center>Align Self Center</lk-column>
    <lk-column align-self-end>Align Self End</lk-column>
</lk-row>
                    '
                    language="html"
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
@import 'src/labkit/styles/mixins';
@import 'src/labkit/styles/variables';

/*
    We want to highlight the individual columns by giving them a background and/or
    border.
*/
.column {
    background: background-color(highlight, primary);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: spacing-vertical(content);
    padding-top: spacing-vertical(content);
}

/*
    To demonstrate align-items/self-* props we need the row to be taller than the
    columns.
*/
.fixed-height-row {
    background: background-color(light);
    border: 1px solid rgba(0, 0, 0, 0.1);
    height: 100px;
}
</style>
