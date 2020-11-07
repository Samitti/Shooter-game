/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-unresolved
import 'Phaser';
import { Entity } from './Entities';

class ChaserDragon extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprEnemy1', 'ChaserDragon');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
  }
}

export default ChaserDragon;