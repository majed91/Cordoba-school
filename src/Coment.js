import React, {Component} from 'React';
import './Coment.css';
class Coment extends React.Component{
    state = {
      name : ''
    }
    submit = () =>{
      this.setState({
        name : window.text.innerHTML
      })
    }
    render(){
      
      return(
        <div id="coment">
          <h3>Coments and suggest</h3><br/>
            <textarea id="text" placeholder="type your coment"></textarea>
            <button id="btns" onClick={this.submit}>submit coment</button>
            <div id="text1">Result :    {this.state.name} </div>
            
        </div>
          
      )
    }
  }
export default Coment