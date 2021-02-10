import React, { Component } from 'react';

export default class AnimeDetails extends Component {

    render() {
        return (
            <div className='w-25 border p-4 d-flex flex-column'>
                <h5>{ this.props.anime.title }</h5>
                <hr className='w-100' />
                <div>
                    <img width='150' height='200' className='d-block mx-auto' src={ this.props.anime.img } alt='anime' />
                </div>
                <hr className='w-100' />
                <span className='text-secondary'>{ this.props.anime.details }</span>
                <hr className='w-100' />
                <span>{ this.props.anime.description }</span>
            </div>
        );
    }
}