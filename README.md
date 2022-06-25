# 🌙 @teleskop150750/t-virtual-keyboard


## Usage

```bash
pnpm i @teleskop150750/t-virtual-keyboard
```

```ts
// main.ts
import { createApp } from "vue";
import App from "./App.vue";

import TVirtualKeyboard from "@teleskop150750/t-virtual-keyboard";
import "@teleskop150750/t-virtual-keyboard/styles";

import { ru } from "./ru";
const app = createApp(App);
app.use(TVirtualKeyboard, ru);
app.mount("#app");

```

```vue
<script setup lang="ts">
import { VirtualKeyboardButtonInterface } from '@teleskop150750/t-virtual-keyboard/dist/src/types/types';
import { ref } from 'vue';

const text = ref('');

const clickButtonHandler = (button: VirtualKeyboardButtonInterface) => {
  console.log(button);
};
</script>

<template>
  <div>
    <textarea v-model="text"></textarea>
    <TVirtualKeyboard v-model="text" @click-button="clickButtonHandler" />
  </div>
</template>
```
