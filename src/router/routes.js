import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/work',
    name: 'work',
    component: () => import(/* webpackChunkName: "work" */ '../pages/Work.vue')
  },
  {
    path: '/photos',
    name: 'photos',
    component: () => import(/* webpackChunkName: "photos" */ '../pages/Photos.vue')
  },
  {
    path: '/words',
    name: 'words',
    component: () => import(/* webpackChunkName: "words" */ '../pages/Words.vue')
  },
  {
    path: '/words/:id',
    name: 'wordscontent',
    component: () => import(/* webpackChunkName: "wordscontent" */ '../components/WordsContent.vue')
  }
]

export default routes
