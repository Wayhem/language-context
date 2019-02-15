import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Button extends Component {
  _renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Enviar'
  }

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {(value) => this._renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }
}

export default Button
