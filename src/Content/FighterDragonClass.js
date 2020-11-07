/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-extraneous-dependencies
import 'Phaser';
import { Entity } from './Entities';
import EnemyLaser from './EnemyLaserClass';

class FighterDragon extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprEnemy0', 'FighterDragon');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.shootTimer = this.scene.time.addEvent({
      delay: 1000,
      callback() {
        const laser = new EnemyLaser(
          this.scene,
          this.x,
          this.y,
        );
        laser.setScale(this.scaleX);
        this.scene.enemyLasers.add(laser);
      },
      callbackScope: this,
      loop: true,
    });
    this.play('sprEnemy0');
  }

  onDestroy() {
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }
}

export default FighterDragon;