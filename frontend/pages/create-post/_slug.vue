<template>
  <v-container v-if="loginUser" class="mt-10">
    <v-row cols="12" class="d-flex justify-center align-center">
      <v-col cols="12" md="8">
        <v-card tile flat>
          <div>
            <v-img
              v-if="loginUser.image"
              height="250"
              width="100%"
              :src="getStrapiMedia(loginUser.image.url)"
              :lazy-src="getStrapiMedia(loginUser.image.url)"
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

            <div class="d-flex ">
              <v-file-input
                label="upload background"
                v-model="image"
                style="max-width: 250px"
                show-size
              />
            </div>
          </div>
        </v-card>

        <validation-observer ref="observer" v-slot="{ invalid }">
          <form @submit.prevent="createPost">
            <ValidationProvider v-slot="{ errors }">
              <v-text-field
                :error-messages="errors"
                v-model="title"
                :label="`Title `"
                passive
              ></v-text-field>
            </ValidationProvider>
            <v-row cols="12">
              <v-col cols="4"
                ><ValidationProvider v-slot="{ errors }">
                  <v-text-field
                    :error-messages="errors"
                    :label="`Social Site  `"
                    v-model="socialSite"
                    passive
                  ></v-text-field> </ValidationProvider
              ></v-col>
              <v-col cols="4"
                ><ValidationProvider v-slot="{ errors }">
                  <v-text-field
                    :error-messages="errors"
                    :label="`Web Site  `"
                    v-model="webSite"
                    passive
                  ></v-text-field> </ValidationProvider
              ></v-col>
              <v-col cols="4"
                ><ValidationProvider v-slot="{ errors }">
                  <v-text-field
                    :error-messages="errors"
                    :label="`Author Nickname  `"
                    v-model="profile"
                    passive
                  ></v-text-field> </ValidationProvider
              ></v-col>
            </v-row>
            <tiptap-vuetify
              :value="description"
              v-model="description"
              :extensions="extensions"
              @input="$emit('input', arguments[0])"
            />

            <v-btn
              class="mr-4"
              width="200px"
              text
              type="submit"
              :disabled="invalid"
              :loading="loading"
            >
              Update Information
            </v-btn>
          </form>
        </validation-observer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mapState } from 'vuex'
import {
  localeChanged,
  ValidationObserver,
  ValidationProvider
} from 'vee-validate'
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History
} from 'tiptap-vuetify'
import { ILoginUser } from '../../helpers/loginTypes'
import Loader from '../../components/global/Loader.vue'
import { IPost } from '../../helpers/authorTypes'

@Component({
  components: { Loader, TiptapVuetify },
  computed: { ...mapState('login', ['loginUser']) }
})
export default class CreatePost extends Vue {
  loading: boolean = false
  loginUser!: ILoginUser
  title: string = ''
  image: File | null = null
  socialSite: string = ''
  webSite: string = ''
  profile: string = ''
  description: string = ''

  get urlBg(): string | null {
    if (!this.image) return null
    console.log(this.image)

    return URL.createObjectURL(this.image)
  }

  public extensions = [
    History,
    Blockquote,
    Link,
    Underline,
    Strike,
    Italic,
    ListItem,
    BulletList,
    OrderedList,
    [
      Heading,
      {
        options: {
          levels: [1, 2, 3]
        }
      }
    ],
    Bold,
    Link,
    Code,
    HorizontalRule,
    Paragraph,
    HardBreak
  ]

  public createPost() {
    this.loading = true
    let ja = new FormData()
    let data = {
      title: this.title,
      description: this.description,
      // image: this.image,
      socialSite: this.socialSite,
      webSite: this.webSite,
      profile: this.profile,
      user: this.loginUser.id
    }
    if (this.image) {
      ja.append('files.image', this.image)
    }
    ja.append('data', JSON.stringify(data))

    this['$store'].dispatch('login/CREATE_POST', ja)

    this.title = ''
    this.description = ''
    this.socialSite = ''
    this.webSite = ''
    this.profile = ''
  }
}
</script>
