import Header from './Header';
import SearchResults from './SearchResults';
import ListFavorites from './ListFavorites';
import SearchService from '../services/search';
import store from '../store';
import getClosestById from '../helpers/parentNode';

const HeaderComponent = new Header();
const searchService = new SearchService();
const SearchResultsComponent = new SearchResults(searchService);
const ListFavoritesComponent = new ListFavorites();

function App() {
  return `
    <div class="container panel">
      <p class="panel-heading">Awesome series and actors finder</p>
      ${HeaderComponent.render()}
      ${SearchResultsComponent.render()}

      <p class="panel-heading">Favorites</p>
      ${ListFavoritesComponent.render()}
    </div>`;
}
document.querySelector('body').innerHTML = App();

// Event delegation
addEventListener('click', (evt) => {
  if (evt.target.id === 'searchBtn') {
    SearchResultsComponent.search({ category: store.getSelect(), searchText: store.getTextSearch() });
    evt.preventDefault();
  } else if (evt.target.id === 'btnDelete') {
    const recovered = ListFavoritesComponent.deleteSelecteds();
    SearchResultsComponent.updateVisibilityState(recovered);
  } else {
    const elemFav = getClosestById(evt.target, document.getElementById('favorites_results'), 'fav', 3);
    if (elemFav) {
      ListFavoritesComponent.updateNumSelecteds();
    }
    const elemSave = getClosestById(evt.target, document.getElementById('search_results'), 'btnSave', 7);
    if (elemSave) {
      setTimeout(() => {
        ListFavoritesComponent.favClicked(store.getFav(), 'shows'); 
      }, 0);
    }
  }
});
