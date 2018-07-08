import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import LoadWiki from './LoadWiki'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadSubreddit />
    <LoadWiki />
    <WaitIndicator />
    <SubredditList />
  </div>
)

export default App
