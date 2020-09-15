import React, { Component } from 'react'
import Child from '../Myself'
import Three from './three'

export default class index extends Component {
  state = {
    aa: 1
  }
  handleChange = () => {
    this.setState((preState)=>({
      aa: preState.aa + 1
    }))
  }
  render() {
    return (
      <div>
        <Child/>
        <Three text={this.state.aa} onChange={this.handleChange}/>
      </div>
    )
  }
}
