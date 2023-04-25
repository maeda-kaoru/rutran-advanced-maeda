import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/motegiyuuta/Desktop/students/rutran-advanced-maeda/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}