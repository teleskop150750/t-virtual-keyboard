import type { App, Plugin } from 'vue';
import { TVirtualKeyboard } from './TVirtualKeyboard';

import { setConfig } from '../config';
import './components.css';
import type { VirtualKeyboardButtonInterface } from '../types/types';

const setupTeleskop = (buttons: Record<string, VirtualKeyboardButtonInterface[]>): void => {
  setConfig(buttons);
};

const createTeleskop = (buttons: Record<string, VirtualKeyboardButtonInterface[]>): Plugin => ({
  install: (): void => {
    setupTeleskop(buttons);
  },
});

// install
const install = (app: App, buttons = {}): void => {
  setupTeleskop(buttons);
  app.use(TVirtualKeyboard);
};

export default { install };
export { createTeleskop };

export * from './TVirtualKeyboard';
