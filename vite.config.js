import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    root: '.', // Garante que a raiz seja reconhecida (opcional, pois já é o padrão)
});
