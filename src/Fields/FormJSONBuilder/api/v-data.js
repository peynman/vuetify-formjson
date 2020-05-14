export default {
    fields: {
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
        'server-items-length': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Server-items-length',
            props: {
                hint: '**COMPONENT (v-data)** - Used only when data is provided by a server. Should be set to the total amount of items available on server so that pagination works correctly',
                placeholder: '-1'
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
        }
    ],
    slots: [
        {
            id: 'default',
            title: '**SELF** - The default slot. Use this to render your items'
        }
    ]
}
