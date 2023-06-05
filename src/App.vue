<script>
import Table from "./components/Table.vue";
import vocab from "./assets/data/vocab.ts";
import storySlides from "./assets/data/storySlides.ts";

export default {
  components: {
    Table,
  },
  data() {
    return {
      vocab,
      storySlides,
      totalSlides: storySlides.length,
      currentSlide: 1,
      paused: false,
    };
  },
  mounted() {
    setInterval(() => {
      if (!this.paused) {
        this.increaseSlide();
      }
    }, 10000);
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        this.increaseSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        this.decreaseSlide();
      } else if (e.key === " ") {
        e.preventDefault();
        this.togglePause();
      }
    });
  },
  methods: {
    togglePause() {
      this.paused = !this.paused;
    },
    increaseSlide() {
      if (this.currentSlide < this.totalSlides) {
        this.currentSlide++;
      } else {
        this.currentSlide = 1;
      }
    },
    decreaseSlide() {
      if (this.currentSlide > 1) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.totalSlides;
      }
    },
  },
  computed: {
    imgSrc() {
      return this.paused ? "./play.svg" : "./pause.svg";
    },
    storyImgSrc() {
      return this.storySlides[this.currentSlide - 1].image;
    },
    slideName() {
      return this.storySlides[this.currentSlide - 1].name;
    },
    slideDescription() {
      return this.storySlides[this.currentSlide - 1].description;
    },
  },
};
</script>

<template>
  <div class="min-h-screen bg-gray-800 bg-boat bg-top bg-no-repeat text-white">
    <header class="h-screen max-lg:flex max-lg:flex-col-reverse">
      <div class="w-fit p-10 ">
        <h1 class="text-6xl">Fabula Brevis</h1>
        <h2 class="text-4xl">Pars Quinta - Naves</h2>
        <a
          href="#images"
          class="my-5 inline-block w-full rounded-xl bg-secondary px-5 py-3 text-center text-2xl transition-colors ease-linear hover:bg-secondary-light"
          >Learn More</a
        >
      </div>
    </header>
    <div class="p-20"></div>
    <main class="mt-10 flex min-h-screen flex-col items-center">
      <section
        class="flex max-lg:flex-col max-lg:items-start h-screen w-screen justify-between gap-5 py-10"
        id="images"
      >
        <article
          class="my-5 flex w-3/5 flex-col justify-between rounded-r-3xl bg-primary bg-opacity-40 p-20 max-lg:w-10/12 max-lg:p-5"
        >
          <div>
            <h2 class="text-4xl">{{ slideName }}</h2>
            <p class="text-2xl">
              {{ slideDescription }}
            </p>
          </div>
          <div class="flex w-full justify-between">
            <section
              class="flex items-center gap-5 rounded-lg bg-primary bg-opacity-40 p-2"
            >
              <p>{{ currentSlide }} / {{ totalSlides }}</p>
            </section>
            <section class="flex gap-5 rounded-lg bg-primary bg-opacity-40 p-2">
              <img
                src="./assets/images/arrow.svg"
                alt="arrow-left"
                class="rotate-180 cursor-pointer"
                @click="decreaseSlide"
              />
              <img
                :src="imgSrc"
                alt="paused control"
                @click="togglePause"
                class="cursor-pointer"
              />
              <img
                src="./assets/images/arrow.svg"
                alt="arrow-right"
                class="cursor-pointer"
                @click="increaseSlide"
              />
            </section>
          </div>
        </article>
        <img :src="storyImgSrc" alt="img" class="h-5/12 w-5/12 rounded-l-3xl max-lg:rounded-3xl self-center max-lg:w-7/12 max-lg:h-7/12 max-sm:w-10/12 max-sm:h-10/12" />
      </section>
      <div class="p-20">
      </div>
      <section class="mt-10 flex w-screen justify-between max-lg:justify-center">
        <img
          src="./assets/images/dragon.svg"
          alt="dragon"
          class="h-5/12 w-5/12 opacity-90 max-lg:hidden"
        />
        <article
          class="my-5 w-3/5 rounded-l-3xl bg-primary bg-opacity-40 p-20 pr-5 max-lg:w-11/12 max-lg:rounded-3xl max-lg:p-5"
        >
          <h2 class="text-4xl mb-5 text-center">Vocab</h2>
          <section class="grid grid-cols-2 gap-5 max-xs:grid-cols-1">
            <div
              v-for="item in vocab"
              :key="item.name"
              class="flex flex-col items-center bg-primary bg-opacity-40 rounded-lg p-2"
            >
              <Table
                v-if="item.words.length > 0"
                :name="item.name"
                :words="item.words"
              />
            </div>
          </section>
        </article>
      </section>
    </main>
    <footer className="flex justify-between align-middle text-lg px-4 pb-2">
      <p>Fabula Brevis | By: cqb13</p>
      <a href="https://github.com/cqb13/fabula-brevis" target="_blank">
        <img
          src="./assets/images/github.svg"
          alt="Github Logo"
          class="h-7 w-7"
        />
      </a>
    </footer>
  </div>
</template>
