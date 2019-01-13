import React, { Component } from 'react';
import 'prop-types';
import './App.css';
import './AppData';
import Column from './components/column';
import AppData from './AppData';

const trying = "Trying something in React";

function App(){
  return (
    
     <div className = "container">
      <h1 className = "trying">{trying}</h1>
      {AppData.columns.map((column, index) => {
  return (
    <Column name={column.name} cards={column.cards} key={index}/>
  )
})}
    </div> 
  )
}

export default App;

