<script>
export default {
  props: {
    name: String,
    words: Array,
  },
};
</script>

<template>
  <section class="flex flex-col items-center">
    <h3 class="text-2xl text-center">{{ name }}</h3>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">Partes Principales</th>
          <th class="px-4 py-2">Sensus</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="word in words" :key="word[1]">
          <td class="border px-4 py-2">{{ word[0] }}</td>
          <td class="border px-4 py-2">{{ word[1] }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
