<template>
  <div class="lg:grid lg:grid-cols-3 flex">
    <div class="lg:col-start-2 flex justify-around">
      <TechSkillsPanel />
    </div>
  </div>
</template>

<script>
import TechSkillsPanel from "../skills/TechSkillsPanel.vue";
export default {
  components: {
    TechSkillsPanel,
  },
};
</script>

<style lang="scss" scoped></style>
