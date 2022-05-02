<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script lang="ts">
// import { useMeta } from 'quasar';
import Footer from 'src/components/layout/Footer.vue';
import Header from 'src/components/layout/Header.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { Header, Footer },
  name: 'MainLayout',

  setup() {
    const leftDrawerOpen = ref(false);
    // useMeta({
    //   title: "Aloinn's Portfolio",
    //   meta: {
    //     ogImage: {
    //       property: 'og:image',
    //       content: import('src/images/aloinn.png'),
    //     },
    //     ogTitle: {
    //       property: 'og:title',
    //       content: "Aloinn's Portfolio",
    //     },
    //     ogDescription: {
    //       property: 'og:description',
    //       content: 'Learn more about me and my projects',
    //     },
    //   },
    // });

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
