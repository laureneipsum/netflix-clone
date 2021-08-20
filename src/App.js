
import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
     <h1>NETFLIX</h1>
     <Row title="Seulement sur Netflix" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Tendances actuelles" fetchUrl={requests.fetchTrending}/>
     <Row title="Les plus gros succès sur Netflix" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action et aventure" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comédies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horreur" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Comédies romantiques" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
