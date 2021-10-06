<template>
  <v-card tile flat class="h-100">
    <v-row>
      <v-col cols="12"> <IndexHeader /> </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import IndexHeader from '../components/global/IndexHeader.vue'

@Component({
  components: {
    IndexHeader
  }
})
export default class Index extends Vue {}
</script>
