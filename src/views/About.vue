<template>
  <div id="about" class="h-screen">
    <div class="flex flex-col justify-center z-0">
      <div
        class="sticky top-24 bg-white bg-opacity-75 flex justify-center py-5 border"
      >
        <span class="italic text-3xl font-thin text-center"
          >About this portfolio</span
        >
      </div>
      <p class="text-lg font-extralight p-5 text-center">
        This site is still under development. Please visit again for more
        content.
      </p>
      <p class="text-lg font-extralight p-5 text-center">
        Special notes: <br />
        I am aware that many of the components do not provide the best user
        experince. This is because those components are preset at that location
        merely for the purpose of demonstrating my ability to create components
        from scratch. <br />
        Also, as the site undergoes changes, many of the components would be
        updated to provide the best user experince.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    window.scroll(0, 0);
  },
};
</script>
