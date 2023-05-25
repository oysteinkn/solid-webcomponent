import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from 'path';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    lib: {
      entry: path.resolve(__dirname, 'src/WebComponent.tsx'),
      name: 'solid-webcomponent'
    },
  },
});
