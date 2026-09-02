import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const host = process.env.TAURI_DEV_HOST;

export default defineConfig(async () => ({
	plugins: [
		// Must come before @vitejs/plugin-react (JSX transform).
		tanstackRouter({
			target: 'react',
			autoCodeSplitting: true,
			generatedRouteTree: 'src/__generatedRouteTree.tsx',
			enableRouteTreeFormatting: true,
			// Next.js "app folder" style: folders are route segments,
			// `layout.tsx` wraps a segment, `page.tsx` renders it.
			routesDirectory: 'src/pages',
			routeToken: 'layout',
			indexToken: 'page',
		}),
		react(),
		tailwindcss(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	clearScreen: false,
	server: {
		port: 1420,
		strictPort: true,
		host: host || false,
		hmr: host
			? {
					protocol: 'ws',
					host,
					port: 1421,
				}
			: undefined,
		watch: {
			ignored: ['**/src-tauri/**'],
		},
	},
}));
