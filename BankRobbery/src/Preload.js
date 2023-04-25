class Preload {
    constructor() {
        console.log('Preload');
    }

    //load all the images for game
    preload() {
        this.game.load.image('play', 'images/play.png');
        this.game.load.image('replay', 'images/replay.png');
        this.game.load.image('title','images/title.png');
        this.game.load.image('background','images/background.png');
        this.game.load.image('gameover', 'images/gameover.png');
        this.game.load.image('gameover1', 'images/gameover1.png');
        this.game.load.image('gameover2', 'images/gameover2.png');
        this.game.load.image('hole', 'images/hole.png');
        this.game.load.image('bomb', 'images/bomb.png');
        this.game.load.image('diamond', 'images/diamond.png');
        this.game.load.spritesheet('player1', 'images/player1.png', 64, 64);
        this.game.load.spritesheet('player2', 'images/player2.png', 64, 64);
    }

    create() {
        this.game.state.start('GameTitle');
    }
}