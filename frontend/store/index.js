import Vue from 'vue'
import Vuex from 'vuex'
import tasks from '@/store/modules/tasks'
Vue.use(Vuex)


export const state = () => ({
    modules: {
        tasks
    }
});
  



