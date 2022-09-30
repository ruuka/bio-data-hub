import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7e8b228f = () => interopDefault(import('../pages/clinical-bioinformatics.vue' /* webpackChunkName: "pages/clinical-bioinformatics" */))
const _e5628cc6 = () => interopDefault(import('../pages/custom-plot.vue' /* webpackChunkName: "pages/custom-plot" */))
const _33403090 = () => interopDefault(import('../pages/knowledge-base.vue' /* webpackChunkName: "pages/knowledge-base" */))
const _2ba1703e = () => interopDefault(import('../pages/other-tools.vue' /* webpackChunkName: "pages/other-tools" */))
const _03d16400 = () => interopDefault(import('../pages/public-data-sets.vue' /* webpackChunkName: "pages/public-data-sets" */))
const _4fb4dde2 = () => interopDefault(import('../pages/tableau.vue' /* webpackChunkName: "pages/tableau" */))
const _9ea5e15e = () => interopDefault(import('../pages/upload.vue' /* webpackChunkName: "pages/upload" */))
const _859bb79c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/clinical-bioinformatics",
    component: _7e8b228f,
    name: "clinical-bioinformatics"
  }, {
    path: "/custom-plot",
    component: _e5628cc6,
    name: "custom-plot"
  }, {
    path: "/knowledge-base",
    component: _33403090,
    name: "knowledge-base"
  }, {
    path: "/other-tools",
    component: _2ba1703e,
    name: "other-tools"
  }, {
    path: "/public-data-sets",
    component: _03d16400,
    name: "public-data-sets"
  }, {
    path: "/tableau",
    component: _4fb4dde2,
    name: "tableau"
  }, {
    path: "/upload",
    component: _9ea5e15e,
    name: "upload"
  }, {
    path: "/",
    component: _859bb79c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
