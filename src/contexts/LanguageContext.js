import React, { Component } from 'react'

export const Context = React.createContext('english')

export class LanguageStore extends Component {
  state = {
    language: 'english'
  }

  _onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return <Context.Provider value={{ ...this.state, onLanguageChange: this._onLanguageChange }}>{this.props.children}</Context.Provider>
  }
}

export default Context
