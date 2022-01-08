<template>
  <div class="flex flex-col justify-center items-center h-screen w-auto">
    <div class="flex">
      <button
        :class="
          disablePrev
            ? 'cursor-not-allowed mx-5 text-2xl hover:shadow-lg'
            : 'mx-5 text-2xl hover:shadow-lg'
        "
        :onClick="previousSlide"
      >
        &lt;
      </button>
      <div>
        <BusinessCard v-if="slide == 1" />
        <Qrcode v-if="slide == 2" />
      </div>
      <button
        :class="
          disableNext
            ? 'cursor-not-allowed mx-5 text-2xl hover:shadow-lg'
            : 'mx-5 text-2xl hover:shadow-lg'
        "
        :onClick="nextSlide"
      >
        &gt;
      </button>
    </div>
    <div>
      <span
        :class="
          slide == 1
            ? 'px-5 text-4xl font-bold opacity-100'
            : 'px-5 text-4xl font-bold opacity-25'
        "
        >.</span
      >
      <span
        :class="
          slide == 2
            ? 'px-5 text-4xl font-bold opacity-100'
            : 'px-5 text-4xl font-bold opacity-25'
        "
        >.</span
      >
    </div>
  </div>
</template>

<script>
import BusinessCard from "../components/cards/personal/BusinessCard.vue";
import Qrcode from "../components/cards/personal/Qrcode.vue";

export default {
  data() {
    return {
      slide: 1,
      disableNext: false,
      disablePrev: true,
    };
  },
  components: {
    BusinessCard,
    Qrcode,
  },
  methods: {
    nextSlide() {
      this.slide += 1;
      this.disablePrev = false;
      if (this.slide >= 2) {
        this.slide = 2;
        this.disableNext = true;
      }
      console.log(this.slide);
      console.log(this.disableNext);
      console.log(this.disablePrev);
    },
    previousSlide() {
      this.slide -= 1;
      this.disableNext = false;
      if (this.slide <= 1) {
        this.slide = 1;
        this.disablePrev = true;
      }
      console.log(this.slide);
      console.log(this.disableNext);
      console.log(this.disablePrev);
    },
  },
};
</script>

<style lang="scss" scoped></style>
