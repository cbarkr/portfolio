import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWordsStore = defineStore('words', () => {
  const words = ref({
    title: '',
    content: ''
  })

  return { words }
})