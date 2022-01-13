<template>
  <div
    class="flex flex-col lg:grid lg:grid-cols-2 px-5 py-10 lg:h-96 h-auto lg:border-t lg:border-b"
  >
    <div class="flex lg:col-start-2 items-center justify-center">
      <p class="lg:text-6xl text-5xl text-center">My Projects</p>
    </div>
    <div
      class="flex flex-col lg:col-start-1 lg:row-start-1 items-center justify-center text-xl mx-auto"
    >
      <p class="text-2xl text-center py-10">Checkout Few of my projects</p>

      <button
        class="border rounded-full hover:shadow-lg px-3 py-1 my-4"
        :onClick="goToProjects"
      >
        Visit Page
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToProjects() {
      this.$router.push("/projects");
      window.scroll(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped></style>
