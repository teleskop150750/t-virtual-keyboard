import { AbstractButton } from './AbstractButton';

export class ButtonCaps extends AbstractButton {
  public clickHandler = () => {
    const { keyboard, button } = this;

    ButtonCaps.assertIskKeyboard(keyboard);
    ButtonCaps.assertIskButton(button);

    keyboard.setCaps(!keyboard.isCaps.value);
    keyboard.emitClickButton(button.value);
  };
}
