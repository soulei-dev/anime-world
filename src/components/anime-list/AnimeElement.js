import React, { Component } from 'react';

export default class AnimeElement extends Component {

    render() {
        return (
            <div className='w-50 p-2'>
                <div className='border d-flex'>
                    <img width='150' height='200' src='https://animotaku.fr/wp-content/uploads/2020/10/Demon-slayer-kimetsu-no-yaiba-le-train-de-linfini-trailer.jpeg' alt='anime'/>
                    <div className='flex-fill d-flex flex-column p-3'>
                        <h5>Titre</h5>
                        <hr className='w-100'/>
                        <p> Demon Slayer: Kimetsu no Yaiba - Le Train de l'Infini (鬼き滅めつの刃やいば 無限列車編 Kimetsu no Yaiba: Mugen Ressha Hen) est un film d'animation japonais adaptant l'Arc Train de l'Infini du manga Kimetsu no Yaiba de Koyoharu Gotôge par ufotable. Il est la suite direct de l'Adaptation en anime.</p>
                    </div>
                </div>
            </div> 
        );
    }
}

