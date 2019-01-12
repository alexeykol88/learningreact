import React, { Component } from 'react'
import './column.css'
import Card from "./card"

export default class Column extends Component {
  render() {
    return (
      <div className = "childdiv">
        <h1>Column</h1>
        <h1>SomeDiv</h1>
        <Card/>
        <br/>
        <Card/>
      </div>
    )
  }
}
