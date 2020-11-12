/* eslint-disable radix */
/* eslint-disable class-methods-use-this */
import Phaser from 'phaser';
import config from '../Config/config';
import { postScore } from '../Content/apiScore';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
    this.gameScore = 0;
    this.myScore = 0;
    this.savedScore = 0;
  }


  create() {
    this.gameButton = this.add.sprite(200, 200, 'blueButton1').setInteractive();
    this.centerButton(this.gameButton, 1);

    this.gameText = this.add.text(0, 0, 'Restart', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.gameText, this.gameButton);

    this.gameButton.on('pointerdown', () => {
      this.scene.start('Game');
    });

    this.title = this.add.text(this.game.config.width * 0.5, 128, 'GAME OVER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
    });
    this.title.setOrigin(0.5);

    this.gameScore = localStorage.getItem('gameScore');
    this.myScore = parseInt(this.gameScore);
    this.highScore = localStorage.getItem('highScore');
    this.savedScore = parseInt(this.highScore);
    this.playerName = localStorage.getItem('DHplayerName');


    this.textScore = this.add.text(
      270,
      300,
      `Your Score: ${this.gameScore}`,
      {
        fontFamily: 'monospace',
        fontSize: 32,
        color: '#ffffff',
        align: 'center',
      },
    );

    this.highScore = this.add.text(
      270,
      250,
      `High Score: ${this.highScore}`,
      {
        fontFamily: 'monospace',
        fontSize: 32,
        color: '#ffffff',
        align: 'center',
      },
    );

    this.congra = this.add.text(
      150,
      500,
      ' ',
      {
        fontFamily: 'monospace',
        fontSize: 32,
        color: 'pink',
        align: 'center',
      },
    );

    this.gameButton3 = this.add.sprite(395, 400, 'blueButton1').setInteractive();

    this.gameText = this.add.text(0, 0, 'Leaderboard', { fontSize: '25px', fill: '#fff' });
    this.centerButtonText(this.gameText, this.gameButton3);

    this.gameButton3.on('pointerdown', () => {
      // this.scene.start('Leaderboard');
    });

    this.checkHighScore();


    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton2');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton1');
    });
  }

  checkHighScore() {
    if (this.myScore > this.savedScore) {
      this.congra.setText('CONGRATULATIONS NEW HIGH SCORE!!');

      this.gameButton2 = this.add.sprite(395, 400, 'blueButton1').setInteractive();
      this.centerButton(this.gameButton, 1);

      this.gameText = this.add.text(0, 0, 'Submit Score', { fontSize: '25px', fill: '#fff' });
      this.centerButtonText(this.gameText, this.gameButton2);

      this.gameButton2.on('pointerdown', () => {
        postScore(this.playerName, this.gameScore);
      });
    }
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.width / 2,
        config.height / 2 - offset * 100,
        config.width, config.height),
    );
  }

  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton,
    );
  }
}
