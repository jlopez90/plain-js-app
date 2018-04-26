import Result from './Result';

/**
 * Represents a Result Actor 
 * @extends Result
 */
export default class ResultActor extends Result {
  constructor(props) {
    super(props);
  }

  /**
   * Returns the string representing the DOM
   */
  render() {
    return `
      <article class="media">
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
          <a class="button is-success is-outlined" id="btnSave-${this._id}" style="visibility: ${this.isFav ? 'hidden' : 'visible'}">
            <span>Save</span>
            <span class="icon is-small"><i class="fa fa-heart"></i></span>
          </a>
        </div>
      </article>`;
  }
}
