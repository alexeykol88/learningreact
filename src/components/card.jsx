import React, { Component } from 'react'
import './card.css'

const text = `This is text for card component. Created by Alexey for React App. React was created by Jordan Walke, a software engineer at Facebook.`;
export default class Card extends Component {
  render() {
    return (
      <div className="maindiv">
      <div>{text}</div>
      <br/>
      <button className="FirstButton">Button</button>
      <button className="SecondButton">Button2</button>
      <br/>
      </div>
    )
  }
}
