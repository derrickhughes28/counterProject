import React, {Component} from 'react'
import Add from './components/Add'
import Subtract from './components/Subtract'
import '../src/App.css'


class App extends Component {
  state = {
    count: 0
  }
  countUp = () => {
    this.setState(
      {count : this.state.count + 1 }
    )
  }

  countDown=() =>{
    this.setState(
      {count: this.state.count -1}
    )
  }


  render () {
    return (
      <div className='container'>
        <div className='center'>
          <p>Here's your number:</p>
          <h4>{this.state.count}</h4>
        </div>
        <div className='center'>
          <Add countUp={this.countUp}/>
          <Subtract  countDown ={this.countDown} />
        </div>
      </div>
    )
  }
}
export default App