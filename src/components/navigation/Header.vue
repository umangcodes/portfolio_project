<template>
  <div class="sticky top-0 my-5 py-2 grid grid-cols-2 bg-white z-20">
    <div class="grid grid-cols-6">
      <div class="col-start-2 col-span-4 flex items-center">
        <!-- <span class="grid justify-items-stretch text-3xl font-bold m-auto" -->
        <router-link to="/" class="flex">
          <div class="mx-5">
            <img
              :src="require('@/assets/home.png')"
              alt=""
              class="h-8"
              v-if="$route.path != '/'"
            />
          </div>
          <div class="lg:text-3xl text-xl font-extralight">Umang Agrawal</div>
        </router-link>
        <!-- </span> -->
      </div>
    </div>
    <router-link :to="{ name: 'About' }">
      <div class="rounded-full grid justify-items-end lg:pr-24">
        <img
          class="inline object-cover w-20 h-20 mr-2 rounded-full"
          src="@/assets/UmangAAvatar.jpg"
          alt=""
        />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
