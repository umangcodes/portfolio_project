<template>
  <div
    id="Footer"
    class="relative bottom-0 border-t h-auto w-auto"
    style="
      background-image: url('https://wallpaperaccess.com/full/1947484.jpg');
    "
  >
    <div class="grid grid-cols-6"></div>
    <div class="flex flex-col items-center justify-center mt-5 mx-5 h-40">
      <div class="flex items-center justify-center">
        <a href="https://www.linkedin.com/in/umanga-eng/" class="px-5">
          <LinkedinIconWhite />
        </a>
        |
        <a href="https://github.com/umangcodes" class="px-5 pt-2">
          <GithubIconWhite />
        </a>
      </div>
      <span class="text-xl text-white font-medium pt-5"
        >umanga.eng@gmail.com</span
      >
      <span class="font-thin text-white text-center text-lg"
        >Would love to hear from you whether its regarding a project, job
        opportunity or just a chat! feel free to contact me.
      </span>
    </div>
    <div class="flex justify-evenly">
      <!-- <button
        class="text-white text-xl hover:font-semibold"
        :onClick="homeClicked"
      >
        Home
      </button>
      <button
        class="text-white text-xl hover:font-bold"
        :onClick="aboutClicked"
      >
        About
      </button> -->
    </div>
    <div class="flex items-center justify-center my-2">
      <span class="text-lg font-extralight font-sans italic text-white"
        >A project by Umang Agrawal</span
      >
    </div>
  </div>
</template>

<script>
import LinkedinIconWhite from "../icons/Linkedin-icon-white.vue";
import GithubIconWhite from "../icons/Github-icon-white.vue";
export default {
  components: {
    LinkedinIconWhite,
    GithubIconWhite,
  },
  methods: {
    homeClicked() {
      this.$router.push("/");
      window.scroll(0, 0);
    },
    aboutClicked() {
      this.$router.push("/about");
      window.scroll(0, 0);
    },
  },
};
</script>

<style scoped></style>
