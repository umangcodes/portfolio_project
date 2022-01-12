<template>
  <div>
    <div
      v-if="index % 2 != 0"
      class="h-auto flex flex-col mx-5 my-10 hover:shadow-xl lg:grid lg:grid-cols-2 rounded-xl p-5"
    >
      <div class="grid-start-2 flex flex-col items-center lg:border-l">
        <span class="lg:text-9xl text-7xl">{{ dataObject.title }}</span>
      </div>
      <div
        class="grid-start-1 row-start-1 mx-5 flex flex-col h-48 items-center justify-center"
      >
        <span class="">{{ dataObject.shortDescription }}</span>
        <button
          class="mt-5 rounded-full border w-auto px-3 py-2 hover:shadow-md"
          :onClick="() => $router.push({ name: dataObject.link })"
        >
          Visit Page
        </button>
      </div>
    </div>
    <div
      v-if="index % 2 == 0"
      id="specials"
      class="h-auto mx-5 my-10 hover:shadow-xl hover:border-2 rounded-xl p-5"
    >
      <div class="flex flex-col lg:grid lg:grid-cols-2">
        <div class="grid-start-1 flex flex-col items-center lg:border-r">
          <span class="lg:text-9xl text-7xl">{{ dataObject.title }}</span>
        </div>
        <div
          class="grid-start-2 mx-5 flex flex-col h-48 items-center justify-center"
        >
          <span class="">{{ dataObject.shortDescription }}</span>
          <button
            class="mt-5 rounded-full border w-auto px-3 py-2 hover:shadow-md"
            :onClick="() => $router.push({ name: dataObject.link })"
          >
            Visit Page
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataObject", "index"],
};
</script>

<style></style>
