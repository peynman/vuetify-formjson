<template>
  <v-text-field
    v-model="value"
    :class="`vf-input ${field.class}`"
    :label="field.label"
    hide-details="auto"
    mask="####"
    v-bind="fieldProps"
    @keyup.native="colorTextChanged($event)"
  >
    <template v-slot:prepend-inner>
      <v-menu
        top
        nudge-bottom="105"
        nudge-left="16"
        v-model="colorsMenu"
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ on }">
          <div
            :style="{
                        border: '1px solid black',
                        backgroundColor: value,
                        cursor: 'pointer',
                        height: '16px',
                        width: '16px',
                        marginTop: '2px',
                        borderRadius: '5px',
                        transition: 'border-radius 200ms ease-in-out'
                    }"
            v-on="on"
          />
        </template>
        <v-card>
          <v-card-text class="pa-0">
            <v-color-picker
              v-bind="pickerProps"
              :value="getColorValue"
              @update:color="colorSelected"
            />
          </v-card-text>
        </v-card>
      </v-menu>
    </template>
  </v-text-field>
</template>

<script>
export default {
    name: 'vf-color-input',
    props: {
        id: String,
        field: Object,
        value: String
    },
    computed: {
        getColorValue: function () {
            return this.value
        },
        fieldProps: function () {
            return {
                ...this.field.props
            }
        },
        pickerProps: function () {
            return {
                ...this.field.picker
            }
        }
    },
    data: () => ({
        ignore: false
    }),
    methods: {
        colorTextChanged: function (ev) {
            this.$emit('input', this.value)
            this.ignore = true
        },
        colorSelected: function (c) {
            if (this.ignore) {
                this.ignore = false
            } else {
                this.value = c.hexa
            }
            this.$emit('input', this.value)
        }
    }
}
</script>
