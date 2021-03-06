import Phaser from 'phaser';
import Entity from './Entities';

class SpyDragon extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprEnemy2', 'SpyDragon');
    this.body.velocity.y = Phaser.Math.Between(20, 100);
    this.play('sprEnemy2');
  }
}

export default SpyDragon;