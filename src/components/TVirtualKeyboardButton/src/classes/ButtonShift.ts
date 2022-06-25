import { AbstractButton } from './AbstractButton';

export class ButtonShift extends AbstractButton {
  public clickHandler = () => {
    const { keyboard, button } = this;

    ButtonShift.assertIskKeyboard(keyboard);
    ButtonShift.assertIskButton(button);

    keyboard.setShift(!keyboard.isShift.value);
    keyboard.emitClickButton(button.value);
  };
}
