import React from 'react'
import {connect} from 'react-redux'

import Post from './Post'

const Subreddit = ({subreddits}) => {
console.log(subreddits)
  return (
    <div>
      {subreddits.map((post, i) =>
        <Post
          key={i}
          title={post.title}
          time={post.created}
          description={post.selftext}
          image={post.preview && post.preview.images.length > 0 ? post.preview.images[0].source.url : ""}
        />
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
