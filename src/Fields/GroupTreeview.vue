<template>
  <v-sheet
    :class="`vf-input overflow-hidden d-flex flex-column flex-grow-1 ${field.class ? field.class:''}`"
    style="position: relative;"
  >
    <confirm ref="confirm"></confirm>
    <v-menu v-model="menu" :position-x="menuX" :position-y="menuY">
      <vf-fields-renderer
          v-if="currentAction"
          :on-updated="currentAction.onUpdated"
          :fields="currentAction.fields"
          v-model="currentActionValue"
          v-bind="currentActionProps"
      ></vf-fields-renderer>
    </v-menu>
    <v-dialog v-model="dialog" v-bind="currentAction && currentAction.dialog && currentAction.dialog.props ? currentAction.dialog.props : {}">
        <vf-fields-renderer
            v-if="currentAction"
            :on-updated="currentAction.onUpdated"
            :fields="currentAction.fields"
            v-model="currentActionValue"
            v-bind="currentActionProps"
        ></vf-fields-renderer>
    </v-dialog>
    <label v-if="field.label">{{ field.label }}</label>
    <v-container class="fill-height align-start ma-0 pa-0">
      <v-treeview :items="devalue" v-bind="fieldProps" v-on="eventHandlers">
        <template v-for="slot in actionSlots" v-slot:[slot]="{item}">
          <div
            :key="`${id}-actions-${slot}`"
            class="d-flex flex-row"
            v-if="field.actions && field.actions.hasAction(slot, item)"
          >
            <v-btn
              v-for="(act, key) in field.actions.getActions(slot, item)"
              :key="`${id}-tree-append-${key}`"
              v-bind="act.props"
              @click="onActionClicked($event, slot, act, key, item)"
            >
              {{act.title ? act.title:''}}
              <v-icon v-if="act.icon" v-bind="act.iconProps">{{ act.icon }}</v-icon>
            </v-btn>
          </div>
        </template>
        <template v-slot:label="{item}">
          <div class="d-flex flex column">
            <div class="d-flex flex-row justify-space-between align-center">
              <v-icon v-if="decorator.icon">{{ }}</v-icon>
              <label>{{ getDecorableLabel(item) }}</label>
            </div>
          </div>
        </template>
      </v-treeview>
      <v-navigation-drawer v-model="drawer" absolute temporary v-bind="drawerProps">
        <vf-fields-renderer
          v-if="currentAction"
          :on-updated="currentAction.onUpdated"
          :fields="currentAction.fields"
          v-model="currentActionValue"
          v-bind="currentActionProps"
        ></vf-fields-renderer>
      </v-navigation-drawer>
    </v-container>
  </v-sheet>
</template>

<script>
import BaseComponent, { DecoratableComponent, EasyNestedObject } from './mixins'
import confirm from './../Confirm.vue'
import { VContainer, VDialog, VTreeview, VNavigationDrawer, VSheet, VMenu } from 'vuetify/lib'

export default {
    components: {
        VContainer,
        VDialog,
        VTreeview,
        VNavigationDrawer,
        VSheet,
        VMenu,
        confirm
    },
    mixins: [BaseComponent, EasyNestedObject, DecoratableComponent],
    name: 'vf-group-treeview',
    props: {
        field: Object,
        id: String,
        value: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {
            menuX: 0,
            menuY: 0,
            menu: false,
            drawer: false,
            dialog: false,
            currentAction: null,
            currentActionItem: null,
            actionName: null,
            actionSlots: ['append', 'prepend'],
            pauseWatch: false
        }
    },
    computed: {
        drawerProps: function () {
            return {
                ...(this.field.drawerProps ? this.field.drawerProps : {}),
                ...(this.currentAction && this.currentAction.drawerProps
                    ? this.currentAction.drawerProps
                    : {})
            }
        },
        currentActionValue: {
            get () {
                return this.currentActionItem.value[this.actionName]
            },
            set (v) {
                this.currentActionItem.value[this.actionName] = v
            }
        },
        currentActionProps: function () {
            return { ...this.field.formProps, ...this.currentAction.formProps }
        }
    },
    methods: {
        onActionClicked: function (e, slot, action, key, item) {
            switch (action.type) {
            case 'drawer':
                if (!item.value) {
                    item.value = { [key]: {} }
                }
                if (!item.value[key]) {
                    item.value[key] = {}
                }
                this.currentActionItem = item
                this.currentAction = action
                this.actionName = key
                this.$nextTick(() => {
                    this.drawer = true
                })
                break
            case 'dialog':
                if (!item.value) {
                    item.value = { [key]: {} }
                }
                if (!item.value[key]) {
                    item.value[key] = {}
                }
                this.currentActionItem = item
                this.currentAction = action
                this.actionName = key
                this.$nextTick(() => {
                    this.dialog = true
                })
                break
            case 'menu':
                if (!item.value) {
                    item.value = { [key]: {} }
                }
                if (!item.value[key]) {
                    item.value[key] = {}
                }
                this.currentActionItem = item
                this.currentAction = action
                this.actionName = key
                this.menuX = e.clientX
                this.menuY = e.clientY
                this.$nextTick(() => {
                    this.menu = true
                })
                break
            case 'confirm':
                this.currentActionItem = item
                this.currentAction = action
                this.actionName = key
                this.$refs.confirm.open(
                    action.confirm ? action.confirm : 'Yes', action.message ? action.message : 'Are you sure?',
                    action.dialogProps ? action.dialogProps : { color: 'red' }
                ).then((confirm) => {
                    if (action.callback) { action.callback(confirm) }
                })
                break
            case 'button':
                if (action.click) {
                    action.click(e)
                } else if (action.props && action.props.click) {
                    action.props.click(e)
                }
                break
            }
        }
    },
    watch: {
        devalue: {
            deep: true,
            handler () {
                this.$emit('input', this.devalue)
            }
        }
    }
}
</script>
