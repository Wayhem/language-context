import React, { Component } from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'

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
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    )
  }
}

export default App
