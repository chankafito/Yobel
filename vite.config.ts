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
      chunkSizeWarningLimit: 1000, // aumentar límite para evitar warnings
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes("node_modules")) {
              // Solo separar lucide-react, dejar react/react-dom juntos
              if (id.includes("lucide-react")) return "vendor_lucide";
              // No separar react/react-dom/scheduler (dejarlos en el chunk principal de vendor)
            }
          }
        }
      }
    },
    server: {
      port: 3000,
      open: false,
    },
  })
}