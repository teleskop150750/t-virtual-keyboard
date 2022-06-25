import { computed, type ComputedRef } from 'vue';
import type { VirtualKeyboardButtonInterface } from '../types/types';

const getMapButtons = (buttons: ComputedRef<VirtualKeyboardButtonInterface[]>) =>
  computed(() => {
    const map = {} as Record<number, VirtualKeyboardButtonInterface[]>;
    const sortedButtons = sortButtons(buttons.value);

    sortedButtons.forEach((button) => {
      const { row: rowIndex } = button.position;
      const row = map[rowIndex];

      if (typeof row === 'undefined') {
        map[rowIndex] = [];
      }

      (map[rowIndex] as VirtualKeyboardButtonInterface[]).push(button);
    });

    return map;
  });

const sortButtons = (buttons: VirtualKeyboardButtonInterface[]) =>
  buttons.sort((a, b) => a.position.index - b.position.index);

export function useMapButtons() {
  return { getMapButtons };
}
