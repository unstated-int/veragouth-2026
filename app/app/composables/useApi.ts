export const useApi = () => {
  const config = useRuntimeConfig()
  
  const fetchDocs = async (collection: string) => {
    return await $fetch(`${config.public.payloadUrl}/api/${collection}`)
    /* const url = `${config.public.payloadBaseUrl}/api/${collection}`
    console.log('[useApi] fetching:', url)
    const result = await $fetch(url)
    console.log('[useApi] response:', result)
    return result */
  }

  return { fetchDocs }
}