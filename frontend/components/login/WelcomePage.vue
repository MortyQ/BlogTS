<template>
  <v-img style="max-height: 100vh" lazy-src="/left.jpeg" src="/left.jpeg">
    <v-row
      style="min-height: 100vh"
      class="d-flex flex-column justify-center align-center"
      cols="12"
    >
      <v-col cols="8" class="d-flex justify-center align-center">
        <span style="color: white" class="title">
          <span v-if="isLogin"> You have Account ? Come here </span>
          <span v-else> You dosnt have Account ? Come here </span>
        </span>
      </v-col>
      <v-col cols="12">
        <div class="d-flex justify-center align-center">
          <v-btn
            class="rounded-pill radius custom-button"
            style="
              background: white;
              box-shadow: none;
              color: black;
              border: 1px solid white;
              width: 280px;
              hight: 80px;
              padding: 31px;
              font-style: normal;
              font-weight: normal;
              font-size: 18px;
              line-height: 23px;
            "
            @click="changeModType"
          >
            <span v-if="isLogin"> Sign In </span>
            <span v-else> Sign Up </span>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-img>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { mapState } from 'vuex'

@Component({
  computed: {
    ...mapState('login', ['isLogin']),
  },
})
export default class Welcome extends Vue {
  isLogin!: boolean
  @Prop({ default: 'Page for Information' })
  title!: string
  @Prop({
    default:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquid quae porro illum, dolores minima?',
  })
  text!: string
  @Prop({ default: 'Sing In' })
  btnText!: string
  @Prop()
  public changeModType?: () => void
}
</script>
