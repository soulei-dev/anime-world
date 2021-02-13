import React, { Component } from "react";
import AnimeElement from "./AnimeElement";

export default class AnimeList extends Component {
  render() {
    return (
      <div className="w-75 d-flex flex-row flex-wrap align-content-start">
        {this.props.animes.map((a, index) => (
          <AnimeElement
            key={ a.title + index }
            anime={ a }
            updateSelectedAnime={ () => { this.props.updateSelectedAnime(index) }}
          />
        ))}
      </div>
    );
  }
}
