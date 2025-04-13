import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Sử dụng IP nội bộ của máy tính
    port: 5173, // Chọn port mà bạn muốn (mặc định là 3000)
  }
})
