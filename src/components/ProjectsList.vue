<template>
  <div class="fit q-mx-auto">
    <h2 class="q-my-none fn-lg">{{ label || 'Projects' }}</h2>
    <q-separator class="q-my-md" size="3px" />
    <div class="row q-col-gutter-sm" v-if="projects">
      <div
        class="col-md-3 col-sm-6 col-12"
        v-for="project in projects"
        :key="project.name"
      >
        <a :href="project.url">
          <q-item v-ripple clickable class="q-pa-none thumbnail">
            <q-img class="q-pa-none" :src="project.img">
              <div class="nobg fit row">
                <div
                  class="
                    bg-white
                    thumbnailtext
                    q-mx-auto q-my-auto q-pa-md-xs q-pa-lg
                  "
                >
                  <h3
                    class="
                      text-black
                      fn-w-bold
                      text-center
                      q-mt-md q-mb-none q-px-sm-xl
                    "
                  >
                    {{ project.name }}
                  </h3>
                  <div class="text-center q-mb-sm-md q-mb-sm">
                    <subtitle
                      class="text-grey fn-w-light"
                      v-if="project.subtitle"
                    >
                      {{ project.subtitle }}
                    </subtitle>
                    <div>
                      <q-badge
                        color="orange"
                        v-if="project.award"
                        :label="`${project.award}`"
                        >🏆asd</q-badge
                      >
                    </div>
                  </div>

                  <p class="text-black fn-w-thin text-center q-px-md">
                    {{ project.description }}
                  </p>
                </div>
              </div>
            </q-img>
          </q-item>
        </a>
      </div>
    </div>
    <div v-else>
      <div class="fit text-center fn-md fn-w-thin q-py-lg">coming soon</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/css/fonts.scss';
.nobg {
  background: none;
  padding: 0px;
}
.thumbnailtext {
  width: 0%;
  height: 0%;
  transition: ease-out 0.2s;
  opacity: 0;
  h3 {
    font-size: 0pt;
    transition: ease-out 0.2s;
  }
  p {
    font-size: 0pt;
    transition: ease-out 0.2s;
  }
  subtitle {
    font-size: 0pt;
    transition: ease-out 0.2s;
  }
}

.thumbnail:hover .thumbnailtext {
  background-color: red;
  width: calc(100% - 1rem);
  height: calc(100% - 1rem);
  opacity: 100;
  transition: ease-out 0.2s;
  h3 {
    @extend .fn-sm !optional;
  }
  p {
    @extend .fn-xs !optional;
  }
  subtitle {
    @extend .fn-xs;
  }
}
</style>

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
