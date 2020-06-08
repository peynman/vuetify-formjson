<template>
  <v-dialog v-model="showCreate" persisted max-width="800px" @click:outside="$emit('on-cancel')">
    <template v-slot:activator="{ on }">
      <v-btn :color="showCreate ? 'warning':'success'" icon x-small text v-on="on">
        <v-icon small>{{ showCreate ? 'close':'add_box' }}</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline">{{ field.create.title }}</v-card-title>
      <v-card-text>
        <v-container>
          <vf-fields-renderer
            ref="renderer"
            class="pa-2"
            :fields="fieldCreateFields"
            :options="field.create.options"
            v-model="devalue"
          ></vf-fields-renderer>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { VDialog, VBtn, VIcon, VCard, VCardText, VContainer } from 'vuetify/lib'
export default {
    components: {
        VDialog, VBtn, VIcon, VCard, VCardText, VContainer
    },
    name: 'vf-datatable-dialog-create',
    props: {
        value: {
            type: Object,
            default: () => ({})
        },
        field: Object,
        forceShow: Boolean,
        editMode: Boolean
    },
    data () {
        return {
            showCreate: false,
            devalue: this.value
        }
    },
    computed: {
        fieldCreateFields: function () {
            const self = this
            const actions = !this.editMode
                ? {
                    options: {
                        props: {
                            class: 'd-flex flex-row-reverse mt-3'
                        }
                    },
                    fields: {
                        addnclose: {
                            type: 'input',
                            input: 'button',
                            label:
                  this.field.create.labels &&
                  this.field.create.label.add_n_close
                      ? this.field.create.label.add_n_close
                      : 'Add and Close',
                            class: 'col-3 me-1',
                            action: 'add_n_close',
                            props: {
                                outlined: true,
                                color: 'primary',
                                small: true,
                                click: () => {
                                    self.$emit('on-create', self.devalue)
                                    self.showCreate = false
                                }
                            }
                        },
                        addnnew: {
                            type: 'input',
                            input: 'button',
                            label:
                  this.field.create.labels && this.field.create.labels.add_n_new
                      ? this.field.create.label.add_n_new
                      : 'Add and New',
                            class: 'col-3 me-1',
                            action: 'add_n_new',
                            props: {
                                outlined: true,
                                color: 'primary',
                                small: true,
                                click: () => {
                                    self.$emit('on-create', self.devalue)
                                    self.devalue = Object.assign({})
                                }
                            }
                        },
                        cancel: {
                            type: 'input',
                            input: 'button',
                            label:
                  this.field.create.labels && this.field.create.labels.add_n_new
                      ? this.field.create.label.add_n_new
                      : 'Cancel',
                            class: 'col-3 me-1',
                            action: 'close',
                            props: {
                                outlined: true,
                                color: 'warning',
                                small: true,
                                click: () => {
                                    self.$emit('on-cancel')
                                    self.showCreate = false
                                }
                            }
                        }
                    }
                }
                : {
                    options: {
                        props: {
                            class: 'd-flex flex-row-reverse mt-3'
                        }
                    },
                    fields: {
                        update: {
                            type: 'input',
                            input: 'button',
                            label: this.field.edit.label ? this.field.edit.label : 'Update',
                            class: 'col-3 me-1',
                            action: 'update',
                            props: {
                                outlined: true,
                                color: 'primary',
                                small: true,
                                click: () => {
                                    self.$emit('on-update', self.devalue)
                                    self.devalue = Object.assign({})
                                }
                            }
                        },
                        cancel: {
                            type: 'input',
                            input: 'button',
                            label: this.field.cancel ? this.field.cancel : 'Cancel',
                            class: 'col-3 me-1',
                            action: 'close',
                            props: {
                                outlined: true,
                                color: 'warning',
                                small: true,
                                click: () => {
                                    self.$emit('on-cancel')
                                    self.showCreate = false
                                }
                            }
                        }
                    }
                }

            return {
                ...this.field.create.fields,
                actions_row: actions
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
        },
        forceShow: function () {
            this.showCreate = this.forceShow
        }
    },
    mounted () {
        this.showCreate = this.forceShow
    }
}
</script>
