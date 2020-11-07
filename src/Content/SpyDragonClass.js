import Entity from './Entities';

class SpyDragon extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprEnemy2', 'SpyDragon');
    // eslint-disable-next-line no-undef
    this.body.velocity.y = Phaser.Math.Between(20, 100);
    this.play('sprEnemy2');
  }
}

export default SpyDragon;