import type { Ref } from 'vue';
import type { VirtualKeyboardButtonInterface } from '../../../../types/types';
import { AbstractButton } from './AbstractButton';

export class ButtonDefault extends AbstractButton {
  public clickHandler = () => {
    const { keyboard, button } = this;

    ButtonDefault.assertIskKeyboard(keyboard);
    ButtonDefault.assertIskButton(button);

    keyboard.updateText(keyboard.getText() + this.getButtonValue(button));
    keyboard.setShift(false);
    keyboard.emitClickButton(button.value);
  };

  public getButtonValue = (button: Ref<VirtualKeyboardButtonInterface>) => {
    if (!button.value.capsValue) {
      return button.value.value;
    }

    const { keyboard } = this;
    ButtonDefault.assertIskKeyboard(keyboard);

    let list = [button.value.value, button.value.capsValue];

    if (keyboard.isCaps.value) {
      list = list.reverse();
    }

    if (keyboard.isShift.value) {
      list = list.reverse();
    }

    return list[0];
  };

  public getButtonLabel = (button: Ref<VirtualKeyboardButtonInterface>) => {
    if (!button.value.capsLabel) {
      return button.value.label;
    }

    const { keyboard } = this;
    ButtonDefault.assertIskKeyboard(keyboard);

    let list = [button.value.label, button.value.capsLabel];

    if (keyboard.isCaps.value) {
      list = list.reverse();
    }

    if (keyboard.isShift.value) {
      list = list.reverse();
    }

    return list[0];
  };
}
