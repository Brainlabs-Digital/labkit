<template>
    <lk-content>
        <h1>Format number</h1>
        <p>The format number component (<code>lk-format-number</code>) is a convenience wrapper used to format numbers for display.</p>
        <p>It can be used to add thousand seperators, currency symbols, percentage symbol and control the number of decimals digits.</p>
        <lk-panel>
            <lk-panel-body>
                <lk-content>
                    <p>Default: <lk-format-number :number="123456789.123" /></p>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<p>Default: <lk-format-number :number="123456789.123" /></p>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-content>
                    <p>
                        <code>locale</code> as <code>GB</code>:
                        <lk-format-number 
                            locale="GB" 
                            :number="123456789.123" />
                    </p>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<p>
    <code>locale</code> as <code>GB</code>:
    <lk-format-number locale="GB" :number="123456789.123" />
</p>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-content>
                    <p>
                        <code>locale</code> as <code>DE</code>:
                        <lk-format-number 
                            locale="DE" 
                            :number="123456789.123" />
                    </p>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<p>
    <code>locale</code> as <code>DE</code>:
    <lk-format-number locale="DE" :number="123456789.123" />
</p>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-content>
                    <p>
                        <code>thousand-seperators</code> as <code>false</code>:
                        <lk-format-number 
                            :number="123456789.123" 
                            :thousand-seperators="false" />
                    </p>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<p>
    <code>thousand-seperators</code> as <code>false</code>:
    <lk-format-number :number="123456789.123" :thousand-seperators="false" />
</p>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-content>
                    <p>
                        <code>currency</code> as <code>GBP</code>:
                        <lk-format-number 
                            :number="123456789.123" 
                            currency="GBP" />
                    </p>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<p>
    <code>currency</code> as <code>GBP</code>:
    <lk-format-number :number="123456789.123" currency="GBP" />
</p>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-content>
                    <p>
                        <code>currency</code> as <code>EUR</code>:
                        <lk-format-number 
                            :number="123456789.123" 
                            currency="EUR" />
                    </p>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<p>
    <code>currency</code> as <code>EUR</code>:
    <lk-format-number :number="123456789.123" currency="EUR" />
</p>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-content>
                    <p>
                        <code>currency</code> as <code>USD</code>:
                        <lk-format-number 
                            :number="123456789.123" 
                            currency="USD" />
                    </p>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<p>
    <code>currency</code> as <code>USD</code>:
    <lk-format-number :number="123456789.123" currency="USD" />
</p>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-content>
                    <p>
                        <code>currency</code> as <code>GBP</code> when <code>number</code> is a whole number:
                        <lk-format-number 
                            :number="123456789" 
                            currency="GBP" />
                    </p>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<p>
    <code>currency</code> as <code>GBP</code> when <code>number</code> is a whole number:
    <lk-format-number :number="123456789" currency="GBP" />
</p>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-content>
                    <p>
                        <code>percent</code>:
                        <lk-format-number 
                            :number="0.12345" 
                            percent />
                    </p>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<p>
    <code>percent</code>:
    <lk-format-number :number="0.12345" percent />
</p>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-content>
                    <p>
                        <code>maximum-fraction-digits</code> as <code>1</code>:
                        <lk-format-number 
                            :maximum-fraction-digits="1" 
                            :number="123456789.123" />
                    </p>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<p>
    <code>maximum-fraction-digits</code> as <code>1</code>:
    <lk-format-number :maximum-fraction-digits="1" :number="123456789.123" />
</p>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-content>
                    <p>
                        <code>minimum-fraction-digits</code> as <code>5</code>:
                        <lk-format-number 
                            :minimum-fraction-digits="5" 
                            :number="123456789.123" />
                    </p>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<p>
    <code>minimum-fraction-digits</code> as <code>5</code>:
    <lk-format-number :minimum-fraction-digits="5" :number="123456789.123" />
</p>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-content>
                    <p>
                        <code>minimum-fraction-digits</code> as <code>5</code> and <code>maximum-fraction-digits</code> as <code>1</code>:
                        <lk-format-number 
                            :maximum-fraction-digits="1" 
                            :minimum-fraction-digits="5" 
                            :number="123456789.123" />
                    </p>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<p>
    <code>minimum-fraction-digits</code> as <code>5</code> and <code>maximum-fraction-digits</code> as <code>1</code>:
    <lk-format-number :maximum-fraction-digits="1" :minimum-fraction-digits="5" :number="123456789.123" />
</p>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel>
            <lk-panel-body>
                <lk-content>
                    <p>
                        <code>number</code> as <code>undefined</code>:
                        <lk-format-number :number="undefined" />
                    </p>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<p>
    <code>number</code> as <code>undefined</code>:
    <lk-format-number :number="undefined" />
</p>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-content>
                    <p>
                        <code>number</code> as <code>null</code>:
                        <lk-format-number :number="null" />
                    </p>
                </lk-content>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    code='
<p>
    <code>number</code> as <code>null</code>:
    <lk-format-number :number="null" />
</p>
                    '
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
    </lk-content>
</template>

<script>
import Code from '@/labkit/documentation/components/Code';

export default {
    components: {
        formatCode: Code,
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
