export default {
    namespaced: true,
    state: () => ({
        contentTypes: null,
        app: null
    }),
    mutations: {
        ['SET_CONTENT_TYPE'](state, ct) {
            state.contentTypes = ct
        },
        ['SET_APP'](state, ct) {
            state.app = ct
        }
    },
    actions: {},
    getters: {}
}
