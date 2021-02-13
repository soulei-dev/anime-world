import React, { Component } from "react";
import { Header, AnimeList, AnimeDetails, Loading } from "./components";
import dataAnime from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animes: null,
      selectedAnime: 0,
      loaded: false,
    };

    setTimeout(() => {
      this.setState({
        animes: dataAnime,
        loaded: true,
      });
    }, 2000);
  }

  updateSelectedAnime = (index) => {
    this.setState({
      selectedAnime: index,
    });
  };

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        {this.state.loaded ? (
          <div className="d-flex flex-row flex-fill pt-4 p-2">
            <AnimeList
              animes={this.state.animes}
              updateSelectedAnime={this.updateSelectedAnime}
            />
            <AnimeDetails anime={this.state.animes[this.state.selectedAnime]} />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default App;
