import Post from "./components/Post.vue";
import post from "./js/post";
const vuePost = {
  install(Vue) {
    Vue.component(Post.name, Post);
    Vue.prototype.post = function (details) {
      post(details);
    };
  },
};

export default vuePost;
