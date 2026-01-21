export const homeRoutes = [
  // Routes used in the home page
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

export const navRoutes = [
  // Routes used in the nav bar
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue')
  },
  ...homeRoutes
]

export const routes = [
  // Routes used to, well, tell the router what to route (i.e. everything!)
  ...navRoutes,
  {
    // Catch-all for anything that wasn't found -> 404!
    path: '/:catchAll(.*)*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../pages/404.vue')
  }
]
