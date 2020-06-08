//@todo: not done yet
<template>
    <v-overlay class="vf-group" :value="value">
      <v-sheet>
        <v-container>
          <v-card
            light
            :height="fullscreenCodeEditor ? fullscreenDim.height : '600'"
            :width="fullscreenCodeEditor ? fullscreenDim.width : '800'"
          >
            <v-system-bar dark color="primary">
              <v-btn v-for="mode in modes" :key="`${id}-switch-mode-${mode.id}`" class="right" icon small @click="currentMode = mode.id">
                <v-icon small>{{ currentMode === mode.id ? 'mdi-close':mode.icon }}</v-icon>
              </v-btn>
              {{ title }}
              <v-spacer></v-spacer>
              <v-btn class="right" icon small @click="toggleBlocklyFullscreen">
                <v-icon
                  small
                >{{ fullscreenCodeEditor ? 'mdi-window-restore':'mdi-window-maximize' }}</v-icon>
              </v-btn>
              <v-btn class="right" icon small @click="showCodeEditor = false">
                <v-icon small>mdi-close</v-icon>
              </v-btn>
            </v-system-bar>
            <v-card-text class="ma-0 pa-0 fill-height">
              <slot v-for="mode in modes" :name="mode"></slot>
            </v-card-text>
          </v-card>
        </v-container>
      </v-sheet>
    </v-overlay>
</template>

<script>
export default {
    name: 'formjson-builder-overlay',
    props: {
        id: String,
        value: Boolean,
        title: String,
        modes: {
            type: Array,
            default: () => ([])
        }
    },
    data () {
        return {
            currentMode: 0
        }
    },
    computed: {
        fullscreenDim () {
            return { width: window.innerWidth, height: window.innerHeight }
        }
    },
    methods: {
        toggleBlocklyFullscreen () {
            this.fullscreenCodeEditor = !this.fullscreenCodeEditor
            this.$nextTick(() => {
                this.$refs.blocklyEditor.refreshSize()
            })
        }
    }
}
</script>
