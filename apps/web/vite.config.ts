import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: '/',
    optimizeDeps: {
        include: ['@mxn2020/minions-bundles-knowledge-sdk'],
    },
    build: {
        commonjsOptions: {
            include: [/knowledge/, /node_modules/],
        },
    },
});
