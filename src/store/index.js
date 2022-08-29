import { createStore } from "vuex";

export default createStore({
  state: {
    users: null,
    user: null,
    post: null,
    posts: null,
  },
  getters: {},
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setPost: (state, post) => {
      state.post = post;
    },
    setPosts: (state, posts) => {
      state.posts = posts;
    },
  },
  actions: {
    // Get all posts
    getPosts: async (context) => {
      fetch("http://localhost:1738/posts")
        .then((response) => response.json())
        // .then((json) => context.commit("setPosts", json));
        .then((data) => context.commit("setPosts", data));
      // .then((data) => console.log(data));
      // .catch((err) => console.log(err.message));
    },
  },
  modules: {},
});
