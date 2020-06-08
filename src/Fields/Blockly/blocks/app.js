
export default function (Blockly) {
    // get app state at a path
    Blockly.Blocks.app_get_from_state = {
        init: function () {
            this.appendValueInput('path')
                .setCheck('String')
                .appendField('Get state value at path')
            this.appendDummyInput()
            this.setOutput(true, ['Array', 'String', 'Object', 'Number', 'Boolean'])
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_get_from_state = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return ['this.getStateFromNestedPath(' + argument0 + ')', Blockly.JavaScript.ORDER_FUNCTION_CALL]
    }

    // change app state at a path
    Blockly.Blocks.app_change_state = {
        init: function () {
            this.appendValueInput('path')
                .setCheck('String')
                .appendField('Set state value at path')
            this.appendValueInput('value')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('to')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_change_state = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `this.setStateForNestedPath(${argument0}, ${argument1})\n`
    }

    // commit mutation with data
    Blockly.Blocks.app_commit_mutation = {
        init: function () {
            this.appendValueInput('mutation')
                .setCheck('String')
                .appendField('Commit to state with mutation')
            this.appendValueInput('data')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('and data')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_commit_mutation = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'mutation', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `this.$store.commit(${argument0}, ${argument1})\n`
    }

    // go to app $router page
    Blockly.Blocks.app_go_to_page = {
        init: function () {
            this.appendValueInput('path')
                .setCheck('String')
                .appendField('Go to page')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_go_to_page = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `this.$router.push(${argument0})\n`
    }

    // show an alert dialog with message and title
    Blockly.Blocks.app_show_alert = {
        init: function () {
            this.appendValueInput('title')
                .setCheck('String')
                .appendField('Show alert with title')
            this.appendValueInput('message')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('and message')
            this.appendDummyInput()
                .appendField('mode')
                .appendField(new Blockly.FieldDropdown([
                    ['primary', 'Primary'],
                    ['secondary', 'Secondary'],
                    ['success', 'Success'],
                    ['warning', 'Warning'],
                    ['danger', 'Danger'],
                    ['info', 'Info'],
                    ['critical', 'Critical'],
                    ['debug', 'Debug']
                ]), 'mode')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_show_alert = function (block) {
        // TODO: Assemble JavaScript into code variable.
        var code = '...;\n'
        return code
    }

    // get root form value
    Blockly.Blocks.app_form_values = {
        init: function () {
            this.appendDummyInput()
                .appendField('get form values')
            this.setOutput(true, ['Array', 'String', 'Object', 'Number', 'Boolean'])
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_form_values = function (block) {
        return ['this.previewValues', Blockly.JavaScript.ORDER_ASSIGNMENT]
    }

    // get api response alert props
    Blockly.Blocks.app_form_response_alert = {
        init: function () {
            this.appendDummyInput()
                .appendField('get response ')
                .appendField(new Blockly.FieldVariable('item'), 'var_name')
                .appendField('alert')
            this.setOutput(true, 'Object')
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_form_response_alert = function (block) {
        var variableName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_name'), Blockly.Variables.NAME_TYPE)
        return [`this.getAlertForResponse(this.blockly.${variableName})`, Blockly.JavaScript.ORDER_ASSIGNMENT]
    }

    // get form value at path
    Blockly.Blocks.app_form_value_at_path = {
        init: function () {
            this.appendValueInput('PATH')
                .setCheck('String')
                .appendField('get form values at path')
            this.setOutput(true, ['Array', 'String', 'Object', 'Number', 'Boolean'])
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_form_value_at_path = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return [`this.getNestedPathValue(this.previewValues, ${argument0})`, Blockly.JavaScript.ORDER_FUNCTION_CALL]
    }

    // get form schema at path
    Blockly.Blocks.app_form_schema_at_path = {
        init: function () {
            this.appendValueInput('PATH')
                .setCheck('String')
                .appendField('get form schema at path')
            this.setOutput(true, ['Array', 'String', 'Object', 'Number', 'Boolean'])
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_form_schema_at_path = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return [`this.getNestedPathValue(this.previewProps, ${argument0})`, Blockly.JavaScript.ORDER_ASSIGNMENT]
    }

    // set form schema at path
    Blockly.Blocks.app_set_form_schema_at_path = {
        init: function () {
            this.appendValueInput('PATH')
                .setCheck('String')
                .appendField('set form schema at path')
            this.appendValueInput('VAL')
                .setCheck(['Array', 'String', 'Object', 'Number', 'Boolean'])
                .appendField('to value')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_set_form_schema_at_path = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `this.setNestedPathValue(this.previewProps, ${argument0}, ${argument1})\n`
    }

    // append to form schema at path
    Blockly.Blocks.app_append_form_schema_at_path = {
        init: function () {
            this.appendValueInput('PATH')
                .setCheck('String')
                .appendField('merge to form schema at path')
            this.appendValueInput('VAL')
                .setCheck(['Array', 'String', 'Object', 'Number', 'Boolean'])
                .appendField('with value')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_append_form_schema_at_path = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'PATH', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        var argument1 = Blockly.JavaScript.valueToCode(block, 'VAL', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `this.appendNestedPathValue(this.previewProps, ${argument0}, ${argument1})\n`
    }

    // app console log
    Blockly.Blocks.app_console_log = {
        init: function () {
            this.appendValueInput('LOG')
                .setCheck(['Array', 'String', 'Object', 'Number', 'Boolean'])
                .appendField('console log')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(110)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.app_console_log = function (block) {
        var argument0 = Blockly.JavaScript.valueToCode(block, 'LOG', Blockly.JavaScript.ORDER_ASSIGNMENT) || ''
        return `console.log(${argument0})\n`
    }
}

export const CategoryApp =
`
<category id="catApp" colour="110" name="App">
    <block type="app_get_from_state"></block>
    <block type="app_form_value_at_path"></block>
    <block type="app_form_response_alert"></block>
    <block type="app_form_values"></block>
    <block type="app_form_schema_at_path"></block>
    <block type="app_set_form_schema_at_path"></block>
    <block type="app_append_form_schema_at_path"></block>
    <block type="app_change_state"></block>
    <block type="app_commit_mutation"></block>
    <block type="app_go_to_page"></block>
    <block type="app_show_alert"></block>
    <block type="app_console_log"></block>
</category>
`
