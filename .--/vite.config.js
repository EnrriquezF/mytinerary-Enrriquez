import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns';

// localhost URI
dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { //server URI changed to localhost:5173
    port: 5173,
  },
})

