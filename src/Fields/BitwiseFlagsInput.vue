<template>
  <vf-objects-list-input :field="field" :id="`${id}-bitwise`" v-model="innerValue"></vf-objects-list-input>
</template>

<script>
export default {
    name: 'vf-bitwise-flags-input',
    props: {
        id: String,
        field: Object,
        value: Number
    },
    data () {
        return {
            innerValue: {},
            devalue: this.value
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
        value: {
            deep: true,
            handler () {
                this.devalue = this.value
            }
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
