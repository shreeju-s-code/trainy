import React, { Component } from 'react'

export default class Classcomponent extends Component {
    constructor(){
        super();
        this.msg="hello pawana"
    }
  render() {
    return (
      <div>
        <h1>Hey {this.msg}</h1>
        <button type="button" class="btn" color='Red'>click da</button>
      </div>
    )
  }
}
