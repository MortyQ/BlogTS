<template>
  <v-app>
    <v-card tile flat class="overflow-visible">
      <IAppBar />
      <v-sheet>
        <v-main class="mt-15">
          <nuxt />
        </v-main>
      </v-sheet>
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
