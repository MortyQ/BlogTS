<template>
  <v-container tile flat v-if="loginUser" class="d-flex flex-column mt-10">
    <h1 class="ma-auto">Settings</h1>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in tabs" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-row cols="12" class="d-flex justify-center align-center">
      <v-tabs-items class="mt-8" v-model="tab" style="width: 80% !important">
        <v-tab-item v-for="item in 5" :key="item">
          <v-card flat v-if="item === 1">
            <v-row class="ma-auto" v-if="loginUser.posts">
              <v-col cols="12" md="6">
                <Posts
                  v-for="post in loginUser.posts"
                  :key="post.id"
                  :post="post"
                />
              </v-col>
            </v-row>
          </v-card>

          <v-card flat v-if="item === 2">
            <span
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              rerum, laborum, possimus facere exercitationem repellat
              dignissimos praesentium consequuntur quos molestias iusto et
              impedit ducimus sequi?
            </span>
          </v-card>
          <v-card flat v-if="item === 3">
            <v-card-text
              ><v-col
                cols="12"
                md="12"
                class="d-flex flex-column"
                style="gap: 50px border:3px solid red"
              >
                <div>
                  <v-img
                    v-if="loginUser.background"
                    height="250px"
                    width="100%"
                    :src="getStrapiMedia(loginUser.url)"
                    :lazy-src="getStrapiMedia(loginUser.url)"
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
                <div>
                  <v-img
                    v-if="loginUser.avatar"
                    style="border-radius: 50px; border: 3px solid white; position: absolute; top: 20%; left: 10%;"
                    height="100"
                    width="100"
                    :src="getStrapiMedia(loginUser.url)"
                    :lazy-src="getStrapiMedia(loginUser.url)"
                  >
                  </v-img>
                  <v-img
                    v-else
                    style="border-radius: 100px; border: 3px solid white; position: absolute; top: 10%; left: 10%;"
                    height="150"
                    width="150"
                    :src="urlAvatar"
                    lazy-src="https://picsum.photos/1600/920?random"
                  >
                  </v-img>
                  <div class="d-flex ">
                    <v-file-input
                      label="upload background"
                      v-model="background"
                      style="max-width: 250px"
                      show-size
                    />
                    <v-file-input
                      label="upload avatar"
                      v-model="avatar"
                      style="max-width: 250px"
                      show-size
                    />
                  </div>
                </div>

                <AuthorEditForm class="mt-10" /> </v-col
            ></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-row>
  </v-container>
  <Loader v-else />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mapState } from 'vuex'
import { ILoginUser } from '../../helpers/loginTypes'
import Loader from '../../components/global/Loader.vue'
import AuthorEditForm from '../../components/authors/AuthorEditForm.vue'
import Posts from '../../components/blog/PostCard.vue'

@Component({
  components: { Loader, AuthorEditForm, Posts },
  computed: { ...mapState('login', ['loginUser']) }
})
export default class EditAuthor extends Vue {
  loginUser!: ILoginUser

  public tab: null = null

  public tabs = ['All Posts', 'Edit Account', 'Change Password']

  public background = null
  public avatar = null

  get urlBg() {
    if (!this.background) return

    return URL.createObjectURL(this.background)
  }

  get urlAvatar() {
    if (!this.avatar) return

    return URL.createObjectURL(this.avatar)
  }
}
</script>
