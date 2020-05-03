import './../sass/vuetify-formjson.scss'
import Components from './components'

import axios from 'axios'
import VueAxios from 'vue-axios'

export function install (Vue, options) {
    if (install.installed) return
    install.installed = true
    Components.install(Vue)

    if (!options || !options.withoutAxios) {
        Vue.use(VueAxios, axios)
    }
}

// Create module definition for Vue.use()
const plugin = {
    install,

    Components
}
export default plugin

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue
}
if (GlobalVue) {
    GlobalVue.use(plugin)
}
