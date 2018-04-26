import Component from './Component';
import FavShow from './FavShow';
import FavActor from './FavActor';
import store from '../store';

/**
 * Represents list of favorites shows and actors
 * @extends Component
 */
export default class ListFavorites extends Component {
  constructor() {
    super('listFavorites');

    this.state = {
      favs: this.init() || [],
      favsSelected: 0,
    };
  }

  /**
   * Get favs from store and map them to Favorite objects
   */
  init() {
    return store.getFavs().map((fav) => {
      if (fav.category === 'shows') return new FavShow(fav);
      return new FavActor(fav);
    });
  }

  /**
   * Check if an item is in the favorites list
   * @return {boolean}
   */
  isInFav(id) {
    let isFav = false;
    this.state.favs.forEach((fav) => {
      if (fav.id === id) isFav = true;
    });

    return isFav;
  }

  /**
   * Add new favorite to the list
   */
  favClicked(data, category) {
    let fav;
    if (category === 'shows') fav = new FavShow(data);
    else fav = new FavActor(data);

    this.state.favs.push(fav);
    store.setFavs(this.state.favs);

    this.updateFavs();
  }

  /**
   * Delete selected favorites
   * @return {array} The items realeased from being favorites 
   */
  deleteSelecteds() {
    const favsToBeRecovered = this.state.favs.filter(fav => fav.selected);
    
    this.state.favs = this.state.favs.filter(fav => !fav.selected);
    store.setFavs(this.state.favs);

    this.updateFavs();
    this.updateNumSelecteds();
  
    return favsToBeRecovered;
  }

  /**
   * Render new list of favorites after an update
   */
  updateFavs() {
    document.getElementById('favorites_results').innerHTML = this.render();
  }

  /**
   * Render num selecteds 
   */
  updateNumSelecteds() {
    let count = 0;
    this.state.favs.forEach((fav) => {
      if (fav.selected) return count++;
    });
    document.getElementById('favs_selected').innerHTML = count;
  }

  /**
   * Returns the string representing the DOM
   */
  render() {
    return `
      <div id="favorites_results">
        <ul class="panel-block favorites">
        ${this.state.favs.map(fav => fav.render()).join('')}
        </ul>
        <div class="media favorites__actions">
          <p class="media-content"><strong id="favs_selected">${this.state.favsSelected}</strong> items selected</p>
          <p class="media-right">
            <span class="button is-danger is-outlined" id="btnDelete">
              <span>Delete selected</span>
              <span class="icon is-small"><i class="fa fa-times"></i></span>
            </span>
          </p>
        </div>
      </div>`;
  }
}
