
###### WorkInProgress

# Vuetify FormJSON

[![CircleCI](https://circleci.com/gh/peynman/vuetify-formjson.svg?style=svg)](https://circleci.com/gh/peynman/vuetify-formjson)
[![NPM version](https://img.shields.io/npm/v/@peynman/vuetify-formjson.svg?style=flat)](https://npmjs.org/package/@peynman/vuetify-formjson)
[![NPM downloads](https://img.shields.io/npm/dm/@peynman/vuetify-formjson.svg?style=flat)](https://npmjs.org/package/@peynman/vuetify-formjson)
[![License](https://img.shields.io/github/license/peynman/vuetify-formjson.svg?style=flat)](https://github.com/peynman/vuetify-formjson/blob/master/LICENSE)

# Demos:
* [Example: Showcase](https://peynman.github.io/vuetify-formjson/dist/examples/showcase.html)
* [Example: 2 way binding](https://peynman.github.io/vuetify-formjson/dist/examples/2way.html)
* [Example: FormSchema builder](https://peynman.github.io/vuetify-formjson/dist/examples/form-builder.html)
* [Example: Full features](https://peynman.github.io/vuetify-formjson/dist/examples/fullfeatures.html)
* [Example: Datatable remote](#) # comming soon

## Features
* Create forms from a json schema
* Grab the output as an object in your parent component (v-model)
* Nested, grouped inputs
* Lots of components and inputs

## Dependencies
* ``Vue``
* ``Vuetify``
* ``jsoneditor`` if you use the 'json input'
* ``axios`` if you use the 'datatable input'
* ``vuetify-image-input`` if you use the 'image upload input'
* ``tree-model`` if you use 'treeview input'

## Installation
* ``npm i @peynman/vuetify-formjson``

## Usage
Template:
````js
// wrap component inside vuetify v-app (this is a vuetify requirement)
<v-app>
    // ...
    // somewhere inside your components
    <vuetify-formjson
        v-model="output"
        :options="options"
        :fields="fields"
    >
    </vuetify-formjson>
</v-app>
````
Script: component usage
````js
import Vue from 'vue'
import VuetifyFormJSON from '@peynman/vuetify-formjson'

Vue.use(VuetifyFormJSON)

export default {
    data: () =>({
        output: {},
        options: {
            // options to pass to form, see Api
            class: 'ma-2'
        },
        fields: {
            // list of [fields objects] to render on the form
            //      see Api
            username: {
                type: 'input',
                input: 'text',
                label: 'Username',
            },
            password: {
                type: 'input',
                input: 'text',
                label: 'Password',
                props: {
                    // pass props directly to v-text-field tag
                    type: 'password',
                    hint: '8 characters min'
                }
            }
        }
    })
}
````
Script: vuetify setup
````js
// YOU SHOULD DO THIS IF YOU ARE USING NPM VERSION OF VUETIFY, BROWSER VERSION DOES NOT NEED THIS
// since Vuetify only includes components that are used in the project directly in the npm build,
//   and components used in FormJSON are rendererd dynamically using their name, we need to pass vuetify setup the list of components that
//   we wish to be able to use in FormJSON
//   here is a complete list of all components used in FormJSON
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css'

import {
    VRow,
    VCol,
    VTextField,
    VSwitch,
    VSelect,
    VSlider,
    VRadioGroup,
    VRadio,
    VCheckbox,
    VTooltip,
    VIcon,
    VBtn,
    VDivider,
    VTabs,
    VTab,
    VTabItem,
    VExpansionPanels,
    VExpansionPanel,
    VExpansionPanelHeader,
    VExpansionPanelContent,
    VSimpleCheckbox,
    VDataTable,
    VToolbar,
    VSpacer,
    VAlert,
    VDialog,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VContainer,
    VMenu,
    VColorPicker,
    VAutocomplete
} from 'vuetify/lib'

Vue.use(Vuetify, {
    components: {
        VRow,
        VCol,
        VTextField,
        VSwitch,
        VSelect,
        VSlider,
        VRadioGroup,
        VRadio,
        VCheckbox,
        VTooltip,
        VIcon,
        VBtn,
        VDivider,
        VTabs,
        VTab,
        VTabItem,
        VExpansionPanels,
        VExpansionPanel,
        VExpansionPanelHeader,
        VExpansionPanelContent,
        VMenu,
        VColorPicker,
        VAutocomplete,
        VDataTable,
        VToolbar,
        VSpacer,
        VAlert,
        VDialog,
        VCard,
        VCardTitle,
        VCardText,
        VCardActions,
        VContainer,
        VSimpleCheckbox
    }
});

export default new Vuetify({
    /// vuetify options like theme...
});
````

# API
### Components ```VuetifyFormJSON```
* Display a form and grab the output with a json schema, the schema is defined based on the predefined structure of an input fields, and passed to this component by ``fields`` props.
* name: 'vuetify-formjson`
* props:
  1. ``v-model``: the output object of the form, can also be used to set initial values in form inputs
  1. ``fields``: an object (``{key: value}``) to descript the fields in the form.
      1. Each key corresponds to a definition of an input. the key is then used in output (``v-model``) to represent the value
      1. Each value object requires to have a type, you can set other properties of the input based on its type, currently these types are available: ``row``, ``col``, ``input``, ``group``, ``component``
  1.  ``options``: some options to control ``vuetify-formjson`` and its components behaviour

Here is a list of all availabel types:
| Component | Type | Sample Object |
| ---: | :---: | :--- |
| Text field | input | ```{ type: 'input', input: 'text', label: 'Label', class: 'extra classes', props: { ...pass to v-text-field }}```|
| Color | input | ``{ type: 'input', input: 'color', label: 'Label', class: 'extra classes', props: { ...pass to v-text-field }, pickerProps: { ...pass to v-color-picker } }`` |
| Select | input |``{ type: 'input', input: 'select', label: 'Label', class: 'extra classes', objects: [ { id: 1, title: 'Option 1' }, { id: 2, title: 'Option 2' } ] props: { ...pass to v-select } }`` |
#### TODO: add all components

# Developers
## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run dev
```
### Compiles and minifies for production
```
npm run build:prod
```
### Lints and fixes files
```
npm run lint
```

