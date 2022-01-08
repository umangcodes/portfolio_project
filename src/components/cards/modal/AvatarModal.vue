<template>
  <div class="relative w-96 h-96">
    <img
      src="@/assets/UmangA.jpg"
      :alt="data.alt"
      class="inline object-cover w-96 h-96 mr-2 rounded-xl"
    />
    <button
      class="absolute right-0 top-0 h-0.5 w-0.5 rounded-lg py-4 px-10 text-white z-10"
      :onClick="data.method"
    >
      X
    </button>
  </div>
</template>

<script>
export default {
  props: ["data"],
  
};
</script>

<style lang="scss" scoped></style>
