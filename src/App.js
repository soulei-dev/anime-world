import React, { Component } from 'react';
import { Header, AnimeList, AnimeDetails } from './components';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <div className="d-flex flex-row">
          <AnimeList />
          <AnimeDetails />
        </div>
      </div>
    );
  }
}

export default App;
