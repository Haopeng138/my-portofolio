import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
    base: "https://github.com/Haopeng138/my-portofolio",
    plugins: [vue()],
    optimizeDeps: {
        include: ["vue", "@vueuse/core"], // Add other dependencies if needed
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return "vendor";
                    }
                },
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "${path.resolve(
                    __dirname,
                    "./src/styles/tools/_sassMagic.scss"
                )}";`,
            },
        },
    },
});
