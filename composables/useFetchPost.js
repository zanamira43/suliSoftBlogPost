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

  // get single blog post by id ==> function
  const getPost = async (id) => {
    return await useFetch(`${APIURL}/blogs/${id}`, {
      headers: {
        'Accept': 'application/json',
        'x-key': APIKEY
      }
    })
  }

  // update blog post by id ==> function
  const updatePost = async (id, editedpost) => {
    await $fetch(`${APIURL}/blogs/${id}`, {
      method: 'PUT',
      body: editedpost,
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
    getPost,
    updatePost,
    deletePost
  }
}