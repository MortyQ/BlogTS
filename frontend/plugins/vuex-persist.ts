import VuexPersistence from 'vuex-persist'

export default ({ store }: { store: any }) => {
  // @ts-ignore
  window.onNuxtReady(() => {
    new VuexPersistence({
      key: 'vuex'
    }).plugin(store)
  })
}
