<template>
  <!-- TODO: Improve layout -->
  <div class="sm:px-16">
    <div class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-8">{{ title }}</div>
    <!-- TODO: Add image? -->
    <div v-for="paragraph in content" class="text-lg lg:text-xl xl:text-2xl mb-2">
      {{ paragraph }}
    </div>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useWordsStore } from '../stores/words'

const store = useWordsStore()

export default {
  name: 'WordsContentComponent',
  data() {
    return {
      title: '',
      content: []
    }
  },
  mounted() {
    const { words } = storeToRefs(store)

    if (this.$route.params.id == words.id) {
      this.title = words.title
      this.content = words.content
    }
  }
}
</script>
