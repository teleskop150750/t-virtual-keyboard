import { inject } from 'vue';
import type { TVirtualKeyboardProvideInterface } from '../components/TVirtualKeyboard/src/types';

const getKeyboardProvider = () => {
  const keyboard = inject<TVirtualKeyboardProvideInterface>('TVirtualKeyboardProvide');

  if (!keyboard) {
    throw new Error('Error');
  }

  return keyboard;
};

export const useKeyboardProvider = () => ({
  getKeyboardProvider,
});
