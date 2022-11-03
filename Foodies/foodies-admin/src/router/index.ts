import { createRouter, createWebHistory } from "vue-router";
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string;
  next();
});
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.getItem("token")) next({ name: 'Login' })
  else next()
})
export default router;
