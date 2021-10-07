<template>
  <v-app style="max-height: 100vh; height:100%">
    <v-card tile flat class="overflow-visible">
      <v-app-bar fixed elevation="0" color="#fff" height="80px">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-btn text to="/" color="red">
          <span style="color:black">
            Blogify
          </span>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn text to="/search-authors" color="red">
          <span style="color:black">Search all authors</span>
          <v-icon class="ml-2">mdi-magnify</v-icon>
        </v-btn>

        <v-menu transition="slide-x-transition" bottom right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" text color="red">
              <span style="color:black">
                Customazing your account
              </span>
              <v-icon class="ml-2">mdi-heart</v-icon>
            </v-btn>
          </template>

          <v-list v-if="loginUser" class="pa-5">
            <v-list-item>
              <v-list-item-title>{{ loginUser.username }}</v-list-item-title>
              <v-list-item-title>
                <pre>
Status: <v-icon color=green>mdi-circle</v-icon> </pre>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-btn text @click="editAuthor()">
                Edit Author Information
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn :loading="loading" text @click="logout()">
                Logout
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main
        class="mt-16"
        style="max-height: calc(100vh - 100px); height: 100%;"
      >
        <nuxt />
      </v-main>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mapState } from 'vuex'

import { ILoginUser } from '../helpers/loginTypes'

@Component({
  components: {},
  computed: {
    ...mapState('login', ['loginUser'])
  }
})
export default class Default extends Vue {
  loginUser!: ILoginUser

  loading: boolean = false

  public editAuthor() {
    this['$router'].push(`/create-author/${this.loginUser.slug}`)
  }

  public logout() {
    this.loading = true
    setTimeout(() => {
      this['$store'].dispatch('login/LOGOUT')
      this['$router'].push('/login')
    }, 1000)
  }

  mounted() {}
}
</script>
