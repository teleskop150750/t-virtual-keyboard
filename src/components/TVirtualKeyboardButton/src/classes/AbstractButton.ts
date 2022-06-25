import type { Ref } from 'vue';
import type { VirtualKeyboardButtonInterface } from '../../../../types/types';
import type { TVirtualKeyboardProvideInterface } from '../../../TVirtualKeyboard/src/types';

export abstract class AbstractButton {
  protected button: Ref<VirtualKeyboardButtonInterface> | undefined;

  protected keyboard: TVirtualKeyboardProvideInterface | undefined;

  public setKeyboard = (keyboard: TVirtualKeyboardProvideInterface) => {
    this.keyboard = keyboard;
  };

  public setButton = (button: Ref<VirtualKeyboardButtonInterface>) => {
    this.button = button;
  };

  public abstract clickHandler(): void;

  protected static assertIskKeyboard(
    keyboard: TVirtualKeyboardProvideInterface | undefined,
  ): asserts keyboard is TVirtualKeyboardProvideInterface {
    if (!keyboard) {
      throw new Error('Не передана клавиатура');
    }
  }

  protected static assertIskButton(
    button: Ref<VirtualKeyboardButtonInterface> | undefined,
  ): asserts button is Ref<VirtualKeyboardButtonInterface> {
    if (!button) {
      throw new Error('Не передана клавиатура');
    }
  }
}
