import Vue from 'vue'

const FromJSONPlugin = (md, pluginOptions) => {
    const temp = md.renderer.rules.fence.bind(md.renderer.rules)
    md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
        const token = tokens[idx]
        const code = token.content.trim()
        if (token.info === 'formjson') {
            const id = ('formjson-' + Math.random() * Number.MAX_SAFE_INTEGER).substr(0, 20)
            pluginOptions.host.$nextTick(() => {
                const CC = Vue.component('vf-fields-renderer')
                let ccData = {}
                try {
                    ccData = ccData = JSON.parse(code)
                } catch (e) {}
                const component = new CC({ propsData: ccData })
                console.log('mount', ccData, CC, component)
                component.$mount('#' + id)
            })
            return `<div id="${id}"></div>`
        }
        return temp(tokens, idx, options, env, slf)
    }
}

export default FromJSONPlugin
