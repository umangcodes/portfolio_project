<template>
  <div
    class="flex flex-col lg:grid lg:grid-cols-2 mx-5 my-10 h-screen border-t"
  >
    <!-- <img
        class="object-cover h-50 w-full"
        src="@/assets/cover-image.jpg"
        alt=""
      /> -->
    <div class="flex lg:cols-start-1 px-16 py-10 items-center">
      <div class="flex flex-col">
        <p class="font-semibold text-2xl text-center py-10">My philosophy</p>
        <div class="text-xl font-thin">
          <ul
            class="flex flex-col justify-center text-center lg:list-none list-disc"
          >
            <li>Deliver modern and visually appealing web applications</li>
            <li>Give responsive design and mobile first high importance</li>
            <li>Follow the principles of clean code and SOLID</li>
            <li>Consider future compatibility</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex lg:cols-start-2 items-center">
      <img src="@/assets/cover-image.jpg" class="rounded-lg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
