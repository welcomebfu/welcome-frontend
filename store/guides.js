export const state = () => ({
  guides: []
})

export const mutations = {
  setGuides (state, guides) {
    state.guides = guides
  }
}

export const actions = {
  async fetch ({ commit }) {
    const res = await this.$strapi.$guides.find({ populate: '*' })
    commit('setGuides', res.data)
  }
}

export const getters = {
  isDataLoaded (state) {
    return state.guides.length !== 0
  },
  getAll (state) {
    return state.guides
  },
  getById (state) {
    return id => state.guides.find(guide => guide.id === id)
  }
}
