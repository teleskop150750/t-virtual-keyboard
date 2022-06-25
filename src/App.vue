<script setup lang="ts">
import { ref } from 'vue';
import type { VirtualKeyboardButtonInterface } from './types/types';

const text = ref('');

const clickButtonHandler = (button: VirtualKeyboardButtonInterface) => {
  console.log(button);
};
</script>

<template>
  <div>
    <textarea id="field" v-model="text" name="field" cols="30" rows="10"></textarea>
    <TVirtualKeyboard v-model="text" @click-button="clickButtonHandler" />
  </div>
</template>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
  padding: 3rem;
}

textarea {
  font-size: 1.5rem;
}

div {
  display: grid;
  grid-template-columns: 100%;
  gap: 5rem;
}
</style>
