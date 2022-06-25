<script setup lang="ts">
import { onDeactivated, onMounted, provide, ref } from 'vue';
import TVirtualKeyboardButtonDynamic from '../../TVirtualKeyboardButton/src/TVirtualKeyboardButtonDynamic.vue';
import { useLangs } from '../../../composables/useLangs';
import { useMapButtons } from '../../../composables/useMapButtons';
import type { TVirtualKeyboardProvideInterface } from './types';
import type { VirtualKeyboardButtonInterface } from '../../../types/types';

defineOptions({
  name: 'TVirtualKeyboard',
});

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (event: 'update:model-value', text: string): void;
  (event: 'click-button', button: VirtualKeyboardButtonInterface): void;
}>();

const isShift = ref(false);
const isCaps = ref(false);

const { getCurrentLang, checkPressedKeys, switchLang, getLangButtons } = useLangs();
const lang = getCurrentLang();
const buttons = getLangButtons();

const { getMapButtons } = useMapButtons();
const mapButtons = getMapButtons(buttons);

const pressedKeys = ref<string[]>([]);

const keydownHandler = (event: KeyboardEvent) => {
  if (event.code.includes('Alt')) {
    event.preventDefault();
  }

  if (pressedKeys.value.includes(event.code)) {
    return;
  }

  pressedKeys.value = [...pressedKeys.value, event.code];

  if (checkPressedKeys(pressedKeys.value)) {
    switchLang();
  }
};

const keyupHandler = (event: KeyboardEvent) => {
  if (event.code.includes('Left') || event.code.includes('Right')) {
    const code = event.code.replace(/Left|Right/, '');
    pressedKeys.value = pressedKeys.value.filter((key) => key.replace(/Left|Right/, '') !== code);
  } else {
    pressedKeys.value = pressedKeys.value.filter((key) => key !== event.code);
  }
};

onMounted(() => {
  document.addEventListener('keydown', keydownHandler);
  document.addEventListener('keyup', keyupHandler);
});

onDeactivated(() => {
  document.removeEventListener('keydown', keydownHandler);
  document.removeEventListener('keyup', keyupHandler);
});

const emitClickButton = (button: VirtualKeyboardButtonInterface) => {
  emit('click-button', button);
};

provide<TVirtualKeyboardProvideInterface>('TVirtualKeyboardProvide', {
  pressedKeys,
  isShift,
  isCaps,
  setShift: (value: boolean) => {
    isShift.value = value;
  },
  setCaps: (value: boolean) => {
    isCaps.value = value;
  },
  getText: () => props.modelValue,
  updateText: (text: string) => {
    emit('update:model-value', text);
  },
  emitClickButton,
});
</script>

<template>
  <div class="t-virtual-keyboard">
    <div class="t-virtual-keyboard__header">
      <span class="t-virtual-keyboard__lang">{{ lang.toUpperCase() }}</span>
    </div>
    <div class="t-virtual-keyboard__body">
      <div v-for="(row, index) in Object.keys(mapButtons)" :key="index" class="t-virtual-keyboard__row">
        <template v-for="button in mapButtons[Number(row)]" :key="button.position.row + '_' + button.position.index">
          <TVirtualKeyboardButtonDynamic class="t-virtual-keyboard__button" :button="button" :type="button.type" />
        </template>
      </div>
    </div>
    <div class="t-virtual-keyboard__footer">
      <p class="t-virtual-keyboard__text">Нажмите Alt+Shift для переключения языка</p>
    </div>
  </div>
</template>
