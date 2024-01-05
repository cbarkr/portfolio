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
const { words } = storeToRefs(store)

export default {
  name: 'WordsContentComponent',
  data() {
    return {
      content: ''
    }
  },
  mounted() {
    this.content = words.value.find((word) => word.id === this.$route.params.id).content
  }
}
</script>
