import Enemy from "../charactors/Enemy";
import Player from "../charactors/Player";

class MainScene extends Phaser.Scene {
    private platforms?: Phaser.Physics.Arcade.StaticGroup;

    private player?: Player;
    private enemies: Enemy[] = [];
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;
    private width?: number;
    private height?: number;
    private tileSprite?: Phaser.GameObjects.TileSprite;

    constructor() {
        super("battle-ship");
    }

    preload(): void {
        this.load.image("tile", "assets/tile.jpg");
        this.load.image("player", "assets/ship.png");
    }

    create(): void {
        this.width = +this.game.config.width;
        this.height = +this.game.config.height;

        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;

        this.tileSprite = this.add.tileSprite(
            0,
            0,
            this.width,
            this.height,
            "tile"
        );

        this.tileSprite.setOrigin(0);
        this.tileSprite.setScrollFactor(0);

        this.tileSprite.tilePositionX = 0;
        this.tileSprite.tilePositionY = 0;

        this.player = new Player(this, 0, 0, "player", 100);
        this.player.setPosition(centerX, centerY);

        this.cameras.main.startFollow(this.player);
        this.platforms = this.physics.add.staticGroup();
        this.physics.add.collider(this.player, this.platforms);

        this.cursors = this.input.keyboard.createCursorKeys();

        for (let i = 0; i < 10; i++) {
            this.enemies.push(
                new Enemy(
                    this,
                    Math.random() * i * 300,
                    Math.random() * i * 200,
                    "player",
                    100
                )
            );
        }

        this.physics.add.collider(this.player, this.enemies, () => {
            this.player?.takeDamage(10);
        });
    }

    update(time: number, delta: number): void {
        this.player?.move(this.cursors);

        this.cameras.main.scrollX = this.tileSprite!.tilePositionX =
            this.player!.x - this.width! / 2;
        this.cameras.main.scrollY = this.tileSprite!.tilePositionY =
            this.player!.y - this.height! / 2;
    }

    destroy(): void {}
}

export default MainScene;
