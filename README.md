
###### WorkInProgress

# Vuetify FormJSON

[![CircleCI](https://circleci.com/gh/peynman/vuetify-formjson.svg?style=svg)](https://circleci.com/gh/peynman/vuetify-formjson)
[![NPM version](https://img.shields.io/npm/v/@peynman/vuetify-formjson.svg?style=flat)](https://npmjs.org/package/@peynman/vuetify-formjson)
[![NPM downloads](https://img.shields.io/npm/dm/@peynman/vuetify-formjson.svg?style=flat)](https://npmjs.org/package/@peynman/vuetify-formjson)
[![License](https://img.shields.io/github/license/peynman/vuetify-formjson.svg?style=flat)](https://github.com/peynman/vuetify-formjson/blob/master/LICENSE)

# Demos:
* [Example: Showcase](dist/examples/showcase.html)
* [Example: Full Features](dist/examples/fullfeatrues.html)
* [Example: Datatable remote](#) # comming soon
* [Example: Components List](#) # comming soon

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
        :options="exampleOptions"
        :fields="exmapleFields"
    >
    </vuetify-formjson>
</v-app>
````
Script:
````js
export default {
    data: () =>({
        output: {},
        options: {
            // options to pass to form, see Api ref
            class: 'ma-2'
        },
        fields: {
            // list of [fields objects] to render on the form
            //      see Api for full references
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
npm run build
```

