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
      paused: false,
    };
  },
  methods: {
    togglePause() {
      this.paused = !this.paused;
    },
  },
  computed: {
    imgSrc() {
      return this.paused ? "/src/assets/images/play.svg" : "/src/assets/images/pause.svg";
    }
  },
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
    <div class="p-20"></div>
    <main class="mt-10 flex min-h-screen flex-col items-center">
      <section class="flex h-screen w-screen justify-between gap-5 py-10" id="images">
        <article
          class="my-5 flex w-3/5 flex-col items-start rounded-r-3xl bg-primary bg-opacity-40 p-20"
        >
          <h2 class="text-4xl">Naves</h2>
          <p class="text-2xl">
            Naves sunt vehicula quae in aqua natant. Naves sunt magna et parva.
            Naves sunt longae et breves. Naves sunt albae et nigrae. Naves sunt
            pulchrae et turpes. Naves sunt in mari et in flumine. Naves sunt in
            portu et in via. Naves sunt in aqua et in terra. Naves sunt in portu
            et in via. Naves sunt in aqua et in terra. Naves sunt in portu et in
            via. Naves sunt in aqua et in terra. Naves sunt in portu et in via.
            Naves sunt in aqua et in terra. Naves sunt in portu et in via. Naves
            sunt in aqua et in terra. Naves sunt in portu et in via. Naves sunt
            in aqua et in terra. Naves sunt in portu et in via. Naves sunt in
            aqua et in terra. Naves sunt in portu et in via. Naves sunt in aqua
            et in terra. Naves sunt in portu et in via. Naves sunt in aqua et in
            terra.
          </p>
          <section class="flex gap-5 bg-primary bg-opacity-40 p-2 rounded-lg self-end justify-self-end">
            <img src="./assets/images/arrow.svg" alt="arrow-left" class=" rotate-180 cursor-pointer">
            <img :src="imgSrc" alt="paused control" @click="togglePause" class="cursor-pointer">
            <img src="./assets/images/arrow.svg" alt="arrow-right" class="cursor-pointer">
          </section>
        </article>
        <img
          src="./assets/images/monster-finds-ship.jpg"
          alt="boat"
          class="h-5/12 w-5/12 rounded-l-3xl"
        />
      </section>
      <div class="p-20"></div>
      <section class="mt-10 flex w-screen justify-between">
        <img
          src="./assets/images/dragon.svg"
          alt="dragon"
          class="h-5/12 w-5/12 opacity-90"
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
