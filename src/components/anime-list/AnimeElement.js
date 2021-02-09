import React, { Component } from 'react';

export default class AnimeElement extends Component {

    render() {
        return (
            <div className='w-25 p-2'>
                <div className='card'>
                    <img src='https://animotaku.fr/wp-content/uploads/2020/10/Demon-slayer-kimetsu-no-yaiba-le-train-de-linfini-trailer.jpeg' className='card-img-top' alt='cover kimetsu no yaiba'/>
                    <div className='card-body'>
                        <h5 className='card-title'>Demon Slayer: Kimetsu no Yaiba - Le Train de l'Infini</h5>
                        <p className='card-text'> Demon Slayer: Kimetsu no Yaiba - Le Train de l'Infini (鬼き滅めつの刃やいば 無限列車編 Kimetsu no Yaiba: Mugen Ressha Hen) est un film d'animation japonais adaptant l'Arc Train de l'Infini du manga Kimetsu no Yaiba de Koyoharu Gotôge par ufotable. Il est la suite direct de l'Adaptation en anime.</p>
                    </div>
                </div>
            </div> 
        );
    }
}