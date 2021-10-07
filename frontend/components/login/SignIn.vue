<template>
  <v-card tile flat>
    <span v-if="loginStore.errorMessage" class="text-h4">
      FGughfas[dghaos[gh]]
    </span>
    <v-row
      cols="12"
      class="d-flex flex-column justify-center align-center mt-auto"
    >
      <v-col cols="10">
        <span class="text-h4">
          Sign Up to this Perfect Social
        </span>
      </v-col>
      <v-col cols="10">
        <ValidationObserver ref="form" v-slot="{ valid: formValid }">
          <v-form @submit.prevent="userLogin">
            <ValidationProvider v-slot="{ errors }" rules="required">
              <v-text-field
                v-model="login.identifier"
                required
                :error-messages="errors"
                label="Enter your User Name"
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="password"
              rules="required|strongPassword"
            >
              <v-text-field
                v-model="login.password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                required
                :type="showPassword ? 'text' : 'password'"
                :error-messages="errors"
                label="Password"
                hint="At least 8 characters"
                counter
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </ValidationProvider>
            <div class="d-flex justify-center align-center">
              <v-btn
                type="submit"
                :disabled="!formValid"
                class="rounded-pill radius ml-md-12 mr-xs-12 mt-5"
                style="
                  background: black;
                  box-shadow: none;
                  color: white;
                  border: 1px solid white;
                  width: 280px;
                  hight: 80px;
                  padding: 31px;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 18px;
                  line-height: 23px;
                "
                :loading="loading"
              >
                Sing In
              </v-btn>
            </div>
          </v-form>
        </ValidationObserver>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { ILogin } from '../../helpers/loginTypes'
import { mapState } from 'vuex'
import { login as loginStore } from '../../store'

@Component({
  components: { ValidationObserver, ValidationProvider },
  computed: {
    ...mapState('login', ['lastUserName'])
  }
})
export default class SignIn extends Vue {
  lastUserName!: string
  loginStore = loginStore

  get login(): ILogin {
    return {
      identifier: this.lastUserName,
      password: ''
    }
  }
  showPassword: boolean = false
  loading: boolean = false
  public async userLogin() {
    try {
      this['$store'].dispatch('login/LOGIN', this.login)
      this.loading = true
      setTimeout(() => {
        this['$router'].push('/')
      }, 3000)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
