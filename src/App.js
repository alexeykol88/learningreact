import React, { Component } from 'react';
import 'prop-types';
import './App.css';
import './AppData';
import Column from './components/column';
import Modalbox from './components/modalbox'
import Cardbtn from './components/cardbtn'

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

    handleCreateNewColumn = (press) => {
     fetch(urlColumn, {
       method : "POST",
       headers : {
         'Accept' : 'application/json',
         'Content-Type' : 'application/json'
       },
       body :JSON.stringify({
         "title" : this.state.newColumnName
       })
     })
     .then(res=>res.json())
     .then(newColumn => {
      const { title, cards } = newColumn;
      this.setState( {columns : this.state.columns.concat(this.newObj = {
        name: title,
        cards : cards })})
     })
    }

    handleClearAllColumns = () => {
     this.setState({
       columns : []
     })
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
        <button className="columnBtn" onClick = {this.press} >Add static column</button>
      </div>
      <div>
        <button className="columnBtn" onClick = {this.handleCreateNewColumn} >Add column via server </button>
      </div>
      <div>
        <button className="columnBtn" onClick = {this.handleAddColumnsFromServer} >Show all columns from server</button>
      </div>
      <div>
        <button className="columnBtn" onClick = {this.handleClearAllColumns} >Clear page from columns</button>
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







