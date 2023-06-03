<script>
import Table from "./components/Table.vue";
import vocab from "./assets/data/vocab.ts";

export default {
  components: {
    Table,
  },
  data() {
    return {
      vocab,
    };
  },
  methods: {},
};
</script>

<template>
  <div class="min-h-screen bg-gray-800 bg-boat bg-top bg-no-repeat text-white">
    <header class="h-screen">
      <div class="w-fit p-10">
        <h1 class="text-6xl">Fabula Brevis</h1>
        <h2 class="text-4xl">Pars Quinta - Naves</h2>
        <a
          href="#images"
          class="my-5 inline-block w-full rounded-xl bg-secondary px-5 py-3 text-center text-2xl transition-colors ease-linear hover:bg-secondary-light"
          >Learn More</a
        >
      </div>
      <div class="absolute bottom-0 right-0 p-3">
        <p>By: Maksim Straus, David Mitkov, & Eddie Kim</p>
      </div>
    </header>
    <main class="mt-10 flex min-h-screen flex-col items-center">
      <section class="h-screen" id="images"></section>
      <section class="mt-10 flex w-screen justify-between">
        <img
          src="./assets/images/dragon.svg"
          alt="dragon"
          class="h-5/12 w-5/12"
        />
        <article
          class="my-5 flex w-3/5 flex-col items-start rounded-l-3xl bg-primary bg-opacity-40 p-20"
        >
          <div
            v-for="item in this.vocab"
            :key="item.name"
            class="flex justify-center"
          >
            <Table
              v-if="item.words.length > 0"
              :name="item.name"
              :words="item.words"
            />
          </div>
        </article>
      </section>
    </main>
    <footer className="flex justify-between align-middle text-lg px-4 pb-2">
      <p>Fabula Brevis | By: cqb13</p>
      <a href="https://github.com/cqb13" target="_blank">
        <img
          src="./assets/images/github.svg"
          alt="Github Logo"
          class="h-7 w-7"
        />
      </a>
    </footer>
  </div>
</template>
