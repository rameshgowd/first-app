
import React from 'react';
import './App.css';
import BeerTable from './BeerTable';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Beer List</h1>
        <BeerTable />
      </div>
    </div>
  );
}

export default App;
