<template>
  <div
    class="flex flex-col lg:grid lg:grid-cols-2 mx-5 h-screen border-t border-b"
  >
    <div class="flex lg:col-start-1 lg:row-start-1 justify-center items-center">
      <p class="text-6xl text-center">Developer's Corner</p>
    </div>
    <div
      class="flex flex-col justify-center lg:col-start-2 lg:row-start-1 lg:px-16 items-center lg:w-auto mx-auto"
    >
      <div class="flex flex-col mx-auto">
        <p class="text-2xl text-center py-10">
          Looking for resources to learn Web Dev?
        </p>
        <div class="text-xl font-thin flex justify-center">
          <button
            class="rounded-full border px-3 py-1 hover:shadow-lg"
            :onClick="sendToDc"
          >
            Visit DC
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sendToDc() {
      this.$router.push("/dc");
      window.scroll(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped></style>
