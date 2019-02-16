import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends Component {
  _renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Enviar'
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>{value => this._renderSubmit(value.language)}</LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    )
  }
}

export default Button
