import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Field extends Component {
  _renderText(language) {
    return language === 'english' ? 'Name' : 'Nombre'
  }

  render() {
    return (
      <div className="ui field">
        <label>
          <LanguageContext.Consumer>{value => this._renderText(value.language)}</LanguageContext.Consumer>
        </label>
        <input />
      </div>
    )
  }
}

export default Field
