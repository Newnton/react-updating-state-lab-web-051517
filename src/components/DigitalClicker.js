import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  increment = () => {
    let clicked = this.state.timesClicked + 1
    this.setState({
      timesClicked: clicked
    })
  }

  render(){
    return(
      <div>
        <button id='clickyButton' onClick={this.increment}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
