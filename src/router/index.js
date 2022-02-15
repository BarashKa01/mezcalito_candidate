import { createRouter, createWebHistory } from 'vue-router';
import CareerView from '../views/CareerView.vue';
import AboutView from '../views/AboutView.vue';
import WhyMezcalitoView from '../views/WhyMezcalitoView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutView
    },
    {
      path: '/career',
      name: 'career_path',
      component: CareerView
    },
    {
      path: '/why-mezcalito',
      name: 'why_mezcalito',
      component: WhyMezcalitoView
    }
  ]
})

export default router
