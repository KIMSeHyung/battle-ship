class Charactor extends Phaser.Physics.Arcade.Image {
    private health: number = 100;
    constructor(
        scene: Phaser.Scene,
        x: number,
        y: number,
        texture: string,
        health: number
    ) {
        super(scene, x, y, texture);
        this.health = health;
    }

    takeDamage(damage: number): void {
        this.health -= damage;
        if (this.health <= 0) {
            console.log("die");
            return;
        }
        console.log(this.health);
    }

    attack() {}
}

export default Charactor;
