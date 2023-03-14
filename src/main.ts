import Phaser from "phaser";
import MainScene from "./scenes/MainScene";

const config: Phaser.Types.Core.GameConfig = {
    width: 1024,
    height: 800,
    scene: [MainScene],
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                x: 0,
                y: 0,
            },
            debug: true,
        },
    },
};

export default new Phaser.Game(config);
