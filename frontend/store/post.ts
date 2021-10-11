import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

import axios from 'axios'

@Module({ name: 'authors', stateFactory: true, namespaced: true })
export default class Post extends VuexModule {}
