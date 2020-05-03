<template>
  <v-sheet
    :class="`vf-input overflow-hidden d-flex flex-column flex-grow-1 ${field.class ? field.class:''}`"
    style="position: relative;"
  >
    <v-menu :close-on-content-click="false" v-model="menu" :position-x="menuX" :position-y="menuY">
      <v-card>
        <vf-fields-renderer
          v-if="currentAction"
          :on-updated="currentAction.onUpdated"
          :fields="currentAction.fields"
          v-model="currentActionValue"
          v-bind="currentActionProps"
        ></vf-fields-renderer>
      </v-card>
    </v-menu>
    <label v-if="field.label">{{ field.label }}</label>
    <v-container class="fill-height align-start ma-0 pa-0">
      <v-treeview :items="devalue" v-bind="field.props">
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
              <label>{{ getLabel(item) }}</label>
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
import { EasyNestedObject } from './../mixins'

export default {
    mixins: [EasyNestedObject],
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
            currentAction: null,
            currentActionItem: null,
            actionName: null,
            actionSlots: ['append', 'prepend'],
            devalue: this.value,
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
        decorator: function () {
            return {
                id: this.field.decorator ? this.field.decorator.id : 'id',
                title: this.field.decorator ? this.field.decorator.title : 'title',
                label: this.field.decorator ? this.field.decorator.label : ':id#:title',
                ...this.field.decorator
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
            return { ...this.field.formProps, ...this.currentActionItem.formProps }
        }
    },
    methods: {
        onActionClicked: function (e, slot, action, key, item) {
            switch (action.type) {
            case 'formjson':
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
            case 'button':
                if (action.click) {
                    action.click(e)
                } else if (action.props && action.props.click) {
                    action.props.click(e)
                }
                break
            }
        },
        getLabel: function (item) {
            const decorator = this.decorator
            let label = decorator.label
            for (const prop in decorator) {
                label = label.replace(
                    ':' + prop,
                    this.getNestedPathValue(item, decorator[prop])
                )
            }
            return label
        }
    },
    watch: {
        value: function () {
            this.devalue = this.value
        },
        devalue: {
            deep: true,
            handler () {
                console.log('update', this.value)
                this.$emit('input', this.devalue)
            }
        }
    }
}
</script>
