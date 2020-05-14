
export default function (Blockly) {
    Blockly.Blocks.vuex_get_from_state = {
        init: function () {
            this.appendValueInput('path')
                .setCheck('String')
                .appendField('Get state value at path')
            this.appendDummyInput()
            this.setOutput(true, null)
            this.setColour(330)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.vuex_get_from_state = function (block) {
    }

    Blockly.Blocks.vuex_change_state = {
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
            this.setColour(330)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.vuex_change_state = function (block) {
    }

    Blockly.Blocks.vuex_commit_mutation = {
        init: function () {
            this.appendValueInput('path')
                .setCheck('String')
                .appendField('Commit to state with mutation')
            this.appendValueInput('data')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('and data')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(330)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.vuex_commit_mutation = function (block) {
    }

    Blockly.Blocks.vuex_go_to_page = {
        init: function () {
            this.appendValueInput('path')
                .setCheck('String')
                .appendField('Go to page')
            this.appendValueInput('path')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('and data')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(330)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.vuex_go_to_page = function (block) {
    }

    Blockly.Blocks.vuex_show_alert = {
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
            this.setColour(330)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.vuex_show_alert = function (block) {
        var valueTitle = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC)
        var valueMessage = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC)
        var dropdownMode = block.getFieldValue('mode')
        // TODO: Assemble JavaScript into code variable.
        var code = '...;\n'
        return code
    }
}

export const CategoryVuex =
`
<category id="catVuex" colour="330" name="Vuex">
    <block type="vuex_get_from_state">
    </block>
    <block type="vuex_change_state">
    </block>
    <block type="vuex_commit_mutation">
    </block>
    <block type="vuex_go_to_page">
    </block>
    <block type="vuex_show_alert">
    </block>
</category>
`
