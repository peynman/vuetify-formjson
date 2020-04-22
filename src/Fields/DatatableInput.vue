<template>
  <div :class="`vf-input d-flex flex-column flex-grow-1 ${field.class}`">
    <v-alert
      v-model="alert.show"
      :type="alert.type"
      :color="alert.color"
      dense
      transition="slide-y-transition"
      dismissible
      class
    >{{ alert.message }}</v-alert>
    <v-toolbar dense flat class="ma-0 pa-0">
      <label>{{field.label}}</label>
      <v-spacer></v-spacer>
      <vf-datatable-dialog-delete
        v-if="field.remove && selected.length > 0"
        :showDelete="showDelete"
        :field="field"
        :selected="selected"
        @accept="onRemoveSelected()"
      ></vf-datatable-dialog-delete>
      <vf-datatable-dialog-settings
        v-if="field.settings"
        :showSettings="showSettings"
        :field="field"
        v-model="settingsModel"
      ></vf-datatable-dialog-settings>
      <vf-datatable-dialog-create
        v-if="field.create"
        :field="field"
        :forceShow="showCreate"
        :edit-mode="editMode"
        v-model="createModel"
        @on-create="onCreateNew"
        @on-cancel="onCancelNew"
        @on-update="onUpdateNew"
      ></vf-datatable-dialog-create>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      :expanded.sync="expanded"
      :server-items-length="total"
      :options.sync="options"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :loading="loading"
      :calculate-widths="true"
      v-model="selected"
      selectable-key
      @click:row="onToggleItem"
      v-bind="fieldProps"
    >
      <template v-slot:item.data-table-select="{item, isSelected, select}">
        <v-simple-checkbox class="d-inline" :value="isSelected" @input="select($event)"></v-simple-checkbox>
        <v-btn v-if="field.remove" icon x-small color="red" @click="onRemoveSelected(item)">
          <v-icon x-small>{{ field.remove.icon ? field.remove.icon:'indeterminate_check_box' }}</v-icon>
        </v-btn>
        <v-btn
          v-if="field.edit"
          icon
          x-small
          @click="() => {createModel = {...item}; editMode = true; showCreate = true;}"
        >
          <v-icon x-small>{{ field.edit.icon ? field.edit.icon:'edit' }}</v-icon>
        </v-btn>
      </template>
      <template v-for="template in templates" v-slot:[getTemplateSlot(template)]="{item}">
        <component
          :is="template.component"
          :key="template.column"
          :item="item"
          :params="template.params"
          :column="template.column"
          :extras="template.extras"
          @open-extend="onExpandItem"
          @close-extend="onCloseItem"
        />
      </template>
      <template v-for="header in headers" v-slot:[getHeaderSlot(header)]="{}">{{ header.text }}</template>
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios'
import VFSettingsDialog from './Datatable/SettingsDialog.vue'
import VFDeleteDialog from './Datatable/DeleteDialog.vue'
import VFCreateDialog from './Datatable/CreateDialog.vue'

