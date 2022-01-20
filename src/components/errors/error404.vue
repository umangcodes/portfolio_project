<template>
  <div class="h-screen flex flex-col items-center justify-center px-5">
    <span class="text-3xl text-center"
      >The page you are looking for does not exist.</span
    >
    <span class="text-xl font-thin text-center py-2"
      >Are you testing 404 error catch? Well this page will catch it...</span
    >
    <router-link to="/" class="border px-3 py-2 rounded-full hover:shadow-lg"
      >Home</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
