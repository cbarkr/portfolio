import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const paths = routes.map((r) => r.path)

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  // Redirect home if path doesn't exist
  if (!paths.includes(to.path) && !to.path.startsWith("/words")) {
    next('/')
  }
  else {
    next()
  }
})

export default router
