import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OurServicesView from '../views/OurServicesView.vue'
import GalleryView from '../views/GalleryView.vue'
import LinksView from '../views/LinksView.vue'
import OurRoomView from '../views/OurRoomView.vue'
import ContactView from '../views/ContactView.vue'
import DetailArticleView from '../views/DetailArticleView.vue'
import AboutView from '../views/AboutView.vue'
import DoctorsView from '../views/DoctorsView.vue'
import CareerView from '../views/CareerView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/our-services',
    name: 'our-services',
    component: OurServicesView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
  },
  {
    path: '/links',
    name: 'links',
    component: LinksView
  },
  {
    path: '/our-room',
    name: 'our-room',
    component: OurRoomView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/profile/:username',
    name: 'profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/artikel/:id',
    name: 'artikel',    
    component: DetailArticleView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/doctors',
    name: 'doctors',
    component: DoctorsView
  },
  {
    path: '/career',
    name: 'career',
    component: CareerView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  { path: '/404', component: NotFoundView },  
  { path: '/:catchAll(.*)', redirect: '/404' },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router