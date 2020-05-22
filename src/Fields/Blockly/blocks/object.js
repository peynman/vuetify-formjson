export default function (Blockly) {
    // json stringify
    Blockly.Blocks.obj_json_stringify = {
        init: function () {
            this.appendValueInput('OBJ')
                .setCheck(['Array', 'String', 'Object', 'Number', 'Boolean'])
                .appendField('stringify')
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('pretty')
                .appendField(new Blockly.FieldCheckbox('FALSE'), 'PRETTY')
            this.setOutput(true, 'String')
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_json_stringify = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        const pretty = block.getFieldValue('PRETTY')
        console.log(pretty)
        return [`JSON.stringify(${argument0} ${pretty === 'TRUE' ? ', null, 4' : ''})\n`, Blockly.JavaScript.ORDER_ASSIGNMENT]
    }

    // json parse
    Blockly.Blocks.obj_json_parse = {
        init: function () {
            this.appendValueInput('jsonStr')
                .setCheck('String')
                .appendField('parse')
            this.setOutput(true, ['Object', 'Array', 'String'])
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_json_parse = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'jsonStr', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return [`JSON.parse(${argument0})\n`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
    }

    // get nested
    Blockly.Blocks.obj_get_nested = {
        init: function () {
            this.appendValueInput('OBJ')
                .setCheck('Object')
                .appendField('Get nested value in object')
            this.appendValueInput('PATH')
                .setCheck('String')
                .appendField('at path')
            this.setOutput(true, 'Object')
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_get_nested = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return [`this.getNestedPathValue(${argument0}, ${argument1})\n`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
    }

    // set nested
    Blockly.Blocks.obj_set_nested = {
        init: function () {
            this.appendValueInput('OBJ')
                .setCheck('Object')
                .appendField('Set nested value in object')
            this.appendValueInput('PATH')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('at path')
            this.appendValueInput('VAL')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('to Value')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_set_nested = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument2 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return [`this.setNestedPathValue(${argument0}, ${argument1}, ${argument2})\n`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
    }

    // append nested
    Blockly.Blocks.obj_append_nested = {
        init: function () {
            this.appendValueInput('OBJ')
                .setCheck(null)
                .appendField('Append to nested value in object')
            this.appendValueInput('PATH')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('at path')
            this.appendValueInput('VAL')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('to Value')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_append_nested = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument2 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `this.appendNestedPathValue(${argument0}, ${argument1}, ${argument2})\n`
    }

    // is set nested
    Blockly.Blocks.obj_is_set_nested = {
        init: function () {
            this.appendValueInput('OBJ')
                .setCheck(null)
                .appendField('Is set nested value in object')
            this.appendValueInput('PATH')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('at path')
            this.setOutput(true, null)
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_is_set_nested = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `this.isSetNested(${argument0}, ${argument1}\n`
    }

    // foreach nested
    Blockly.Blocks.obj_foreach_nested = {
        init: function () {
            this.appendValueInput('OBJ')
                .setCheck(null)
                .appendField('for each key')
                .appendField(new Blockly.FieldVariable('key'), 'KEY')
                .appendField(',')
                .appendField(new Blockly.FieldVariable('value'), 'VAL')
                .appendField(',')
                .appendField(new Blockly.FieldVariable('index'), 'IDX')
                .appendField('in')
            this.appendStatementInput('DO')
                .setCheck(null)
                .appendField('do')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_foreach_nested = function (block) {
        const varKey = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('KEY'), Blockly.Variables.NAME_TYPE)
        const varVal = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAL'), Blockly.Variables.NAME_TYPE)
        const varIdx = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('IDX'), Blockly.Variables.NAME_TYPE)
        var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var branch = Blockly.JavaScript.statementToCode(block, 'DO')
        branch = Blockly.JavaScript.addLoopTrap(branch, block)
        return `let indexer = 0;\nlet target = ${argument0};\nfor (const prop in target) {\n  this.blockly.${varKey} = prop;\n  this.blockly.${varVal} = target[prop];\n  this.blockly.${varIdx} = indexer;\n${branch};\n  indexer++;\n}\n`
    }
}

export const CategoryObject =
`
<category id="catObj" colour="105" name="Object">
    <block type="obj_get_nested"></block>
    <block type="obj_set_nested"></block>
    <block type="obj_is_set_nested"></block>
    <block type="obj_json_stringify"></block>
    <block type="obj_json_parse"></block>
    <block type="obj_foreach_nested"></block>
    <block type="obj_append_nested"></block>
</category>
`
