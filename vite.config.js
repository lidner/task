import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	base: '/',
	server: {
		port: 3000, // must be a port other than 5173
		host: true,
		watch: {
			usePolling: true,
		},
	},
})
