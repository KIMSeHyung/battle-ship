import Charactor from "../common/Charactor";

class Player extends Charactor {
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

    move(cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined): void {
        if (!cursors) {
            return;
        }
        if (cursors.left.isDown) {
            this.setVelocityX(-200);
        } else if (cursors.right.isDown) {
            this.setVelocityX(200);
        } else {
            this.setVelocityX(0);
        }
        if (cursors.up.isDown) {
            this.setVelocityY(-200);
        } else if (cursors.down.isDown) {
            this.setVelocityY(200);
        } else {
            this.setVelocityY(0);
        }
    }
}

export default Player;
