import React, { Component } from 'react';
import { Header, AnimeList, AnimeDetails } from './components';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animes: [{
        title: 'Kimetsu No Yaiba - Le Train de l\'Infini',
        img: 'https://fr.web.img5.acsta.net/pictures/20/11/06/13/32/2403018.jpg',
        details: 'A | 40 min | Japan Animation, Action',
        description: "Demon Slayer: Kimetsu no Yaiba - Le Train de l'Infini (鬼き滅めつの刃やいば 無限列車編 Kimetsu no Yaiba: Mugen Ressha Hen) est un film d'animation japonais adaptant l'Arc Train de l'Infini du manga Kimetsu no Yaiba de Koyoharu Gotôge par ufotable. Il est la suite direct de l'Adaptation en anime."
      }, {
        title: 'Naruto Shippuden',
        img: 'https://fr.web.img6.acsta.net/pictures/19/08/07/10/08/2485376.jpg',
        details: 'A | 25 min | Japan Animation, Action',
        description: "Cette saison revient sur l'enfance de plusieurs personnages. Plus tard, Naruto et Hinata célèbrent leur mariage, mais il y a des absents..."
      }, {
        title: 'Bleach',
        img: 'https://fr.web.img6.acsta.net/pictures/19/07/19/14/52/5225691.jpg',
        details: 'A | 25 min | Japan Animation, Action',
        description: "Kurosaki Ichigo, un étudiant de quinze ans aux cheveux orange qui aime la bagarre (comme son père) a la particularité de voir les fantômes ainsi que de pouvoir les toucher. Cela l'amène à rencontrer Kuchiki Rukia, un Shinigami (dieu de la mort) qui combat un Hollow. Le déroulement du combat amène Kuchiki à donner ses pouvoirs à Ichigo qui deviens alors lui même un Shinigami. C'est maintenant à son tour de protéger la ville des Hollows."
      }, {
        title: 'Seven Deadly Sins',
        img: 'https://www.manga-news.com/public/images/dvd/Seven-Deadly-Sins-anime-s4-visual.jpg',
        details: 'A | 25 min | Japan Animation, Action',
        description: "Il y a dix ans, un groupe de mercenaires appelé les Seven Deadly Sins s'est rebellé contre les Chevaliers Sacrés, la garde du royaume… Depuis, ils ont disparu et personne ne sait ce qu'ils sont devenus. Un beau jour, une mystérieuse jeune fille s'écroule dans la taverne de Meliodas, un garçon enjoué qui parcourt le monde en compagnie de son cochon loquace. Cette jeune fille n'est autre que la princesse Elizabeth qui désire ardemment retrouver les Seven Deadly Sins. En effet, ce sont les seuls à même de lutter contre les Chevaliers Sacrés, qui ont fait prisonnier le roi et qui asservissent toute la population du royaume ! Très vite, elle va découvrir que Meliodas n'est pas un simple patron de taverne mais un guerrier à la puissance exceptionnelle…"
      }],
      selectedAnime: 0
    }
  }

  updateSelectedAnime = (index) => {
    this.setState({
      selectedAnime: index
    })
  }

  render() {
    return (
      <div className='App d-flex flex-column'>
        <Header />
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <AnimeList animes={ this.state.animes } updateSelectedAnime={ this.updateSelectedAnime} />
          <AnimeDetails anime={ this.state.animes[this.state.selectedAnime] } />
        </div>
      </div>
    );
  }
}

export default App;
