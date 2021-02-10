import React, { Component } from 'react';
import AnimeElement from './AnimeElement';

export default class AnimeList extends Component {

    render() {
        return (
            <div className='w-75 d-flex flex-row flex-wrap align-content-start'>
                <AnimeElement anime={ this.props.animes[0] } updateSelectedAnime={ this.props.updateSelectedAnime } />
                <AnimeElement anime={ this.props.animes[1] } updateSelectedAnime={ this.props.updateSelectedAnime } />
                <AnimeElement anime={ this.props.animes[2] } updateSelectedAnime={ this.props.updateSelectedAnime } />
                <AnimeElement anime={ this.props.animes[3] } updateSelectedAnime={ this.props.updateSelectedAnime } />
            </div>

        );
    }
}