import React from 'react'
import { connect } from 'react-redux'
import { fetchGif, fetchWikiPosts } from '../actions'

class LoadWiki extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gif: 'cool'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    console.log(this.state.gif)
    this.setState({ gif: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(fetchWikiPosts(this.state.gif))
  }

  render() {
    return (
      <div>
        <form action="">
          <input type="text" onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Get Wiki</button>
        </form>
      </div>
    )
  }
}
export default connect()(LoadWiki)
