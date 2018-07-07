import React from 'react'
import moment from 'moment'

const Post = ({title, time, description, image}) => {

return (
  <div>
  <h3>{title}</h3>
  <h5>{moment.unix(time).format('Do MMMM YYYY')}</h5>
  <p>{description}</p>
  <img src={image ? image : ""}></img>
  </div>
)
}
export default Post
