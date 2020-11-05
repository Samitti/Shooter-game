import 'phaser';
import { Player, ChaserDragon, FighterDragon, SpyDragon, EnemyLaser, PlayerLaser } from '../Content/Entities';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {
    this.load.image('sky', 'assets/sky.png');
    this.load.spritesheet("sprPlayer", "assets/sprPlayer.png", {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet("sprEnemy0", "assets/sprEnemy0.png", {
      frameWidth: 93,
      frameHeight: 65
    });

    this.load.image("sprEnemy1", "assets/sprEnemy1.png");
    this.load.spritesheet("sprEnemy2", "assets/sprEnemy2.png", {
      frameWidth: 93,
      frameHeight: 65
    });

    this.load.image("sprLaserEnemy0", "assets/sprLaserEnemy0.png");
    this.load.image("sprLaserPlayer", "assets/sprLaserPlayer.png");

  }

  create () {
    this.add.image(400, 300, 'sky');
    this.anims.create({
      key: "sprPlayer",
      frames: this.anims.generateFrameNumbers("sprPlayer"),
      frameRate: 20,
      repeat: -1
    });

    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      "sprPlayer"
    );   

    this.anims.create({
      key: "sprEnemy0",
      frames: this.anims.generateFrameNumbers("sprEnemy0"),
      frameRate: 5,
      repeat: -1
    });

    this.anims.create({
      key: "sprEnemy2",
      frames: this.anims.generateFrameNumbers("sprEnemy2"),
      frameRate: 5,
      repeat: -1
    });
    

    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); 

    this.enemies = this.add.group();
    this.enemyLasers = this.add.group();
    this.playerLasers = this.add.group();

    this.time.addEvent({
      delay: 2000,
      callback: function() {
        var enemy = null;

        if (Phaser.Math.Between(0, 10) >= 3) {
          enemy = new FighterDragon(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0
          );
        }
        else if (Phaser.Math.Between(0, 10) >= 5) {
          if (this.getEnemiesByType("ChaserDragon").length < 5) {

            enemy = new ChaserDragon(
              this,
              Phaser.Math.Between(0, this.game.config.width),
              0
            );
          }
        }
        else {
          enemy = new SpyDragon(
            this,
            Phaser.Math.Between(0, this.game.config.width),
            0
          );
        }

        if (enemy !== null) {
          enemy.setScale(Phaser.Math.Between(5, 15) * 0.1);
          this.enemies.add(enemy);
        }
      },
      callbackScope: this,
      loop: true
    });
  }

  update() {
    this.player.update();

    if (this.keyW.isDown) {
      this.player.moveUp();
    }
    else if (this.keyS.isDown) {
      this.player.moveDown();
    }

    if (this.keyA.isDown) {
      this.player.moveLeft();
    }
    else if (this.keyD.isDown) {
      this.player.moveRight();
    }

    if (this.keySpace.isDown) {
      this.player.setData("isShooting", true);
    }
    else {
      this.player.setData("timerShootTick", this.player.getData("timerShootDelay") - 1);
      this.player.setData("isShooting", false);
    }

    for (var i = 0; i < this.enemies.getChildren().length; i++) {
      var enemy = this.enemies.getChildren()[i];

      enemy.update();
    }
  }
  
  getEnemiesByType(type) {
    var arr = [];
    for (var i = 0; i < this.enemies.getChildren().length; i++) {
      var enemy = this.enemies.getChildren()[i];
      if (enemy.getData("type") == type) {
        arr.push(enemy);
      }
    }
    return arr;
  }
};
