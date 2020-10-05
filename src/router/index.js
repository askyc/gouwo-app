import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/nearby',
    name: 'Nearby',
    component: () => import('../views/nearby/Nearby.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../views/chat/Chat.vue')
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import('../views/me/Me.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


// 导航守卫  使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === null || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});

export default router
