import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import aliases from 'vite-aliases';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
