import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'


dotenv.config()
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/user':'http://15.206.163.220:5555'
    },
  },
  plugins: [react()],
})
