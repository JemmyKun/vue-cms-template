import Vue from 'vue';
import Vuex from 'vuex';

import moduleA from './moduleA';
import moduleB from './moduleB';
import moduleC from './moduleC';
import login from './login';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        moduleA,
        moduleB,
        moduleC,
        login
    },
});