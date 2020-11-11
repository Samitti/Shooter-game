import * as ApiScore from '../src/Content/PlayerClass';

global.fetch = require('jest-fetch-mock');

describe('Posting Score to Api ', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Returns true if API call is successful', async () => {
    fetch.mockResponseOnce(JSON.stringify('Api test call'));
    const result = await ApiScore.postHighScore('Sami', 10);
    expect(result).toBe(true);
  });
});