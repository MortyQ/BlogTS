<template>
  <v-card tile flat>
    <v-card-title>
      <h1>Search</h1>
    </v-card-title>
    <v-card-text style="width:35%">
      <v-text-field
        @input="trottledSave"
        label="Search User"
        v-model="info"
      ></v-text-field>
    </v-card-text>
    <v-row>
      <v-col
        v-if="authors"
        cols="12"
        class="mt-12 d-flex  flex-wrap "
        style="gap: 35px"
      >
        <AuthorCardSearch v-for="item in authors" :key="item.id" :user="item" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import axios from '@nuxtjs/axios'
import { mapState } from 'vuex'
import AuthorCardSearch from '../components/authors/AuthorCardSearch.vue'
import trottle from '../helpers/trottle'
@Component({
  components: {
    AuthorCardSearch
  },
  computed: {
    ...mapState('author', ['authors'])
  }
})
export default class Search extends Vue {
  public info: string = ''

  get trottledSave() {
    let DELAY = 1000
    return trottle(this.searchUser, DELAY)
  }

  public async searchUser() {
    console.log('click')
    this['$store'].dispatch('author/GET_AUTHORS', this.info)
  }
}
</script>
