
# Vuetify FormJSON
[![CircleCI](https://circleci.com/gh/peynman/vuetify-formjson.svg?style=svg)](https://circleci.com/gh/peynman/vuetify-formjson)
[![Latest Stable Version](https://img.shields.io/packagist/v/peynman/vuetify-formjson.svg?style=flat-square)](https://packagist.org/packages/peynman/vuetify-formjson)
[![Total Downloads](https://img.shields.io/packagist/dt/peynman/vuetify-formjson.svg?style=flat-square)](https://packagist.org/packages/peynman/vuetify-formjson)
[![License](https://img.shields.io/packagist/l/peynman/vuetify-formjson.svg?style=flat-square)](https://packagist.org/packages/peynman/vuetify-formjson)
[![StyleCI](https://styleci.io/repos/225846364/shield)](https://styleci.io/repos/225846364)

### Create powerful forms with Vuetify just by defining the inputs in a json properties

## Installation
* ``npm i vuetify-formjson``

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
