import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import path from 'node:path'; 

export default defineConfig({
  plugins: [
    vue(),
   
    dts({
      insertTypesEntry: true, 
      entryRoot: path.resolve(__dirname, 'src'),
      outDir: path.resolve(__dirname, 'dist'), 
      exclude: ['**/*.stories.ts', '**/node_modules/**'], 
    }),
  ],
  build: {
    target: 'es2022',
    copyPublicDir: false,
    cssCodeSplit: false, 
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), 
      name: 'UiLibrary', 
      formats: ['es', 'umd'],
      fileName: (format) => `ui-library.${format}.js`, 
    },
    rollupOptions: {
      external: ['vue'], 
      output: {
        globals: {
          vue: 'Vue', 
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'ui-library.css'; 
          }
          return assetInfo.name;
        },
      },
    },
  },
});