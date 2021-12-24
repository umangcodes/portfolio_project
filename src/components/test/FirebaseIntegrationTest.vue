<template>
  <div class="h-screen">
    <form @submit.prevent="submitform">
      <div class="flex flex-col items-center">
        <span>Name:</span>
        <input type="text" v-model="name" />
      </div>
      <div class="flex flex-col items-center">
        <span>Email:</span>
        <input type="text" v-model="email" />
      </div>
      <button :click="submitForm" class="rounded-full border px-3 py-2">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import db from "../../firebaseInit";
import firebase from "firebase/app";
export default {
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    async submitform() {
      //   await createUser({ name: this.name, email: this.email });
      //   (this.name = ""), (this.email = "");
      const database = firebase.collection(db, "users").doc();
      console.log(database);
    },
  },
};
</script>

<style scoped></style>
