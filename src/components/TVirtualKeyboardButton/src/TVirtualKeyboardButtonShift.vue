<script setup lang="ts">
import { computed, toRef } from 'vue';
import { useKeyboardProvider } from '../../../composables/useKeyboardProvider';
import type { VirtualKeyboardButtonInterface } from '../../../types/types';
import { ButtonFactory } from './classes/ButtonFactory';

defineOptions({
  name: 'TVirtualKeyboardButtonShift',
});

const props = defineProps<{
  button: VirtualKeyboardButtonInterface;
}>();

const { getKeyboardProvider } = useKeyboardProvider();
const keyboard = getKeyboardProvider();
const button = ButtonFactory.make(props.button.type);
button.setKeyboard(keyboard);
button.setButton(toRef(props, 'button'));

const indicatorClasses = computed(() => [
  't-virtual-keyboard-button__indicator',
  keyboard.isShift.value && 't-virtual-keyboard-button__indicator--active',
]);

const clickHandler = () => {
  button.clickHandler();
};

const buttonClasses = computed(() => [
  't-virtual-keyboard-button',
  keyboard.pressedKeys.value.includes(props.button.code) && 't-virtual-keyboard-button--pressed',
]);
</script>

<template>
  <button :class="buttonClasses" type="button" @click="clickHandler">
    <span class="t-virtual-keyboard-button__label">
      {{ props.button.label }}
    </span>
    <span :class="indicatorClasses"></span>
  </button>
</template>
