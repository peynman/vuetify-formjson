<template>
    <v-text-field
    v-model="devalue"
    :class="`vf-input ${field.class ? field.class:''}`"
    :label="field.label"
    hide-details="auto"
    mask="####"
    v-bind="fieldProps"
    v-on="eventHandlers"
  >
    <template v-slot:prepend-inner>
      <v-menu
        top
        fixed
        nudge-top="-30"
        v-model="menu"
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ on }">
            <v-btn icon small v-on="on"><v-icon small>mdi-calendar-blank-multiple</v-icon></v-btn>
        </template>
        <v-card class="d-flex flex-column">
            <v-card-title class="pa-1">
                <v-autocomplete class="me-1" style="width: 60%" v-model="tz" dark background-color="primary" :hide-details="true" dense solo :items="timezones" placeholder="Timezone" v-bind="field.timezoneProps" v-on="field.timezoneProps && field.timezoneProps['v-on'] ? field.timezoneProps['v-on']: {}"></v-autocomplete>
                <v-select style="width: 30%" v-model="calendar" dark background-color="primary" :hide-details="true" dense solo :items="calendars" placeholder="Calendar" v-bind="calendarProps" v-on="field.calendarProps && field.calendarProps['v-on'] ? field.calendarProps['v-on']: {}"></v-select>
            </v-card-title>
            <v-card-text class="pa-1 d-flex flex-row">
                <v-date-picker class="me-1" tiled landscape v-model="date" v-bind="dateProps" v-on="field.dateProps && field.dateProps['v-on'] ? field.dateProps['v-on']: {}">
                </v-date-picker>
                <v-time-picker tiled v-show="!field.hideTime" width="200" v-model="time" v-bind="timeProps" v-on="field.timeProps && field.timeProps['v-on'] ? field.timeProps['v-on']: {}"></v-time-picker>
            </v-card-text>
        </v-card>
      </v-menu>
    </template>
  </v-text-field>
</template>

<script>
import BaseComponent from './mixins'
import moment from 'moment'
import 'moment-timezone'
import { VTextField, VCard, VCardText, VMenu, VTimePicker, VDatePicker, VCardTitle } from 'vuetify/lib'

export default {
    components: {
        VTextField, VCard, VCardText, VMenu, VTimePicker, VDatePicker, VCardTitle
    },
    mixins: [BaseComponent],
    name: 'vf-datetime-input',
    props: {
        id: String,
        value: Object,
        field: Object
    },
    computed: {
        timezones () {
            return moment.tz.names()
        },
        calendars () {
            return ['Gregorian', 'Shamsi', 'Ghamari']
        },
        calendarProps () {
            return {}
        },
        timeProps () {
            return {}
        },
        dateProps () {
            return {}
        }
    },
    data () {
        return {
            menu: false,
            date: null,
            time: null,
            calendar: 'Gregorian',
            tz: moment.tz.guess()
        }
    },
    methods: {
        updateDateTime () {
            console.log(this.date, this.time, this.tz)
        }
    },
    watch: {
        date () {
            this.updateDateTime()
        },
        time () {
            this.updateDateTime()
        },
        tz () {
            this.updateDateTime()
        }
    }
}
</script>
