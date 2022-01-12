<template>
  <div class="rounded-xl border shadow-lg w-auto min-h-fit px-5 pt-5 my-5">
    <div id="card-title" class="">
      <div class="grid grid-col-2">
        <div class="lg:col-start-1">
          <div class="text-thin text-2xl">
            <!-- <span class="mx-2">{{ dataObject.id }}</span> -->
            <span class="mx-2">{{ dataObject.channelTitle }}</span>
          </div>
        </div>
        <div class="lg:col-start-2 flex lg:justify-self-end mx-2 lg:mr-10">
          <div class="flex w-fit">
            <div v-for="(star, index) in dataObject.stars" :key="index">
              <img
                class="h-5 w-5"
                :src="require('@/assets/starFilled.png')"
                alt=""
              />
            </div>
            <div v-for="(star, index) in rating" :key="index">
              <img class="h-5 w-5" :src="require('@/assets/star.png')" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="card-body"
      class="lg:grid lg:grid-cols-4 grid grid-cols-2 mx-5 mt-5"
    >
      <div
        id="card-image"
        class="col-start-1 my-5 mx-10 flex items-center justify-center"
      >
        <img
          :src="dataObject.img"
          class="h-auto w-auto rounded-full"
          alt="IMG"
        />
      </div>
      <div id="card-desc" class="col-start-2 lg:col-span-3 my-5">
        <div class="flex flex-col">
          <span class="text-thin italic lg:text-xl text-center">
            {{ dataObject.shortDesc }}
          </span>
          <div id="card-actions" class="flex justify-end my-5">
            <a
              class="rounded-lg w-10 cursor-pointer"
              :href="dataObject.links.youtube"
            >
              <img
                class="h-8 w-8 flex flex-col justify-center items-center"
                :src="require('@/assets/youtube.png')"
                alt=""
              />
            </a>
            <a
              class="rounded-lg w-10 cursor-pointer"
              :href="dataObject.links.site"
            >
              <img
                class="h-7 w-7 flex flex-col justify-center items-center"
                :src="require('@/assets/www.png')"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stars: 0,
    };
  },
  props: ["dataObject"],
  computed: {
    rating() {
      return 10 - this.dataObject.stars;
    },
  },
};
</script>

<style lang="scss" scoped></style>
