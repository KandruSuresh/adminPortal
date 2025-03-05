import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

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
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    }
  };
});
