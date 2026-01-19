const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "projects" */ '../pages/Projects.vue')
  },
  {
    path: '/photos',
    name: 'photos',
    component: () => import(/* webpackChunkName: "photos" */ '../pages/Photos.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    beforeEnter(to, from, next) {
      window.location.href = 'https://blog.cbarkr.com' // Hack to route to external link
    }
  }
]

export default routes
