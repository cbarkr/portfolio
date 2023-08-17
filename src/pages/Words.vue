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
import { storeToRefs } from 'pinia'
import { useWordsStore } from '../stores/words'
import WordsContent from '../components/WordsContent.vue'
import test1Text from '../words/test1.txt?raw'
import test2Text from '../words/test2.txt?raw'
import test3Text from '../words/test3.txt?raw'

const store = useWordsStore()

export default {
  name: 'WordsPage',
  components: {
    WordsContent
  },
  data() {
    return {
      words: [
        {
          title: 'TEST TITLE',
          id: 'test-title',
          content: test1Text
        },
        {
          title: 'TEST TITLE 2',
          id: 'test-title-2',
          content: test2Text
        },
        {
          title: 'TEST TITLE 3',
          id: 'test-title-3',
          content: test3Text
        },
      ]
    }
  },
  methods: {
    handleClick(index) {
      const wordsContent = this.words[index]

      const { words } = storeToRefs(store)
      words.title = wordsContent.title
      words.content = wordsContent.content

      this.$router.push(`words/${wordsContent.id}`)
    }
  }
}
</script>
