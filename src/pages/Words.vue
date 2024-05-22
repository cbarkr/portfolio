<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="sm:px-16">
    <hr />
    <div v-for="(w, index) in words" :key="w.id">
      <router-link :to="routeLink(index)">
        <div
          class="flex flex-row justify-between my-4 hover:bg-whiteish hover:text-blackish hover:no-underline"
        >
          <div class="uppercase text-4xl md:text-5xl lg:text-6xl">{{ w.title }}</div>
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
      </router-link>
      <hr />
    </div>
  </div>
</template>

<script>
import { wordsList } from '../router/index'

class Word {
  constructor(id, title) {
    this.id = id
    this.title = title
  }
}

export default {
  name: 'WordsPage',
  data() {
    return {
      words: []
    }
  },
  async created() {
    await this.populateWords()
  },
  methods: {
    async populateWords() {
      // Reverse order so the new stuff is at the top
      for (let i = wordsList.length - 1; i >= 0; i--) {
        const word = await this.fetchWord(wordsList[i])
        this.words.push(word)
      }
    },
    async fetchWord(id) {
      const wordsImport = await import(`../words/${id}.md`)
      const res = await fetch(wordsImport.default)
      const text = await res.text()
      const title = text.split('\n')[0].replace(/#/g, '')
      return new Word(id, title)
    }
  },
  computed: {
    routeLink() {
      return (index) => `words/${this.words[index].id}`
    }
  }
}
</script>
