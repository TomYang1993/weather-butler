import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
export default class App extends React.Component {
  constructor() {
    super();
    this.name = "MyComponent";

    // this.handleClick2 = this.handleClick1.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', (event) => console.log("document",event));
  }

  handleClick1() {
    alert(this.name);
  }

  handleClick3 = (event) => {
    this.setState({ value: event.target.value })
    console.log(event)
    // console.log(this.state.value)
  }

  handleClick2= (event) => {
    event.nativeEvent.stopImmediatePropagation();
    console.log("handle click 2");
    console.log(event);
  }

  render() {
    console.log("does it render twice");
    return (
      <div>
        {/* <button onClick={this.handleClick1()}>click 1</button> */}
        {/* <button onClick={this.handleClick1}>click 2</button> */}
        <button onClick={this.handleClick2}>click 3</button>
        <button onClick={this.handleClick3}>click 4</button>
      </div>
    );
  }
}
