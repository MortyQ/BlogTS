<template>
  <v-container
    tile
    flat
    class="d-flex flex-column justify-center align-center mt-10"
  >
    <span style=" width: 80%" class="ml-5">
      <h1>Search All Authors</h1>
    </span>
    <v-card-text
      style="width:80%; gap: 50px; "
      class="d-flex align-center justify-center"
    >
      <v-text-field
        @input="trottledSave"
        label="Search Author"
        v-model="info"
      ></v-text-field>
      <v-btn @click="allAuthors()">
        All Authors
      </v-btn>
    </v-card-text>
    <v-row v-if="authors">
      <v-col
        v-for="item in authors"
        :key="item.id"
        cols="12"
        sm="6"
        class="mt-12 d-flex  flex-wrap "
        style="gap: 35px"
      >
        <AuthorCardSearch :user="item" />
      </v-col>
    </v-row>
  </v-container>
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

  public allAuthors() {
    this['$store'].dispatch('author/GET_ALL_AUTHORS')
  }

  get trottledSave() {
    let DELAY = 1000
    return trottle(this.searchUser, DELAY)
  }

  public async searchUser() {
    this['$store'].dispatch('author/GET_AUTHORS_BY_NAME', this.info)
  }
}
</script>
