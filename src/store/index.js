import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
export default createStore({
  state: {
    users: null,
    user: null,
    post: null,
    posts: null,
    token: null,
    userPost:[],
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token;
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
    setuserPost: (state, userPost) => {
      state.userPost = userPost;
    },
    logout(state) {
      (state.user = ""), (state.token = ""), (state.users = "");
    },
  },
  actions: {
    // single post
    // getPost: async (context, id) => {
    //   fetch("https://nature-ly-api.herokuapp.com/posts/" + id)
    //     .then((response) => response.json())
    //     .then((data) => context.commit("setPost", data));
    // },
    // login
    login: async (context, payload) => {
      let res = await fetch(`https://nature-ly-api.herokuapp.com/users/login`, {
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
        fetch("https://nature-ly-api.herokuapp.com/users/users/verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token,
          },
        })
          .then((res) => res.json())
          .then((user) => {
            context.commit("setUser", user);
            console.log(user);
            context.dispatch("getPost", user);
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
    register: async (context, user) => {
      await fetch("https://nature-ly-api.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUsers", json));
    },

    // get single user
    getUser: async (context, id) => {
      fetch("https://nature-ly-api.herokuapp.com/users/" + id)
        .then((response) => response.json())
        .then((data) => context.commit("setUser", data));
    },
    // add new post
    addPost: async (context, payload) => {
      const { user_id, image_title, caption, image } = payload;
      fetch("https://nature-ly-api.herokuapp.com/posts", {
        method: "POST",
        body: JSON.stringify({
          user_id: user_id,
          image_title: image_title,
          caption: caption,
          image: image,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getPosts"));
    },
    //  edit user
    updateUser: async (context, user) => {
      const { user_name, img, bio, email } = user;
      fetch("https://nature-ly-api.herokuapp.com/users/" + id, {
        method: "PUT",
        body: JSON.stringify({
          user_name: user_name,
          img: img,
          bio: bio,
          email: email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => context.dispatch("getUsers"));
    },

    // delete user
    deleteUser: async (context, id) => {
      fetch("https://nature-ly-api.herokuapp.com/users" + id, {
        method: "DELETE",
      }).then(() => context.dispatch("getUsers"));
    },
    getUserpost: async (context, id) => {
      fetch("https://nature-ly-api.herokuapp.com/users/" + id + "/post")
        .then((response) => response.json())
        .then((data) => context.commit("setuserPost", data));
    },

    createpost: async (context, posts) => {
      // console.log(product);
      fetch("https://nature-ly-api.herokuapp.com/posts", {
        method: "POST",
        body: JSON.stringify(posts),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((posts) => {
          console.log(posts);
          context.dispatch("getPosts", posts);
        });
    },
    deletePost: async (context, post) => {
      fetch("https://nature-ly-api.herokuapp.com/posts" + post.id, {
        method: "DELETE",
      }).then(() => context.dispatch("getPost"));
    },
  },

  plugins: [createPersistedState()],
});
