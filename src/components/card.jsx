import React, { Component } from 'react'
import './card.css'
import PropTypes from 'prop-types';

export default class Card extends Component {
  handleRemoveButtonClick = () => {
    this.props.onRemove(this.props.id);
 }
  render() {
    const { items } = this.props;
    console.log(items);
    return (
      <div className="maincarddiv">
      <button onClick={this.handleRemoveButtonClick} className="closecardbtn">X</button>
      <div>{this.props.title}</div>
      <br/>
      <div>{this.props.description}</div>
      <div className="cardbuttondiv">
      <button className="FirstButton">Button</button>
      <button className="SecondButton">Button</button>
      </div>
      <br/>
      </div>
    )
  }
}

Card.propTypes = {
    title : PropTypes.string,
    description : PropTypes.string
}
Card.defaultProps ={
  title : 'Default Title',
  description : 'Default description'
}
