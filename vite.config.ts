import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import requireTransform from 'vite-plugin-require-transform';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx({}), requireTransform({})],
});
