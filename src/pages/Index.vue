<template>
  <div class="container q-mx-auto column q-gutter-y-lg">
    <div class="row"><about-me-section /></div>
    <div class="row"><projects-list /></div>
  </div>
</template>

<script lang="ts">
import AboutMeSection from 'src/components/AboutMeSection.vue';
import ProjectsList from 'src/components/ProjectsList.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    AboutMeSection,
    ProjectsList,
  },
  name: 'PageIndex',
});
</script>
