<template>
  <div class="mx-5 my-5 min-h-screen">
    <div id="front-end-tools" class="my-5">
      <span class="text-2xl mx-5"> >> Front End</span>
      <div class="lg:grid lg:grid-cols-3 lg:gap-5">
        <Tools
          v-for="tool in frontEndTools"
          :dataObject="tool"
          :key="tool.id"
        />
      </div>
    </div>
    <div id="api-tools" class="my-5">
      <span class="text-2xl mx-5 py-5"> >> API Tools</span>
      <div class="lg:grid lg:grid-cols-3 lg:gap-5">
        <Tools v-for="tool in apiTools" :dataObject="tool" :key="tool.id" />
      </div>
    </div>
    <span class="flex justify-center italic text-lg font-thin"
      >To be updated soon...</span
    >
  </div>
</template>

<script>
import Tools from "@/components/dc/frontEnd/cards/Tools.vue";
export default {
  data() {
    return {
      frontEndTools: [
        {
          id: 1,
          toolName: "Flaticon",
          shortDesc:
            "Find png and svg icons for your projects. customize the size of the icons easily using different features on website",
          link: "https://www.flaticon.com/",
          img: "https://media.flaticon.com/dist/min/img/logo/flaticon_negative.svg",
          category: {
            frontEnd: true,
            backEnd: false,
            type: "UI/UX",
            others: "",
          },
          free: "basic",
          stars: 9,
        },
        {
          id: 2,
          toolName: "Coolors",
          shortDesc:
            "Having trouble finding the best theme and colors for your web page? Find a random palette of colors here.",
          link: "https://coolors.co",
          img: "https://coolors.co/assets/img/logo.svg",
          category: {
            frontEnd: true,
            backEnd: false,
            type: "UI/UX",
            others: "",
          },
          free: "full",
          stars: 7,
        },
        {
          id: 3,
          toolName: "MD Color tool",
          shortDesc:
            "Color selection tool based on the best practices define by Material Design.",
          link: "https://material.io/resources/color/#!/?view.left=0&view.right=0",
          img: "",
          altImg: "Google",
          category: {
            frontEnd: true,
            backEnd: false,
            type: "UI/UX",
            others: "",
          },
          free: "full",
          stars: 8,
        },
        {
          id: 4,
          toolName: "OverAPI",
          shortDesc:
            "A compilation of cheatsheets for most of the modern languages.",
          link: "https://overapi.com/",
          img: "",
          altImg: "API",
          category: {
            frontEnd: true,
            backEnd: false,
            type: "API",
            others: "",
          },
          free: "full",
          stars: 8,
        },
      ],
      apiTools: [
        {
          id: 1,
          toolName: "Postman",
          shortDesc:
            "One of the best api testing tools available. Visit the site to know more",
          link: "https://www.postman.com/",
          img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-ar21.svg",
          category: {
            frontEnd: false,
            backEnd: false,
            type: "testing",
            others: "",
          },
          free: "basic",
          stars: 9,
        },
      ],
    };
  },
  components: {
    Tools,
  },
};
</script>

<style lang="scss" scoped></style>
