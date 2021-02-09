import React, { Component } from 'react';
import { Header, AnimeList, AnimeDetails } from './components';


class App extends Component {
  render() {
    return (
      <div className='App d-flex flex-column'>
        <Header />
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <AnimeList />
          <AnimeDetails />
        </div>
      </div>
    );
  }
}

export default App;
