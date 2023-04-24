import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/motegiyuuta/Desktop/students/rutran-advanced-maeda/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}