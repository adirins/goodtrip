import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ParMumsView from '../views/ParMumsView.vue'
import CelojumiView from '../views/CelojumiView.vue'
import NotFound from '../views/404Error.vue'
import BlogsView from "@/views/BlogsView.vue";
import BlogPostView from "@/views/BlogPostView.vue";
import KontaktiView from "@/views/KontaktiView.vue";
import PieteiksanasView from "@/views/PieteiksanasView.vue";
import TripDetails from "@/views/TripDetails.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue"; // 👈 404 lapas komponente

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/par-mums',
      name: 'par-mums',
      component: ParMumsView,
    },
    {
      path: '/celjojumi',
      name: 'celjojumi',
      component: CelojumiView,
    },
    {
      path: '/celjojumi/:id',
      name: 'TripDetails',
      component: TripDetails,
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogsView,
    },
    {
      path: '/blogs/:id',
      name: 'blog-post',
      component: BlogPostView,
    },
    {
      path: '/kontakti',
      name: 'kontakti',
      component: KontaktiView,
    },
    {
      path: '/pieteiksanas',
      name: 'pieteiksanas',
      component: PieteiksanasView,
    },
    {
      path: '/privatuma-politika',
      name: 'privacyPolicy',
      component: PrivacyPolicy,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
})

export default router
