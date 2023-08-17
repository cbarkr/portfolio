import { createRouter, createWebHistory } from 'vue-router'
import { useWordsStore } from '../stores/words'
import routes from './routes'

const paths = routes.map((r) => r.path)

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to) => {
  const store = useWordsStore()

  // Update store before routing to words page
  if (to.name == 'wordscontent') {
    const result = await store.update(to.params.id)
    return result ? true : '/words'
  }

  // Redirect home if path doesn't exist
  if (!paths.includes(to.path)) {
    return '/'
  }
})

export default router
