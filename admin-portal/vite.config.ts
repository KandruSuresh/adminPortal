import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from 'tailwindcss'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react(),
      federation({
        name: "admin-portal-app",
        remotes: {
          "webstudio": `${env.VITE_HOST}/assets/remoteEntry.js`,       
        },
        shared: ["react", "react-dom"],
      }),
    ],
    css: {
      postcss: {
        plugins: [tailwindcss()]
      }
    },
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    }
  };
});
