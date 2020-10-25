import React from 'react';
import Row from './Row';
import './App.css';
import requests from './requests'

function App() {
  return (
    <div className="App">
      <h1>HELLO WORLD!</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
