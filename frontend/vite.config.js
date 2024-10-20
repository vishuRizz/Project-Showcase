import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Manually split vendor modules into separate chunks
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    },
    // Increase the chunk size warning limit (in KB) if needed
    chunkSizeWarningLimit: 1000, // Set to 1MB (1000KB)
  }
});
