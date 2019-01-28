import React, { Component } from 'react';
import 'prop-types'
import './App.css'
import './AppData'
import Column from './components/column'
import Modalbox from './components/modalbox'
import Cardbtn from './components/cardbtn'

const trying = "TRYING SOMETHING";
const urlColumn = "http://localhost:3000/columns"; 
const urlCards = "http://localhost:3000/cards"; 

class App extends Component{
  constructor(props){
    super(props);
    this.handleShowColumnList = this.handleShowColumnList.bind(this);
  }
  state = {
    columns : [],
    newColumnName : '',
    newCardName : '',
    newCardDesc : '',
    columnListTarget : {value: ''},
  }
handleCardElOpen = () => {this.setState({cardbtnvisible : true})}
handleCardElClose = () => {this.setState({cardbtnvisible:false})}

handleNewColumnNameChange = (event) => {
    this.setState({newColumnName : event.target.value});
  }
handleCardNameChange = (event) => {
    this.setState({newCardName : event.target.value});
  }
handleCardDescChange = (event) => {
    this.setState({newCardDesc : event.target.value});
  }
handleSendForm = () => {
  fetch(urlCards,{
    method : "POST",
    headers : {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      "title" : this.state.newCardName,
      "description" : this.state.newCardDesc,
      "columnId" : this.state.columnListTarget
    })
  })
  .then(res => res.json())
  .then(newCard => {
    this.setState(prev => {
         const col = 
         prev.columns.find(col => 
          col._id === newCard.columnId)
          if(col){
            col.cards.push(newCard)
          }
          return prev;
    })
  })
  .catch(error => console.log("error", error))
  }
handleAddColumnsFromServer = (pressed) => {
    fetch(urlColumn)
   .then(res => res.json())
    .then(newcolumns => newcolumns.forEach(newcolumn => {

      const { title, cards , _id } = newcolumn;
      this.setState( {columns : this.state.columns.concat(this.newObj = {
        name: title,
        cards : cards,
      _id : _id })})
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
     .catch(error => console.log("error", error))
    }
handleClearAllColumns = () => {
     this.setState({
       columns : []
     })
    }

handleShowColumnList(event){
     this.setState({columnListTarget : event.target.value})
  }
press = (pressed) => {
  this.setState( {columns : this.state.columns.concat(this.newObj = {
    name: this.state.newColumnName,
    cards : [] })})
}


  render() {
  return (
     <div className = "container">
      <div className="emptySpace"></div>
      <div>
      <h1 className = "trying">{trying}</h1>
      </div>
      <div className="divforcolbuttons">
        <button className="columnBtn" onClick = {this.press} >ADD STATIC COLUMN</button>
        <button className="columnBtn" onClick = {this.handleCreateNewColumn} >ADD COLUMN VIA SERVER</button>
        <button className="columnBtn" onClick = {this.handleAddColumnsFromServer} >SHOW ALL COLUMNS</button>
        <button className="columnBtn" onClick = {this.handleClearAllColumns} >CLEAR PAGE</button> 
         
        <input className="columnBtn" type="text" 
        onChange={this.handleNewColumnNameChange} placeholder="Name of the new column"/>
      </div>
      <div className="emptySpaceAfter">
      <div className="modalSet">
      <Modalbox title="Creating a card">
        <div>
            <div className="formBlock">
             <p>Enter card name</p>
             <input className="inputInstruction" type="text" 
                onChange={this.handleCardNameChange} 
             />
             <p>Enter card description</p>
             <input className="inputInstruction" type="text" 
                 onChange={this.handleCardDescChange} 
             />
             <p>Choose column</p>
             <select value={this.state.columnListTarget} className="inputInstruction" type="text" 
                 onChange={this.handleShowColumnList} >
                    {this.state.columns.map((column, index) => {
                      return (
                        <option value={column._id} key={index}>{column.name}</option>
                      )
                    })}
              </select>
             </div>
                 <div>
                     <button className="sendFormButton" onClick={this.handleSendForm}>Send form</button>
                 </div>   
          </div>
        </Modalbox> 
        </div>
      </div>
      <div className="columnsopacity">
      {this.state.columns.map((column,index) => {
           return (
            <Column column={column} name={column.name} cards={column.cards}  key={index}/>
           )
      })}
      </div>
    </div> 
  )
}
}

export default App;







