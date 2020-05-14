<template>
    <div :class="`vf-input d-flex flex-column ${field.class ? field.class : ''}`">
        <label>{{ field.label }}</label>
        <div ref="blockArea" style="width: 100%; min-height: 500px; height: 100%" class="fill-height">
            <div ref="blockEditor"></div>
        </div>
    </div>
</template>

<script>
import BaseComponent from './../mixins'
import Blockly from 'blockly'
import RegisterBlocksAndGetToolbox from './toolbox'

export default {
    mixins: [BaseComponent],
    name: 'vf-blockly-input',
    props: {
        id: String,
        field: Object,
        value: Object
    },
    data () {
        return {
            ignoreChange: false,
            windowWidth: 0,
            windowHeight: 0
        }
    },
    methods: {
        onWindowResize (event) {
            const blocklyArea = this.$refs.blockArea
            var element = blocklyArea
            var x = 0
            var y = 0
            do {
                x += element.offsetLeft
                y += element.offsetTop
                element = element.offsetParent
            } while (element)
            const blocklyDiv = this.$refs.blockEditor
            blocklyDiv.style.left = x + 'px'
            blocklyDiv.style.top = y + 'px'
            blocklyDiv.style.width = blocklyArea.offsetWidth + 'px'
            blocklyDiv.style.height = blocklyArea.offsetHeight + 'px'
            Blockly.svgResize(this.blockEditor)
        },
        refreshSize () {
            this.onWindowResize(null)
        }
    },
    mounted () {
        const blockContainer = this.$refs.blockEditor
        if (blockContainer) {
            const BlocklyToolbox = RegisterBlocksAndGetToolbox(Blockly, {
                blocks: this.field.blocks ? this.field.blocks : null
            })
            this.blockEditor = Blockly.inject(blockContainer, {
                toolbox: BlocklyToolbox,
                zoom: {
                    controls: true,
                    wheel: true,
                    startScale: 1.0,
                    maxScale: 3,
                    minScale: 0.3,
                    scaleSpeed: 1.2
                }
            })
            this.blockEditor.addChangeListener((event) => {
                const dom = Blockly.Xml.workspaceToDom(this.blockEditor)
                this.devalue = Blockly.Xml.domToText(dom)
                this.$emit('input', this.devalue)
            })
            if (this.value && this.value !== '') {
                try {
                    Blockly.Xml.clearWorkspaceAndLoadFromXml(Blockly.Xml.textToDom(this.value), this.blockEditor)
                } catch (e) {}
            }
            Blockly.svgResize(this.blockEditor)
        }
        this.$nextTick(function () {
            window.addEventListener('resize', this.onWindowResize)
            this.onWindowResize()
        })
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.onWindowResize)
    }
}
</script>
