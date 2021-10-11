<template>
  <v-card>
    <div>
      <v-img
        height="250px"
        width="100%"
        src="https://picsum.photos/1920/1080?random"
        lazy-src="https://picsum.photos/1920/1080?random"
      >
      </v-img>
    </div>
    <v-card-title class="pt-5 pb-5 pl-5 pr-5">
      {{ post.title }}
    </v-card-title>
    <v-card-text class="pt-5 pb-5 pl-5 pr-5" v-html="post.description">
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { IPost } from '../../helpers/authorTypes'
import { getStrapiMedia } from '../../utils/medias'

@Component({})
export default class PostCard extends Vue {
  @Prop({ default: null })
  post!: IPost

  @Prop() process
  getStrapiMedia = getStrapiMedia
  image = ''
  imageUrl = ''
}
</script>
