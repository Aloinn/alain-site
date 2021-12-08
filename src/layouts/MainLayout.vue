<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import Header from 'src/components/Header/Header.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { Header },
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
