<template>
  <div class="m-0">
    <Header v-if="this.$route.path != '/card'" />
    <router-view />
    <Footer v-if="this.$route.path != '/card'" />
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
