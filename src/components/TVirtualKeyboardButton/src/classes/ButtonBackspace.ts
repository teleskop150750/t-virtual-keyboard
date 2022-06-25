import { AbstractButton } from './AbstractButton';

export class ButtonBackspace extends AbstractButton {
  public clickHandler = () => {
    const { keyboard, button } = this;

    ButtonBackspace.assertIskKeyboard(keyboard);
    ButtonBackspace.assertIskButton(button);

    keyboard.setCaps(!keyboard.isCaps);
    keyboard.emitClickButton(button.value);
  };
}
