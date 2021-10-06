import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { IAuthor } from '../helpers/authorTypes'
import axios from 'axios'

@Module({ name: 'authors', stateFactory: true, namespaced: true })
export default class Authors extends VuexModule {
  public authors: IAuthor[] | null = null
  public author: IAuthor | null = null

  @Mutation
  private _GET_AUTHORS(authors: IAuthor[]) {
    this.authors = authors
  }
  @Action({ commit: '_GET_AUTHORS' })
  public async GET_AUTHORS(info: string) {
    try {
      console.log('ACTION')
      let res = await axios.get(
        `http://localhost:1337/authors?firstName_contains=${info}`
      )
      console.log(res.data)
      return res.data
    } catch (e) {
      console.log(e)
    }
  }
}
