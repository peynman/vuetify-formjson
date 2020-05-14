export default function (Blockly, crudList) {
    // crud create
    Blockly.Blocks.api_crud_create = {
        init: function () {
            this.appendDummyInput()
                .appendField('Create CRUD')
                .appendField(new Blockly.FieldDropdown(crudList), 'crud')
            this.appendValueInput('data')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('with data')
            this.appendStatementInput('then')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('on response')
                .appendField(new Blockly.FieldVariable('item'), 'varName')
                .appendField('do')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(290)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.api_crud_create = function (block) {
    }

    // crud update
    Blockly.Blocks.api_crud_update = {
        init: function () {
            this.appendDummyInput()
                .appendField('Update CRUD')
                .appendField(new Blockly.FieldDropdown(crudList), 'crud')
            this.appendValueInput('id')
                .setCheck('Number')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('with ID')
            this.appendValueInput('data')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('and data')
            this.appendStatementInput('then')
                .setCheck(null)
                .appendField('on response')
                .appendField(new Blockly.FieldVariable('item'), 'varName')
                .appendField('do')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(290)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.api_crud_update = function (block) {
    }

    // crud delete
    Blockly.Blocks.api_crud_delete = {
        init: function () {
            this.appendDummyInput()
                .appendField('Delete CRUD')
                .appendField(new Blockly.FieldDropdown(crudList), 'crud')
            this.appendValueInput('id')
                .setCheck('Number')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('with ID')
            this.appendStatementInput('then')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('on response')
                .appendField(new Blockly.FieldVariable('item'), 'varName')
                .appendField('do')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(290)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.api_crud_delete = function (block) {
    }

    // crud query
    Blockly.Blocks.api_crud_query = {
        init: function () {
            this.appendDummyInput()
                .appendField('Query CRUD')
                .appendField(new Blockly.FieldDropdown(crudList), 'crud')
            this.appendValueInput('id')
                .setCheck('Number')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('with ID')
            this.appendValueInput('relations')
                .appendField('append relations')
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck('Array')
            this.appendValueInput('page')
                .setCheck('Number')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('at page')
            this.appendValueInput('NAME')
                .setCheck('Number')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('limit')
            this.appendValueInput('filter')
                .appendField('filter')
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck('condition')
            this.appendStatementInput('then')
                .setCheck(null)
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('on response')
                .appendField(new Blockly.FieldVariable('item'), 'varName')
                .appendField('do')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(290)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.api_crud_query = function (block) {
    }

    // crud search
    Blockly.Blocks.api_crud_search = {
        init: function () {
            this.appendDummyInput()
                .appendField('Search CRUD')
                .appendField(new Blockly.FieldDropdown(crudList), 'crud')
            this.appendValueInput('relations')
                .setCheck('Array')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('with relations')
            this.appendValueInput('search')
                .setCheck('String')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('search for')
            this.appendValueInput('page')
                .setCheck('Number')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('at page')
            this.appendValueInput('NAME')
                .setCheck('Number')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('limit')
            this.appendValueInput('filter')
                .appendField('filter')
                .setAlign(Blockly.ALIGN_RIGHT)
                .setCheck('condition')
            this.appendStatementInput('then')
                .setCheck(null)
                .appendField('on response')
                .appendField(new Blockly.FieldVariable('item'), 'varName')
                .appendField('do')
            this.setPreviousStatement(true, null)
            this.setNextStatement(true, null)
            this.setColour(290)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.api_crud_search = function (block) {
    }

    // crud query conditions
    Blockly.Blocks.api_crud_where = {
        init: function () {
            this.appendValueInput('CON1')
                .setCheck('condition')
                .appendField('when')
            this.appendValueInput('CON2')
                .setCheck('condition')
                .appendField(new Blockly.FieldDropdown([['and', 'AND'], ['or', 'OR']]), 'COND')
            this.setInputsInline(false)
            this.setOutput(true, 'condition')
            this.setColour(285)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.api_crud_where = function (block) {
    }

    // crud query condition where
    Blockly.Blocks.api_crud_condition_where = {
        init: function () {
            this.appendValueInput('COL')
                .setCheck('String')
                .appendField('where')
            this.appendValueInput('VAL')
                .setCheck(['String', 'Array', 'Boolean', 'condition'])
                .appendField(new Blockly.FieldDropdown([
                    ['==', '=='],
                    ['>', '>'],
                    ['<', '<'],
                    ['>=', '>='],
                    ['<=', '<='],
                    ['!=', '!='],
                    ['in', 'IN'],
                    ['has', 'HAS'],
                    ['between', 'between'],
                    ['null', 'NULL'],
                    ['not null', 'NOT NULL'],
                    ['like', 'LIKE'],
                    ['and', 'AND'],
                    ['or', 'OR']
                ]), 'COND')
            this.setOutput(true, 'condition')
            this.setColour(290)
            this.setTooltip('')
            this.setHelpUrl('')
        }
    }
    Blockly.JavaScript.api_crud_condition_where = function (block) {
    }
}

export const CategoryAPI =
`
<category id="catAPI" colour="290" name="API">
    <block type="api_crud_create">
    </block>
    <block type="api_crud_update">
    </block>
    <block type="api_crud_delete">
    </block>
    <block type="api_crud_query">
    </block>
    <block type="api_crud_search">
    </block>
    <block type="api_crud_condition_where">
    </block>
</category>
`
