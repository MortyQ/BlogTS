<template>
  <v-card>
    <div>
      <v-img
        v-if="post.image"
        height="250px"
        width="100%"
        :src="getStrapiMedia(post.image.url)"
        :lazy-src="getStrapiMedia(post.image.url)"
      >
      </v-img>
      <v-img
        v-else
        height="250px"
        width="100%"
        :src="urlBg"
        lazy-src="https://picsum.photos/1920/1080?random"
      >
      </v-img>
    </div>
    <v-card-title class="pt-5 pb-5 pl-5 pr-5">
      {{ post.title }}
    </v-card-title>
    <v-card-text class="pt-5 pb-5 pl-5 pr-5">
      {{ post.description }}
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { Post } from '../../helpers/authorTypes'
import { getStrapiMedia } from '../../utils/medias'

@Component({})
export default class PostCard extends Vue {
  @Prop({ default: null })
  post!: Post

  @Prop() process
  getStrapiMedia = getStrapiMedia
  image = ''
  imageUrl = ''

  mounted() {
    console.log(this.post)
  }
}
</script>
