import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "homeview",
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: "Panacea"
    }
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import("../views/Store.vue"),
    meta: {
      title: "Panacea"
    }
  },
  {
    path: '/Roulette',
    name: 'roulette',
    component: () => import("../views/Roulette.vue"),
    meta: {
      title: "Panacea"
    }
  },
  {
    path: '/Contacts',
    name: 'contacts',
    component: () => import("../views/Contacts.vue"),
    meta: {
      title: "Panacea"
    }
  },
  {
    path: '/Privacy',
    name: 'privacy',
    component: () => import("../views/Privacy.vue"),
    meta: {
      title: "Panacea"
    }
  },
  {
    path: '/Terms',
    name: 'terms',
    component: () => import("../views/Terms.vue"),
    meta: {
      title: "Panacea"
    }
  }
  ,
  {
    path: '/Profile',
    name: 'profile',
    component: () => import("../views/Profile.vue"),
    meta: {
      title: "Panacea"
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
const DEFAULT_TITLE = 'Panacea';
router.beforeEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});