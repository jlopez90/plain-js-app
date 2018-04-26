import Component from './Component';
import getClosestById from '../helpers/parentNode';

/**
 * Represents a Favorite 
 * @extends Component
 */
export default class Favorite extends Component {
  /**
   * Create a fav. Contains the name, image and id.
   * @param {object} props 
   */
  constructor(props) {
    super();

    this.image = props.image ? props.image : null;
    this.name = props.name;
    this.id = props.id;
    this.selected = false;

    addEventListener('click', this.select.bind(this));
  }

  /**
   * Select event when is clicked for changing its state to selected.
   * @param {object} evt - DOM Event
   */
  select(evt) {
    const elem = getClosestById(evt.target, document.getElementById('favorites_results'), `fav-${this._id}`, `fav-${this._id}`.length);
    if (elem) {
      let visibility = 'hidden';
      if (!this.selected) visibility = 'visible';

      const btn = document.getElementById(`btnFav-${this._id}`);
      btn.style.visibility = visibility;

      this.selected = !this.selected;
    }
  }
}
