<template>
  <v-row
    class="d-flex justify-center align-center"
    cols="12"
    style="height: 100%; margin: 0 !important; padding: 0 !important;"
  >
    <v-col
      cols="12"
      md="6"
      style="margin: 0 !important; padding: 0 !important; height: 100%"
    >
      <IWelcome :change-mod-type="change" />
    </v-col>
    <v-col cols="12" md="6" class="d-flex flex-column h-100 justify-center">
      <v-card tile flat class="mb-12 ma-auto d-flex">
        <v-img height="30%" width="30%" lazy-src="/logo.png" src="/logo.png">
        </v-img>
        <v-card-title class="text-h4"> Welcome in Blogify</v-card-title>
      </v-card>
      <ISignUp v-if="isLogin" />
      <ISignIn v-else />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ISignIn from '../components/login/SignIn.vue'
import ISignUp from '../components/login/SignUp.vue'
import IWelcome from '../components/login/WelcomePage.vue'
import { mapState } from 'vuex'

@Component({
  layout: 'login',
  components: {
    ISignIn,
    ISignUp,
    IWelcome
  },
  computed: {
    ...mapState('login', ['isLogin'])
  }
})
export default class Login extends Vue {
  isLogin!: boolean
  public change() {
    this['$store'].dispatch('login/ADD_PAGE', !this.isLogin)
  }
}
</script>
