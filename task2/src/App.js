import React from 'react';
import './App.css';
import AddPhoto from './components/AddPhoto';
import Photos from './components/Photos';

function App() {
  return (
    <div className="App">
      <AddPhoto />
      <Photos />
    </div>
  );
}

export default App;
