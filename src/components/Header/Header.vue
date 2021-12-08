<template>
  <div class="container q-mx-auto bg-red row q-gutter-md items-end">
    <div class="row bg-blue q-ml-auto q-gutter-sm">
      <div>github</div>
      <div>side-projects</div>
      <div>github</div>
    </div>
    <q-space />
    <div class="row q-gutter-sm">
      <div class="fn-link">github</div>
      <div>linkedin</div>
      <div>devpost</div>
    </div>
    <header-logo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderLogo from './HeaderLogo.vue';

export default defineComponent({
  components: { HeaderLogo },
});
</script>
