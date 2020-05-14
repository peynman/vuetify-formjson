// Process {color}(text) to <span class="md-colorify md-colorify--${color}">text</span>

import parseColorName from './parseColorName'

export default function (md, options) {
    options = options || {}

    // default prefix for the class
    const defaultClassName = options.defaultClassName || 'md-colorify'
    // wheater to add inline style
    // if true, style="color: ${color};" will be added
    const inline = options.inline || false

    function tokenize (state, silent) {
        var
            attrs
        var labelEnd
        var labelStart
        var pos
        var token
        var colorName
        var contentStart
        var contentEnd
        var oldPos = state.pos
        var max = state.posMax

        if (state.src.charCodeAt(state.pos) !== 0x7b /* { */) {
            return false
        }

        labelStart = state.pos + 1
        labelEnd = parseColorName(state, state.pos, true)

        // parser failed to find '}', so it's not valid
        if (labelEnd < 0) {
            return false
        }

        colorName = state.src.substring(labelStart, labelEnd)

        pos = labelEnd + 1

        // parse content
        if (pos < max && state.src.charCodeAt(pos) === 0x28/* ( */) {
            pos++
            contentStart = pos

            for (var found = false; pos < max; pos++) {
                if (state.src.charCodeAt(pos) === 0x29/* ) */) {
                    found = true
                    break
                }
            }

            // if we failed to find ")"
            if (!found) {
                pos = oldPos
                return false
            }

            contentEnd = pos
            pos++
        } else {
            // if we failed to find "("
            pos = oldPos
            return false
        }

        if (!silent) {
            state.pos = contentStart
            state.posMax = contentEnd

            token = state.push('color_open', 'span', 1)
            token.attrs = attrs = []
            if (inline) {
                attrs.push(['style', `color: ${colorName};`])
            }

            token.info = {
                color: colorName,
                inline: inline
            }

            state.md.inline.tokenize(state)

            token = state.push('color_close', 'span', -1)
        }

        state.pos = pos
        state.posMax = max
        return true
    }

    md.inline.ruler.before('emphasis', 'color', tokenize)
}
