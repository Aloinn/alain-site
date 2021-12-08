<template>
  <div class="container q-mx-auto column q-gutter-y-xl">
    <about-me-section />
    <projects-list
      label="production projects"
      :projects="professionalProjectsList"
    />
    <projects-list label="personal projects" :projects="personalProjectsList" />
    <projects-list label="blog" />
  </div>
</template>

<script lang="ts">
import AboutMeSection from 'src/components/AboutMeSection.vue';
import ProjectsList from 'src/components/ProjectsList.vue';
import { defineComponent } from 'vue';
import { personalProjectsList, professionalProjectsList } from 'src/data/data';

export default defineComponent({
  components: {
    AboutMeSection,
    ProjectsList,
  },
  name: 'PageIndex',
  setup() {
    return { personalProjectsList, professionalProjectsList };
  },
});
</script>
