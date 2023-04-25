class GameOver{

    constructor() {
        console.log('GameOver');
    }
    create() {
        console.log('GameOver - create');
        //var gameOverTitle = this.game.add.sprite(400, 300, "gameover");
        //gameOverTitle.anchor.setTo(0.5, 0.5);
        var playButton = this.game.add.button(400, 345, "play", this.playTheGame, this);
        playButton.anchor.setTo(0.5, 0.5);
        playButton.width = 220;
        playButton.height = 80;

    }
    playTheGame(){
        this.game.state.start("TheGame");
    }

}