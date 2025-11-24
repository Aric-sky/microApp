import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/micro-subapp/',
  plugins: [react()],
  server: {
    port: 4001,
  },
});
