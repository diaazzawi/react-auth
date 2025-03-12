import react from "@vitejs/plugin-react";
import {resolve} from "node:path";
import {defineConfig} from "vite";
import dts from "vite-plugin-dts";
import {version} from "./package.json";

export default defineConfig({
  define: {
    VERSION: JSON.stringify(version),
  },
  plugins: [react(), dts()],
  build: {
    outDir: "dist",
    emptyOutDir: false,
    target: "es2015", // This necessary so that es output files get minified
    minify: true, // Minify the output
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@diaazzawi/react-auth",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "src/utils/*"],
      input: {
        // Ensure proper structure for subfolders
        main: resolve(__dirname, "src/index.ts"),
      },
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
