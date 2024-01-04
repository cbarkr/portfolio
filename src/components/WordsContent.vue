<template>
  <div class="flex flex-row justify-center">
    <div class="flex flex-col">
      <!-- Pre-sanitized HTML -->
      <div v-html="this.content" class="text-lg lg:text-xl max-w-xl" />
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
      content: ""
    }
  },
  mounted() {
    const { words } = storeToRefs(store)

    if (this.$route.params.id == words.id) {
      this.content = words.content
    }
  }
}
</script>
