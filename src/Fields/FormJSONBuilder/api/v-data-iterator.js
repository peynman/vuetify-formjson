export default {
    fields: {
        dark: {
            type: 'input',
            input: 'switch',
            label: 'Dark',
            class: 'col-4 mx-0',
            props: {
                hint: '**MIXIN (themeable)** - Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).'
            }
        },
        'disable-filtering': {
            type: 'input',
            input: 'switch',
            label: 'Disable-filtering',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-data)** - Disables filtering completely'
            }
        },
        'disable-pagination': {
            type: 'input',
            input: 'switch',
            label: 'Disable-pagination',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-data)** - Disables pagination completely'
            }
        },
        'disable-sort': {
            type: 'input',
            input: 'switch',
            label: 'Disable-sort',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-data)** - Disables sorting completely'
            }
        },
        'hide-default-footer': {
            type: 'input',
            input: 'switch',
            label: 'Hide-default-footer',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-data-iterator)** - Hides default footer'
            }
        },
        'item-key': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Item-key',
            props: {
                hint: '**SPECIAL (v-data)** - The property on each item that is used as a unique key',
                placeholder: '\'id\''
            }
        },
        'items-per-page': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Items-per-page',
            props: {
                hint: '**COMPONENT (v-data)** - Changes how many items per page should be visible. Can be used with `.sync` modifier',
                placeholder: '10'
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
        'loading-text': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Loading-text',
            props: {
                hint: '**SPECIAL (v-data-iterator)** - Text shown when `loading` is true and no items are provided',
                placeholder: '\'$vuetify.dataIterator.loadingText\''
            }
        },
        locale: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Locale',
            props: {
                hint: '**COMPONENT (v-data)** - Sets the locale of component. Used for translating internal text strings.',
                placeholder: '\'en-US\''
            }
        },
        'multi-sort': {
            type: 'input',
            input: 'switch',
            label: 'Multi-sort',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-data)** - If `true` then one can sort on multiple properties'
            }
        },
        'must-sort': {
            type: 'input',
            input: 'switch',
            label: 'Must-sort',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT (v-data)** - If `true` then one can not disable sorting, it will always switch between ascending and descending'
            }
        },
        'no-data-text': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'No-data-text',
            props: {
                hint: '**SPECIAL (v-data-iterator)** - Text shown when no items are provided to the component',
                placeholder: '\'$vuetify.noDataText\''
            }
        },
        'no-results-text': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'No-results-text',
            props: {
                hint: '**SPECIAL (v-data-iterator)** - Text shown when `search` prop is used and there are no results',
                placeholder: '\'$vuetify.dataIterator.noResultsText\''
            }
        },
        page: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Page',
            props: {
                hint: '**COMPONENT (v-data)** - Changes which page of items is displayed. Can be used with `.sync` modifier',
                placeholder: '1'
            }
        },
        search: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Search',
            props: {
                hint: '**COMPONENT (v-data)** - Text input used to filter items',
                placeholder: 'undefined'
            }
        },
        'selectable-key': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Selectable-key',
            props: {
                hint: '**SPECIAL (v-data-iterator)** - The property on each item that is used to determine if it is selectable or not',
                placeholder: '\'isSelectable\''
            }
        },
        'server-items-length': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Server-items-length',
            props: {
                hint: '**COMPONENT (v-data)** - Used only when data is provided by a server. Should be set to the total amount of items available on server so that pagination works correctly',
                placeholder: '-1'
            }
        },
        'single-expand': {
            type: 'input',
            input: 'switch',
            label: 'Single-expand',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-data-iterator)** - Changes expansion mode to single expand'
            }
        },
        'single-select': {
            type: 'input',
            input: 'switch',
            label: 'Single-select',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-data-iterator)** - Changes selection mode to single select'
            }
        }
    },
    events: [
        {
            id: 'current-items',
            title: '**COMPONENT (v-data)** - The items on the current page'
        },
        {
            id: 'page-count',
            title: '**COMPONENT (v-data)** - The total number of pages'
        },
        {
            id: 'pagination',
            title: '**COMPONENT (v-data)** - Information about the current pagination'
        },
        {
            id: 'update:options',
            title: '**COMPONENT (v-data)** - Information about the current options'
        },
        {
            id: 'update:page',
            title: '**COMPONENT (v-data)** - The `.sync` event for `page` prop'
        },
        {
            id: 'update:items-per-page',
            title: '**COMPONENT (v-data)** - The `.sync` event for `items-per-page` prop'
        },
        {
            id: 'update:sort-by',
            title: '**COMPONENT (v-data)** - The `.sync` event for `sort-by` prop'
        },
        {
            id: 'update:sort-desc',
            title: '**COMPONENT (v-data)** - The `.sync` event for `sort-desc` prop'
        },
        {
            id: 'update:group-by',
            title: '**COMPONENT (v-data)** - The `.sync` event for `group-by` prop'
        },
        {
            id: 'update:group-desc',
            title: '**COMPONENT (v-data)** - The `.sync` event for `group-desc` prop'
        },
        {
            id: 'update:multi-sort',
            title: '**COMPONENT (v-data)** - The `.sync` event for `multi-sort` prop'
        },
        {
            id: 'update:must-sort',
            title: '**COMPONENT (v-data)** - The `.sync` event for `must-sort` prop'
        },
        {
            id: 'input',
            title: '**SPECIAL (v-data-iterator)** - Array of selected items'
        },
        {
            id: 'update:expanded',
            title: '**SPECIAL (v-data-iterator)** - The `.sync` event for `expanded` prop'
        },
        {
            id: 'item-selected',
            title: '**SPECIAL (v-data-iterator)** - Event emitted when an item is selected or deselected'
        },
        {
            id: 'item-expanded',
            title: '**SPECIAL (v-data-iterator)** - Event emitted when an item is expanded or closed'
        },
        {
            id: 'toggle-select-all',
            title: '**MISSING DESCRIPTION** - v-data-iterator'
        }
    ],
    slots: [
        {
            id: 'loading',
            title: '**SPECIAL (data-iterator)** - Defines content for when `loading` is true and no items are provided'
        },
        {
            id: 'no-data',
            title: '**SPECIAL (data-iterator)** - Defines content for when no items are provided'
        },
        {
            id: 'no-results',
            title: '**SPECIAL (data-iterator)** - Defines content for when `search` is provided but no results are found'
        },
        {
            id: 'default',
            title: '**SPECIAL (data-iterator)** - The default slot. Use this to render your items'
        },
        {
            id: 'footer',
            title: '**SPECIAL (data-iterator)** - Defines a footer below the items'
        },
        {
            id: 'footer.page-text',
            title: '**SPECIAL (data-iterator)** - This slot is forwarded to the default footer. See the `v-data-footer` API for more information'
        },
        {
            id: 'header',
            title: '**MISSING DESCRIPTION** - data-iterator'
        },
        {
            id: 'item',
            title: '**SPECIAL (data-iterator)** - Slot for each item'
        }
    ]
}
