import SearchService from '../../public/js/services/search';

test('retrieve data from API', async () => {
  const searchService = new SearchService();
  const res = await searchService.getNewSearch('people', 'Emma Watson');

  expect(res.length)
    .toBeGreaterThan(0);
});
