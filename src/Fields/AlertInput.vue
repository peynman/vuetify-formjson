<template>
    <v-alert :class="`vf-input ${field.class ? field.class : ''}`" v-bind="fieldProps">
        <v-label>{{ field.label }}</v-label>
        {{ field.message }}
        <v-list dense v-if="field.validations">
            <v-list-group v-for="(valMsgs, valKey) in field.validations" :key="`${id}-validations-${valKey}`">
                <template v-slot:activator>
                    <v-list-item-content><v-list-item-title :class="`${validationType}--text`" v-text="valKey"></v-list-item-title></v-list-item-content>
                </template>
                <v-list-item v-for="(msg, index) in valMsgs" :key="`${id}-validations-${valKey}-${index}`">
                    <v-list-item-content>
                        <v-list-item-title :class="`${validationType}--text`" v-text="msg"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-alert>
</template>

<script>
import BaseComponent from './mixins'
import { VAlert, VList, VListGroup, VListItem, VLabel, VListItemContent, VListItemTitle } from 'vuetify/lib'
export default {
    components: {
        VAlert, VList, VListGroup, VListItem, VListItemContent, VListItemTitle, VLabel
    },
    mixins: [BaseComponent],
    name: 'vf-alert-input',
    props: {
        field: Object,
        id: String,
        value: Object
    },
    computed: {
        validationType () {
            return this.validation.exception === 'Larapress\\Core\\Exceptions\\ValidationException' ? 'warning' : 'red'
        }
    }
}
</script>
