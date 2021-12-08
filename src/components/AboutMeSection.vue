<template>
  <div class="fit row q-pt-xl">
    <div class="q-gutter-y-md col">
      <div class="fn-xl fn-w-dark">Hey!</div>
      <div>
        <p class="fn-md fn-w-thin">
          I'm <strong class="fn-w-dark">Alain Nguyen</strong>, Software
          Engineer, Indie Game developer, located in beautiful
          <strong class="fn-w-dark">Toronto, Ontario</strong>
        </p>
      </div>
      <div>
        <p class="fn-md fn-w-thin">
          I build interesting projects with purposeful functionality and
          visually appealing designs
        </p>
      </div>
      <div>
        <p class="fn-md fn-w-thin">
          I am very fluent in
          <span class="fn-w-dark text-white bg-red q-px-xs rounded-borders"
            >Java</span
          >,
          <span class="fn-w-dark text-white bg-orange q-px-xs rounded-borders">
            Python</span
          >,
          <span class="fn-w-dark text-white bg-purple q-px-xs rounded-borders">
            C#</span
          >, and
          <span class="fn-w-dark text-white bg-blue q-px-xs rounded-borders">
            TypeScript
          </span>
        </p>
      </div>
      <div>
        <p class="fn-md fn-w-thin">
          Sometimes you can catch me at the local hackathon or game jam
        </p>
      </div>

      <div>
        <p class="fn-md fn-w-thin">
          I am currently a
          <strong class="fn-w-dark">Software Engineering Team Lead </strong>
          intern at
          <a class="fn-w-dark" href="https://www.gcto.ca/"
            ><q-chip dense class="fn-md" clickable square
              >Global Creative Technologies</q-chip
            ></a
          >
        </p>
      </div>
    </div>
    <div>
      <q-avatar size="200px"><q-img src="images/profile-pic.png" /></q-avatar>
      <div class="row full-width q-mt-sm">
        <a class="col" href="https://www.linkedin.com/in/aloinn">
          <q-btn dense size="xl" unelevated round icon="ion-logo-linkedin" />
        </a>
        <a class="col" href="https://www.instagram.com/Aloin.n/">
          <q-btn dense size="xl" unelevated round icon="ion-logo-instagram" />
        </a>
        <a class="col" href="https://github.com/Aloinn">
          <q-btn dense size="xl" unelevated round icon="ion-logo-github" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
