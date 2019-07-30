<template>
  <div id="app">
    <MyHeader/>
    <Main/>
    <MyBottom/>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import Main from "./components/Main.vue";
import MyBottom from "./components/MyBottom.vue";

export default {
  name: "app",
  components: {
    MyHeader,
    Main,
    MyBottom
  }
};
</script>




