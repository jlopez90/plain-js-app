import Component from './Component';
import ResultShow from './ResultShow';
import ResultActor from './ResultActor';

export default class SearchResults extends Component {
  constructor(searchService) {
    super('searchResults');

    this.state = {
      results: [],
      searchService,
    };
  }

  async search({ category, searchText }) {
    if (category === 'actors') category = 'people';

    const data = await this.state.searchService.getNewSearch(category, searchText);
    this.state.results = data.map((result) => {
      if (result.show) return new ResultShow(result.show);
      return new ResultActor(result.person);
    });

    this.update();
  }

  updateVisibilityState(favs) {
    favs.forEach((fav) => {
      this.state.results.forEach((result) => {
        if (fav.id === result.id) result.reset();
      });
    });
  }

  update() {
    document.getElementById('search_results').innerHTML = this.render();
  }

  render() {
    return `
      <ul class="panel-block search-results" id="search_results">
        ${this.state.results.map(result => result.render()).join('')}
      </ul>`;
  }
}
