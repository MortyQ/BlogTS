<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="editAuthor">
      <ValidationProvider v-slot="{ errors }" rules="required">
        <v-text-field
          v-model="authorInfo.firstName"
          :counter="20"
          :error-messages="errors"
          label="First Name"
          passive
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" rules="required">
        <v-text-field
          v-model="authorInfo.lastName"
          :counter="20"
          :error-messages="errors"
          label="Last Name"
          passive
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" rules="required|email">
        <v-text-field
          v-model="authorInfo.email"
          passive
          :error-messages="errors"
          label="Enter your mail"
          type="email"
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }" rules="required">
        <v-text-field
          v-model="authorInfo.phoneNumber"
          :counter="20"
          :error-messages="errors"
          label="Phone Number"
          passive
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }">
        <v-text-field
          v-model="authorInfo.website"
          :error-messages="errors"
          label="Website"
          passive
        ></v-text-field>
      </ValidationProvider>
      <ValidationProvider v-slot="{ errors }">
        <v-text-field
          v-model="authorInfo.socialSite"
          :error-messages="errors"
          label="Social Site"
          passive
        ></v-text-field>
      </ValidationProvider>

      <v-btn class="mr-4" type="submit" :disabled="invalid">
        submit
      </v-btn>
    </form>
  </validation-observer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mapState } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { AuthorInfo } from '../../helpers/authorTypes'

@Component({
  components: { ValidationObserver, ValidationProvider },
  computed: { ...mapState('login', ['loginUser']) }
})
export default class AuthorForm extends Vue {
  loginUser!: AuthorInfo

  get authorInfo(): AuthorInfo {
    return {
      email: this.loginUser.email,
      firstName: this.loginUser.firstName,
      lastName: this.loginUser.lastName,
      description: this.loginUser.description,
      website: this.loginUser.website,
      socialSite: this.loginUser.socialSite,
      phoneNumber: this.loginUser.phoneNumber
    }
  }

  public editAuthor() {
    console.log(this.authorInfo)
  }
}
</script>
