import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // The @vitejs/plugin-react handles JSX and Fast Refresh for React.
    react({
      // This setting tells Vite to process both `.jsx` and `.js` files
      // for JSX transformation, which is necessary for some environments.
      include: '**/*.{jsx,js}',
    }),
  ],
});
