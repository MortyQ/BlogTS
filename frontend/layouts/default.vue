<template>
  <v-app style="max-height: 100vh; height:100%">
    <v-card tile flat class="overflow-visible">
      <IAppBar />

      <v-main
        class="mt-16"
        style="max-height: calc(100vh - 100px); height: 100%;"
      >
        <nuxt />
      </v-main>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import IAppBar from '../components/global/AppBar.vue'

@Component({
  components: {
    IAppBar
  }
})
export default class Default extends Vue {}
</script>
