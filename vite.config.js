import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/', // sempre na raiz, tanto local quanto produção
    plugins: [react()],
});
