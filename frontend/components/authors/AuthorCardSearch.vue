<template>
  <v-card
    class="ma-auto"
    height="100%"
    min-height="400"
    width="100%"
    max-width="500"
  >
    <v-row style="position: relative" class="d-flex flex-wrap">
      <v-col cols="12">
        <v-img
          v-if="user.background"
          height="250px"
          width="100%"
          :src="getStrapiMedia(user.background.url)"
          :lazy-src="getStrapiMedia(user.background.url)"
        >
        </v-img>
        <v-img
          v-else
          height="250px"
          width="100%"
          src="https://picsum.photos/1920/1080?random"
          lazy-src="https://picsum.photos/1920/1080?random"
        >
        </v-img>
      </v-col>
      <v-col cols="6" style="position: absolute; top: 55%; left: 10%;">
        <v-img
          v-if="user.avatar"
          style="border-radius: 50px; border: 3px solid white"
          height="100"
          width="100"
          :src="getStrapiMedia(user.avatar.url)"
          :lazy-src="getStrapiMedia(user.avatar.url)"
        >
        </v-img>
        <v-img
          v-else
          style="border-radius: 50px; border: 3px solid white"
          height="100"
          width="100"
          src="https://picsum.photos/1600/920?random"
          lazy-src="https://picsum.photos/1600/920?random"
        >
        </v-img>
      </v-col>
      <v-col
        cols="12"
        class="d-flex flex-column justify-center pa-5  align-center"
      >
        <span class="text-h6">
          <pre>
          {{ user.firstName }}  {{ user.lastName }}
            </pre
          >
        </span>
      </v-col>
    </v-row>
    <v-row cols="12" class="d-flex align-center justify-center">
      <v-col cols="12" class="d-flex flex-column pa-10">
        <span v-html="user.description"> </span>
      </v-col>

      <v-col cols="11" class="pa-5" style="border-top: 1px solid black">
        <v-row>
          <v-col cols="8">
            <span> <v-icon> mdi-email </v-icon> {{ user.email }} </span>
          </v-col>
          <v-col cols="4">
            <span> <v-icon> mdi-eye </v-icon> 25342 </span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
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
