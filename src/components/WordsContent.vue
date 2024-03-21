<template>
  <div class="flex flex-row justify-center">
    <div class="flex flex-col">
      <!-- Pre-sanitized HTML -->
      <div v-html="this.content" class="text-lg lg:text-xl max-w-xl" />
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
