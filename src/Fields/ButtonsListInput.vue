<template>
    <div :class="`vf-input ${field.class ? field.class:''}`">
        <v-btn
            v-for="(btn, index) in field.objects"
            :key="`${id}-buttons-list-${index}`"
            :class="`vf-input vf-btn ${field.props && field.props.class ? field.props.class : ''} ${btn.class ? btn.class:''}`"
            @click="onButtonClick(index)"
            :color="getButtonClass(index)"
            v-bind="getButtonProps(index)"
        >
            <span v-if="field.label">{{ getDecorableLabel(btn) }}</span>
            <v-icon v-if="btn.icon" v-bind="btn.iconProps">{{ btn.icon }}</v-icon>
        </v-btn>
    </div>
</template>

<script>
import BaseComponent, { DecoratableComponent } from './mixins'
import { VBtn, VIcon } from 'vuetify/lib'
export default {
    components: {
        VBtn, VIcon
    },
    mixins: [BaseComponent, DecoratableComponent],
    name: 'vf-buttons-list-input',
    props: {
        id: String,
        field: Object,
        value: {
            type: Array,
            default: () => ([])
        }
    },
    methods: {
        onButtonClick: function (index) {
            if (this.field.single && this.devalue.length > 0) {
                this.devalue = []
            }
            if (!this.field.once) {
                if (this.devalue.indexOf(index) >= 0) {
                    this.devalue.splice(this.devalue.indexOf(index), 1)
                } else {
                    this.devalue.push(index)
                }
            }
            if (this.field.click) {
                this.field.click(this.field.objects[index])
            }
            this.$emit('input', this.devalue)
        },
        getButtonClass (index) {
            if (this.devalue.indexOf(index) >= 0) {
                return this.field.activeClass ? this.field.activeClass : this.field.objects && this.field.objects[index] && this.field.objects[index].activeClass ? this.field.objects[index].activeClass : 'primary'
            } else {
                return this.field.normalClass ? this.field.normalClass : this.field.objects && this.field.objects[index] && this.field.objects[index].normalClass ? this.field.objects[index].normalClass : ''
            }
        },
        getButtonProps (index) {
            let override = {}
            if (this.devalue.indexOf(index) >= 0) {
                if (this.field.activeProps) {
                    override = this.field.activeProps
                }
            } else {
                if (this.field.normalProps) {
                    override = this.field.normalProps
                }
            }

            return { ...this.field.props, ...override }
        }
    }
}
</script>
