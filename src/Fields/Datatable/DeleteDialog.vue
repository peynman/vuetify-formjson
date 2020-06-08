<template>
  <v-dialog v-model="showDelete" max-width="400px">
    <template v-slot:activator="{ on }">
      <v-btn :color="showDelete ? 'warning':'red'" icon x-small text v-on="on">
        <v-icon small>{{ showDelete ? 'close': field.remove.icon ? field.remove.icon:'indeterminate_check_box' }}</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title
        class="headline"
      >{{ field.remove.title ? field.remove.title:'You sure' }}</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          text
          color="primary"
          @click="($event) => {$emit('cancel', $event); showDelete = false;}"
        >{{ field.remove.cancel ? field.remove.cancel:'Cancel'}}</v-btn>
        <v-btn
          text
          color="red"
          @click="($event) => {$emit('accept', $event); showDelete = false;}"
        >{{ field.remove.cancel ? field.remove.accept:'Yes'}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { VDialog, VBtn, VIcon, VCard, VCardTitle, VCardActions } from 'vuetify/lib'
export default {
    components: {
        VDialog, VBtn, VIcon, VCard, VCardActions, VCardTitle
    },
    name: 'vf-datatable-dialog-delete',
    props: {
        showDelete: Boolean,
        field: Object,
        selected: Array
    }
}
</script>
