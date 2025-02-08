export default () => {
  // getting api url & api key form run time config 
  const {APIURL} = useURl()
  const {APIKEY} = useAPIKey()
  

  // getting list of authors form API backend
  const getAuthors = async () => {
    return await useFetch(`${APIURL}/authors`, {
      headers: {
        'Accept': 'application/json',
        'x-key': APIKEY
      } 
    })
  }

  
  return {
    getAuthors
  }
}