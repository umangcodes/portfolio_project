<template>
  <div class="h-48">
    <div class="flex flex-col mx-5 my-5 items-center">
      <form
        @submit.prevent="login"
        class="flex flex-col mx-5 my-5 items-center"
      >
        <Label>Want to know more?</Label>
        <input type="text" v-model="password" />
        <button></button>
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
