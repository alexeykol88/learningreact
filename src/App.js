import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'prop-types';
import './App.css';
import './AppData';
import Column from './components/column';
import Modalbox from './components/modalbox'
import Cardbtn from './components/cardbtn'
import AppData from './AppData';

const trying = "Trying something in React";
const urlColumn = "http://localhost:3000/columns"; 

class App extends Component{
  state = {
    columns : [],
    newColumnName : '',
  }

  handleCardElOpen = () => {this.setState({cardbtnvisible : true})}
  handleCardElClose = () => {this.setState({cardbtnvisible:false})}

  handleNewColumnNameChange = (event) => {
    this.setState({newColumnName : event.target.value});
  }
  handleAddColumnsFromServer = (pressed) => {
    fetch(urlColumn)
   .then(res => res.json())
    .then(newcolumns => newcolumns.forEach(newcolumn => {

      const { title, cards } = newcolumn;
      this.setState( {columns : this.state.columns.concat(this.newObj = {
        name: title,
        cards : cards })})

    }))
    }
    handleCreateNewColumn = (pressed) => {
      fetch(urlColumn, {  
        method: 'post', 
        mode : 'cors',
        headers: {  
          "Content-type": "application/json",
        },  
        body: {
          "title" : "Dobav title"
        }  
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log("error",error))
    }
press = (pressed) => {
  this.setState( {columns : this.state.columns.concat(this.newObj = {
    name: this.state.newColumnName,
    cards : [] })})
}
  render() {
  return (
     <div className = "container">
      <div>
      <h1 className = "trying">{trying}</h1>
        <Cardbtn/>
      </div>
      <div>
        <Modalbox title="Some instruction for app"/>
      </div>
      <div>
        <button className="columnBtn" onClick = {this.press} >Add column!</button>
      </div>
      <div>
        <button className="columnBtn" onClick = {this.handleAddColumnsFromServer} >Test fetch !</button>
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







