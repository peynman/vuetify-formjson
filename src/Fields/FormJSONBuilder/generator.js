
import Blockly from 'blockly'
import GeneratVueJSObject from './../Blockly/generator'
import { EasyNestedObject } from './../mixins'

export default {
    mixins: [EasyNestedObject],
    methods: {
        webRequest (data) {
            return this.axios(data)
        },
        getStateFromNestedPath (path) {
            console.log(path)
            const parts = path.split('.')
            let ref = this
            let indexer = 0
            while (ref && indexer < parts.length) {
                ref = ref[parts[indexer++]]
            }
            return ref
        },
        setStateForNestedPath (path, value) {
            const parts = path.split('.')
            let ref = this
            let indexer = 0
            while (ref && indexer < parts.length - 1) {
                ref = ref[parts[indexer++]]
            }
            console.log(path, this, parts, ref)
            if (ref) {
                ref[parts[parts.length - 1]] = value
            }
        },
        appendStateForNestedPath (path, value) {
            const parts = path.split('.')
            let ref = this
            let indexer = 0
            while (ref && indexer < parts.length - 1) {
                ref = ref[parts[indexer++]]
            }
            if (ref) {
                if (ref[parts[parts.length - 1]]) {
                    ref[parts[parts.length - 1]] = Object.assign(ref[parts[parts.length - 1]], value)
                } else {
                    ref[parts[parts.length - 1]] = value
                }
            }
        },
        CompileFormJSONSchemaWithCode (component, schema, codeDom, blocklyBlocks) {
            let evalObj = {}
            try {
                evalObj = GeneratVueJSObject(Blockly, codeDom, blocklyBlocks)
            } catch (e) {
                const err = new Error(e.message)
                err.message = e.message
                err.lineNumber = e.lineNumber
                err.stack = e.stack
                throw err
            }
            const output = {}
            const iterateForVOn = function (root, outter) {
                for (const prop in root) {
                    if (prop === 'v-on') {
                        outter[prop] = {}
                        for (const event in root[prop]) {
                            if (evalObj[root[prop][event]]) {
                                outter[prop][event] = evalObj[root[prop][event]].bind(component)
                            }
                        }
                    } else if (typeof root[prop] === 'object') {
                        outter[prop] = {}
                        iterateForVOn(root[prop], outter[prop])
                    } else {
                        outter[prop] = root[prop]
                    }
                }
            }
            iterateForVOn(schema, output)
            if (evalObj.blockly) {
                component.blockly = evalObj.blockly
            }
            return output
        }
    }
}
