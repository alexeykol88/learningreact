import React, { Component } from 'react'
import './cardbtn.css'


export default class Cardbtn extends Component {
    state = {
       blockvisible : false
    }

    handeClosing = () => {this.setState({blockvisible:false})}
    handeOpening = () => {this.setState({blockvisible:true})}

  render() {
      if (this.state.blockvisible===true)
    return (
        <div>
      <div className="maindiv">
        <button  className="button">Сard management</button>
        </div>
        <div onMouseLeave={this.handeClosing} className="changingdiv">
        
        <p>You can do something with cards !</p>
        <button className="button">Do smt</button>
        <p>You can do something more with cards !</p>
          <button className="button">Do smt more</button>
        </div>
      </div>
    )
    if(this.state.blockvisible===false)
    return(
            <div className="maindiv">
               <button onMouseEnter={this.handeOpening} className="button">Сard management</button>
            </div>
    )
  }
}
