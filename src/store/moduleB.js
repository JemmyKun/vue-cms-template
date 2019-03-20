const moduleB = {
    namespaced: true, //多出的一行
    state: {
        count: 0,
        list: []
    },
    getters: {
        count: (state) => state.count,
        list: (state) => state.list
    },
    mutations: {
        increment: (state) => state.count++,
        decrement: (state) => state.count--,
        getList: (state) => state.list.push({
            time: Date.now()
        })
    },
    actions: {
        increment: ({
            commit
        }) => commit('increment'),
        decrement: ({
            commit
        }) => commit('decrement'),
        getList: ({
            commit
        }) => commit('getList')
    }
}

export default moduleB;