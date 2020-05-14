<template>
  <vf-objects-list-input :field="field" :id="`${id}-bitwise`" v-model="innerValue"></vf-objects-list-input>
</template>

<script>
import BaseComponent from './mixins'
export default {
    mixins: [BaseComponent],
    name: 'vf-bitwise-flags-input',
    props: {
        id: String,
        field: Object,
        value: Number
    },
    data () {
        return {
            innerValue: {}
        }
    },
    watch: {
        devalue: function () {
            const newInner = {}
            this.field.objects.forEach((i) => {
                if ((this.value & i.id) !== 0) {
                    newInner[i.id] = true
                }
            })
            this.innerValue = newInner
        },
        innerValue: {
            deep: true,
            handler () {
                let flag = 0
                for (const prop in this.innerValue) {
                    if (Object.prototype.hasOwnProperty.call(this.innerValue, prop)) {
                        if (this.innerValue[prop]) {
                            flag += parseInt(prop)
                        }
                    }
                }
                this.devalue = flag
                this.$emit('input', this.devalue)
            }
        }
    }
}
</script>
