import React, { Component } from 'react';
import 'prop-types';
import './App.css';
import './AppData';
import Column from './components/column';
import AppData from './AppData';

const trying = "Trying something in React";

class App extends Component{
  state = {
    columns : AppData.columns,
    newColumnName : ''
  }
  handleNewColumnNameChange = (event) => {
    this.setState({newColumnName : event.target.value});
  }
press = (pressed) => {
  this.setState( {columns : this.state.columns.concat(this.newObj = {
    name: this.state.newColumnName,
    cards : [] })})
}
  render() {
  return (
     <div className = "container">
      <h1 className = "trying">{trying}</h1>
      <div>
        <button className="columnBtn" onClick = {this.press} >Add column!</button>
      </div>
      <div>
        <input className="nameInput" type="text" 
        onChange={this.handleNewColumnNameChange} placeholder="Name of the new column"/>
      </div>
      {this.state.columns.map((column,index) => {
           return (
            <Column name={column.name} cards={column.cards} key={index}/>
           )
      })}
    </div> 
  )
}
}

export default App;







