class GameTitle {
    constructor() {
        console.log('GameTitle');
    }

    create() {
        console.log('GameTitle - create');
        var gameTitle = this.game.add.sprite(400, 300, "title");
        gameTitle.anchor.setTo(0.5, 0.5);
        gameTitle.width = 800;
        gameTitle.height = 600;
        var playButton = this.game.add.button(400, 345, "play", this.playTheGame, this);
        playButton.anchor.setTo(0.5, 0.5);
        playButton.width = 220;
        playButton.height = 80;
    }

    playTheGame() {
        this.game.state.start("TheGame");
    }
}