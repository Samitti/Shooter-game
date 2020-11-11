import Phaser from "phaser";
import config from '../Config/config';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
    this.gameScore = 0;
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
    this.highScore = localStorage.getItem('highScore');

    this.textScore = this.add.text(
      290,
      400,
      `Your Score: ${this.gameScore}`,
      {
        fontFamily: 'monospace',
        fontSize: 32,
        color: '#ffffff',
        align: 'center',
      },
    );

    this.highScore = this.add.text(
      290,
      300,
      `High Score: ${this.highScore}`,
      {
        fontFamily: 'monospace',
        fontSize: 32,
        color: '#ffffff',
        align: 'center',
      },
    );

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton2');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('blueButton1');
    });
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
