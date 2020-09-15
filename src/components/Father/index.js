import React, { Component } from 'react'
import Second from './second'
import ThemeContext from './context'
export default class index extends Component {
  state = {
    text: 'cjj'
  }
  changeState = (data) => {
    this.setState({
      text: data
    })
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={{
                sms: '短信服务',
                call: '电话服务',
                text: this.state.text,
                changeState:this.changeState
            }}>
          <Second/>
        </ThemeContext.Provider>
      </div>
    )
  }
}
