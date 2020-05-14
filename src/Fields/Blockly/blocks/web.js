
export default function (Blockly) {
    Blockly.Blocks.web_request = {
        init: function () {
            this.appendValueInput('url')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('Send request to url')
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('with method')
                .appendField(new Blockly.FieldDropdown([['Get', 'GET'], ['Post', 'POST'], ['Put', 'PUT'], ['Head', 'HEAD'], ['Delete', 'DELETE']]), 'method')
            this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('and content type')
                .appendField(new Blockly.FieldDropdown([
                    ['JSON', 'application/json'],
                    ['Multipart form data', 'multipart/form-data;'],
                    ['x-www Form', 'application/x-www-form-urlencoded'],
                    ['Raw', 'text']
                ]), 'content_type')
            this.appendValueInput('data')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('and data')
            this.appendValueInput('headers')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('headers')
            this.appendStatementInput('onResponse')
                .setCheck(null)
                .appendField('on responsed')
                .appendField(new Blockly.FieldVariable('response'), 'response')
                .appendField('do')
            this.setInputsInline(false)
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(315)
            this.setTooltip('Make a web request to a url and process the re')
            this.setHelpUrl('')
        }
    }

    Blockly.JavaScript.web_request = function (block) {
        const valueUrl = Blockly.JavaScript.valueToCode(block, 'url', Blockly.JavaScript.ORDER_ATOMIC)
        const dropdownMethod = block.getFieldValue('method')
        const dropdownContentType = block.getFieldValue('content_type')
        const valueData = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC)
        const valueHeaders = Blockly.JavaScript.valueToCode(block, 'headers', Blockly.JavaScript.ORDER_ATOMIC)
        // const variableResponse = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('response'), Blockly.Variables.NAME_TYPE)
        // const statementsOnResponse = Blockly.JavaScript.statementToCode(block, 'onResponse')
        // TODO: Assemble JavaScript into code variable.
        const axiosParams = {
            url: valueUrl.replace(/'/g, ''),
            method: dropdownMethod,
            headers: {
                ...valueHeaders
            }
        }
        if (valueData) {
            axiosParams.data = valueData
        }
        if (dropdownContentType) {
            axiosParams.headers['Content-Type'] = dropdownContentType
        }
        const innerCode = Blockly.JavaScript.statementToCode(block, 'onResponse')
        var code = `axios(${JSON.stringify(axiosParams, null, 2)}).then(() => {${innerCode}});\n`
        return code
    }

    Blockly.Blocks.web_is_response_code = {
        init: function () {
            this.appendDummyInput()
                .appendField('Is response in variable')
                .appendField(new Blockly.FieldVariable('item'), 'var_name')
                .appendField('status code')
            this.appendValueInput('code')
                .setCheck('Number')
            this.setInputsInline(true)
            this.setOutput(true, null)
            this.setColour(315)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }

    Blockly.JavaScript.web_is_response_code = function (block) {
        var variableName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_name'), Blockly.Variables.NAME_TYPE)
        var valueCode = Blockly.JavaScript.valueToCode(block, 'code', Blockly.JavaScript.ORDER_ATOMIC)
        // TODO: Assemble JavaScript into code variable.
        var code = 'this.' + variableName + '.status === ' + valueCode
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.JavaScript.ORDER_NONE]
    }

    Blockly.Blocks.web_is_response_ok = {
        init: function () {
            this.appendDummyInput()
                .appendField('Is response in variable')
                .appendField(new Blockly.FieldVariable('item'), 'var_name')
                .appendField(' OK')
            this.setInputsInline(true)
            this.setOutput(true, null)
            this.setColour(315)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }

    Blockly.JavaScript.web_is_response_ok = function (block) {
        var variableName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('var_name'), Blockly.Variables.NAME_TYPE)
        var valueCode = Blockly.JavaScript.valueToCode(block, 'code', Blockly.JavaScript.ORDER_ATOMIC)
        // TODO: Assemble JavaScript into code variable.
        var code = 'this.' + variableName + '.status === ' + valueCode
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.JavaScript.ORDER_NONE]
    }
}

export const CategoryWeb =
`
<category id="catWeb" colour="315" name="Web">
    <block type="web_request"></block>
    <block type="web_is_response_code"></block>
    <block type="web_is_response_ok"></block>
</category>
`
