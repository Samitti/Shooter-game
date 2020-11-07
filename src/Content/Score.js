
class Score {
  constructor() {
    var playerScore = 0;
    var topScore = 0;  
  }

  setPlayerScore(newScore) {
    this.playerScore = newScore;
  }

  setTopScore(newTop) {
    this.topScore = newTop;
  }

  getPlayerScore() {
    return this.playerScore;
  }

  getTopScore() {
    return this.topScore;
  }
}

export { Score };