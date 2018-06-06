import React, { Component } from 'react'
import Content from './Content';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: 0
    }
  }

  setNewNumber = () => {
    this.setState({data: this.state.data + 1})
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.setNewNumber}>button</button>
        <Content myNumber={this.state.data} />
      </div>
    )
  }
}
