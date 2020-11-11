const apiData = {
  url: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/',
  gameID: 'mhSHXCPZ4qHkZGioVSGg',
};

export const postHighScore = async (playerName, score) => {
  try {
    await fetch(`${apiData.url}games/:${apiData.gameID}/scores/`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'Application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: playerName, score }),
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const getGameScores = async () => {
  try {
    const rawData = await fetch(`${apiData.url}games/:${apiData.gameID}/scores/`);
    const resultArry = await rawData.json();
    return resultArry;
  } catch (error) {
    return 'Error:';
  }
};