<template>
  <div id="container" class="mb-10 min-h-screen">
    <span class="flex text-3xl justify-center mb-20"
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
            "New to front end web development? Try out a range of latest front end technologies. ",
        },
        {
          index: 2,
          title: "Tools",
          link: "dctools",
          shortDescription:
            "Want to know which front end development tools I prefer? Vist the page to know more",
        },
        {
          index: 3,
          title: "Misc",
          link: "dcmisc",
          shortDescription:
            "Find a list of miscellaneous blogs which includes a varied range of topics ",
        },
      ],
    };
  },
  components: {
    Specials,
  },
  created() {
    window.scroll(0, 0);
  },
};
</script>

<style scoped></style>
