<script setup lang="ts">
import { computed, toRef } from 'vue';
import { useKeyboardProvider } from '../../../composables/useKeyboardProvider';
import type { VirtualKeyboardButtonInterface } from '../../../types/types';
import { ButtonFactory } from './classes/ButtonFactory';

defineOptions({
  name: 'TVirtualKeyboardButtonBackspace',
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

const buttonClasses = computed(() => [
  't-virtual-keyboard-button',
  keyboard.pressedKeys.value.includes(props.button.code) && 't-virtual-keyboard-button__indicator--pressed',
]);
</script>

<template>
  <button :class="buttonClasses" type="button" @click="clickHandler">
    <span class="t-virtual-keyboard-button__label">
      {{ props.button.label }}
    </span>
  </button>
</template>
