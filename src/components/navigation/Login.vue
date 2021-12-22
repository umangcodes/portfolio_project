<template>
  <div class="h-48">
    <div class="flex flex-col mx-5 my-5 items-center">
      <form
        @submit.prevent="login"
        class="flex flex-col mx-5 my-5 items-center"
      >
        <Label>Want to know more?</Label>
        <span class="text-center"
          >Enter a passcode and you will be allowed into the amazing world I
          live in!</span
        >
        <div class="mt-5">
          <input class="border-b mx-5" type="text" v-model="password" />
          <button
            :click="login"
            class="border rounded-full px-2 italic font-semibold hover:shadow-lg"
          >
            Go!
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
  },
};
</script>

<style scoped></style>
