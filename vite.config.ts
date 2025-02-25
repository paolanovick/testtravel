import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/testtravel/",  // Ruta base adecuada para tu proyecto
});
