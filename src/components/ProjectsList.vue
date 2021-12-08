<template>
  <div class="fit q-mx-auto">
    <h2 class="q-my-none fn-lg fn-w-bold">{{ label || 'Projects' }}</h2>
    <div class="row">
      <q-item v-ripple clickable class="col-3 q-pa-none">
        <q-img src="images/artblock2.png" />
      </q-item>
    </div>

    <!---->
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Project } from 'src/data/data';

export default defineComponent({
  props: {
    label: String,
    projects: Object as PropType<Project[]>,
  },
});
</script>
