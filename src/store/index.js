import { createStore } from "vuex";

export default createStore({
  state: {
    users: null,
    user: null,
    post: null,
    posts: null,
    jwt: null,
  },
  getters: {},
  mutations: {
    setJwt: (state, jwt) => {
      state.jwt = jwt;
    },
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
    // posts
    // Get all posts
    getPosts: async (context) => {
      fetch("http://localhost:1738/posts")
        .then((response) => response.json())
        .then((data) => context.commit("setPosts", data));
    },
  },
  // login
  login: async (context, payload) => {
    fetch(`http://localhost:1738/users/login`, {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await res.json();
    console.log(data);
    if (data.token) {
      context.commit("setToken", data.token);
      // Verify token
      fetch("http://localhost:1738/users/users/verify", {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": data.token,
        },
      })
        .then((res) => res.json())
        .then((user) => {
          context.commit("setUser", user);
          router.push("/");
        });
    } else {
      alert("User not found");
    }
  },
  modules: {},
});
