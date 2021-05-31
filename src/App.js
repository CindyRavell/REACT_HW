import './App.css';
import React from 'react';
import Card from './lifecycle/card.js'

class App extends React.Component {
  
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://upload.wikimedia.org/wikipedia/commons/8/86/Studio_Ghibli_portal_logo.png"} className="App-ghibli" alt="ghibli" />
        <Card ></Card>
      </header>
     
    </div>
  );
}
}

export default App;
