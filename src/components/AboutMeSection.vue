<template>
  <div class="row q-pt-xl">
    <div class="q-gutter-y-lg q-mx-auto col-md col-none">
      <div class="fn-xl fn-w-dark row justify-md-start justify-center">
        <div>Hey! 👋</div>
      </div>
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
          I am fluent in
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
          You can usually catch me at the local hackathon or game jam
        </p>
      </div>

      <div>
        <p class="fn-md fn-w-thin">
          When I'm not working or studying, I'm either jazz improv'ing on my
          strat, challenging the local park's ping pong champions, or hosting
          board games in my basement 🎸
        </p>
      </div>
    </div>

    <div class="order-first order-md-last col-md-auto col-12 q-my-lg">
      <div class="profile q-mx-auto">
        <q-avatar size="200px"><q-img src="images/profile-pic.png" /></q-avatar>
        <div class="row q-mt-sm justify-between">
          <a href="https://www.linkedin.com/in/aloinn">
            <q-btn dense size="xl" unelevated round icon="ion-logo-linkedin" />
          </a>
          <a chref="https://www.instagram.com/Aloin.n/">
            <q-btn dense size="xl" unelevated round icon="ion-logo-instagram" />
          </a>
          <a href="https://github.com/Aloinn">
            <q-btn dense size="xl" unelevated round icon="ion-logo-github" />
          </a>
        </div>
      </div>
      <q-separator class="q-my-md lt-md" size="3px" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  width: 200px;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
