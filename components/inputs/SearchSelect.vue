

<template>
    <lk-wrapper>
        <input-label :has-error="hasError">
            <slot
                name="label"
                slot="label" />
            <slot
                name="hint"
                slot="hint" />
        </input-label>
        <lk-dropdown-menu
            v-bind="dropdownMenuProps"
            @toggled="setDropdownIsVisible"
            :class="$style.dropdown"
        >
            <div :class="itemsContainerClasses">
                <input
                    type="text"
                    v-model="searchFilter"
                    :disabled="disableInput"
                    :placeholder="internalPlaceholder"
                    margin-bottom="none"
                    ref="searchbox"
                >
            </div>
        </lk-dropdown-menu>
        <input-error :has-error="hasError">
            <slot
                name="error"
                slot="error" />
        </input-error>
    </lk-wrapper>
</template>

<script>
import InputError from '../../components/inputs/utils/InputError';
import InputLabel from '../../components/inputs/utils/InputLabel';

export default {
    components: {
        InputError,
        InputLabel,
    },
    computed: {
        itemsContainerClasses() {
            const classes = [this.$style['items-container']];
            if (this.hasError === true) {
                classes.push(this.$style['has-error']);
            }
            return classes;
        },
        dropdownMenuProps() {
            return {
                'margin-bottom': 'content',
                ...this.$attrs,
                items: this.filterOptions,
            };
        },
        filterOptions() {
            const filtered = [];
            let foundItemCount = 0;

            this.internalItems().forEach((option) => {
                if (
                    option.label
                        .toLowerCase()
                        .indexOf(this.searchFilter.toLowerCase()) > -1
                ) {
                    if (filtered.length < this.maxItems) {
                        filtered.push(option);
                    }
                    foundItemCount++;
                }
            });

            if (filtered.length === 0) {
                filtered.push({label: 'No results'});
            }

            if (foundItemCount > this.maxItems) {
                filtered[filtered.length - 1].hasDivider = true;
                filtered.push({
                    label: `Showing ${this.maxItems} of ${foundItemCount}`,
                });
            }
            return filtered;
        },
        key() {
            if (
                this.selectedItem &&
                this.selectedItem.hasOwnProperty(this.optionDisplayField)
            ) {
                return this.optionDisplayField;
            } else {
                return 'name';
            }
        },
    },
    created() {
        if (
            this.selectedItem !== undefined &&
            this.selectedItem !== '' &&
            this.selectedItem !== null
        ) {
            this.searchFilter = this.selectedItem[this.key];
        }
    },
    data() {
        return {
            oldSearchFilter: '',
            searchFilter: '',
            selected: {},
            disableInput: true,
            internalPlaceholder: this.placeholder,
        };
    },

    methods: {
        setDropdownIsVisible(isVisible) {
            this.disableInput = !isVisible;
            this.$nextTick(() => this.$refs.searchbox.focus());
            if (isVisible) {
                this.oldSearchFilter = this.searchFilter;
                this.searchFilter = '';
                this.selected = {};
                this.internalPlaceholder = this.oldSearchFilter;
            } else {
                if (!this.selected.hasOwnProperty('label')) {
                    this.searchFilter = this.oldSearchFilter;
                    this.internalPlaceholder = this.placeholder;
                }
            }
        },
        internalItems() {
            const updatedOptions = [];
            this.options.forEach((option) => {
                updatedOptions.push({
                    label: option[this.key],
                    callback: () => this.selectOption(option),
                });
            });
            return updatedOptions;
        },
        selectOption(option) {
            this.selected = option;
            this.searchFilter = this.selected[this.key];
            this.$emit('selected', this.selected);
        },
    },
    props: {
        selectedItem: {
            type: Object,
            required: false,
        },
        optionDisplayField: {
            type: String,
            required: false,
        },
        options: {
            type: Array,
            required: true,
            default: () => [],
            note: 'Options of dropdown. An array of options with id and name',
        },
        placeholder: {
            type: String,
            required: false,
            default: 'Please select an option',
            note: 'Placeholder of dropdown',
        },
        maxItems: {
            type: Number,
            required: false,
            default: 6,
        },
        hasError: {
            type: Boolean,
        },
    },
};
</script>

<style module lang="scss">
@import '../../styles/variables';
.dropdown {
    width: 100%;
}
input {
    background: white;
    border: 0.1rem solid #8a8a8a;
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
.has-error {
    margin: 0;
    > input {
        border-color: color(danger);
        &:hover {
            border-color: color(danger);
            box-shadow: 0 0 0 border-width(medium) rgba(color(danger), 0.125);
            + .prefix,
            + .prefix + .suffix,
            + .suffix {
                background: color(danger);
                border-color: color(danger);
                color: color(text, inverse);
            }
        }
        &:focus {
            border-color: color(danger, dark);
            box-shadow: 0 0 0 border-width(thick) rgba(color(danger), 0.25);
            + .prefix,
            + .prefix + .suffix,
            + .suffix {
                background: color(danger, dark);
                border-color: color(danger, dark);
                color: color(text, inverse);
            }
        }
    }
    > .prefix,
    > .suffix {
        background: color(danger, muted);
        border-color: color(danger);
        color: color(danger, dark);
    }
}
</style>
