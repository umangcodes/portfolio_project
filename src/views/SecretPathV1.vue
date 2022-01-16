<template>
  <div id="discover_secret">
    <div class="h-96 mt-40">
      <div class="flex flex-col items-center">
        <span class="text-4xl font-semibold text-center mx-5 my-5"
          >Discover more</span
        >
        <span class="font-thin text-center mx-5"
          >Congratulations on finding the secret path. <br />I appreciate your
          effort and welcome to the secret page.
        </span>
      </div>
    </div>
    <div class="my-5 flex justify-center">
      <span class="mx-5 my-5 text-center text-2xl italic"
        >Discover more about what I do apart from web development!</span
      >
    </div>
    <div
      class="flex flex-col font-bold justify-center items-center text-xl mx-5 my-5 h-screen border-4 bg-gray-400 text-gray-200"
    >
      Coming very soon!
    </div>
    <Specials />
  </div>
</template>

<script>
import Specials from "../components/secret/Specials.vue";
export default {
  components: {
    Specials,
  },
};
</script>

<style lang="scss" scoped></style>
