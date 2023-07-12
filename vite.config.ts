import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/wasmGBA/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    WASMGBA_VERSION: JSON.stringify(process.env.npm_package_version),
    WASMGBA_REPO_URL: JSON.stringify(process.env.npm_package_repository_url),
    WASMGBA_OSS_LICENSES_URL: JSON.stringify(
      `${process.env.npm_package_repository_url}#Copyright`
    ),
    MGBA_UPSTREAM_REPO_URL: JSON.stringify(
      "https://github.com/thenick775/mgba/tree/c3d5ca5d5ffd47b2866fe6e40a7d551d845e512a"
    ),
  },
});
