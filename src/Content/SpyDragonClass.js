/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-unresolved
import 'Phaser';
import { Entity } from './Entities';

class SpyDragon extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprEnemy2', 'SpyDragon');
    // eslint-disable-next-line no-undef
    this.body.velocity.y = Phaser.Math.Between(20, 100);
    this.play('sprEnemy2');
  }
}

export default SpyDragon;