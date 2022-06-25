import { computed, ref } from 'vue';
import { getConfig } from '../config';

const checkPressedKeys = (pressedKeys: string[]) => {
  if (pressedKeys.length > 2) {
    return false;
  }

  if (
    (pressedKeys.includes('ShiftLeft') || pressedKeys.includes('ShiftRight')) &&
    (pressedKeys.includes('AltLeft') || pressedKeys.includes('AltRight'))
  ) {
    return true;
  }

  return false;
};

export const useLangs = () => {
  const allButton = getConfig();
  const currentLang = ref('en');
  const langs = Object.keys(allButton);
  const langButtons = computed(() => {
    const buttons = allButton[currentLang.value];
    if (!buttons) {
      throw new Error('Не найден набор кнопок');
    }
    return buttons;
  });

  const getCurrentLang = () => currentLang;

  const getLangButtons = () => langButtons;

  const switchLang = () => {
    const index = langs.indexOf(currentLang.value);

    currentLang.value = index === langs.length - 1 ? (langs[0] as string) : (langs[index + 1] as string);
  };

  return {
    getCurrentLang,
    getLangButtons,
    switchLang,
    checkPressedKeys,
  };
};
