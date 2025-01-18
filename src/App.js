import React, {PureComponent} from 'react'
import Demo from './Demo'
class App extends PureComponent {

  constructor() {
    super();
    this.state={
      count:0
    }
  }

  render() {
    
    return (
      <>
      <Demo user={this.state.count} />
      <button
      onClick={()=> this.setState({count:  1})}
      >Click me</button>
      </>
    )
  }
}

export default App
