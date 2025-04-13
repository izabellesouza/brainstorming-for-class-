import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/brainstorming-for-class-/',  // mantém como estava
    plugins: [react()],
});
