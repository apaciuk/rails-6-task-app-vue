import axios from 'axios';
const api_url = 'http://localhost:3000/api/v1/tasks';
const state = {
    tasks: []
};
const getters = {
    allTasks: (state) => state.tasks
};
  /*  Actions
      'fetchTasks', 
      'deleteTask', 
      'updateTask'
      */
const actions = {
  async fetchTasks({ commit }) {
      const response = await axios.get(api_url);
      commit('setTasks', response.data );
  },
  async deleteTask({ commit }, id) {
      await axios.delete(api_url + `/${id}`);
      commit('removeTask', id);
  },
  async updateTask({ commit }, updatedTask) {
      const response = await axios.put(api_url + `/${updatedTask.id}`);
      commit('setUpdatedTask', response.data);
  }
};
const mutations = {
    setTasks: (state, tasks) => (state.tasks = tasks),
    removeTask: (state, id) =>
    (state.tasks = state.tasks.filter(task => task.id !== id))
};
export default {
    state,
    getters,
    actions,
    mutations
}