import MathLive from 'mathlive'

const MathLivePlugin = (md, pluginOptions) => {
    const temp = md.renderer.rules.fence.bind(md.renderer.rules)
    md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
        const token = tokens[idx]
        const code = token.content.trim()
        if (token.info === 'mathlive') {
            const id = ('mathlive-' + Math.random() * Number.MAX_SAFE_INTEGER).substr(0, 20)
            pluginOptions.host.$nextTick(() => {
                MathLive.renderMathInElement(document.getElementById(id), options.mathlive)
            })
            return `<pre id="${id}">$$${code}$$</pre>`
        }
        return temp(tokens, idx, options, env, slf)
    }

    const mathLiveRender = (state, silent) => {
        let variableStartPos = state.pos
        if (state.src.charAt(variableStartPos) !== '$') {
            return false
        }
        variableStartPos++
        if (state.src.charAt(variableStartPos) !== '$') {
            return false
        }
        variableStartPos++
        const variableEnd = state.src.indexOf('$$', variableStartPos)
        const markup = state.src.slice(state.pos, variableStartPos)

        if (variableEnd !== -1) {
            if (!silent) {
                const token = state.push('markdown-it-mathlive', 'span', 0)
                token.content = state.src.slice(variableStartPos, variableEnd - 1)
                token.markdown = markup
            }

            state.pos = variableEnd + 2
            return true
        }

        if (!silent) {
            state.pending += markup
        }
        state.pos = variableStartPos
        return true
    }

    md.inline.ruler.push('markdown-it-mathlive', mathLiveRender, { alt: [] })
    md.renderer.rules['markdown-it-mathlive'] = (tokens, idx, options, env, slf) => {
        const token = tokens[idx]
        const code = token.content.trim()
        const id = ('mathlive-' + Math.random() * Number.MAX_SAFE_INTEGER).substr(0, 20)
        pluginOptions.host.$nextTick(() => {
            MathLive.renderMathInElement(document.getElementById(id), options.mathlive)
        })
        return `<span id="${id}">$$${code}$$</span>`
    }
}

export default MathLivePlugin
