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
          <ToolList tools={this.state.tools} />
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

function ToolList(props) {
  return (
    <>
      <h3>List of Tools:</h3>
      <ul>
        {props.tools.map(tool => <Tool item={tool} key={tool.id} />)}
      </ul>
    </>
  )
}

function Tool(props) {
  return (
    <li>Tool: {props.item.name} Tools class: {props.item.type}</li>
  )
}

function Footer(props) {
  return (
    <h4>&#169; 2020, Chuck & Tom Creations</h4>
  )
}


export default App;
