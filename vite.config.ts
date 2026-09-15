import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS
    ? `/${process.env.GITHUB_REPOSITORY_NAME}/`
    : "/",
  plugins: [reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
});
