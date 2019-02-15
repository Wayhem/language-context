import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Field extends Component {
  _renderText(value) {
    return value === 'english' ? 'Name' : 'Nombre'
  }

  render() {
    return (
      <div className="ui field">
        <label>
          <LanguageContext.Consumer>
            {value => this._renderText(value)}
          </LanguageContext.Consumer>
        </label>
        <input />
      </div>
    )
  }
}

export default Field
