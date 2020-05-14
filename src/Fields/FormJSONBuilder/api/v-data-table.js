export default {
    fields: {
        'calculate-widths': {
            type: 'input',
            input: 'switch',
            label: 'Calculate-widths',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-data-table)** - Enables calculation of column widths. `widths` property will be available in select scoped slots'
            }
        },
        caption: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Caption',
            props: {
                hint: '**SPECIAL (v-data-table)** - Set the caption (using `<caption>`)',
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
        dense: {
            type: 'input',
            input: 'switch',
            label: 'Dense',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-data-table)** - Decreases the height of rows'
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
        'expand-icon': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Expand-icon',
            props: {
                hint: '**SPECIAL (v-data-table)** - Icon used for expand toggle button.',
                placeholder: '\'$expand\''
            }
        },
        'fixed-header': {
            type: 'input',
            input: 'switch',
            label: 'Fixed-header',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-data-table)** - Fixed header to top of table. **NOTE:** Does not work in IE11'
            }
        },
        'headers-length': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Headers-length',
            props: {
                hint: '**SPECIAL (v-data-table)** - Can be used in combination with `hide-default-header` to specify the number of columns in the table to allow expansion rows and loading bar to function properly',
                placeholder: 'undefined'
            }
        },
        'hide-default-footer': {
            type: 'input',
            input: 'switch',
            label: 'Hide-default-footer',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT NESTED (v-data-iterator)** - Hides default footer'
            }
        },
        'hide-default-header': {
            type: 'input',
            input: 'switch',
            label: 'Hide-default-header',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-data-table)** - Hide the default headers'
            }
        },
        'item-key': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Item-key',
            props: {
                hint: '**COMPONENT (v-data)** - The field on each item object that designates a unique key. The value of this property has to be unique for each item.',
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
                hint: '**COMPONENT NESTED (v-data-iterator)** - Text shown when `loading` is true and no items are provided',
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
                hint: '**COMPONENT NESTED (v-data-iterator)** - Text shown when no items are provided to the component',
                placeholder: '\'$vuetify.noDataText\''
            }
        },
        'no-results-text': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'No-results-text',
            props: {
                hint: '**COMPONENT NESTED (v-data-iterator)** - Text shown when `search` prop is used and there are no results',
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
                hint: '**COMPONENT NESTED (v-data-iterator)** - The property on each item that is used to determine if it is selectable or not',
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
        'show-expand': {
            type: 'input',
            input: 'switch',
            label: 'Show-expand',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-data-table)** - Shows the expand toggle in default rows'
            }
        },
        'show-group-by': {
            type: 'input',
            input: 'switch',
            label: 'Show-group-by',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-data-table)** - Shows the group by toggle in the header and enables grouped rows'
            }
        },
        'show-select': {
            type: 'input',
            input: 'switch',
            label: 'Show-select',
            class: 'col-4 mx-0',
            props: {
                hint: '**SPECIAL (v-data-table)** - Shows the select checkboxes in both the header and rows (if using default rows)'
            }
        },
        'single-expand': {
            type: 'input',
            input: 'switch',
            label: 'Single-expand',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT NESTED (v-data-iterator)** - Changes expansion mode to single expand'
            }
        },
        'single-select': {
            type: 'input',
            input: 'switch',
            label: 'Single-select',
            class: 'col-4 mx-0',
            props: {
                hint: '**COMPONENT NESTED (v-data-iterator)** - Changes selection mode to single select'
            }
        }
    },
    events: [
        {
            id: 'click:row',
            title: '**SPECIAL (v-data-table)** - Emits when a table row is clicked. The item for the row is included. **NOTE:** will not emit when table rows are defined through a slot such as `item` or `body`.'
        },
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
            title: '**COMPONENT NESTED (v-data-iterator)** - Array of selected items'
        },
        {
            id: 'update:expanded',
            title: '**COMPONENT NESTED (v-data-iterator)** - The `.sync` event for `expanded` prop'
        },
        {
            id: 'item-selected',
            title: '**COMPONENT NESTED (v-data-iterator)** - Event emitted when an item is selected or deselected'
        },
        {
            id: 'item-expanded',
            title: '**COMPONENT NESTED (v-data-iterator)** - Event emitted when an item is expanded or closed'
        },
        {
            id: 'toggle-select-all',
            title: '**MISSING DESCRIPTION** - v-data-iterator'
        }
    ],
    slots: [
        {
            id: 'body.append',
            title: '**SPECIAL (undefined)** - Appends elements to the end of the default table `<tbody>`'
        },
        {
            id: 'body.prepend',
            title: '**SPECIAL (undefined)** - Prepends elements to the start of the default table `<tbody>`'
        },
        {
            id: 'body',
            title: '**SPECIAL (undefined)** - Slot to replace the default table `<tbody>`'
        },
        {
            id: 'footer',
            title: '**SPECIAL (undefined)** - Slot to add a custom footer'
        },
        {
            id: 'footer.page-text',
            title: '**SPECIAL (undefined)** - Slot to customize footer page text'
        },
        {
            id: 'header',
            title: '**MISSING DESCRIPTION** - undefined'
        },
        {
            id: 'header.data-table-select',
            title: '**SPECIAL (undefined)** - Slot to replace the default `v-simple-checkbox` in header'
        },
        {
            id: 'header.<name>',
            title: '**SPECIAL (undefined)** - Slot to customize a specific header column'
        },
        {
            id: 'top',
            title: '**SPECIAL (undefined)** - Slot to add content above the table'
        },
        {
            id: 'progress',
            title: '**SPECIAL (undefined)** - Slot to replace the default `<v-progress-linear>` component'
        },
        {
            id: 'group',
            title: '**SPECIAL (undefined)** - Slot to replace the default rendering of grouped rows'
        },
        {
            id: 'group.header',
            title: '**SPECIAL (undefined)** - Slot to customize the default rendering of group headers'
        },
        {
            id: 'group.summary',
            title: '**SPECIAL (undefined)** - Slot to customize the default rendering of group summaries'
        },
        {
            id: 'item',
            title: '**SPECIAL (undefined)** - Slot to replace the default rendering of a row'
        },
        {
            id: 'item.data-table-select',
            title: '**SPECIAL (undefined)** - Slot to replace the default `v-simple-checkbox` used when selecting rows'
        },
        {
            id: 'item.data-table-expand',
            title: '**SPECIAL (undefined)** - Slot to replace the default `v-icon` used when expanding rows'
        },
        {
            id: 'item.<name>',
            title: '**SPECIAL (undefined)** - Slot to customize a specific column'
        },
        {
            id: 'expanded-item',
            title: '**SPECIAL (undefined)** - Slot to customize expanded rows'
        },
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
        }
    ]
}
