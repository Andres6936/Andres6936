import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import { resolveBasename } from "./scripts/resolver";

// https://vitejs.dev/config/
export default defineConfig({
  base: resolveBasename(),
  plugins: [reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
});
