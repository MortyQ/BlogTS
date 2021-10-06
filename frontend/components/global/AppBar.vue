<template>
  <v-app-bar absolute color="#fff" height="80px">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-app-bar-title>Title</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn text link to="/search-authors">
      <span>Search all authors</span>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn text>
      <span>
        Customazing your account
      </span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon link to="/login">
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Default extends Vue {}
</script>
