import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    rollupOptions: {
        input: {
          main: 'src/index.html',
          'user-center': 'src/user-center.html'
        },
    },
    outDir: '../dist'
  },
  server: {
    port: 9878
  }
}