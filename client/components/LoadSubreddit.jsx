import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subReddit: 'newzealand'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    console.log(this.state.subReddit)
    this.setState({ subReddit: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(fetchPosts(this.state.subReddit))
  }

  render() {
    return (
      <div>
        <form action="">
          <input type="text" onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Get Subreddit</button>
        </form>
      </div>
    )
  }
}
export default connect()(LoadSubreddit)
