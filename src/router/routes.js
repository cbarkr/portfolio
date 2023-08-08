import Home from '../pages/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import(/* webpackChunkName: "words" */ '../pages/Projects.vue')
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
]

export default routes