import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        hello: 'hello.html',
        say_hello: 'say-hello.html',
        style: 'style.html',
        score: 'score.html', // Corrected the file name to match the context
        todolist: 'todolist.html', // Corrected the file name to match the context
        contact: 'contact.html', // Corrected the file name to match the context
        note: 'note.html', // Corrected the file name to match the context
      }
    }
  } 
})
