import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Login from '@/store/login'

export interface AppSuperstore {
  login: Login
}
export const strict = false
export let login!: Login

function initialiseStores(store: Store<AppSuperstore>): void {
  login = getModule(Login, store)
}

const initializer = (store: Store<AppSuperstore>) => initialiseStores(store)
export const plugins = [initializer]
