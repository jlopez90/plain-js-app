import Component from './Component';
import store from '../store';
import getClosestById from '../helpers/parentNode';

/**
 * Represents a Result 
 * @extends Component
 */
export default class Result extends Component {
  constructor(props) {
    super();

    this.image = props.image ? props.image.medium : null;
    this.name = props.name;
    this.id = props.id;
    
    const fav = store.getFavs().find(fav => fav.id === this.id);
    fav ? this.isFav = true : this.isFav = false;

    addEventListener('click', this.favClicked.bind(this));
  }

  /**
   * Select event when is clicked for adding to favs.
   * @param {object} evt - DOM Event
   */
  favClicked(evt) {
    const elem = getClosestById(evt.target, document.getElementById(`result-${this._id}`), `save-${this._id}`, `save-${this._id}`.length);
    if (elem) {
      this.isFav = true;
      const btn = document.getElementById(`btnSave-${this._id}`);
      btn.style.visibility = 'hidden';
      store.setFav(this);
    }
  }

  /**
   * Update render save button visibility
   */
  reset() {
    this.isFav = false;
    const btn = document.getElementById(`btnSave-${this._id}`);
    btn.style.visibility = 'visible';
  }
}
