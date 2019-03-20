const login = {
    namespaced: true,
    state: {
        userInfo: {},
        username: '',
        password: ''
    },
    getters: {
        username: (state) => state.username,
        password: (state) => state.password
    },
    mutations: {
        changeInputValue: (state, value) => {
            console.log('==>', value);
            state.username = value;
        }
    },
    actions: {
        changeInputValue: ({
            commit
        }, e) => {
            let value = e.target.value;
            console.log('value', value);
            commit('changeInputValue', value);
        }
    }
}

export default login;