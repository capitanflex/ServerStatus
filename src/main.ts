import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import { useGameStore } from './store/store.js';

const app = createApp(App);
app.use(createPinia());
app.provide('gameStore', useGameStore);

app.mount('#app');