import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const paths = routes.map((r) => r.path)

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to) => {
  // Redirect home if path doesn't exist
  if (!paths.includes(to.path) && to.path !== "/words") {
    return '/'
  }
})

export default router
