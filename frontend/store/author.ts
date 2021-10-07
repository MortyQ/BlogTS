import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { IAuthor } from '../helpers/authorTypes'
import axios from 'axios'

@Module({ name: 'authors', stateFactory: true, namespaced: true })
export default class Authors extends VuexModule {
  public authors: IAuthor[] | null = null

  @Mutation
  private _GET_AUTHORS_BY_NAME(authors: IAuthor[]) {
    this.authors = authors
  }
  @Action({ commit: '_GET_AUTHORS_BY_NAME' })
  public async GET_AUTHORS_BY_NAME(info: string) {
    try {
      console.log('ACTION')
      let res = await axios.get(
        `http://localhost:1337/users?firstName_contains=${info}`
      )
      console.log(res.data)
      return res.data
    } catch (e) {
      console.log(e)
    }
  }

  @Mutation
  private _GET_ALL_AUTHORS(authors: IAuthor[]) {
    this.authors = authors
  }
  @Action({ commit: '_GET_ALL_AUTHORS' })
  public async GET_ALL_AUTHORS(authors: IAuthor[]) {
    try {
      console.log('ACTION')
      let res = await axios.get(`http://localhost:1337/users`)
      console.log(res.data)
      return res.data
    } catch (e) {
      console.log(e)
    }
  }
}
