import '@/labkit';
import {mount} from '@vue/test-utils';
import DatePicker from './DatePicker';
import moment from 'moment';

describe('Tree picker Wrapper component', () => {
    describe('`calendarDays` computed value', () => {
        const formatMomentObjectToString = ({dateObject}) => {
            return dateObject.format('YYYY-MM-DD');
        };

        describe('When the first day of the month is a Monday', () => {
            it('correctly generates days', () => {
                const component = mount(DatePicker, {
                    propsData: {
                        selectedDate: moment('2019-04-01T00:00:00Z'),
                    },
                });
                expect(
                    component.vm.calendarDays.map((week) => {
                        return week.map(formatMomentObjectToString);
                    }),
                ).toEqual([
                    [
                        '2019-04-01',
                        '2019-04-02',
                        '2019-04-03',
                        '2019-04-04',
                        '2019-04-05',
                        '2019-04-06',
                        '2019-04-07',
                    ],
                    [
                        '2019-04-08',
                        '2019-04-09',
                        '2019-04-10',
                        '2019-04-11',
                        '2019-04-12',
                        '2019-04-13',
                        '2019-04-14',
                    ],
                    [
                        '2019-04-15',
                        '2019-04-16',
                        '2019-04-17',
                        '2019-04-18',
                        '2019-04-19',
                        '2019-04-20',
                        '2019-04-21',
                    ],
                    [
                        '2019-04-22',
                        '2019-04-23',
                        '2019-04-24',
                        '2019-04-25',
                        '2019-04-26',
                        '2019-04-27',
                        '2019-04-28',
                    ],
                    [
                        '2019-04-29',
                        '2019-04-30',
                        '2019-05-01',
                        '2019-05-02',
                        '2019-05-03',
                        '2019-05-04',
                        '2019-05-05',
                    ],
                ]);
            });
        });

        describe('When the last day of the month is a Sunday', () => {
            it('correctly generates days', () => {
                const component = mount(DatePicker, {
                    propsData: {
                        selectedDate: moment('2018-09-01T00:00:00Z'),
                    },
                });
                expect(
                    component.vm.calendarDays.map((week) => {
                        return week.map(formatMomentObjectToString);
                    }),
                ).toEqual([
                    [
                        '2018-08-27',
                        '2018-08-28',
                        '2018-08-29',
                        '2018-08-30',
                        '2018-08-31',
                        '2018-09-01',
                        '2018-09-02',
                    ],
                    [
                        '2018-09-03',
                        '2018-09-04',
                        '2018-09-05',
                        '2018-09-06',
                        '2018-09-07',
                        '2018-09-08',
                        '2018-09-09',
                    ],
                    [
                        '2018-09-10',
                        '2018-09-11',
                        '2018-09-12',
                        '2018-09-13',
                        '2018-09-14',
                        '2018-09-15',
                        '2018-09-16',
                    ],
                    [
                        '2018-09-17',
                        '2018-09-18',
                        '2018-09-19',
                        '2018-09-20',
                        '2018-09-21',
                        '2018-09-22',
                        '2018-09-23',
                    ],
                    [
                        '2018-09-24',
                        '2018-09-25',
                        '2018-09-26',
                        '2018-09-27',
                        '2018-09-28',
                        '2018-09-29',
                        '2018-09-30',
                    ],
                ]);
            });
        });

        describe('When the first day of the month is not a Monday and the last day of the month is not a Sunday', () => {
            it('correctly generates days', () => {
                const component = mount(DatePicker, {
                    propsData: {
                        selectedDate: moment('2018-06-01T00:00:00Z'),
                    },
                });
                expect(
                    component.vm.calendarDays.map((week) => {
                        return week.map(formatMomentObjectToString);
                    }),
                ).toEqual([
                    [
                        '2018-05-28',
                        '2018-05-29',
                        '2018-05-30',
                        '2018-05-31',
                        '2018-06-01',
                        '2018-06-02',
                        '2018-06-03',
                    ],
                    [
                        '2018-06-04',
                        '2018-06-05',
                        '2018-06-06',
                        '2018-06-07',
                        '2018-06-08',
                        '2018-06-09',
                        '2018-06-10',
                    ],
                    [
                        '2018-06-11',
                        '2018-06-12',
                        '2018-06-13',
                        '2018-06-14',
                        '2018-06-15',
                        '2018-06-16',
                        '2018-06-17',
                    ],
                    [
                        '2018-06-18',
                        '2018-06-19',
                        '2018-06-20',
                        '2018-06-21',
                        '2018-06-22',
                        '2018-06-23',
                        '2018-06-24',
                    ],
                    [
                        '2018-06-25',
                        '2018-06-26',
                        '2018-06-27',
                        '2018-06-28',
                        '2018-06-29',
                        '2018-06-30',
                        '2018-07-01',
                    ],
                ]);
            });
        });
    });
});
