<template>
  <div class="about">
    <h1>This is an about page{{text}}</h1>
  </div>
</template>
<script>
export default {
  computed: {
    text() {
      return this.$route.params.id;
    }
  }
};
</script>


