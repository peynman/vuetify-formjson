<template>
  <v-dialog v-model="showSettings" max-width="800px">
    <template v-slot:activator="{ on }">
      <v-btn :color="showSettings ? 'warning':'secondary'" icon x-small text v-on="on">
        <v-icon small>{{ showSettings ? 'close': field.settings.icon ? field.settings.icon:'settings_applications' }}</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">{{ field.settings.title }}</v-card-title>
      <vf-fields-renderer
        class="pa-2"
        v-if="showSettings"
        :fields="settingsFields"
        :options="field.settings.options"
        v-model="devalue"
      ></vf-fields-renderer>
    </v-card>
  </v-dialog>
</template>

<script>
import { VDialog, VBtn, VIcon, VCard, VCardTitle } from 'vuetify/lib'
export default {
    components: {
        VDialog, VBtn, VIcon, VCard, VCardTitle
    },
    name: 'vf-datatable-dialog-settings',
    props: {
        value: {
            type: Object,
            default: () => ({})
        },
        showSettings: Boolean,
        field: Object
    },
    data () {
        return {
            devalue: this.value
        }
    },
    computed: {
        settingsFields: function () {
            return {
                'hide-columns': {
                    type: 'input',
                    input: 'objects-list',
                    label: 'Hide columns',
                    objects: this.field.columns,
                    decorator: {
                        id: 'column',
                        title: 'title',
                        label: ':title'
                    }
                }
            }
        }
    },
    watch: {
        devalue: {
            deep: true,
            handler () {
                this.$emit('input', this.devalue)
            }
        },
        value: {
            deep: true,
            handler () {
                this.devalue = this.value
            }
        }
    }
}
</script>
