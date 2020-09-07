import Vue from 'vue'
import Vuex from 'vuex'
import { apolloClient } from "@/vue-apollo";

import gql from 'graphql-tag';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    projects: []
  },
  mutations: {
    SET_PROJECTS(state, projects) {
      state.projects = projects
    },
    SET_LOADING(state, loading) {
      state.loading = loading
    }
  },
  getters: {
    projects: state => state.projects,
    loading: state => state.loading,
  },
  actions: {
    async fetchProjects({ commit }) {
      commit('SET_LOADING', true)
      const response = await apolloClient.query({
        query: gql`
        query {
          projects{
            _id,
            name,
            description,
            date
          }
        }
      `,
      });
      commit('SET_PROJECTS', response.data.projects);
      commit('SET_LOADING', false);
    },
  },
  modules: {
  }
})
