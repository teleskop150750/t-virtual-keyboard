<script setup lang="ts">
import { computed, toRef } from 'vue';
import { useKeyboardProvider } from '../../../composables/useKeyboardProvider';
import type { VirtualKeyboardButtonInterface } from '../../../types/types';
import { ButtonFactory } from './classes/ButtonFactory';

defineOptions({
  name: 'TVirtualKeyboardButtonDefault',
});

const props = defineProps<{
  button: VirtualKeyboardButtonInterface;
}>();

const { getKeyboardProvider } = useKeyboardProvider();
const keyboard = getKeyboardProvider();
const button = ButtonFactory.make(props.button.type);
button.setKeyboard(keyboard);
button.setButton(toRef(props, 'button'));

const clickHandler = () => {
  button.clickHandler();
};

const label = computed(() => {
  if (!props.button.capsLabel) {
    return props.button.label;
  }

  let list = [props.button.label, props.button.capsLabel];

  if (keyboard.isCaps.value) {
    list = list.reverse();
  }

  if (keyboard.isShift.value) {
    list = list.reverse();
  }

  return list[0];
});

const smallLabel = computed(() => {
  if (!props.button.capsLabel) {
    return null;
  }

  let list = [props.button.label, props.button.capsLabel];

  if (keyboard.isCaps.value) {
    list = list.reverse();
  }

  if (keyboard.isShift.value) {
    list = list.reverse();
  }

  return list[1];
});

const buttonClasses = computed(() => [
  't-virtual-keyboard-button',
  !!props.button.capsLabel && 't-virtual-keyboard-button--fix',
  keyboard.pressedKeys.value.includes(props.button.code) && 't-virtual-keyboard-button--pressed',
]);
</script>

<template>
  <button :class="buttonClasses" type="button" @click="clickHandler">
    <span class="t-virtual-keyboard-button__label">
      {{ label }}
    </span>
    <span v-if="smallLabel" class="t-virtual-keyboard-button__small-label">
      {{ smallLabel }}
    </span>
  </button>
</template>
