import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  css: ['../assets/css/main.css'],

  devtools: { enabled: true },
  runtimeConfig: {
    payloadApiKey: process.env.VX_PAYLOAD_SECRET,
    public: {
      payloadBaseUrl: 'https://veragouth-2026-backend.vercel.app/'
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  future: {
    compatibilityVersion: 4,
  },
})
 