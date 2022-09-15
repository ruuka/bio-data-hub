import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fd0790a6 = () => interopDefault(import('..\\pages\\clinical-bioinformatics.vue' /* webpackChunkName: "pages/clinical-bioinformatics" */))
const _1e500bbb = () => interopDefault(import('..\\pages\\custom-plot.vue' /* webpackChunkName: "pages/custom-plot" */))
const _c8197c9c = () => interopDefault(import('..\\pages\\knowledge-base.vue' /* webpackChunkName: "pages/knowledge-base" */))
const _86ba7b48 = () => interopDefault(import('..\\pages\\other-tools.vue' /* webpackChunkName: "pages/other-tools" */))
const _064a9ea2 = () => interopDefault(import('..\\pages\\public-data-sets.vue' /* webpackChunkName: "pages/public-data-sets" */))
const _e6002200 = () => interopDefault(import('..\\pages\\tableau.vue' /* webpackChunkName: "pages/tableau" */))
const _474c6273 = () => interopDefault(import('..\\pages\\upload.vue' /* webpackChunkName: "pages/upload" */))
const _35aae4d0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _fd0790a6,
    name: "clinical-bioinformatics"
  }, {
    path: "/custom-plot",
    component: _1e500bbb,
    name: "custom-plot"
  }, {
    path: "/knowledge-base",
    component: _c8197c9c,
    name: "knowledge-base"
  }, {
    path: "/other-tools",
    component: _86ba7b48,
    name: "other-tools"
  }, {
    path: "/public-data-sets",
    component: _064a9ea2,
    name: "public-data-sets"
  }, {
    path: "/tableau",
    component: _e6002200,
    name: "tableau"
  }, {
    path: "/upload",
    component: _474c6273,
    name: "upload"
  }, {
    path: "/",
    component: _35aae4d0,
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
