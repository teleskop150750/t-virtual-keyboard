import { withInstall } from '../../helpers/withInstall';
import VirtualKeyboard from './src/TVirtualKeyboard.vue';

export const TVirtualKeyboard = withInstall(VirtualKeyboard);

export type { TVirtualKeyboardProvideInterface } from './src/types';
