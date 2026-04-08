export const useApi = () => {
  const config = useRuntimeConfig()
  
  const fetchDocs = async (collection: string) => {
    return await $fetch(`${config.public.payloadUrl}/api/${collection}`)
  }

  return { fetchDocs }
}