export default {
    fields: {
        color: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Color',
            props: {
                hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
                placeholder: 'undefined'
            }
        },
        dark: {
            type: 'input',
            input: 'switch',
            label: 'Dark',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
            }
        },
        end: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'End',
            props: {
                hint: '**SELF** - The ending date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar.',
                placeholder: 'undefined'
            }
        },
        'event-end': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Event-end',
            props: {
                hint: '**SELF** - Set property of *event*\'s end timestamp.',
                placeholder: '\'end\''
            }
        },
        'event-height': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Event-height',
            props: {
                hint: '**SELF** - The height of an event in pixels in the `month` view and at the top of the `day` views.',
                placeholder: '20'
            }
        },
        'event-margin-bottom': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Event-margin-bottom',
            props: {
                hint: '**SELF** - Margin bottom for event',
                placeholder: '1'
            }
        },
        'event-more': {
            type: 'input',
            input: 'switch',
            label: 'Event-more',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Whether the more \'button\' is displayed on a calendar with too many events in a given day. It will say something like \'5 more\' and when clicked generates a `click:more` event.'
            }
        },
        'event-more-text': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Event-more-text',
            props: {
                hint: '**SELF** - The text to display in the more \'button\' given the number of hidden events.',
                placeholder: '\'$vuetify.calendar.moreEvents\''
            }
        },
        'event-ripple': {
            type: 'input',
            input: 'switch',
            label: 'Event-ripple',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Applies the `v-ripple` directive.'
            }
        },
        'event-start': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Event-start',
            props: {
                hint: '**SELF** - Set property of *event*\'s start timestamp.',
                placeholder: '\'start\''
            }
        },
        'hide-header': {
            type: 'input',
            input: 'switch',
            label: 'Hide-header',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - If the header at the top of the `day` view should be visible.'
            }
        },
        light: {
            type: 'input',
            input: 'switch',
            label: 'Light',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (themeable)** - Applies the light theme variant to the component.'
            }
        },
        locale: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Locale',
            props: {
                hint: '**SELF** - The locale of the calendar.',
                placeholder: 'undefined'
            }
        },
        'max-days': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Max-days',
            props: {
                hint: '**COMPONENT (v-calendar)** - The maximum number of days to display in the custom calendar if an `end` day is not set.',
                placeholder: '7'
            }
        },
        now: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Now',
            props: {
                hint: '**SELF** - Override the day & time which is considered now. This is in the format of `YYYY-MM-DD hh:mm:ss`. The calendar is styled according to now.',
                placeholder: 'undefined'
            }
        },
        'short-intervals': {
            type: 'input',
            input: 'switch',
            label: 'Short-intervals',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-calendar)** - If true, the intervals in the `day` view will be 9 AM as opposed to 09:00 AM'
            }
        },
        'short-months': {
            type: 'input',
            input: 'switch',
            label: 'Short-months',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-calendar)** - Whether the short versions of a month should be used (Jan vs January).'
            }
        },
        'short-weekdays': {
            type: 'input',
            input: 'switch',
            label: 'Short-weekdays',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Whether the short versions of a weekday should be used (Mon vs Monday).'
            }
        },
        'show-month-on-first': {
            type: 'input',
            input: 'switch',
            label: 'Show-month-on-first',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-calendar)** - Whether the name of the month should be displayed on the first day of the month.'
            }
        },
        start: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Start',
            props: {
                hint: '**SELF** - The starting date on the calendar (inclusive) in the format of `YYYY-MM-DD`. This may be ignored depending on the `type` of the calendar.',
                placeholder: '\'2020-05-10\''
            }
        },
        type: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Type',
            props: {
                hint: '**COMPONENT (v-calendar)** - A string which is one of `month`, `week`, `day`, `4day`, `custom-weekly`, and `custom-daily`. The custom types look at the `start` and `end` dates passed to the component as opposed to the `value`.',
                placeholder: '\'month\''
            }
        },
        value: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Value',
            props: {
                hint: '**COMPONENT (v-calendar)** - A date in the format of `YYYY-MM-DD` which determines what span of time for the calendar.',
                placeholder: 'undefined'
            }
        }
    },
    events: [
        {
            id: 'input',
            title: '**SELF** - An alias to the `click:date` event used to support v-model.'
        },
        {
            id: 'moved',
            title: '**SELF** - One of the functions `next`, `prev`, and `move` was called. The event passed is the day object calculated for the movement.'
        },
        {
            id: 'change',
            title: '**SELF** - The range of days displayed on the calendar changed. This is triggered on initialization. The event passed is an object with start and end date objects.'
        },
        {
            id: 'click:date',
            title: '**SELF** - The click event on the day of the month link. The event passed is the day & time object.'
        },
        {
            id: 'contextmenu:date',
            title: '**SELF** - The right-click event on the day of the month link. The event passed is the day & time object.'
        },
        {
            id: 'click:more',
            title: '**SELF** - The click event on the `X more` button on views with too many events in a day.'
        },
        {
            id: 'click:day',
            title: '**SELF** - The click event on a day. The event passed is the day object.'
        },
        {
            id: 'contextmenu:day',
            title: '**SELF** - The right-click event on a day. The event passed is the day object.'
        },
        {
            id: 'mousedown:day',
            title: '**SELF** - The mousedown event on a day. The event passed is the day object.'
        },
        {
            id: 'mousemove:day',
            title: '**SELF** - The mousemove event on a day. The event passed is the day object.'
        },
        {
            id: 'mouseup:day',
            title: '**SELF** - The mouseup event on a day. The event passed is the day object.'
        },
        {
            id: 'mouseenter:day',
            title: '**SELF** - The mouseenter event on a day. The event passed is the day object.'
        },
        {
            id: 'mouseleave:day',
            title: '**SELF** - The mouseleave event on a day. The event passed is the day object.'
        },
        {
            id: 'touchstart:day',
            title: '**SELF** - The touchstart event on a day. The event passed is the day object.'
        },
        {
            id: 'touchmove:day',
            title: '**SELF** - The touchmove event on a day. The event passed is the day object.'
        },
        {
            id: 'touchend:day',
            title: '**SELF** - The touchend event on a day. The event passed is the day object.'
        },
        {
            id: 'click:time',
            title: '**SELF** - The click event at a specific time in the `day` view. The event passed is the day & time object.'
        },
        {
            id: 'contextmenu:time',
            title: '**SELF** - The right-click event at a specific time in the `day` view. The event passed is the day & time object.'
        },
        {
            id: 'mousedown:time',
            title: '**SELF** - The mousedown event at a specific time in the `day` view. The event passed is the day & time object.'
        },
        {
            id: 'mousemove:time',
            title: '**SELF** - The mousemove event at a specific time in the `day` view. The event passed is the day & time object.'
        },
        {
            id: 'mouseup:time',
            title: '**SELF** - The mouseup event at a specific time in the `day` view. The event passed is the day & time object.'
        },
        {
            id: 'mouseenter:time',
            title: '**SELF** - The mouseenter event at a specific time in the `day` view. The event passed is the day & time object.'
        },
        {
            id: 'mouseleave:time',
            title: '**SELF** - The mouseleave event at a specific time in the `day` view. The event passed is the day & time object.'
        },
        {
            id: 'touchstart:time',
            title: '**SELF** - The touchstart event at a specific time in the `day` view. The event passed is the day & time object.'
        },
        {
            id: 'touchmove:time',
            title: '**SELF** - The touchmove event at a specific time in the `day` view. The event passed is the day & time object.'
        },
        {
            id: 'touchend:time',
            title: '**SELF** - The touchend event at a specific time in the `day` view. The event passed is the day & time object.'
        },
        {
            id: 'click:interval',
            title: '**SELF** - The click event at a specific interval label in the `day` view. The event passed is the day & time object.'
        },
        {
            id: 'contextmenu:interval',
            title: '**SELF** - The right-click event at a specific interval label in the `day` view. The event passed is the day & time object.'
        },
        {
            id: 'mousedown:interval',
            title: '**SELF** - The mousedown event at a specific interval label in the `day` view. The event passed is the day & time object.'
        },
        {
            id: 'mousemove:interval',
            title: '**SELF** - The mousemove event at a specific interval label in the `day` view. The event passed is the day & time object.'
        },
        {
            id: 'mouseup:interval',
            title: '**SELF** - The mouseup event at a specific interval label in the `day` view. The event passed is the day & time object.'
        },
        {
            id: 'mouseenter:interval',
            title: '**SELF** - The mouseenter event at a specific interval label in the `day` view. The event passed is the day & time object.'
        },
        {
            id: 'mouseleave:interval',
            title: '**SELF** - The mouseleave event at a specific interval label in the `day` view. The event passed is the day & time object.'
        },
        {
            id: 'touchstart:interval',
            title: '**SELF** - The touchstart event at a specific interval label in the `day` view. The event passed is the day & time object.'
        },
        {
            id: 'touchmove:interval',
            title: '**SELF** - The touchmove event at a specific interval label in the `day` view. The event passed is the day & time object.'
        },
        {
            id: 'touchend:interval',
            title: '**SELF** - The touchend event at a specific interval label in the `day` view. The event passed is the day & time object.'
        }
    ],
    slots: [
        {
            id: 'event',
            title: '**SELF** - The content placed in an event. This ignores the `event-name` prop.'
        },
        {
            id: 'day',
            title: '**SELF** - The content that is placed in a `week` or `month` view. The day & time object is passed through this slots scope.'
        },
        {
            id: 'day-body',
            title: '**SELF** - The content that is placed in a `day` view in the scrollable interval container. The day & time object is passed through this slots scope.'
        },
        {
            id: 'day-header',
            title: '**SELF** - The content that is placed in a `day` view in the top container. The day & time object is passed through this slots scope.'
        },
        {
            id: 'day-label',
            title: '**SELF** - The content that is placed in the day of the month space in the `custom-weekly` or `month` view. The day & time object is passed through this slots scope.'
        },
        {
            id: 'day-label-header',
            title: '**SELF** - The content that is placed in the day of the month space in the `week`, `day`, `4day`, or `custom-daily` view. The day & time object is passed through this slots scope.'
        },
        {
            id: 'day-month',
            title: '**SELF** - The content that is placed in the month space in the `week` or `month` view. The day & time object is passed through this slots scope.'
        },
        {
            id: 'interval',
            title: '**SELF** - The content that is placed in the interval space in the `day` view. The day & time object is passed through this slots scope.'
        }
    ]
}
