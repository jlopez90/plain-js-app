import Component from './Component';
import store from '../store';

/**
 * Represents a Header
 * @extends Component
 */
export default class Header extends Component {
  constructor() {
    super();

    /**
     * Header state
     */
    this.state = {
      category: 'shows',
      searchText: '',
    };

    /**
     * Bind functions to events
     */
    addEventListener('change', this.selectChanged.bind(this));
    addEventListener('input', this.onInputChange.bind(this));
  }

  /**
   * 
   * @param {Object} evt - DOM Event
   */
  selectChanged(evt) {
    if (evt.target.id === 'mySelect') 
      this.state.category = evt.target.value;
      store.setSelect(this.state.category);
  }

  /**
   * 
   * @param {Object} evt DOM Event
   */
  onInputChange(evt) {
    if (evt.target.id === 'myInput') 
      this.state.searchText = evt.target.value;
      store.setSearchText(this.state.searchText);
  }

  /**
   * Returns the string representing the DOM
   */
  render() {
    return `
      <form class="search-form field has-addons">
        <p class="control">
          <span class="select">
            <select id="mySelect">
              <option value="shows">Shows</option>
              <option value="actors">Actors</option>
            </select>
          </span>
        </p>
        <p class="control search-form__input">
          <input class="input" type="text" placeholder="Search" id="myInput">
        </p>
        <p class="control">
          <button class="button" id="searchBtn">Search</button>
        </p> 
      </form>`;
  }
}
