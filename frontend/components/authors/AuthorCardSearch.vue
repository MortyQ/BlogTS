<template>
  <v-card
    class="ma-auto pa-5"
    height="100%"
    max-height="800"
    width="100%"
    max-width="500"
  >
    <v-row>
      <v-col cols="12">
        <v-img
          height="100%"
          width="100%"
          :src="getStrapiMedia(user.avatar.url)"
        >
        </v-img>
      </v-col>
      <v-col cols="12">
        <span
          class="d-flex flex-row justify-center align-center"
          style="text-align: center"
        >
          <pre>First Name:  {{ user.firstName }}</pre>
        </span>
        <span
          class="d-flex flex-row justify-center align-center"
          style="text-align: center"
        >
          <pre>Last Name:  {{ user.lastName }}</pre>
        </span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        {{ user.description }}
      </v-col>
    </v-row>
    <v-card-title> </v-card-title>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import axios from '@nuxtjs/axios'
import { mapState } from 'vuex'
import { IAuthor } from '../../helpers/authorTypes'
import { getStrapiMedia } from '../../utils/medias'
@Component({})
export default class AuthorCard extends Vue {
  @Prop() process
  getStrapiMedia = getStrapiMedia
  image = ''
  imageUrl = ''

  @Prop()
  user!: IAuthor
}
</script>
