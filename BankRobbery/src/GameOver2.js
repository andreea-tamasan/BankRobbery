class GameOver2{

    constructor() {
        console.log('GameOver');
    }
    create() {
        console.log('GameOver - create');
        var gameTitle = this.game.add.sprite(400, 300, "gameover2");
        gameTitle.anchor.setTo(0.5, 0.5);
        gameTitle.width = 800;
        gameTitle.height = 600;
        this.game.add.text(this.game.world.centerX, this.game.world.centerY-20, "Game Over" +
            "\n player 1 won!", {font: "48px Arial", fill: "#ffffff", align: "center"}).anchor.setTo(0.5, 0.5);
        var replayButton = this.game.add.button(400, 400, "replay", this.playTheGame, this);
        replayButton.anchor.setTo(0.5, 0.5);
        replayButton.width = 220;
        replayButton.height = 80;

    }
    playTheGame(){
        this.game.state.start("TheGame");
    }

}