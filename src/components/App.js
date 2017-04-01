import React from 'react';
import Header from './Header';
import Login from './Login';

class App extends React.Component {
  constructor() {
    super();
    this.state={

    }
  }
  render(){
    return(
      <div>
        <Header/>
        <Login/>
      </div>
    )
  }
}

export default App;
