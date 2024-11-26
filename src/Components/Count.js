import React, { Component } from 'react'

export default class Count extends Component {
    constructor(){
        super()                      //Execute constructor class.
        this.state={
            count:0                  //Initial value of state is zero.
        }
    }
    IncreamentCount=()=>{
        this.setState({count:this.state.count+1})
    }
    decrementCount=()=>{
        this.setState({dec:this.state.count-1})
    }
    devision=()=>{
      this.setState({divi:this.state.count/2})
    }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <h1>{this.state.dec}</h1>
        <h1>{this.state.divi}</h1>
        <button onClick={this.IncreamentCount}>Increment</button>
         <button onClick={this.decrementCount}>Decrement</button>
         <button onClick={this.devision}>devision</button>
        
      </div>
    )
  }
}
