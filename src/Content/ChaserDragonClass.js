import Phaser from 'phaser';
import Entity from './Entities';

class ChaserDragon extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprEnemy1', 'ChaserDragon');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
  }
}

export default ChaserDragon;