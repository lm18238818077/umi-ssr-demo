import React, { Component } from 'react'
import ThemeContext from './context'

export default class three extends Component {
  constructor(props){
    super(props)
    console.log('constructor')
  }
  state = {
    data: 1
  }
  static getDerivedStateFromProps(props, state){
    console.log('getDeriviedStateFormProps')
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(){
    return 'aaa'
    console.log('getSnapshotBeforeUpdate')
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  componentDidUpdate(a,b,c){
    console.log('componentDidUpdate',a,b,c)
  }

  handleChange1 = () => {
    this.setState((preState)=>({
      data: preState.data + 1
    }))
  }

  handleChange2 = () => {
    this.props.onChange()
  }

  render() {
    const { text } = this.props
    const { data } = this.state
    console.log('render')
    return (
      <div>
        <div>
    <button onClick={this.handleChange1}>state{data}</button>
    <button onClick={this.handleChange2}>props{text}</button>
        </div>
      </div>
    )
  }
}
