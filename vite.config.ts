import { defineConfig,  loadEnv  } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return defineConfig({
    base: env.VITE_BASE_URL || '/',
    plugins: [react(), tailwindcss()],
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: false,
    },
  })
}