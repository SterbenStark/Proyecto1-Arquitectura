import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _726c819b = () => interopDefault(import('..\\pages\\authors_index.vue' /* webpackChunkName: "pages/authors_index" */))
const _b7260906 = () => interopDefault(import('..\\pages\\books_index.vue' /* webpackChunkName: "pages/books_index" */))
const _4d086aba = () => interopDefault(import('..\\pages\\publishers_index.vue' /* webpackChunkName: "pages/publishers_index" */))
const _e9ccd21c = () => interopDefault(import('..\\pages\\authors\\_slug.vue' /* webpackChunkName: "pages/authors/_slug" */))
const _cdaf4d60 = () => interopDefault(import('..\\pages\\books\\_slug.vue' /* webpackChunkName: "pages/books/_slug" */))
const _03fad1b3 = () => interopDefault(import('..\\pages\\publishers\\_slug.vue' /* webpackChunkName: "pages/publishers/_slug" */))
const _317f18d2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/authors_index",
    component: _726c819b,
    name: "authors_index"
  }, {
    path: "/books_index",
    component: _b7260906,
    name: "books_index"
  }, {
    path: "/publishers_index",
    component: _4d086aba,
    name: "publishers_index"
  }, {
    path: "/authors/:slug?",
    component: _e9ccd21c,
    name: "authors-slug"
  }, {
    path: "/books/:slug?",
    component: _cdaf4d60,
    name: "books-slug"
  }, {
    path: "/publishers/:slug?",
    component: _03fad1b3,
    name: "publishers-slug"
  }, {
    path: "/",
    component: _317f18d2,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
