<template>
  <div class="flex flex-col h-auto w-auto">
    <div class="mb-5">
      <img
        class="object-fill h-48 w-96"
        src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
        alt=""
      />

      <div class="px-5 pt-5">Id {{ projectDetails.id }}</div>
      <div class="px-5 pt-2">Title: {{ projectDetails.title }}</div>
      <div class="px-5 pt-2">Title: {{ projectDetails.description }}</div>
      <div class="flex mx-5">
        <button class="border rounded-full mr-2 mt-2 p-2 hover:shadow-md">
          Github
        </button>
        <button class="border rounded-full mr-2 mt-2 p-2 hover:shadow-md">
          Deplyoment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projectDetails"],
};
// gitlink --> github link to project
// deplink --> deployment link to project
</script>

<style lang="scss" scoped></style>
