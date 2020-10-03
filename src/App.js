import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tools: [
        {
          id: 1,
          name : 'Screwdriver',
          type: 'driver',
        },
        {
          id: 2,
          name : 'Hammer',
          type : 'driver',
        },
      ]
    }
  }

  render() {
    return (
      <>
        <div className='App'>
          <Header tools={this.state.tools} />
          <Footer />
        </div>
      </>
    )
  }
}


function Header(props) {
  return (
    <>
      <h1>Tool List</h1>
  <h2>Number of tools in current list: {props.tools.length}</h2>
    </>
  )
}

function Footer(props) {
  return (
    <h4>&#169; 2020, Chuck & Tom Creations</h4>
  )
}

export default App;
