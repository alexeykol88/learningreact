import React, { Component } from 'react'
import './card.css'
import PropTypes from'prop-types';

const text = `This is text for card component. Created by Alexey for React App. React was created by Jordan Walke, a software engineer at Facebook.`;
export default class Card extends Component {
  render() {
    const { items } = this.props;
    console.log(items);
    return (
      <div className="maindiv">
      <div>{this.props.title}</div>
      <br/>
      <button className="FirstButton">Button</button>
      <button className="SecondButton">Button2</button>
      <br/>
      </div>
    )
  }
}

Card.propTypes = {
    title : PropTypes.string
}
Card.defaultProps ={
  title : 'Default Title'
}
