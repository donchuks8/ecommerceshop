import Vue from 'vue';
import VueRouter from 'vue-router';
import Products from '../views/Products.vue';
import Contact_us from '../views/Contact_us.vue';
import Index from '@/views/Index.vue';
import Singleproducts from '@/views/Singleproducts.vue';
import productSingle from '../views/productSingle.vue';

Vue.use(VueRouter);

const routes = [
  {

    path: '/',
    name: 'index',
    component: Index,

  },

  {
    path: '/products',
    name: 'products',
    component: Products,
  },
  {
    path: '/products/:productId',
    name: 'Singleproducts',
    component: Singleproducts
  },

  {
      path: '/prodSingle/:prodId',
      name: 'productSingle',
      component: productSingle

  },

  {
    path:'/contact_us',
    name: 'contact_us',
    component: Contact_us,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
