<template>
  <div id="projects" class="mx-5 my-5 h-auto">
    <!-- Heading -->
    <div class="flex flex-col items-center">
      <span class="text-4xl">My projects</span>
      <span class="font-thin text-lg mt-2 mb-10 text-center"
        >Page under development. updates coming very soon.</span
      >
    </div>
    <!-- Project Cards -->

    <div class="lg:grid lg:grid-cols-3 lg:gap-5">
      <ProjectCards
        v-for="project in projectList"
        :key="project.id"
        :projectDetails="project"
      />
    </div>
    <p class="text-thin text-center pt-3 italic">
      Please note that the card component here is dynamic
    </p>
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
          title: "Ghost Kitchen",
          description:
            "Front end created for a ghost kitchen to display there service and products catalogue. The website can be easily scalled up using the components present in the project.",
          gitLink:
            "https://github.com/umangcodes/Blog1/tree/master/ghostkitchen",
          depLink: "https://blog1-kappa.vercel.app/",
          tech: ["Vue", "Vuex", "Vuetify"],
        },
        {
          id: "2",
          title: "Vuetify demo project",
          description:
            "Project created to demonstrate the useage of Vuetify's advance components along with inbuilt form validation functionality of vuetify's forms component.",
          gitLink: "",
          depLink: "https://beautifywithvuetify.vercel.app/",
          tech: ["Vue", "Vuex", "Vuetify", "JS"],
        },
        {
          id: "3",
          title: "Weather App",
          description:
            "Want to know what is the weather in your city? try out this app. [I was focusing on how to make the app work and not on user experince when I created this app. Apologies for bad UX. :P]",
          gitLink:
            "https://github.com/umangcodes/wanderer/tree/main/milestoneproject",
          depLink: "https://weatherapp-st.vercel.app/",
          tech: ["Vue", "Vuex", "Vuetify", "JS", "openWeather"],
        },
        {
          id: "4",
          title: "Pokemons",
          description:
            "Technical challenge provided during technical round of my interview with XXXX company. The project is not deployed due to some reasons. Feel free to access the code on github. For details feel free to contact me.",
          gitLink: "https://github.com/umangcodes/pokemon",
          depLink: "",
          tech: ["Vue", "Vuex", "Vuetify", "JS", "tailwindCSS", "REST"],
        },
        {
          id: "5",
          title: "GraphQL",
          description:
            "Developed basic GraphQL api using node.js, express.js. This was a practice project and does not have a deployment link.",
          gitLink: "https://github.com/umangcodes/graphql",
          depLink: "",
          tech: ["node.js", "express.js", "graphQL"],
        },
        {
          id: "6",
          title: "Custom form validation method using JS",
          description:
            "Creating methods for each rule of form validation is difficult. I came across a lot of issues and tried a unique way to handle this problem using raw JS. Please visit GitHub readme for details.",
          gitLink: "https://github.com/umangcodes/custom-form-validation",
          depLink: "https://e-commerce-1-5gnz3ug0w-umangcodes.vercel.app/",
          tech: ["JS", "Vue"],
        },
        {
          id: "7",
          title: "Component: Navigation Guards for restricted access",
          description:
            "There are many instances where you want only particular users to access certain areas of the site. To implement this functionality, use Vue router's inbuilt navigation guard functionality. Enter passcode: Pass! on front page to check live demo.",
          gitLink:
            "https://github.com/umangcodes/portfolio_project/blob/main/src/router/index.js",
          depLink: "https://www.umangagrawal.com/",
          tech: ["JS", "Vue"],
        },
        {
          id: "8",
          title: "Component: Carousel",
          description:
            "One of the best way to display featured items on your page is to display them using a carousel. Here in this project I have created a carousel from scratch. Functionality such as slideshow and responsiveness can be configured.",
          gitLink: "https://github.com/umangcodes/portfolio_project",
          depLink: "https://www.umangagrawal.com/card",
          tech: ["JS", "Vue"],
        },
        {
          id: "9",
          title: "Login with Firebase",
          description:
            "Want to authenticate user before access but dont have a back end? DOnt worry use auth from firebase to do so. Follow the link to visit the code.",
          gitLink: "https://github.com/umangcodes/crud-app-2",
          depLink: "#",
          tech: ["Firebase", "React"],
        },
        {
          id: "10",
          title: "Component: Audio player with react",
          description:
            "Created a custom audio player just for fun. Check it out here.",
          gitLink: "https://github.com/umangcodes/audio-player",
          depLink: "https://comp-audio-player.vercel.app/",
          tech: ["React", "Next.js"],
        },
        {
          id: "11",
          title: "Crud app with react",
          description:
            "Crud app using React.js which stores data in localstorage of the browser.",
          gitLink: "https://github.com/umangcodes/users-management-crud-app",
          depLink: "https://react-crud-1.vercel.app/",
          tech: ["React"],
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
