import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// For progressive web app
import { VitePWA } from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react(),VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Weather App',
        short_name: 'Weather',
        theme_color: '#0f172a'
      }
    })],
})


