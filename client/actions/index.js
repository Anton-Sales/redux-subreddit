import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const CLEAR_ERROR = 'CLEAR_ERROR'
export const SET_WIKI = 'SET_WIKI'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const receiveWikiPosts = (posts) => { 
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export const clearError = () => {
  return {
    type: CLEAR_ERROR   
  }
}


export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .then(res => {
        dispatch(receivePosts(res.body))
        console.log(res.body)
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export function fetchWikiPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    dispatch(clearError())
    return request
      .get(`/api/v1/wiki/?action=opensearch&search=${subreddit}`)
      .then(res => {
        dispatch({type: SET_WIKI})          
        dispatch(receiveWikiPosts(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })  
  }
}
