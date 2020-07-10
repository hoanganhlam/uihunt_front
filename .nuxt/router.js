import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _40f6c3b1 = () => interopDefault(import('../pages/inspiration.vue' /* webpackChunkName: "pages/inspiration" */))
const _f7e9122e = () => interopDefault(import('../pages/post.vue' /* webpackChunkName: "pages/post" */))
const _68736aac = () => interopDefault(import('../pages/post/index.vue' /* webpackChunkName: "pages/post/index" */))
const _b617afd8 = () => interopDefault(import('../pages/post/_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _2ea35a70 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _777a0856 = () => interopDefault(import('../pages/profile/_username.vue' /* webpackChunkName: "pages/profile/_username" */))
const _c0716a94 = () => interopDefault(import('../pages/topic.vue' /* webpackChunkName: "pages/topic" */))
const _f1af90b8 = () => interopDefault(import('../pages/_tag.vue' /* webpackChunkName: "pages/_tag" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/inspiration",
    component: _40f6c3b1,
    name: "inspiration"
  }, {
    path: "/post",
    component: _f7e9122e,
    children: [{
      path: "",
      component: _68736aac,
      name: "post"
    }, {
      path: ":id",
      component: _b617afd8,
      name: "post-id"
    }]
  }, {
    path: "/profile",
    component: _2ea35a70,
    name: "profile",
    children: [{
      path: ":username?",
      component: _777a0856,
      name: "profile-username"
    }]
  }, {
    path: "/topic",
    component: _c0716a94,
    name: "topic"
  }, {
    path: "/:tag?",
    component: _f1af90b8,
    name: "tag"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
