<template>
  <v-card tile flat class="h-100">
    <v-row class="mb-10">
      <v-card-title class="ma-auto text-h4 pb-10">
        Sign Up to this Perfect Social
      </v-card-title>
      <v-col cols="10" class="ma-auto mb-0 pb-0"
        ><ValidationObserver ref="form" v-slot="{ valid: formValid }">
          <v-form lazy-validation @submit.prevent="onSubmit">
            <ValidationProvider v-slot="{ errors }" rules="required">
              <v-text-field
                v-model="register.username"
                :counter="20"
                required
                passive
                :error-messages="errors"
                label="Enter your name"
                type="required"
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" rules="required|email">
              <v-text-field
                v-model="register.email"
                required
                :error-messages="errors"
                label="Enter your mail"
                type="email"
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="password"
              rules="required|strongPassword"
            >
              <v-text-field
                v-model="register.password"
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
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|confirmed:password"
            >
              <v-text-field
                v-model="register.confirmPassword"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                required
                :type="showPassword ? 'text' : 'password'"
                :error-messages="errors"
                label="Repeat Password"
                hint="At least 8 characters"
                counter
                confirmed:password
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors, valid }"
              immediate
              :rules="{ acceptTerms: { continue: 'create your dashboard' } }"
            >
              <div>
                <v-checkbox
                  v-model="userChecked"
                  :success="valid"
                  hide-details
                  :error-messages="errors"
                  @keyup.enter="submit(formValid)"
                >
                  <template #label>
                    <span>
                      I agree to the
                      <a href="/" target="_blank" @click.stop>
                        <strong>Terms of User</strong></a
                      >
                    </span>
                  </template>
                </v-checkbox>
              </div>
            </ValidationProvider>
            <div class="d-flex align-center justify-center">
              <v-btn
                type="submit"
                :disabled="!formValid"
                class="rounded-pill radius mt-5"
                :loading="loading"
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
              >
                Sing Up
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
import { mapState } from 'vuex'
@Component({
  components: { ValidationObserver, ValidationProvider },
  computed: {
    ...mapState('login', ['isLogin'])
  }
})
export default class SignUp extends Vue {
  isLogin!: boolean
  loading: boolean = false
  register = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  showPassword: boolean = false
  userChecked: boolean = false
  public onSubmit() {
    this['$store'].dispatch('login/REGISTER', {
      username: this.register.username,
      email: this.register.email,
      password: this.register.password,
      role: 'Public',
      confirmed: true
    })
    this.loading = true
    setTimeout(() => {
      this['$store'].dispatch('login/ADD_PAGE', !this.isLogin)
    }, 3000)
  }
}
</script>
