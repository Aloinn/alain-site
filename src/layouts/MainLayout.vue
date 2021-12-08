<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import Footer from 'src/components/layout/Footer.vue';
import Header from 'src/components/layout/Header.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { Header, Footer },
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
