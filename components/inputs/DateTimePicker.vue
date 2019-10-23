<template>
    <lk-wrapper v-bind="wrapperProps">
        <div>
            <input-label :has-error="hasError">
                <slot 
                    name="label" 
                    slot="label"/>
                <slot 
                    name="hint" 
                    slot="hint"/>
            </input-label>
            <div class="container">
                <vue-datetime 
                    v-model="formatedDate" 
                    v-bind="datepickerProps" 
                    :input-class="dateTimeClass"/>
                <div 
                    class="clearbutton option-right-edge" 
                    v-if="hasClearOption">
                    <lk-button 
                        circle 
                        margin-bottom="none" 
                        micro 
                        outline 
                        @click.native="clearText">
                        <lk-icon icon="times"/>
                    </lk-button>
                </div>
            </div>
            <input-error :has-error="hasError">
                <slot 
                    name="error" 
                    slot="error"/>
            </input-error>
        </div>
    </lk-wrapper>
</template>
<script>
import 'vue-datetime/dist/vue-datetime.css';
import InputError from '../../components/inputs/utils/InputError';
import InputLabel from '../../components/inputs/utils/InputLabel';
import moment from 'moment';

export default {
    components: {
        InputError,
        InputLabel,
    },
    computed: {
        dateTimeClass: function() {
            if (this.hasError) {
                return 'vdatetime-input-error';
            } else {
                return 'vdatetime-input';
            }
        },

        datepickerProps: function() {
            return {
                ...this.$attrs,
            };
        },
        wrapperProps: function() {
            return {
                'margin-bottom': 'content',
            };
        },
        formatedDate: {
            get: function() {
                if (this.value !== '' && moment(this.value).isValid()) {
                    return moment(this.value)
                        .utc()
                        .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
                } else {
                    return '';
                }
            },
            set: function(modifiedDate) {
                this.internalDate = modifiedDate;
                this.$emit('input', this.internalDate);
            },
        },
    },
    data() {
        return {
            internalDate: this.value,
        };
    },
    methods: {
        clearText() {
            if (this.hasClearOption === true) {
                this.formatedDate = '';
            }
        },
    },
    props: {
        value: {
            required: false,
            type: String,
            default: '',
        },
        hasClearOption: {
            type: Boolean,
            default: false,
        },
        hasError: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
<style lang="scss">
@import '../../styles/variables';

.container {
    position: relative;
    width: 100%;
    display: flex;
    align-items: stretch;
}

.clearbutton {
    position: absolute;
    margin: auto;
    right: spacing-horizontal(button);
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
}

.vdatetime {
    width: 100%;
}

.vdatetime-popup {
    background: white;
    border: 0.1rem solid #d9d9d9;
    border-radius: 1.2rem;
    margin: 0;
    overflow: hidden;

    box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.08);

    transition: transform $transition-duration;
    transition-timing-function: $transition-timing-function;
}

.vdatetime-overlay {
    z-index: 999;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.8);
}

.vdatetime-popup__header {
    padding: 18px 30px;
    background: white;
    color: black;
    font-size: 32px;
}

.vdatetime-input {
    background: white;
    border: border-width() solid color(text, light);
    border-radius: 0.6rem;
    color: #121212;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 1.4rem;
    height: auto;
    margin: 0;
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    padding: 1.5rem 1.5rem 1.5rem;
    position: relative;
    width: 100%;
    z-index: 1;
}

.vdatetime-input-error {
    @extend .vdatetime-input;
    border: border-width() solid #ff0000;
}

.vdatetime-calendar__month__day--selected > span > span,
.vdatetime-calendar__month__day--selected:hover > span > span {
    color: #fff;
    background: #666666;
}

.vdatetime-popup__actions__button {
    display: inline-block;
    border: 1px solid black;
    border-radius: 0.6rem;
    padding: 10px 20px;
    background: transparent;
    font-size: 16px;
    color: black;
    cursor: pointer;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
    font-size: 1.4rem;
    font-weight: bold;
}

.vdatetime-popup__actions__button--cancel {
    border-color: color(danger);
    color: color(danger);
}

.vdatetime-popup__actions__button--confirm {
    border-color: color(link);
    background: color(link);
    color: white;
}

.error {
    border: border-width() solid color(danger);
    border-radius: 0.6rem;
}
</style>
