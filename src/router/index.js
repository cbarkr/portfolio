import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const paths = routes.map(r => r.path)

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    // Redirect home if path doesn't exist
    if (!paths.includes(to.path)) {
        return '/'
    }
})

export default router