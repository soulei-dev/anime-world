import React, { Component } from 'react';
import AnimeElement from './AnimeElement';

export default class AnimeList extends Component {

    render() {
        return (
            <div className='w-75 d-flex flex-row flex-wrap align-content-start'>
                <AnimeElement />
                <AnimeElement />
                <AnimeElement />
                <AnimeElement />
                <AnimeElement />
                <AnimeElement />
                <AnimeElement />
            </div>

        );
    }
}