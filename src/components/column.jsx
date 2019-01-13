import React, { Component } from 'react'
import PropTypes from'prop-types';
import './column.css'
import Card from "./card"

export default class Column extends Component {
  render() {
    const { items } = this.props;
console.log(items);
    return ( 
      <div className = "childdiv">
        <h1>{this.props.name}</h1>
        {this.props.cards.map((cards, index) => {
  return (
    <Card title={cards.title} key={index}/>
  )
})}
      </div>
    )
  }
}


Column.propTypes = {
  name : PropTypes.string,
  cards : PropTypes.array
}
Column.defaultProps ={
   name : 'Default name',
   cards : PropTypes.arrayOf(PropTypes.shape({title:PropTypes.string}))
}



