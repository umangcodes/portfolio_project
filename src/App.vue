<template>
  <div class="m-0">
    <Header />
    <div id="nav"></div>
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "./components/navigation/Header.vue";
import Footer from "./components/navigation/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
