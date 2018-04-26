import Favorite from './Favorite';

/**
 * Represents a Favorite Actor 
 * @extends Favorite
 */
export default class FavActor extends Favorite {
  /**
   * Create a fav actor.
   * @param {object} props 
   */
  constructor(props) {
    super(props);
    this.category = 'actors';
  }

  /**
   * Returns the string representing the DOM
   */
  render() {
    return `
      <article class="media" id="fav-${this._id}">
        <div class="media-left cover">
          <figure class="image cover__image">
            ${this.image
              ? `<img src='${this.image}' alt='${this.name}'>`
              : `<img src='http://via.placeholder.com/40x50'>`
            }
          </figure>
        </div>
        <div class="media-content">
          <p><strong>${this.name}</strong></p>
          <span class="tag">actors</span>
        </div>
        <div class="media-right">
          <a class="button is-info is-outlined" style='visibility: hidden' id="btnFav-${this._id}">
            <span>Selected</span>
            <span class="icon is-small"><i class="fa fa-check"></i></span>
          </a>
        </div>
      </article>`;
  }
}
