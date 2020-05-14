export default function (Blockly) {
    Blockly.Blocks.obj_json_stringify = {
        init: function () {
            this.appendValueInput('OBJ')
                .setCheck(null)
                .appendField('stringify')
            this.setOutput(true, null)
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_json_stringify = function (block) {

    }

    Blockly.Blocks.obj_json_parse = {
        init: function () {
            this.appendValueInput('STR')
                .setCheck(null)
                .appendField('parse')
            this.setOutput(true, null)
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_json_parse = function (block) {
    }

    Blockly.Blocks.obj_get_nested = {
        init: function () {
            this.appendValueInput('VAR')
                .setCheck(null)
                .appendField('Get nested value in object')
            this.appendValueInput('PATH')
                .setCheck('String')
                .appendField('at path')
            this.setOutput(true, null)
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_get_nested = function (block) {
    }

    // set nested
    Blockly.Blocks.obj_set_nested = {
        init: function () {
            this.appendValueInput('VAR')
                .setCheck(null)
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
    }

    // is set nested
    Blockly.Blocks.obj_is_set_nested = {
        init: function () {
            this.appendValueInput('VAR')
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
    }

    // foreach nested
    Blockly.Blocks.obj_foreach_nested = {
        init: function () {
            this.appendValueInput('PATH')
                .setCheck(null)
                .appendField('for each key')
                .appendField(new Blockly.FieldVariable('key'), 'KEY')
                .appendField(',')
                .appendField(new Blockly.FieldVariable('val'), 'VAL')
                .appendField('in')
                .appendField(new Blockly.FieldVariable('item'), 'INDEXVAR')
                .appendField('at path')
            this.appendValueInput('OBJECT')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('of object')
            this.appendStatementInput('STATEMENTS')
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
    }

    // foreach nested and return
    Blockly.Blocks.obj_foreach_nested_and_return = {
        init: function () {
            this.appendValueInput('PATH')
                .setCheck(null)
                .appendField('for each key')
                .appendField(new Blockly.FieldVariable('key'), 'KEY')
                .appendField(',')
                .appendField(new Blockly.FieldVariable('val'), 'VAL')
                .appendField('in')
                .appendField(new Blockly.FieldVariable('item'), 'INDEXVAR')
                .appendField('at path')
            this.appendValueInput('OBJECT')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('of object')
            this.appendStatementInput('STATEMENTS')
                .setCheck(null)
                .appendField('do')
            this.appendValueInput('RETURN')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('and return')
            this.setOutput(true, null)
            this.setColour(105)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.obj_foreach_nested_and_return = function (block) {
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
    <block type="obj_foreach_nested_and_return"></block>
</category>
`
