import '../..';
import {mount} from '@vue/test-utils';
import Wrapper from './Wrapper';

describe('Tree picker Wrapper component', () => {
    const getNestedOptions = () => {
        return [
            {
                label: 'Option 1',
                value: 'option-1',
            },
            {
                label: 'Option 2',
                value: 'option-2',
            },
            {
                label: 'Option 3',
                value: 'option-3',
            },
            {
                label: 'Option 4',
                value: 'option-4',
            },
            {
                label: 'Parent 1',
                value: 'parent-1',
                items: [
                    {
                        label: 'Parent 1 Option 1',
                        value: 'parent-1-option-1',
                    },
                    {
                        label: 'Parent 1 Option 2',
                        value: 'parent-1-option-2',
                    },
                    {
                        label: 'Parent 1 Option 3',
                        value: 'parent-1-option-3',
                    },
                    {
                        label: 'Parent 1 Parent 1',
                        value: 'parent-1-parent-1',
                        items: [
                            {
                                label: 'Parent 1 Parent 1 Option 1',
                                value: 'parent-1-parent-1-option-1',
                            },
                            {
                                label: 'Parent 1 Parent 1 Option 2',
                                value: 'parent-1-parent-1-option-2',
                            },
                            {
                                label: 'Parent 1 Parent 1 Parent 1',
                                value: 'parent-1-parent-1-parent-1',
                                items: [
                                    {
                                        label:
                                            'Parent 1 Parent 1 Parent 1 Option 1',
                                        value:
                                            'parent-1-parent-1-parent-1-option-1',
                                    },
                                    {
                                        label:
                                            'Parent 1 Parent 1 Parent 1 Option 2',
                                        value:
                                            'parent-1-parent-1-parent-1-option-2',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Parent 2',
                value: 'parent-2',
                items: [
                    {
                        label: 'Parent 2 Option 1',
                        value: 'parent-2-option-1',
                    },
                    {
                        label: 'Parent 2 Option 2',
                        value: 'parent-2-option-2',
                    },
                    {
                        label: 'Parent 2 Option 3',
                        value: 'parent-2-option-3',
                    },
                ],
            },
        ];
    };

    describe('`counters` computed value', () => {
        describe('When there are no options selected', () => {
            it('correctly counts the total number of options and selected options', () => {
                const component = mount(Wrapper, {
                    propsData: {
                        items: getNestedOptions(),
                        value: [],
                    },
                });
                expect(component.vm.counters).toEqual({
                    options: 14,
                    selected: 0,
                    children: {
                        'parent-1': {
                            options: 7,
                            selected: 0,
                            children: {
                                'parent-1-parent-1': {
                                    options: 4,
                                    selected: 0,
                                    children: {
                                        'parent-1-parent-1-parent-1': {
                                            options: 2,
                                            selected: 0,
                                        },
                                    },
                                },
                            },
                        },
                        'parent-2': {
                            options: 3,
                            selected: 0,
                        },
                    },
                });
            });
        });

        describe('When there are options selected', () => {
            it('correctly counts the total number of options and selected options', () => {
                const component = mount(Wrapper, {
                    propsData: {
                        items: getNestedOptions(),
                        value: [
                            'option-4',
                            'parent-1-parent-1-option-1',
                            'parent-1-parent-1-option-2',
                            'parent-1-parent-1-parent-1-option-1',
                            'parent-2-option-1',
                            'parent-2-option-3',
                        ],
                    },
                });
                expect(component.vm.counters).toEqual({
                    options: 14,
                    selected: 6,
                    children: {
                        'parent-1': {
                            options: 7,
                            selected: 3,
                            children: {
                                'parent-1-parent-1': {
                                    options: 4,
                                    selected: 3,
                                    children: {
                                        'parent-1-parent-1-parent-1': {
                                            options: 2,
                                            selected: 1,
                                        },
                                    },
                                },
                            },
                        },
                        'parent-2': {
                            options: 3,
                            selected: 2,
                        },
                    },
                });
            });

            describe('When there are selected options that do not exist as options', () => {
                it('correctly counts the total number of options and selected options', () => {
                    const component = mount(Wrapper, {
                        propsData: {
                            items: getNestedOptions(),
                            value: [
                                'not-a-real-option-1',
                                'option-4',
                                'parent-1-parent-1-option-1',
                                'parent-1-parent-1-option-2',
                                'parent-1-parent-1-parent-1-option-1',
                                'parent-2-option-1',
                                'parent-2-option-3',
                                'not-a-real-option-2',
                            ],
                        },
                    });
                    expect(component.vm.counters).toEqual({
                        options: 14,
                        selected: 6,
                        children: {
                            'parent-1': {
                                options: 7,
                                selected: 3,
                                children: {
                                    'parent-1-parent-1': {
                                        options: 4,
                                        selected: 3,
                                        children: {
                                            'parent-1-parent-1-parent-1': {
                                                options: 2,
                                                selected: 1,
                                            },
                                        },
                                    },
                                },
                            },
                            'parent-2': {
                                options: 3,
                                selected: 2,
                            },
                        },
                    });
                });
            });
        });
    });

    describe('`filteredItems` computed value', () => {
        describe('When there is no value for `searchTerm` and `filter` is `all`', () => {
            it('does not filter any options', () => {
                const component = mount(Wrapper, {
                    propsData: {
                        items: getNestedOptions(),
                        value: [],
                    },
                });
                component.setData({
                    filter: 'all',
                    searchTerm: '',
                });
                expect(component.vm.filteredItems).toEqual(getNestedOptions());
            });
        });

        describe('When there is a value for `searchTerm` and `filter` is `all`', () => {
            it('filters out anything that does not contain the search term', () => {
                const component = mount(Wrapper, {
                    propsData: {
                        items: getNestedOptions(),
                        value: [],
                    },
                });
                component.setData({
                    filter: 'all',
                    searchTerm: 'option 1',
                });
                expect(component.vm.filteredItems).toEqual([
                    {
                        label: 'Option 1',
                        value: 'option-1',
                    },
                    {
                        label: 'Parent 1',
                        value: 'parent-1',
                        items: [
                            {
                                label: 'Parent 1 Option 1',
                                value: 'parent-1-option-1',
                            },
                            {
                                label: 'Parent 1 Parent 1',
                                value: 'parent-1-parent-1',
                                items: [
                                    {
                                        label: 'Parent 1 Parent 1 Option 1',
                                        value: 'parent-1-parent-1-option-1',
                                    },
                                    {
                                        label: 'Parent 1 Parent 1 Parent 1',
                                        value: 'parent-1-parent-1-parent-1',
                                        items: [
                                            {
                                                label:
                                                    'Parent 1 Parent 1 Parent 1 Option 1',
                                                value:
                                                    'parent-1-parent-1-parent-1-option-1',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        label: 'Parent 2',
                        value: 'parent-2',
                        items: [
                            {
                                label: 'Parent 2 Option 1',
                                value: 'parent-2-option-1',
                            },
                        ],
                    },
                ]);
            });
        });

        describe('When `filter` is `selected`', () => {
            it('filters out items that are not selected', () => {
                const component = mount(Wrapper, {
                    propsData: {
                        items: getNestedOptions(),
                        value: [
                            'option-4',
                            'parent-1-parent-1-option-1',
                            'parent-1-parent-1-option-2',
                            'parent-1-parent-1-parent-1-option-1',
                            'parent-2-option-1',
                            'parent-2-option-3',
                        ],
                    },
                });
                component.setData({
                    filter: 'selected',
                    searchTerm: '',
                });
                expect(component.vm.filteredItems).toEqual([
                    {
                        label: 'Option 4',
                        value: 'option-4',
                    },
                    {
                        label: 'Parent 1',
                        value: 'parent-1',
                        items: [
                            {
                                label: 'Parent 1 Parent 1',
                                value: 'parent-1-parent-1',
                                items: [
                                    {
                                        label: 'Parent 1 Parent 1 Option 1',
                                        value: 'parent-1-parent-1-option-1',
                                    },
                                    {
                                        label: 'Parent 1 Parent 1 Option 2',
                                        value: 'parent-1-parent-1-option-2',
                                    },
                                    {
                                        label: 'Parent 1 Parent 1 Parent 1',
                                        value: 'parent-1-parent-1-parent-1',
                                        items: [
                                            {
                                                label:
                                                    'Parent 1 Parent 1 Parent 1 Option 1',
                                                value:
                                                    'parent-1-parent-1-parent-1-option-1',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        label: 'Parent 2',
                        value: 'parent-2',
                        items: [
                            {
                                label: 'Parent 2 Option 1',
                                value: 'parent-2-option-1',
                            },
                            {
                                label: 'Parent 2 Option 3',
                                value: 'parent-2-option-3',
                            },
                        ],
                    },
                ]);
            });
        });
    });
});
