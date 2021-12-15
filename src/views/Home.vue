<template>
  <div class="h-auto">
    <Intro />
    <!-- cover image/ intro -->
    <div class="grid grid-cols-2 mx-5 my-10 h-screen">
      <!-- <img
        class="object-cover h-50 w-full"
        src="@/assets/cover-image.jpg"
        alt=""
      /> -->
      <div class="flex cols-start-1 px-16 items-center">
        <div class="flex flex-col">
          <p class="font-semibold text-2xl text-center py-10">My philosophy</p>
          <div class="text-xl font-thin">
            <ul class="flex flex-col items-center">
              <li>Deliver modern and visually appealing web applications</li>
              <li>Give responsive design and mobile first high importance</li>
              <li>Follow the principles of clean code and SOLID</li>
              <li>Consider future compatibility</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex cols-start-2 items-center">
        <img src="../assets/cover-image.jpg" class="rounded-lg" alt="" />
      </div>
    </div>
    <!-- interests -->
    <!-- skills -->
    <Skills />
    <!-- projects -->
    <!-- blog -->
    <Updates />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "../components/home/Intro.vue";
import Skills from "../components/home/Skills.vue";
import Updates from "../components/home/Updates.vue";
export default {
  name: "Home",
  components: {
    Intro,
    Skills,
    Updates,
  },
};
</script>
