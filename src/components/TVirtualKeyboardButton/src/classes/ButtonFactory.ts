import { ButtonShift } from './ButtonShift';
import { ButtonCaps } from './ButtonCaps';
import { ButtonDefault } from './ButtonDefault';
import { ButtonBackspace } from './ButtonBackspace';
import type { VirtualKeyboardButtonType } from '../../../../types/types';

export class ButtonFactory {
  public static make = (type: VirtualKeyboardButtonType) => {
    switch (type) {
      case 'default':
        return new ButtonDefault();
      case 'shift':
        return new ButtonShift();
      case 'caps':
        return new ButtonCaps();
      case 'backspace':
        return new ButtonBackspace();
      default:
        throw new Error(`Неверный тип ${type}`);
    }
  };
}
