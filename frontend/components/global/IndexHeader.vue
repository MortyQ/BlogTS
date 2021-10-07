<template>
  <v-img src="/header.jpeg" width="100%" height="calc(100vh - 70px)">
    <v-row cols="12">
      <v-col
        cols="7"
        offset-12
        style="width: 100%; height: 100%"
        class=" d-flex justify-center align-center mt-15"
      >
        <v-img src="/logo.png" height="50%" width="40%"> </v-img>
        <span class="text-h2"> Blogify </span>
      </v-col>
      <v-col cols="8" class="d-flex ml-15 flex-column ">
        <span class=" text-h3 text-xl-h1 text-lg-h1 text-md-h1 text-sm-h2 "
          >Create a blog and share your voice in minutes</span
        >
        <v-btn
          tile
          text
          color="red"
          max-width="300px"
          class="mt-10 pa-10"
          :ripple="false"
        >
          <span style="font-size: 1.3rem; color: blue">
            Start your blog
          </span>
        </v-btn>
      </v-col>
    </v-row>
  </v-img>
</template>
