
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
* Nesting forms
* Lots of components and inputs

## Dependencies
* ``Vue``
* ``Vuetify``
* ``jsoneditor`` if you use the 'json input'
* ``axios`` if you use the 'datatable input'
* ``vuetify-image-input`` if you use the 'image upload input'

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
Script:
````js
import Vue from 'vue'
import VuetifyFormJSON from '@peynman/vuetify-formjson'
Vue.use(VuetifyFormJSON)
// we assume you already regustered vuetify

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

# API
comming soon

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

