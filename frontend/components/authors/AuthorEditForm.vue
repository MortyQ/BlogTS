<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="editAuthor">
      <ValidationProvider v-slot="{ errors }" rules="required">
        <v-text-field
          v-model="authorInfo.firstName"
          :counter="20"
          :error-messages="errors"
          :label="`First Name`"
          passive
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" rules="required">
        <v-text-field
          v-model="authorInfo.lastName"
          :counter="20"
          :error-messages="errors"
          :label="`Last Name`"
          passive
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" rules="email">
        <v-text-field
          v-model="authorInfo.email"
          passive
          :error-messages="errors"
          disabled
          :label="`Enter your mail `"
          type="email"
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" rules="">
        <v-text-field
          v-model="authorInfo.phoneNumber"
          :counter="20"
          :error-messages="errors"
          :label="`Phone Number `"
          passive
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }">
        <v-text-field
          v-model="authorInfo.webSite"
          :error-messages="errors"
          :label="`Website `"
          passive
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }">
        <v-text-field
          v-model="authorInfo.socialSite"
          :error-messages="errors"
          :label="`Social Site  `"
          passive
        ></v-text-field>
      </ValidationProvider>

      <v-textarea
        label="Description"
        v-model="authorInfo.description"
        hint="Hint text"
      ></v-textarea>

      <v-btn class="mr-4" text type="submit" :disabled="invalid">
        Update Information
      </v-btn>
    </form>
  </validation-observer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mapState } from 'vuex'
import {
  localeChanged,
  ValidationObserver,
  ValidationProvider
} from 'vee-validate'
import { AuthorInfo } from '../../helpers/authorTypes'

@Component({
  components: { ValidationObserver, ValidationProvider },
  computed: { ...mapState('login', ['loginUser']) }
})
export default class AuthorForm extends Vue {
  loginUser!: AuthorInfo

  get authorInfo(): AuthorInfo {
    return JSON.parse(
      JSON.stringify({
        id: this.loginUser.id,
        email: this.loginUser.email,
        firstName: this.loginUser.firstName,
        lastName: this.loginUser.lastName,
        webSite: this.loginUser.webSite,
        socialSite: this.loginUser.socialSite,
        phoneNumber: this.loginUser.phoneNumber,
        description: this.loginUser.description
      })
    )
  }

  public editAuthor() {
    console.log(this.loginUser)

    this['$store'].dispatch('login/EDIT_AUTHOR', {
      firstName: this.authorInfo.firstName,
      lastName: this.authorInfo.lastName,
      webSite: this.authorInfo.webSite,
      socialSite: this.authorInfo.socialSite,
      phoneNumber: this.loginUser.phoneNumber,
      id: this.authorInfo.id,
      description: this.authorInfo.description
    })
  }
}
</script>
