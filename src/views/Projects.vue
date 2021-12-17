<template>
  <div id="projects" class="mx-5 my-5 h-screen mb-auto">
    <!-- Heading -->
    <div class="flex flex-col items-center">
      <span class="text-4xl">My projects</span>
      <span class="font-thin text-lg"
        >Page under development. updates coming very soon.</span
      >
    </div>
    <!-- Project Cards -->

    <div class="grid md:grid-cols-3 m-5">
      <projectCards
        v-for="project in projectList"
        :key="project.id"
        :projectDetails="project"
        class="border shadow-md m-5"
      />
    </div>
  </div>
</template>

<script>
import ProjectCards from "../components/cards/ProjectCards.vue";
export default {
  data() {
    return {
      projectList: [
        {
          id: "1",
          title: "project 1",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quod nisi nemo ad nesciunt molestias minus aut ipsa, veniam voluptas cumque eum hic inventore! Temporibus ad id animi quod nemo?",
          gitLink: "",
          depLink: "",
        },
        {
          id: "2",
          title: "project 2",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quod nisi nemo ad nesciunt molestias minus aut ipsa, veniam voluptas cumque eum hic inventore! Temporibus ad id animi quod nemo?",
          gitLink: "",
          depLink: "",
        },
        {
          id: "3",
          title: "project 3",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quod nisi nemo ad nesciunt molestias minus aut ipsa, veniam voluptas cumque eum hic inventore! Temporibus ad id animi quod nemo?",
          gitLink: "",
          depLink: "",
        },
        {
          id: "4",
          title: "project 4",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quod nisi nemo ad nesciunt molestias minus aut ipsa, veniam voluptas cumque eum hic inventore! Temporibus ad id animi quod nemo?",
          gitLink: "",
          depLink: "",
        },
        {
          id: "5",
          title: "project 5",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quod nisi nemo ad nesciunt molestias minus aut ipsa, veniam voluptas cumque eum hic inventore! Temporibus ad id animi quod nemo?",
          gitLink: "",
          depLink: "",
        },
      ],
    };
  },
  components: {
    ProjectCards,
  },
};
</script>

<style lang="scss" scoped></style>
