<template>
  <div class="flex flex-col border rounded hover:scale-105 h-auto w-auto">
    <div class="">
      <div class="grid grid-rows-4">
        <div class="grid row-start-1">
          <div class="px-5 pt-5 font-bold text-xl">
            {{ projectDetails.id }}. {{ projectDetails.title }}
          </div>
        </div>
        <div class="grid row-start-2">
          <div class="px-5 pt-2 font-thin h-20">
            {{ projectDetails.description }}
          </div>
        </div>
        <div class="pt-2 px-5 row-start-3 flex flex-col">
          <p class="font-semibold text-lg mr-5">Tech Stack:</p>
          <div class="font-thin flex">
            <div v-for="tech in projectDetails.tech" :key="tech" class="mr-2">
              {{ tech }}
            </div>
          </div>
        </div>
        <div class="row-start-4">
          <div id="card-actions" class="flex mx-5">
            <button class="rounded-full mr-2 pr-2 hover:shadow-md">
              <a :href="projectDetails.gitLink">
                <svg
                  class="h-6 w-6 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  />
                </svg>
              </a>
            </button>
            <button class="rounded-full mr-2 hover:shadow-md">
              <a :href="projectDetails.depLink">
                <svg
                  class="h-8 w-8 text-black"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                </svg>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projectDetails"],
};
// gitlink --> github link to project
// deplink --> deployment link to project
</script>

<style lang="scss" scoped></style>
