<template>
  <div class="h-screen border mx-5 my-5">
    <div class="flex flex-col">
      <span class="text-center text-2xl py-5 font-semibold">Skills</span>
      <div>
        <SkillsPanel />
      </div>
    </div>
  </div>
</template>

<script>
import SkillsPanel from "../../components/home/skills/SkillsPanel.vue";
export default {
  components: {
    SkillsPanel,
  },
};
</script>

<style lang="scss" scoped></style>
