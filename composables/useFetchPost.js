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

  // getting list of blog posts function
  const getPosts = async () => {    
    return await useFetch(`${APIURL}/blogs`, {
     headers: {
      'Accept': 'application/json',
      'x-key': APIKEY   
     }
    })
  }


  // delete blog post by id ==> function
  const deletePost = async (id) => {
    await $fetch(`${APIURL}/blogs/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'x-key': APIKEY
      }
    })
  }

  return {
    addPost,
    getPosts,
    deletePost
  }
}