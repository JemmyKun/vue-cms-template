const moduleA = {
    namespaced: true, //多出的一行
    state: {
        count: 0,
    },
    getters: {
        count: (state) => state.count
    },
    mutations: {
        increment: (state) => state.count++,
        decrement: (state) => state.count--
    },
    actions: {
        increment: ({
            commit
        }) => commit('increment'),
        decrement: ({
            commit
        }) => commit('decrement')
    }
}

export default moduleA;