import React from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person firstname="Jane" lastname="Doe" age="45" hair="Black"/>
      <Person firstname="John" lastname="Smith" age="88" hair="Brown"/>
      <Person firstname="Millard" lastname="Fillmore" age="50" hair="Brown"/>
      <Person firstname="Maria" lastname="Smith" age="62" hair="Brown"/>
    </div>
  );
}

export default App;
