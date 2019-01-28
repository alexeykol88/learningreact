import React, { Component } from 'react'
import './modalbox.css'
import ReactDOM from 'react-dom';

export default class Modalbox extends Component {
    state = {
        visible : false
    }
    handleOpen = () => this.setState({visible : true})
    handleClose = () => this.setState({visible : false})

  render() {
      if(this.state.visible===false)
    return (
     <div className="openerbtndiv">
         <button onClick={this.handleOpen} className="openerbtn">ADD CARD</button>
     </div>
    )
    if(this.state.visible===true)
    return ReactDOM.createPortal(
        <div>
        <div className="backgrounddiv">
          <div className="modaldiv">
              <button onClick={this.handleClose} className="closebtn">X</button>
               <h1 className="modalHeader">{this.props.title}</h1>
               {this.props.children}
          </div>
        </div>
        </div>, document.getElementById('portal')
       )

  }
}



