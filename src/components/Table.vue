<script>
export default {
  props: {
    name: String,
    words: Array,
  },
  
};
</script>

<template>
  <section>
    <h3 class="text-2xl">{{ name }}</h3>
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">Partes Principales</th>
          <th class="px-4 py-2">Sensus Anglicus</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="word in words" :key="word.latin">
          <td class="border px-4 py-2"></td>
          <td class="border px-4 py-2"></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
