import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

state = {
  text:'',
  result:'',
  results:[]
  
}
Textadd = (e) => {
  this.setState({
    text: e.target.value
  })
}
Clickadd = () => {
  this.setState({
    results: [ ...this.state.results, this.state.text ]
  })
}
  render() {   
    return (
      <div>
    ใส่ข้อความ <input onChange={this.Textadd} type="text"/> 
    <button onClick={this.Clickadd}>add</button><br/>
      {
        this.state.results.map(item => (
          <div>{item}</div>
        ))
      }
      </div>
    );
  }
}

export default App;
