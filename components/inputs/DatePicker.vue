<template>
    <lk-wrapper v-bind="wrapperProps">
        <div :class="$style.container">
            <div :class="$style['month-container']">
                <div
                    :class="previousMonthClasses"
                    @click="viewPreviousMonth"
                ><lk-icon
                    flop
                    icon="angle-right"
                /></div>
                <p>{{visibleHumanMonth}} {{visibleDate.year()}}</p>
                <div
                    :class="nextMonthClasses"
                    @click="viewNextMonth"
                ><lk-icon icon="angle-right" /></div>
            </div>
            <div :class="$style.calendar">
                <table>
                    <thead>
                        <tr>
                            <td>Mo</td>
                            <td>Tu</td>
                            <td>We</td>
                            <td>Th</td>
                            <td>Fr</td>
                            <td>Sa</td>
                            <td>Su</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(week, index) in calendarDays"
                            :key="index"
                        >
                            <td
                                v-for="(day, dayIndex) in week"
                                :class="day.classes"
                                :key="dayIndex"
                                @click="setSelectedDate(day.dateObject)"
                            >
                                {{day.formattedDay}}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div :class="$style['selected-container']">
                {{this.selectedDate.format('MMMM D YYYY')}}
            </div>
        </div>
    </lk-wrapper>
</template>

<script>
import moment from 'moment';

/*
    TODO:
    * Implement being able to select month and year.
      * When the month/year is clicked, display a table of months/years to select from.
    * When clicked the visible date should change to show the selected date.
    * Add time selection UI, likely using selects below the selected date in the UI.
      * Add option not to have time selection.
*/

export default {
    computed: {
        calendarDays() {
            const calendarDays = [[]];
            const startOfVisibleMonth = this.visibleDate
                .clone()
                .startOf('month');
            const endOfVisibleMonth = this.visibleDate.clone().endOf('month');
            const dayOfWeekOfStartOfMonth = startOfVisibleMonth.isoWeekday();
            /*
                We want our initial `currentDay` to be the Monday of the week
                that the first day of the month is in.
            */
            const currentDay = startOfVisibleMonth
                .clone()
                .subtract(dayOfWeekOfStartOfMonth - 1, 'days');
            const isBeforeEndOfMonth = () =>
                currentDay.isBefore(endOfVisibleMonth);
            const currentWeekIsComplete = () => {
                return calendarDays[calendarDays.length - 1].length === 7;
            };
            while (
                isBeforeEndOfMonth() === true ||
                currentWeekIsComplete() === false
            ) {
                calendarDays[calendarDays.length - 1].push(
                    this.constructDay(currentDay.clone()),
                );
                currentDay.add(1, 'day');
                if (
                    isBeforeEndOfMonth() === true &&
                    currentWeekIsComplete() === true
                ) {
                    calendarDays.push([]);
                }
            }
            return calendarDays;
        },
        nextMonthClasses() {
            const classes = [this.$style.navigation, this.$style.next];
            if (this.nextMonthIsAccessible === false) {
                classes.push(this.$style.disabled);
            }
            return classes;
        },
        nextMonthIsAccessible() {
            return (
                this.maxDate === undefined ||
                this.visibleDate
                    .clone()
                    .add(1, 'month')
                    .startOf('month')
                    .isAfter(this.maxDate, 'day') === false
            );
        },
        previousMonthClasses() {
            const classes = [this.$style.navigation, this.$style.previous];
            if (this.previousMonthIsAccessible === false) {
                classes.push(this.$style.disabled);
            }
            return classes;
        },
        previousMonthIsAccessible() {
            return (
                this.minDate === undefined ||
                this.visibleDate
                    .clone()
                    .subtract(1, 'month')
                    .endOf('month')
                    .isBefore(this.minDate, 'day') === false
            );
        },
        visibleHumanMonth() {
            return this.visibleDate.format('MMMM');
        },
        wrapperProps() {
            return {
                'margin-bottom': 'content',
                ...this.$attrs,
                display: 'inline-block',
            };
        },
    },
    data() {
        return {
            visibleDate: this.selectedDate
                .clone()
                .local()
                .startOf('month'),
        };
    },
    methods: {
        constructDay(dateObject) {
            const day = {
                classes: [],
                dateObject: dateObject.clone(),
                formattedDay: dateObject.format('D'),
            };
            if (dateObject.isSame(this.selectedDate, 'day') === true) {
                day.classes.push(this.$style.selected);
            }
            if (dateObject.isSame(this.visibleDate, 'month') === false) {
                day.classes.push(this.$style.muted);
            }
            if (
                this.maxDate !== undefined &&
                dateObject.isAfter(this.maxDate, 'day') === true
            ) {
                day.classes.push(this.$style.disabled);
            }
            if (
                this.minDate !== undefined &&
                dateObject.isBefore(this.minDate, 'day') === true
            ) {
                day.classes.push(this.$style.disabled);
            }
            return day;
        },
        setSelectedDate(dateObject) {
            this.visibleDate = dateObject.clone();
            this.$emit('date:selected', dateObject);
        },
        viewNextMonth() {
            this.visibleDate = this.visibleDate.clone().add(1, 'month');
        },
        viewPreviousMonth() {
            this.visibleDate = this.visibleDate.clone().subtract(1, 'month');
        },
    },
    props: {
        maxDate: {},
        minDate: {},
        selectedDate: {
            default: () => moment().startOf('day'),
        },
    },
};
</script>

<style module lang="scss">
@import '../../styles/variables';

.calendar {
    td {
        height: spacing-vertical(compact) * 4;
        font-size: font-size(primary);
        text-align: center;
        vertical-align: middle;
        width: spacing-vertical(compact) * 4;
    }
    tbody td {
        cursor: pointer;
        transition: background $transition-duration, color $transition-duration;
        transition-timing-function: $transition-timing-function;
        &.muted {
            color: color(text, light);
        }
        &.selected {
            background: color(text);
            color: color(text, inverse);
            font-weight: bold;
            pointer-events: none;
        }
        &.disabled {
            opacity: 0.5;
            pointer-events: none;
            text-decoration: line-through;
        }
        &:active,
        &:hover {
            background: color(link, dark);
            color: color(text, inverse);
        }
    }
    thead {
        background: background-color(light);
        border-bottom: border-width(medium) solid border-color();
        border-top: border-width(medium) solid border-color();
        color: color(text, muted);
        font-weight: bold;
    }
}

.container {
    border: border-width() solid border-color();
    border-radius: border-radius(button);
}

.month-container {
    align-items: center;
    display: flex;
    font-size: font-size();
    font-weight: bold;
    justify-content: space-between;
    .navigation {
        color: color(link);
        cursor: pointer;
        font-size: font-size(sub-heading);
        padding: spacing-vertical(mini) spacing-horizontal(content);
        transition: background $transition-duration, color $transition-duration;
        transition-timing-function: $transition-timing-function;
        user-select: none;
        &:active,
        &:hover {
            background: color(link, dark);
            color: color(text, inverse);
        }
        &.next {
            border-left: border-width() solid border-color();
            border-top-right-radius: border-radius(button);
        }
        &.previous {
            border-right: border-width() solid border-color();
            border-top-left-radius: border-radius(button);
        }
        &.disabled {
            color: color(text, light);
            pointer-events: none;
        }
    }
}

.selected-container {
    border-top: border-width(medium) solid border-color();
    font-size: font-size(label);
    font-weight: bold;
    padding: spacing-vertical(compact);
    text-align: center;
}
</style>
