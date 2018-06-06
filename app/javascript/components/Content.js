import React, { Component } from 'react'

export default class Content extends Component {
  componentWillMount() {
    console.log("Component will mount");
  }

  componentDidMount = () => {
    console.log("Component did mount")
  }

  componentWillReceiveProps(newProps) {
    console.log("Component will receive props");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate() {
    console.log("Component will update");
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log("Component did update");
  }

  componentWillUnmount = () => {
    console.log("Component will unmount");
  }

  render() {
    return (
      <div>
        <h3>This is my number: {this.props.myNumber}</h3>
      </div>
    )
  }
}
