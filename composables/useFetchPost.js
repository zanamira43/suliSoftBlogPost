export default () => {

  // getting api url & api key form run time config 
  const {APIURL} = useURl()
  const {APIKEY} = useAPIKey()
  
  // adding new post to API backend
  const addPost = async (post) => {
    await $fetch(`${APIURL}/blogs`, {
      method: 'POST',
      body: post,   
      headers: {
        'Accept': 'application/json',
        'x-key': APIKEY
      } 
    })
  }
  
  return {
    addPost
  }
}