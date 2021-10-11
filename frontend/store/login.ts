import {
  VuexModule,
  Module,
  Mutation,
  Action,
  MutationAction
} from 'vuex-module-decorators'
import { IPost } from '../helpers/authorTypes'
import {
  IRegister,
  ILogin,
  ILoginUser,
  IAuthResponce
} from '~/helpers/loginTypes'
import { AuthorInfo } from '../helpers/authorTypes'
import * as Context from '@nuxt/types'
import axios from 'axios'
import { AppSuperstore } from './index'

@Module({ name: 'login', stateFactory: true, namespaced: true })
export default class Login extends VuexModule {
  public isLogin: boolean = true
  public login: ILogin | null = null
  public register: IRegister | null = null
  public lastUserName: string | null = ''
  public errorMessage: boolean = false
  public jwt: string | null = ''
  public loginUser: ILoginUser | null | AuthorInfo = null
  public post: IPost | null = null

  function({ $axios, app, store }) {
    $axios.onRequest((config: any) => {
      if (store.state.authToken) {
        config.headers.common['Authorization'] = this.jwt
      }
    })
  }

  @Mutation
  private _ADD_REGISTER(register: IRegister) {
    this.register = register
    this.lastUserName = register.username
  }

  @Action({ commit: '_ADD_REGISTER' })
  public async REGISTER(register: IRegister) {
    try {
      console.log('REGISTER')

      const res = await axios.post(
        'http://localhost:1337/auth/local/register',
        register
      )
      return register
    } catch (e) {
      console.log(e)
    }
  }

  @Mutation
  private _CHANGE_PAGE(isLogin: boolean) {
    this.isLogin = isLogin
  }

  @Action({ commit: '_CHANGE_PAGE' })
  public ADD_PAGE(isLogin: boolean): boolean {
    return isLogin
  }

  @Mutation
  private _LOGIN(loginUser: IAuthResponce) {
    this.loginUser = loginUser.user
    this.jwt = loginUser.jwt
  }

  @Action({ commit: '_LOGIN' })
  public async LOGIN(login: ILogin) {
    try {
      const res = await axios.post('http://localhost:1337/auth/local/', login)
      localStorage.setItem('jwt', `Bearer ${res?.data?.jwt}`)

      return res.data
    } catch (e) {
      this.errorMessage = true
      console.log(e)
    }
  }

  @MutationAction({ mutate: ['loginUser', 'jwt'] })
  public async LOGOUT() {
    localStorage.removeItem('jwt')
    return {
      loginUser: null,
      jwt: null
    }
  }

  @Mutation
  private _EDIT_AUTHOR(loginUser: AuthorInfo) {
    this.loginUser = loginUser
  }
  @Action({ commit: '_EDIT_AUTHOR' })
  public async EDIT_AUTHOR(loginUser: AuthorInfo) {
    try {
      let { data } = await axios.put(
        `http://localhost:1337/users/${loginUser.id}`,
        loginUser
      )
      console.log(loginUser)
      console.log(data)

      return data
    } catch (e) {
      console.log(e)
    }
  }
  @Mutation
  private _CREATE_POST(post: IPost) {
    this.post = post
  }

  @Action({ commit: '_CREATE_POST' })
  public async CREATE_POST(post: IPost) {
    try {
      let res = await axios.post('http://localhost:1337/posts', post)
      return res.data
    } catch (e) {
      console.log(e)
    }
  }

  @Mutation
  private _GET_USER_INFO(loginUser: ILoginUser) {
    this.loginUser = loginUser
  }

  @Action({ commit: '_GET_USER_INFO' })
  public async GET_USER_INFO() {
    try {
      let res = await axios.get(
        `http://localhost:1337/users/${this.loginUser.id}`
      )

      return res.data
    } catch (e) {}
  }
}
