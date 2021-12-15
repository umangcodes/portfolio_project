<template>
  <div id="discover_secret">
    <div class="h-96 mt-40">
      <div class="flex flex-col items-center">
        <span class="text-4xl font-semibold">Discover more about me here</span>
        <span class="font-thin"
          >Congratulations on finding the secret path. I appreciate your effort
          and welcome to the secret page.
        </span>
      </div>
    </div>
    <div class="my-5 flex justify-center">
      <span class=""
        >Discover more about what I do apart from web development</span
      >
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
