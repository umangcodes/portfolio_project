<template>
  <div class="h-auto">
    <Intro />
    <!-- cover image/ intro -->
    <Philosophy />
    <!-- interests -->
    <!-- skills -->
    <Dc />
    <ProjectsPanel />
    <SkillsV2 />
    <!-- projects -->
    <!-- Change the location of UX port from the bottom into projects panel, 
    give a navigation option between UX and Front end development in projects panel. -->
    <UxPort />
    <!-- blog -->
    <Updates />
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "../components/home/Intro.vue";
import SkillsV2 from "../components/home/SkillsV2.vue";
import Updates from "../components/home/Updates.vue";
import Login from "../components/navigation/Login.vue";
import Dc from "../components/home/Dc.vue";
import Philosophy from "../components/home/Philosophy.vue";
import ProjectsPanel from "../components/home/ProjectsPanel.vue";
import UxPort from "../components/home/UxPort.vue";
export default {
  name: "Home",
  components: {
    Intro,
    SkillsV2,
    Updates,
    Login,
    Dc,
    Philosophy,
    ProjectsPanel,
    UxPort,
  },
};
</script>
