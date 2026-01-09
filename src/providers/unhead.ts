import type {App} from "vue";
import {createHead, VueHeadMixin} from "@unhead/vue/client";

export function setupUnhead(app: App): void {
  const head = createHead()
  app.mixin(VueHeadMixin)
  app.use(head)
}