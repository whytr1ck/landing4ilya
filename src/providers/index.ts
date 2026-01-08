import type {App} from 'vue';
import {setupPrimeVue} from '@/providers/primevue.ts';

export function setupAdditionalPlugins(app: App): void {
  setupPrimeVue(app);
}
