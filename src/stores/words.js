import { ref } from 'vue'
import { defineStore } from 'pinia'
import * as wordsExports from '../words'
import { cleaner } from '../utils/cleaner'

class Word {
  constructor(id, title, content) {
    this.id = id
    this.title = title
    this.content = content
  }
}

export const wordsList = Object.keys(wordsExports.default)

export const useWordsStore = defineStore('words', () => {
  const words = ref([])

  async function populate() {
    for (const w of wordsList) {
      await update(w)
    }
  }

  async function update(newId) {
    // Note: The filename must match its id
    const wordsImport = await import(`../words/${newId}.md`)

    fetch(wordsImport.default)
      .then((res) => res.text())
      .then((text) => {
        const id = newId
        const title = text.split('\n')[0].replace(/#/g, '')
        const content = cleaner(text)

        const word = new Word(id, title, content)
        words.value.push(word)
      })

    return words
  }

  return { words, populate, update }
})
