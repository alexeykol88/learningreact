import React, { Component } from 'react';
import './App.css';
import Card from './components/card'
import Column from './components/column';

const trying = "Trying something in React";

function App(){
  return (
     <div className = "container">
      <h1 className = "trying">{trying}</h1>
      <Column className= "col1"/>
      <Column className= "col2"/>
      <Column className="col3"/>
      <Column className="col4"/>
    </div> 
  )
}

export default App;
