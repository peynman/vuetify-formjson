import RegisterBlocksAndGetToolbox from './toolbox'

export function GenerateJSCode (Blockly, codeDom, blocks) {
    const toolbox = RegisterBlocksAndGetToolbox(Blockly, {
    })
    const oldInit = Blockly.JavaScript.init
    Blockly.JavaScript.variableDB_ = new Blockly.Names(Blockly.JavaScript.RESERVED_WORDS_)

    Blockly.JavaScript.variables_get = function (block) {
    // Variable getter.
        var code = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('VAR'),
            Blockly.VARIABLE_CATEGORY_NAME)
        return ['this.blockly.' + code, Blockly.JavaScript.ORDER_ATOMIC]
    }

    Blockly.JavaScript.variables_set = function (block) {
    // Variable setter.
        var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
            Blockly.JavaScript.ORDER_ASSIGNMENT) || '0'
        var varName = Blockly.JavaScript.variableDB_.getName(
            block.getFieldValue('VAR'), Blockly.VARIABLE_CATEGORY_NAME)
        return 'this.blockly.' + varName + ' = ' + argument0 + ';\n'
    }

    Blockly.JavaScript.procedures_defreturn = function (block) {
    // Define a procedure with a return value.
        var funcName = Blockly.JavaScript.variableDB_.getName(
            block.getFieldValue('NAME'), Blockly.PROCEDURE_CATEGORY_NAME)
        var xfix1 = ''
        if (Blockly.JavaScript.STATEMENT_PREFIX) {
            xfix1 += Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_PREFIX,
                block)
        }
        if (Blockly.JavaScript.STATEMENT_SUFFIX) {
            xfix1 += Blockly.JavaScript.injectId(Blockly.JavaScript.STATEMENT_SUFFIX,
                block)
        }
        if (xfix1) {
            xfix1 = Blockly.JavaScript.prefixLines(xfix1, Blockly.JavaScript.INDENT)
        }
        var loopTrap = ''
        if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
            loopTrap = Blockly.JavaScript.prefixLines(
                Blockly.JavaScript.injectId(Blockly.JavaScript.INFINITE_LOOP_TRAP,
                    block), Blockly.JavaScript.INDENT)
        }
        var branch = Blockly.JavaScript.statementToCode(block, 'STACK')
        var returnValue = Blockly.JavaScript.valueToCode(block, 'RETURN',
            Blockly.JavaScript.ORDER_NONE) || ''
        var xfix2 = ''
        if (branch && returnValue) {
            // After executing the function body, revisit this block for the return.
            xfix2 = xfix1
        }
        if (returnValue) {
            returnValue = Blockly.JavaScript.INDENT + 'return ' + returnValue + ';\n'
        }
        var args = []
        for (var i = 0; i < block.arguments_.length; i++) {
            args[i] = Blockly.JavaScript.variableDB_.getName(block.arguments_[i],
                Blockly.VARIABLE_CATEGORY_NAME)
        }
        const varSets = []
        args.forEach((v) => {
            varSets.push('  this.blockly.' + v + ' = ' + v + ';\n')
        })
        var code = funcName + ': function (' + args.join(', ') + ') {\n' +
        varSets.join('') + xfix1 + loopTrap + branch + xfix2 + returnValue + '},'
        code = Blockly.JavaScript.scrub_(block, code)
        // Add % so as not to collide with helper functions in definitions list.
        Blockly.JavaScript.definitions_['%' + funcName] = code
        return null
    }
    Blockly.JavaScript.procedures_defnoreturn = Blockly.JavaScript.procedures_defreturn

    Blockly.JavaScript.procedures_callreturn = function (block) {
    // Call a procedure with a return value.
        var funcName = Blockly.JavaScript.variableDB_.getName(
            block.getFieldValue('NAME'), Blockly.PROCEDURE_CATEGORY_NAME)
        var args = []
        for (var i = 0; i < block.arguments_.length; i++) {
            args[i] = Blockly.JavaScript.valueToCode(block, 'ARG' + i,
                Blockly.JavaScript.ORDER_COMMA) || 'null'
        }
        var code = 'this.' + funcName + '(' + args.join(', ') + ')'
        return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL]
    }
    Blockly.JavaScript.init = function (workspace) {
        oldInit(workspace)
        Blockly.JavaScript.definitions_.variables = `blockly: {${Object.keys(Blockly.JavaScript.variableDB_.db_).map((i) => i.split('_')[0] + ': null').join(',')}},`
    }

    const workspace = new Blockly.Workspace({
        toolbox
    })
    if (typeof codeDom !== 'string' || codeDom.length === 0) {
        codeDom = '<xml xmlns="https://developers.google.com/blockly/xml"></xml>'
    }
    const dom = Blockly.Xml.textToDom(codeDom)
    Blockly.Xml.appendDomToWorkspace(dom, workspace)
    const code = Blockly.JavaScript.workspaceToCode(workspace)
    return `({\n${code}\n})`
}

export default function GeneratVueJSObject (Blockly, codeDom, blocks) {
    // eslint-disable-next-line no-eval
    return eval(GenerateJSCode(Blockly, codeDom, blocks))
}
