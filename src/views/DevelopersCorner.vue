<template>
  <div id="container" class="mb-10 min-h-screen">
    <span class="flex text-3xl justify-center"
      >Welcome to Developer's Corner</span
    >
    <div>
      <Specials
        v-for="data in object"
        :key="data.index"
        :dataObject="data"
        :index="data.index"
      />
    </div>
  </div>
</template>

<script>
import Specials from "../components/secret/Specials.vue";
export default {
  data() {
    return {
      object: [
        {
          index: 1,
          title: "Front End",
          link: "dcfrontend",
          shortDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, consectetur.",
        },
        {
          index: 2,
          title: "Tools",
          link: "dctools",
          shortDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, consectetur.",
        },
        {
          index: 3,
          title: "Misc",
          link: "dcmisc",
          shortDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, consectetur.",
        },
      ],
    };
  },
  components: {
    Specials,
  },
};
</script>

<style scoped></style>
