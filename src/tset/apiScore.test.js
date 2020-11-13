import { postScore, getScores } from '../Content/apiScore';

it('gets data from API', async () => {
  const result = await getScores();

  expect(result).not.toEqual(null);
});

global.fetch = require('jest-fetch-mock');

describe('Sending score to API ', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Returns true if API call is successful', async () => {
    fetch.mockResponseOnce(JSON.stringify('Api test call'));
    const result = await postScore('Sami', 200);
    expect(result).toBe(true);
  });
});