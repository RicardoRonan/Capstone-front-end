import { createStore } from "vuex";

export default createStore({
  state: {
    users: null,
    user: null,
    post: null,
    posts: null,
    jwt: null,
  },
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
    // single post
    getPost: async (context, id) => {
      fetch("https://nature-ly-api.herokuapp.com/posts/" + id)
        .then((response) => response.json())
        .then((data) => context.commit("setPost", data));
    },
    // login
    login: async (context, payload) => {
      fetch(`https://nature-ly-api.herokuapp.com/users/login`, {
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
      if (data.jwt) {
        context.commit("setToken", data.jwt);
        // Verify token
        fetch("https://nature-ly-api.herokuapp.com/users/users/verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.jwt,
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

    // posts
    // Get all posts
    getPosts: async (context) => {
      fetch("https://nature-ly-api.herokuapp.com/posts")
        .then((response) => response.json())
        .then((data) => context.commit("setPosts", data));
    },
  },
});
