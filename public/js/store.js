const store = (() => {
  /**
   * Save shared values across the app. Keep them private.
   * @module store
   */
  let favs = JSON.parse(localStorage.getItem('favorites')) || [];
  let select = 'shows';
  let searchText = '';
  let fav = {};

  return {
    /**
     * Return favorites
     * @return {array} An array of stored favorites
     */
    getFavs: () => favs,

    /**
     * Set favorites and persist in localstorage
     */
    setFavs: vals => {
      favs = vals;
      localStorage.setItem('favorites', JSON.stringify(favs));
    },

    /**
     * Set the value of the option selected in the select
     */
    setSelect: val => {
      select = val;
    },

    /**
     * Get value option of select
     * @return {string} 
     */
    getSelect: () => select,

    /**
     * Get value of the input's 
     * @return {string}
     */
    getTextSearch: () => searchText,

    /**
     * Set value for search
     */
    setSearchText: text => {
      searchText = text;
    },

    /**
     * Set favorite selected
     */
    setFav: (val) => {
      fav = val;
    },

    /**
     * Retrieve favorite selected
     * @return {object} data of a favorite
     */
    getFav: () => fav,
  };
})();

export default store;