export const  useURl = () => {
  const APIURL = useRuntimeConfig().public.API_URL

  return {
    APIURL
  }
}


export const useAPIKey = () => {
  const APIKEY = useRuntimeConfig().public.API_KEY

  return {
    APIKEY
  }

}