export default {
    components: {
        [VFSettingsDialog.name]: VFSettingsDialog,
        [VFDeleteDialog.name]: VFDeleteDialog,
        [VFCreateDialog.name]: VFCreateDialog
    },
    name: 'vf-datatable-input',
    props: {
        field: Object,
        id: String,
        value: Array
    },
    computed: {
        fieldProps: function () {
            return {
                ...this.field.props
            }
        },
        headers: function () {
            const headers = []
            if (this.field.columns) {
                this.field.columns.forEach(h => {
                    if (
                        h.type !== 'template' ||
            !h.template.params ||
            h.template.params.header !== false
                    ) {
                        headers.push({
                            text: h.title,
                            value: h.column,
                            align: 'start',
                            sortable: h.sortable,
                            divider: true,
                            width: h.width
                        })
                    }
                })
            }
            return headers
        },
        templates: function () {
            const templates = []
            if (this.field.columns) {
                this.field.columns.forEach(h => {
                    if (h.type === 'template') {
                        const extras = {}
                        const template = {
                            component: 'vf-table-column-' + h.template.component,
                            params: h.template.params,
                            column: h.column,
                            extras: extras
                        }
                        templates.push(template)
                        if (h.template.params.slot === 'expanded-item') {
                            this.expandTemplate = template
                            this.expandTemplateDefaultMetadata = {
                                ...template.params.metadata
                            }
                        }
                    }
                })
            }
            return templates
        },
        alert: function () {
            if (!this.response) {
                return {
                    show: false
                }
            }

            return {
                show: this.response.status !== 200,
                color: this.response.status === 200 ? 'blue-grey darken-1 ' : 'error',
                type: this.response.status !== 200 ? 'error' : 'success',
                message: this.response.data.message,
                messages: this.response.data.errors
            }
        }
    },
    data: () => ({
        createModel: {},
        showAlert: false,
        showDelete: false,
        showCreate: false,
        loading: false,
        editMode: false,
        loadingId: 0,
        search: '',
        items: [],
        selected: [],
        expanded: [],
        options: {},
        total: 0,
        response: null,
        sortBy: null,
        sortDesc: null,
        expandTemplate: null,
        expandTemplateDefaultMetadata: null
    }),
    methods: {
        updateTable () {
            this.loading = true
            this.loadingId += 1
            const sort = []

            this.options.sortBy.forEach((s, index) => {
                sort.push({
                    column: s,
                    direction: this.options.sortDesc[index] ? 'desc' : 'asc'
                })
            })

            if (this.field.table && this.field.table.query) {
                axios
                    .post(this.field.table.query.url, {
                        ref_id: this.loadingId,
                        page: this.options.page,
                        limit: this.options.itemsPerPage,
                        search: this.search,
                        sort: sort,
                        with: this.field.table.query.params.with
                    })
                    .then(response => {
                        this.response = response
                        if (response.data.data && this.loadingId <= response.data.ref_id) {
                            this.updateTableData(response.data)
                        }
                    })
                    .catch(error => {
                        this.response = error.response
                    })
                    .finally(() => {
                        this.loading = false
                    })
            } else {
                this.loading = false
                this.items = []
            }
        },
        updateTableData (paginated) {
            this.items = paginated.data
            this.total = paginated.total
        },
        getTemplateSlot (template) {
            if (template.params && template.params.slot) {
                return template.params.slot
            }

            return 'item.' + template.column
        },
        getHeaderSlot (header) {
            return 'header.' + header.value
        },
        onToggleItem (item) {
            this.toggleArray(this.expanded, item)
            // this.expandTemplate.params.metadata = this.expandTemplateDefaultMetadata;
        },
        onCloseItem (target) {
            this.putOffArray(this.expanded, target.item)
        },
        onExpandItem (target) {
            this.putOnArray(this.expanded, target.item)
            this.expandTemplate.params.metadata = target.link.metadata
        },
        onRemoveSelected (item) {
            if (!item) {
                const self = this
                this.items = this.items.filter(
                    item => self.selected.filter(s => s.id === item.id).length === 0
                )
            } else {
                this.items = this.items.filter(i => i.id !== item.id)
            }
            this.selected = []
        },
        onEditItem (item) {
            this.items.unshift({
                id: 'id#' + Math.random() * Number.MAX_SAFE_INTEGER,
                ...this.createModel
            })
        },
        onCreateNew () {
            this.items.unshift({
                id: 'id#' + Math.random() * Number.MAX_SAFE_INTEGER,
                ...this.createModel
            })
            this.showCreate = false
        },
        onUpdateNew () {
            const self = this
            this.items.forEach((item) => {
                if (item.id === self.createModel.id) {
                    for (const prop in self.createModel) {
                        item[prop] = self.createModel[prop]
                    }
                }
            })
            this.editMode = false
            this.showCreate = false
        },
        onCancelNew () {
            this.showCreate = false
            this.editMode = false
        },
        toggleArray (arr, item) {
            const index = arr.indexOf(item)
            if (index >= 0) {
                arr.splice(index, 1)
            } else {
                arr.push(item)
            }
        }
    },
    watch: {
        showCreate: function () {
            console.log('showcreate d', this.showCreate)
        },
        search: function (o, n) {
            this.updateTable()
        },
        options: {
            deep: true,
            handler () {
                this.updateTable()
            }
        },
        value: {
            deep: true,
            handler () {
                this.$emit('input', this.value)
            }
        },
        items: {
            deep: true,
            handler () {
                if (this.field.create) {
                    this.value = [].concat(this.items)
                    this.total = this.value.length
                }
            }
        },
        selected: {
            deep: true,
            handler () {}
        }
    },
    mounted () {
        this.updateTable()
    }
}
</script>
