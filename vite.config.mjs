import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const PORT = '3000';

  return {
    server: {
      open: true,
      port: PORT
    },
    define: {
      global: 'window'
    },
    resolve: {
      alias: [
        // Add your necessary aliases here
      ]
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false
        },
        less: {
          charset: false
        }
      },
      charset: false,
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              }
            }
          }
        ]
      }
    },
    plugins: [react(), jsconfigPaths()],
    logLevel: 'info',
    build: {
      outDir: 'dist', // Ensure the build directory is set to 'dist'
    },
  };
});
