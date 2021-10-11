import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Login from '@/store/login'
import Authors from './author'
import Post from './post'

export interface AppSuperstore {
  login: Login
  authors: Authors
  post: Post
}
export const strict = false
export let login!: Login
export let authors!: Authors
export let post!: Post

function initialiseStores(store: Store<AppSuperstore>): void {
  login = getModule(Login, store)
  authors = getModule(Authors, store)
  post = getModule(Post, store)
}

const initializer = (store: Store<AppSuperstore>) => initialiseStores(store)
export const plugins = [initializer]
