import { ref } from 'vue'
import { defineStore } from 'pinia'
import * as wordsExports from '../words'

const wordsList = Object.keys(wordsExports.default)

export const useWordsStore = defineStore('words', () => {
  const words = ref({
    id: '',
    title: '',
    content: ''
  })

  async function update(newId) {
    if (!wordsList.includes(newId)) {
      return false
    }

    try {
      // TODO: Improve
      const wordsImport = await import(`../words/${newId}.txt?raw`) // The txt filename must match its id
      const wordsTxt = wordsImport.default
      const wordsTxtSplit = wordsTxt.split('\n')

      words.id = newId
      words.title = wordsTxtSplit[0] // The txt must start with its title
      words.content = wordsTxtSplit.slice(1)
    } catch (e) {
      return false
    }

    return true
  }

  return { words, update }
})
