import React, { Component } from 'react';
import ThemeContext from '../Father/context'

export default class index extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {({ text }) => (
            <div>
              {text}child
            </div>
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}
