import type { Ref } from 'vue';
import type { VirtualKeyboardButtonInterface } from '../../../types/types';

export interface TVirtualKeyboardProvideInterface {
  pressedKeys: Ref<string[]>;
  isShift: Ref<boolean>;
  isCaps: Ref<boolean>;
  setShift: (value: boolean) => void;
  setCaps: (value: boolean) => void;
  getText: () => string;
  updateText: (text: string) => void;
  emitClickButton: (button: VirtualKeyboardButtonInterface) => void;
}
