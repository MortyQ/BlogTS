import {
  VuexModule,
  Module,
  Mutation,
  Action,
  MutationAction
} from 'vuex-module-decorators'
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
}
