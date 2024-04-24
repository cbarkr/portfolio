<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-row justify-center">
    <div class="flex flex-col">
      <div>
        <router-link to="/words">
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
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </router-link>
      </div>
      <!-- Pre-sanitized HTML -->
      <div v-html="this.content" class="font-light text-lg lg:text-xl max-w-xl" />
    </div>
  </div>
</template>

<script>
import { cleaner } from '../utils/cleaner'

export default {
  name: 'WordsContentComponent',
  data() {
    return {
      content: ''
    }
  },
  async mounted() {
    await this.fetchWords()
  },
  methods: {
    async fetchWords() {
      const wordsImport = await import(`../words/${this.$route.params.id}.md`)

      fetch(wordsImport.default)
        .then((res) => res.text())
        .then((text) => {
          this.content = cleaner(text)
        })
    }
  }
}
</script>
