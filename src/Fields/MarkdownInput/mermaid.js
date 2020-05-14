import mermaid from 'mermaid'

const MermaidPlugin = (md, options) => {
    const mermaidChart = (code) => {
        mermaid.parse(code)
        const id = ('mermaid-' + Math.random() * Number.MAX_SAFE_INTEGER).substr(0, 20)
        let generatedCode = ''
        const insertSvg = (elementId) => (svgCode, bindFunctions) => {
            if (options && options.onRenderSVG) {
                options.onRenderSVG(svgCode)
            }
            generatedCode = svgCode
        }
        mermaid.mermaidAPI.render('svg-' + id, code, insertSvg(id))
        return `<div id="${id}">${generatedCode}</div>`
    }

    mermaid.initialize({
        startOnLoad: false
    })

    const temp = md.renderer.rules.fence.bind(md.renderer.rules)
    md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
        const token = tokens[idx]
        const code = token.content.trim()
        if (token.info === 'mermaid') {
            return mermaidChart(code)
        }
        const firstLine = code.split(/\n/)[0].trim()
        if (firstLine === 'gantt' || firstLine === 'sequenceDiagram' || firstLine.match(/^graph (?:TB|BT|RL|LR|TD);?$/)) {
            return mermaidChart(code)
        }
        return temp(tokens, idx, options, env, slf)
    }
}

export default MermaidPlugin
