import React, { Component } from 'react'
import UserCreate from './UserCreate'

class App extends Component {
  state = {
    language: 'english'
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select language:
          <i className="flag us" onClick={() => this.setState({ language: 'english' })} />
          <i className="flag es" onClick={() => this.setState({ language: 'spanish' })} />
        </div>
        <UserCreate />
      </div>
    )
  }
}

export default App
