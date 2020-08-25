<template>
  <div>
    <a @click="go">{{ data.text }}</a>
  </div>
</template>

<script>
import post from "../js/post";
export default {
  name: "Post",
  props: ["data"],
  methods: {
    go() {
      post({
        action: this.data.action,
        target: this.data.target,
        params: this.data.params,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
