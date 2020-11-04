export class SimpleScene extends Phaser.Scene {
  preload() {
    this.load.image('cokecan', 'assets/logo.png');
  }

  create() {
    this.add.text(100, 400, 'Hello Sami!', { fill: '#0f0' });
    this.add.image(200, 200, 'cokecan');
  }
}