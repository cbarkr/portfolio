<template>
  <div class="sm:px-16">
    <!-- HTML pre-sanitized -->
    <div v-html="this.content" class="text-lg lg:text-xl xl:text-2xl mb-2">
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
