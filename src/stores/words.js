import { ref } from 'vue'
import { defineStore } from 'pinia'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import renderer from '../utils/renderer'
import * as wordsExports from '../words'

const wordsList = Object.keys(wordsExports.default)

marked.use({ renderer });

export const useWordsStore = defineStore('words', () => {
  const words = ref({
    id: '',
    content: ''
  })

  async function update(newId) {
    if (!wordsList.includes(newId)) {
      return false
    }

    try {
      // Note: The filename must match its id
      const wordsImport = await import(`../words/${newId}.md`)
      
      fetch(wordsImport.default)
      .then((res) => res.text())
      .then((text) => {
        // 1. Replace special zero width unicode characters
        // 2. Parse MD content to HTML string
        // 3. Sanitize HTML string
        words.content = DOMPurify.sanitize(
          marked.parse(text.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ''))
        )
        words.id = newId
      })
    } catch (e) {
      return false
    }

    return true
  }

  return { words, update }
})
