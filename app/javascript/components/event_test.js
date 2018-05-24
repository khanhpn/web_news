import React, { Component } from 'react'

export default class EventTest extends Component {
  constructor(props) {
    super(props);
    this.onHandleClick1 = this.onHandleClick1.bind(this);
  }
  onHandleClick = () => {
    console.log(this.props.name);
  }

  onHandleClick1() {
    console.log("object" + this.props.name);
  }
  render() {
    return (
      <div>
        <button type="button" className="" onClick={this.onHandleClick}>button</button>
        <button type="button" className="" onClick={this.onHandleClick1}>button1</button>
      </div>
    )
  }
}
