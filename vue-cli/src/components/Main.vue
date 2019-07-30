<template>
<div id="demo">
    <TopMunuBar/>
    <span></span>
    <MyMian/>
</div>
</template>
<script>
import TopMunuBar from "./TopMunuBar.vue";
import MyMian from "./MyMian.vue";
export default {
  name: "demo",
  components: {
    TopMunuBar,
    MyMian
  }
};
</script>

<style scoped>
#demo {
  position: relative;
  top: 78px;
}
</style>


