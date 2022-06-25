import { initialButtons } from './buttons';
import type { VirtualKeyboardButtonInterface } from './types/types';

let localButtons = initialButtons;

const setConfig = (buttons: Record<string, VirtualKeyboardButtonInterface[]>): void => {
  localButtons = { ...localButtons, ...buttons };
};

const getConfig = () => localButtons;

export { getConfig, setConfig };
