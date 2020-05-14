
import Blockly from 'blockly'
import GeneratVueJSObject from './../Blockly/generator'

export default function CompileFormJSONSchemaWithCode (component, schema, codeDom, blocklyBlocks) {
    let evalObj = {}
    try {
        evalObj = GeneratVueJSObject(Blockly, codeDom, blocklyBlocks)
    } catch (e) {}
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
    return output
}
