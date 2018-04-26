import Result from './Result';

/**
 * Represents a Result Show 
 * @extends Result
 */
export default class ResultShow extends Result {
  /**
   * Create a result show. Contains channels and genres info from the search.
   * @param {object} props 
   */
  constructor(props) {
    super(props);

    this.channel = props.network ? props.network.name : props.webChannel.name;
    this.genres = props.genres;
  }

  /**
   * Returns the string representing the DOM
   */
  render() {
    return `
      <article class="media" id="result-${this._id}">
        <div class="media-left cover">
          <figure class="image cover__image">
          ${this.image
            ? `<img src='${this.image}' alt='${this.name}'>`
            : `<img src='http://via.placeholder.com/40x50'>`
          }
          </figure>
          </div> 
          <div class="media-content">
            <p><strong>${this.name}</strong> <small>(${this.channel})</small></p>
            ${this.genres.map(genre => `<span class="tag">${genre}</span>`)}
        </div>
        <div class="media-right" id="save-${this._id}">
          <a class="button is-success is-outlined" id="btnSave-${this._id}" style="visibility: ${this.isFav ? 'hidden' : 'visible'}">
            <span>Save</span>
            <span class="icon is-small"><i class="fa fa-heart"></i></span>
          </a>
        </div>
      </article>`;
  }
}
