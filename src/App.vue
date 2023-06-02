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
  methods: {

  },
}

</script>

<template>
  <div class="bg-gray-800 min-h-screen text-white bg-boat bg-no-repeat bg-center">
    <header class="h-screen">
      <div class="p-10">
        <h1 class="text-6xl">Fabula Brevis</h1>
        <h2 class="text-4xl">Pars Quinta - Naves</h2>
      </div>
      <div class="p-3 absolute bottom-0 right-0">
        <p>By: Maksim Straus, David Mitkov, & Eddie Kim</p>
      </div>
    </header>
    <main class="min-h-screen mt-10 flex flex-col">
      <section>

      </section>
      <article>
        <div v-for="item in this.vocab" :key="item.name">
          <Table v-if="item.words.length > 0" :name="item.name" :words="item.words" />
        </div>
      </article>
    </main>
    <footer className="flex justify-between align-middle text-lg px-4 pb-2">
      <p>Fabula Brevis | By: cqb13</p>
      <a href="https://github.com/cqb13" target="_blank">
        <img src="./assets/images/github.svg" alt="Github Logo" class="w-7 h-7">
      </a>
    </footer>
  </div>
</template>
