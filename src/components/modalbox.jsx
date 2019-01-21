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
     <div>
         <button onClick={this.handleOpen} className="openerbtn">Show modal</button>
     </div>
    )
    if(this.state.visible===true)
    return ReactDOM.createPortal(
        <div>
        <div className="backgrounddiv">
          <div className="modaldiv">
              <button onClick={this.handleClose} className="closebtn">X</button>
               <h1>{this.props.title}</h1>
               <p>Click "Add column" for add a new static column with a name from input value</p>
               <p>Click "Test fetch" to load columns from a local server and render it</p>
               <p>Click "Show modal" to show the modal box</p>
          </div>
        </div>
        </div>, document.getElementById('portal')
       )

  }
}



