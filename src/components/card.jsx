import React, { Component } from 'react'
import './card.css'

const text = `This is text for card component. Created by Alexey for React App. React was created by Jordan Walke, a software engineer at Facebook.`;
export default class Card extends Component {
  render() {
    const { items } = this.props;
    console.log(items);
    return (
      <div className="maindiv">
      <div>{this.props.title}</div>
      <button className="FirstButton">Button</button>
      <button className="SecondButton">Button2</button>
      <br/>
      </div>
    )
  }
}
