import { marked } from 'marked'
import DOMPurify from 'dompurify'
import renderer from '../utils/renderer'

marked.use({ renderer })

export const cleaner = (text) => {
  // 1. Replace special zero width unicode characters
  // 2. Parse MD content to HTML string
  // 3. Sanitize HTML string
  return DOMPurify.sanitize(
    marked.parse(text.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ''))
  )
}
