<template>
  <div class="h-96 w-80">Title: {{ title }}</div>
</template>

<script>
export default {
  props: ["id", "title", "description", "gitLink", "deplink"],
};
// gitlink --> github link to project
// deplink --> deployment link to project
</script>

<style lang="scss" scoped></style>
