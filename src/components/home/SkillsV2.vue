<template>
  <div class="h-96 mx-5 my-5">
    <div class="flex flex-col">
      <span class="text-center text-2xl py-5 font-semibold">Skills</span>
      <div>
        <!-- <SkillsPanel /> -->
        <TechSkills />
      </div>
      <span class="text-xl text-center py-5"> & much more...</span>
    </div>
  </div>
</template>

<script>
// import SkillsPanel from "../../components/home/skills/SkillsPanel.vue";
import TechSkills from "../../components/home/skills/TechSkills";
export default {
  components: {
    // SkillsPanel,
    TechSkills,
  },
};
</script>

<style lang="scss" scoped></style>
