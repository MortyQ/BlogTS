import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { IRegister, ILogin } from '~/helpers/loginTypes'
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
  }

  @Action({ commit: '_ADD_REGISTER' })
  public async REGISTER(register: IRegister) {
    try {
      console.log('REGISTER')

      const res = await axios.post(
        'http://localhost:1337/auth/local/register',
        register
      )
      //   this.lastUserName = register.username
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
  private _LOGIN(login: ILogin) {
    this.login = login
  }

  @Action({ commit: '_LOGIN' })
  public async LOGIN(login: ILogin) {
    try {
      const res = await axios.post('http://localhost:1337/auth/local/', login)
      localStorage.setItem('JWT', `Bearer ${res?.data?.jwt}`)
    } catch (e) {
      this.errorMessage = true
      console.log(e)
    }
  }
}
