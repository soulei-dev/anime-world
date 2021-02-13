import React, { Component } from "react";
import Style from './AnimeElement.module.scss'

export default class AnimeElement extends Component {
  mouseEnter = () => {
    this.props.updateSelectedAnime(this.props.anime.title);
  };

  render() {
    return (
      <div onMouseEnter={this.mouseEnter} className={"bg-light d-flex flex-row " + Style.container}>
        <img width="150" height="200" src={this.props.anime.img} alt="anime" />
        <div className="flex-fill d-flex flex-column p-3">
          <h5>{this.props.anime.title}</h5>
          <hr className="w-100" />
          <span>{this.props.anime.details}</span>
        </div>
      </div>
    );
  }
}
