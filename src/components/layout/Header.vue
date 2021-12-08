<template>
  <div class="container q-mx-auto q-mt-lg">
    <div class="row q-gutter-md items-end">
      <div class="row fn-md fn-w-thin q-gutter-sm text-grey">
        <a class="text-grey link" href="https://github.com/Aloinn"> github </a>

        <a class="text-grey link" href="https://www.linkedin.com/in/aloinn">
          linkedin
        </a>

        <a class="text-grey link" href="https://devpost.com/Aloinn">devpost</a>
      </div>
      <q-space />

      <header-logo />
    </div>
    <q-separator class="q-my-md" size="3px" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderLogo from './HeaderLogo.vue';

export default defineComponent({
  components: { HeaderLogo },
});
</script>
