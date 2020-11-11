const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameId = 'mhSHXCPZ4qHkZGioVSGg';

const postScore = async (name, score) => {
  const response = await fetch(`${baseUrl}/games/${gameId}/scores`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'Application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: name, score: Number(score) }),
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error('Error!');
};

const getScores = async () => {
  const response = await fetch(`${baseUrl}/games/${gameId}/scores`, {
    method: 'Get',
    mode: 'cors',
    headers: {
      Accept: 'Application/json',
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    return response.json();
  }
  throw new Error('Error!');
};


// const apiTopScore = getScores().then((scores) => {
//   const { result } = scores;

//   result.sort((x, y) => y.score - x.score);
//   for (let i = 0; i < 1; i += 1) {
//     if (result[i]) {
//       return result[i].score;
//     }
//   }
// });

export { getScores, postScore };