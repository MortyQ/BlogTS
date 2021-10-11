import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Login from '@/store/login'
import Authors from './author'

export interface AppSuperstore {
  login: Login
  authors: Authors
}
export const strict = false
export let login!: Login
export let authors!: Authors

function initialiseStores(store: Store<AppSuperstore>): void {
  login = getModule(Login, store)
  authors = getModule(Authors, store)
}

const initializer = (store: Store<AppSuperstore>) => initialiseStores(store)
export const plugins = [initializer]
