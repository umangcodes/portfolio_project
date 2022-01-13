<template>
  <div
    class="flex flex-col lg:grid lg:grid-cols-2 px-5 py-10 lg:h-96 h-auto border-t border-b"
  >
    <div
      class="flex flex-col lg:col-start-1 items-center justify-center text-xl"
    >
      Checkout Few of my projects
      <button
        class="border rounded-full hover:shadow-lg px-3 py-1 my-4"
        :onClick="goToProjects"
      >
        Visit Page
      </button>
    </div>
    <div class="flex lg:col-start-2 items-center justify-center text-6xl">
      My Projects
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
