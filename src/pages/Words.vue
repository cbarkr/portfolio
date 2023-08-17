<template>
  <div class="sm:px-16">
    <hr />
    <div v-for="(w, index) in words" :key="w.id">
      <div @click="handleClick(index)" class="flex flex-row justify-between my-4 hover:underline">
        <div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">{{ w.title }}</div>
        <!-- Arrow right -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WordsPage',
  data() {
    return {
      words: [
        {
          title: 'HELLO',
          id: 'hello',
        },
      ]
    }
  },
  methods: {
    handleClick(index) {
      this.$router.push(`words/${this.words[index].id}`)
    }
  }
}
</script>
