<template>
  <div class="min-h-48">
    <div class="flex flex-col mx-5 my-5 items-center">
      <span class="mt-10">Wanna know more?</span>
      <form
        @submit.prevent="login"
        class="flex flex-col mx-5 my-5 items-center"
      >
        <div class="mt-5 flex flex-col lg:flex-row">
          <input
            class="mx-5 w-24"
            type="text"
            v-model="password"
            placeholder="Password"
          />
          <button
            :click="login"
            class="border rounded-full lg:mx-2 my-2 px-2 italic font-semibold hover:shadow-lg"
          >
            Sure!
          </button>
          <button
            :onClick="jumpToIntro"
            class="border rounded-full lg:mx-2 my-2 px-2 italic font-semibold hover:shadow-lg"
          >
            Next time!
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("addPasscode", this.password);
      console.log(this.password);
      this.$router.push("/secret_path");
    },
    jumpToIntro() {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped></style>
