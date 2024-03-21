import { createRouter, createWebHistory } from 'vue-router'
import * as wordsExports from '../words'
import routes from './routes'

const paths = routes.map((r) => r.path)
export const wordsList = Object.keys(wordsExports.default)

console.log(wordsList)

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to) => {
  // Check if content exists
  if (to.name == 'wordscontent') {
    if (!wordsList.includes(to.params.id)) {
      return '/words'
    }
    
    return true
  }

  // Redirect home if path doesn't exist
  if (!paths.includes(to.path)) {
    return '/'
  }
})

export default router
