// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    payloadApiKey: process.env.PAYLOAD_SECRET,
    public: {
      payloadBaseUrl: 'https://veragouth-2026-backend.vercel.app/'
    }
  },
})
