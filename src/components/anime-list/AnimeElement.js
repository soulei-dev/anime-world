import React, { Component } from 'react';

export default class AnimeElement extends Component {

    mouseEnter = () => {
       this.props.updateSelectedAnime(this.props.anime.title) 
    }

    render() {
        return (
            <div onMouseEnter={ this.mouseEnter } className='w-50 p-2'>
                <div className='border d-flex'>
                    <img width='150' height='200' src={ this.props.anime.img } alt='anime'/>
                    <div className='flex-fill d-flex flex-column p-3'>
                        <h5>{ this.props.anime.title }</h5>
                        <hr className='w-100'/>
                        <span>{ this.props.anime.details }</span>
                    </div>
                </div>
            </div> 
        );
    }
}

