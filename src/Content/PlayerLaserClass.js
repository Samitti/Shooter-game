/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-unresolved
import 'Phaser';
import { Entity } from './Entities';

class PlayerLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprLaserPlayer');
    this.body.velocity.y = -200;
  }
}

export default PlayerLaser;