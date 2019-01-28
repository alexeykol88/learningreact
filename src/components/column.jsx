import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './column.css'
import Card from "./card"

export default class Column extends Component {
  state = {
    card : this.props.cards
  }
  handleRemoveCard = (id) => {
    
        this.state.card.map((card,index) => {
              if (card.columnId === this.props.column._id)
              {
                this.setState({
                  card : this.state.card.splice(index,1)
                })
              }
          })
        
  } 
  render() {
    return ( 
      <div className = "columndiv">
        <h1 className="columnheader">{this.props.name}</h1>
        {this.state.card.map((card, index) => {
          if(index <= 2)
         return (
            <Card onRemove={(id) => this.handleRemoveCard(id)} title={card.title} description={card.description} key={index}/>
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



