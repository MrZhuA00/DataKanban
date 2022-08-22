import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const originalPush = Router.prototype.push

Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  routes: [
    // {
    //   path: "/",
    //   component: (resolve) => require(["@/pages/PageOne.vue"], resolve),
    //   hidden: true,
    //   meta: { title: "图标页面" },
    // },
    {
      path: '/',
      redirect: '/PageOne'
    },
    {
      path: "/",
      component: (resolve) => require(["@/pages/PageHome.vue"], resolve),
      hidden: true,
      meta: { title: "图标页面" },
      children: [
        {
          path: "/PageOne",
          component: (resolve) => require(["@/pages/PageOne.vue"], resolve),
          hidden: true,
          meta: { title: "图标页面" },
        },
        {
          path: "/PageTwo",
          component: (resolve) => require(["@/pages/PageTwo.vue"], resolve),
          hidden: true,
          meta: { title: "图标页面" },
        },
        {
          path: "/HelloWorld",
          component: (resolve) => require(["@/pages/HelloWorld.vue"], resolve),
          hidden: true,
          meta: { title: "图标页面" },
        },
        
      ]
    },
    
  ],
});

export default router;
