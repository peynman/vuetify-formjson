import postcss from 'rollup-plugin-postcss'
import vue from 'rollup-plugin-vue'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import copyasset from 'rollup-plugin-copy'

import {
    terser
} from 'rollup-plugin-terser'
import {
    eslint
} from 'rollup-plugin-eslint'
import process from 'process'

const environment = process.env.NODE_ENV || (process.argv.includes('--config-production') ? 'production' : 'development')
const production = environment === 'production'

const globals = {
    vue: 'Vue',
    vuetify: 'Vuetify',
    jsoneditor: 'JSONEditor',
    'vuetify-image-input': 'VuetifyImageInput',
    axios: 'axios'
}
const outputs = [{
    name: 'VuetifyFormJSON',
    exports: 'named',
    globals,
    format: 'iife',
    file: 'dist/vuetify-formjson.min.js'
}]
if (!process.argv.includes('--config-iife')) {
    outputs.push({
        name: 'VuetifyFormJSON',
        exports: 'named',
        format: 'umd',
        file: 'dist/vuetify-formjson.umd.js',
        globals
    }, {
        name: 'VuetifyFormJSON',
        exports: 'named',
        format: 'es',
        file: 'dist/vuetify-formjson.es.js',
        globals
    })
}

export default [{
    external: [
        'vue',
        'vuetify',
        'vuetify-image-input',
        'axios',
        'jsoneditor'
    ],
    input: 'src/index.js',
    output: outputs,
    plugins: [
        eslint({
            exclude: [
                'sass/**'
            ]
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        commonjs({
            sourceMap: !production
        }),
        postcss({
            extract: true
        }),
        vue({
            template: {
                isProduction: production, // note: could trust defaults to do the same, via 'process.env.NODE_ENV'
                compilerOptions: {
                    preserveWhitespace: false
                }
            },
            css: false,
            needMap: false
        }),
        resolve({
            main: true,
            browser: true,
            resolveOnly: [
                /^\.{0,2}\//,
                /^.*.vue/,
                'vue-axios' // keep vue-axios internal (very small library)
            ]
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        copyasset({
            targets: [{
                src: 'node_modules/jsoneditor/dist/img',
                dest: 'dist'
            }]
        }),
        production && terser()
    ]
}]
