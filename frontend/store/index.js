import { createStore } from 'vuex'
import tasks from '@/store/modules/tasks'


export default createStore({
    modules: {
        tasks
    }
});