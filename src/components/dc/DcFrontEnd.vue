<template>
  <div class="mx-5 my-5 min-h-screen">
    <div>
      <button
        :onClick="goBack"
        class="my-5 hover:shadow-xl px-2 py-1 border rounded-full"
      >
        &lt; &lt; Go Back
      </button>
    </div>
    <div id="front-end-JS-courses">
      <span class="text-2xl mx-5 flex">
        >> Amazing Resources for
        <a
          href="https://www.javascript.com/"
          class="rounded-xl mx-1 px-3 py-1 bg-yellow-300 font-bold hover:shadow-lg"
          >JS</a
        >
      </span>
      <div class="lg:grid lg:grid-cols-3 lg:gap-5">
        <Cards
          v-for="(object, index) in javascript"
          :dataObject="object"
          :key="index"
        />
      </div>
    </div>
    <div id="front-end-vue-courses">
      <span class="text-2xl mx-5 flex">
        >> Amazing Resources for
        <a
          href="https://vuejs.org/"
          class="rounded-xl mx-1 px-1 font-bold text-green-500 hover:text-green-700"
          >Vue.js</a
        >
      </span>
      <div class="lg:grid lg:grid-cols-3 lg:gap-5">
        <Cards
          v-for="(object, index) in vue"
          :dataObject="object"
          :key="index"
        />
      </div>
    </div>
    <div id="front-end-react-courses">
      <span class="text-2xl mx-5 flex">
        >> Amazing Resources for
        <a
          href="https://reactjs.org/"
          class="font-bold px-1 text-blue-500 hover:text-blue-700 hover:text-shadow-lg"
          >React.js</a
        >
      </span>
      <div class="lg:grid lg:grid-cols-3 lg:gap-5">
        <Cards
          v-for="(object, index) in react"
          :dataObject="object"
          :key="index"
        />
      </div>
    </div>
    <div id="front-end-related-courses">
      <span class="text-2xl mx-5 flex"> >> Related Resources </span>
      <div class="lg:grid lg:grid-cols-3 lg:gap-5">
        <Cards
          v-for="(object, index) in mongo"
          :dataObject="object"
          :key="index"
        />
      </div>
    </div>
    <button
      :onClick="goBack"
      class="my-5 hover:shadow-xl px-2 py-1 border rounded-full"
    >
      &lt; &lt; Go Back
    </button>
  </div>
</template>

<script>
import Cards from "./frontEnd/cards/Channels.vue";
export default {
  components: {
    Cards,
  },
  data() {
    return {
      javascript: [
        {
          id: 1,
          channelTitle: "Traversy Media",
          shortDesc:
            "An amazing channel for beginners as well as refined web developers. Visit the channel for more info.",
          creator: "Brad Traversy",
          links: {
            youtube: "https://www.youtube.com/c/TraversyMedia/",
            site: "https://traversymedia.com/",
          },
          img: "https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s88-c-k-c0x00ffffff-no-rj",
          stars: 10,
          speciality: ["Web dev", "All"],
        },
        {
          id: 2,
          channelTitle: "Web dev simplified",
          shortDesc:
            "One of the best channels to learn react and javascript overall. Visit the channel for more info.",
          creator: "To be updated",
          links: {
            youtube: "https://www.youtube.com/c/WebDevSimplified",
            site: "https://courses.webdevsimplified.com/",
          },
          img: "https://yt3.ggpht.com/ytc/AKedOLQpvSjzSCSo8ZKCjBZS7TRX7omb_kyQirh2zgEY=s88-c-k-c0x00ffffff-no-rj",
          stars: 9,
          speciality: ["Web dev", "All"],
        },
        {
          id: 3,
          channelTitle: "Free code camp",
          shortDesc:
            "Great place to start learning a majority of web development technologies. Visit the channel for more info.",
          creator: "Quincy Larson",
          links: {
            youtube: "https://www.youtube.com/c/Freecodecamp",
            site: "https://www.freecodecamp.org/",
          },
          img: "https://yt3.ggpht.com/ytc/AKedOLRyPFojwY3CXV5ks5TwPrt2VifQn-nYNfkgLvVPkw=s88-c-k-c0x00ffffff-no-rj",
          stars: 9,
          speciality: ["Web dev", "All"],
        },
        {
          id: 4,
          channelTitle: "Akshay Saini",
          shortDesc:
            "Want to learn the core concepts of javascript? This guy made it easy. Checkout this playlist. Authors Choice! ",
          creator: "Akshay Saini",
          links: {
            youtube:
              "https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP",
            site: "https://akshaysaini.in/",
          },
          img: "https://yt3.ggpht.com/ytc/AKedOLR8gqN3fHHNYbehMcsJ49rapBPhJMGPYSrl6YQyNg=s88-c-k-c0x00ffffff-no-rj",
          stars: 10,
          speciality: ["JS"],
        },
      ],
      vue: [
        {
          id: 1,
          channelTitle: "Vue Mastery",
          shortDesc:
            "Want a starting point for becoming a Vue.js developer? Join thousands of developers here and learn from the creators of the technology directly.",
          creator: "Brad Traversy",
          links: {
            youtube: "https://www.youtube.com/c/VueMastery",
            site: "https://www.vuemastery.com/",
          },
          img: "https://yt3.ggpht.com/ytc/AKedOLTaTTjZNnrrDe78dmFGsvjpEmraDQ1jUTLG8_Up=s88-c-k-c0x00ffffff-no-rj",
          stars: 10,
          speciality: ["Web dev", "All"],
        },
      ],
      react: [
        {
          id: 1,
          channelTitle: "The Net Ninja",
          shortDesc:
            "Be a great web developer or should I say the net ninja? Be a part of the GANG! Train here on this channel.",
          creator: "Shaun Pelling",
          links: {
            youtube: "https://www.youtube.com/c/TheNetNinja",
            site: "https://netninja.dev/",
          },
          img: "https://yt3.ggpht.com/ytc/AKedOLT3v89U-2iVX-78hqPk1-lBIduTcljrKLIH9YJg1A=s88-c-k-c0x00ffffff-no-rj",
          stars: 9,
          speciality: ["Web dev", "All"],
        },
      ],
      mongo: [
        {
          id: 1,
          channelTitle: "MongoDB",
          shortDesc:
            "Learn the fundamentals to advanced topics in mongodb. This is the best resource available directly from the giant.",
          creator: "mongodb org",
          links: {
            youtube: "https://www.youtube.com/user/MongoDB",
            site: "https://university.mongodb.com/",
          },
          img: "https://yt3.ggpht.com/94s5L5iEC6TInISXIFzVaVCaFgL62lEmSz3c9p2AHnjv7kmNAOXdWrgyndV-jttIC31K7AWWJw=s88-c-k-c0x00ffffff-no-rj",
          stars: 10,
          speciality: ["Web dev", "All"],
        },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped></style>
