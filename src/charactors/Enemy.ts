import Charactor from "../interfaces/Charactor";

class Enemy extends Charactor {
    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        texture: string,
        health: number
    ) {
        super(scene, x, y, texture, health);
        this.setScale(3);
        scene.add.existing(this);
        scene.physics.add.existing(this);
    }
}

export default Enemy;
