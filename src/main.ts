import { createApp } from 'vue';
import App from './App.vue';
import TVirtualKeyboard from './components/index';

import './components/components.css';
import { ru } from './ru';

const app = createApp(App);
app.use(TVirtualKeyboard, ru);
app.mount('#app');
