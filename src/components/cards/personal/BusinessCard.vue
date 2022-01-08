<template>
  <div id="business-card">
    <AvatarModal
      v-if="modalStatus"
      :data="avatar"
      :class="modalStatus ? 'h-96 w-96 z-10' : 'h-96 w-96'"
    />
    <div v-if="!modalStatus" :class="modalStatus ? 'opacity-50 z-0' : ''">
      <div class="border rounded-lg shadow h-48 w-96">
        <div class="grid grid-cols-3">
          <div class="px-10 py-5 cols-start-1 col-span-2">
            <span class="text-2xl font-light">Umang A</span>
            <br />
            <span class="font-thin">Junior Web Developer</span>
          </div>
          <div class="mx-10 my-5 cols-start-3">
            <button :onClick="openModal">
              <img
                class="object-cover h-14 mr-2 rounded-full"
                src="@/assets/UmangAAvatar.jpg"
                alt="Profile image"
              />
            </button>
          </div>
        </div>
        <!-- <div class="flex flex-col">
        <span class="px-5 text-center">Feel free to contact me at</span>
      </div> -->
        <div class="flex pt-10 justify-evenly">
          <a class="font-thin" :href="$store.state.personalInfo.linkedin">
            <LinkedInIcon />
          </a>
          |
          <a class="font-thin" :href="$store.state.personalInfo.github">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AvatarModal from "../../cards/modal/AvatarModal.vue";
import LinkedInIcon from "@/components/icons/Linkedin-icon.vue";
import GitHubIcon from "@/components/icons/Github-icon.vue";

export default {
  data() {
    return {
      modalStatus: false,
      avatar: { img: "", alt: "", method: this.closeModal },
    };
  },
  components: {
    AvatarModal,
    LinkedInIcon,
    GitHubIcon,
  },
  methods: {
    openModal() {
      this.modalStatus = true;
      console.log(this.modalStatus);
    },
    closeModal() {
      this.modalStatus = false;
      console.log(this.modalStatus);
    },
  },
};
</script>

<style lang="scss" scoped></style>
