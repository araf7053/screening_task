import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy :{
      '/api' : "https://screening-task-backend-ivcq.onrender.com/api/greet",
    },
},
  plugins: [react()],
})
