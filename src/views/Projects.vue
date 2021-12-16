<template>
  <div id="projects" class="mx-5 my-5 h-screen">
    <!-- Heading -->
    <div class="flex justify-center">
      <span class="text-4xl">My projects</span>
    </div>
    <!-- Project Cards -->
    <div class="">
      Project cards
      <projectCards :title="name" />
    </div>
  </div>
</template>

<script>
import ProjectCards from "../components/cards/ProjectCards.vue";
export default {
  data() {
    return {
      
    };
  },
  components: {
    ProjectCards,
  },
};
</script>

<style lang="scss" scoped></style>
