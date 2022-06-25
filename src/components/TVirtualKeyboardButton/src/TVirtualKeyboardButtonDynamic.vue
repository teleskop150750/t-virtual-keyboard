<script setup lang="ts">
import { computed } from 'vue';
import ButtonDefault from './TVirtualKeyboardButtonDefault.vue';
import ButtonCaps from './TVirtualKeyboardButtonCaps.vue';
import ButtonShift from './TVirtualKeyboardButtonShift.vue';
import ButtonBackspace from './TVirtualKeyboardButtonBackspace.vue';
import type { VirtualKeyboardButtonType } from '../../../types/types';

defineOptions({
  name: 'TVirtualKeyboardButtonDynamic',
  components: {
    ButtonDefault,
    ButtonCaps,
    ButtonShift,
    ButtonBackspace,
  },
});

const props = defineProps<{
  type: VirtualKeyboardButtonType;
}>();

const componentName = computed(() => `Button${(props.type[0] as string).toUpperCase() + props.type.slice(1)}`);
</script>

<template>
  <component :is="componentName" v-bind="$attrs" />
</template>
