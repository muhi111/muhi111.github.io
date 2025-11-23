import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/",
	plugins: [react(), tsconfigPaths()],
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						if (
							id.includes("@chakra-ui") ||
							id.includes("@emotion") ||
							id.includes("framer-motion") ||
							id.includes("@zag-js") ||
							id.includes("react-icons")
						) {
							return "ui";
						}
						if (
							id.includes("react") ||
							id.includes("scheduler") ||
							id.includes("@remix-run")
						) {
							return "vendor";
						}
						return "utils"; // その他のライブラリをまとめる
					}
				},
			},
		},
	},
});
