class TheGame {
    cursors = undefined;
    keyA = undefined;
    keyS = undefined;
    keyD = undefined;
    keyW = undefined;
    player1=null;
    player1Score = undefined;
    score1 = 0;
    player2=null;
    player2Score = undefined;
    score2=0;
    hole1 = undefined;
    hole2 = undefined;
    hole3 = undefined;
    hole4 = undefined;
    hole5 = undefined;
    hole6 = undefined;
    diamond1 = undefined;
    diamond2 = undefined;
    diamond3 = undefined;
    diamond4 = undefined;
    diamond5 = undefined;

    constructor() {
        console.log('TheGame');
    }

    preaload() {
    }

    create() {
        this.score1=0;
        this.score2=0;
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        //this.game.physics.arcade.enableBody = true;
        this.game.physics.arcade.immovable = true;
        var land = this.game.add.tileSprite(0, 0, 800, 600, "background");
        land.fixedToCamera = true;
        //print scores for players
        this.player1Score = this.game.add.text(30, 25, 'Player1: ' , {font: "20px Arial", fill: "#ffffff", align: "center"});
        this.player2Score = this.game.add.text(680, 25, 'Player2: ', {font: "20px Arial", fill: "#ffffff", align: "center"});
        //set boundaries game
        this.game.world.setBounds(0, 0, 800, 600);
        //holes --------------------------
        //hole1
        this.hole1 = this.game.add.sprite(100,450,"hole");
        this.hole1.anchor.setTo(0.5,0.5);
        this.hole1.enableBody = true;
        this.game.physics.arcade.enable(this.hole1);
        this.hole1.body.immovable = true;
        //hole2
        this.hole2 = this.game.add.sprite(390,350,"hole");
        this.hole2.anchor.setTo(0.5,0.5);
        this.hole2.enableBody = true;
        this.game.physics.arcade.enable(this.hole2);
        this.hole2.body.immovable = true;
        //hole3
        this.hole3 = this.game.add.sprite(700,450,"hole");
        this.hole3.anchor.setTo(0.5,0.5);
        this.hole3.enableBody = true;
        this.game.physics.arcade.enable(this.hole3);
        this.hole3.body.immovable = true;
        //hole4
        this.hole4 = this.game.add.sprite(600,250,"hole");
        this.hole4.anchor.setTo(0.5,0.5);
        this.hole4.enableBody = true;
        this.game.physics.arcade.enable(this.hole4);
        this.hole4.body.immovable = true;
        //hole5
        this.hole5 = this.game.add.sprite(100,250,"hole");
        this.hole5.anchor.setTo(0.5,0.5);
        this.hole5.enableBody = true;
        this.game.physics.arcade.enable(this.hole5);
        this.hole5.body.immovable = true;
        //hole6
        this.hole6 = this.game.add.sprite(400,110,"hole");
        this.hole6.anchor.setTo(0.5,0.5);
        this.hole6.enableBody = true;
        this.game.physics.arcade.enable(this.hole6);
        this.hole6.body.immovable = true;
        //holes--------------------------end
        //diamonds ----------------------
        this.diamond1 = this.game.add.sprite(250,450,"diamond");
        this.diamond1.anchor.setTo(0.5,0.5);
        this.diamond1.enableBody = true;
        this.game.physics.arcade.enable(this.diamond1);

        this.diamond2 = this.game.add.sprite(450,200,"diamond");
        this.diamond2.anchor.setTo(0.5,0.5);
        this.diamond2.enableBody = true;
        this.game.physics.arcade.enable(this.diamond2);

        this.diamond3 = this.game.add.sprite(600,390,"diamond");
        this.diamond3.anchor.setTo(0.5,0.5);
        this.diamond3.enableBody = true;
        this.game.physics.arcade.enable(this.diamond3);

        this.diamond4 = this.game.add.sprite(150,200,"diamond");
        this.diamond4.anchor.setTo(0.5,0.5);
        this.diamond4.enableBody = true;
        this.game.physics.arcade.enable(this.diamond4);

        this.diamond5 = this.game.add.sprite(400,50,"diamond");
        this.diamond5.anchor.setTo(0.5,0.5);
        this.diamond5.enableBody = true;
        this.game.physics.arcade.enable(this.diamond5);
        //diamonds ---------------end
        //player1--------------
        this.player1 = this.game.add.sprite(520, 560, "player1");
        this.player1.anchor.setTo(0.5, 0.5);
        //player1.animations.add('walk');
        this.player1.animations.add('down',  [0,1,2,3],10,true);
        this.player1.animations.add('left',  [4,5,6,7],10,true);
        this.player1.animations.add('right', [8,9,10,11],10,true);
        this.player1.animations.add('up',    [12,13,14,15],10,true);
        this.game.physics.arcade.enable(this.player1);
        this.player1.body.collideWorldBounds = true;
        //------------------end
        //player2-----------
        this.player2 = this.game.add.sprite(350, 560, "player2");
        this.player2.anchor.setTo(0.5, 0.5);
        this.player2.animations.add('S',  [0,1,2,3],10,true);
        this.player2.animations.add('A',  [4,5,6,7],10,true);
        this.player2.animations.add('D', [8,9,10,11],10,true);
        this.player2.animations.add('W', [12,13,14,15],10,true);
        this.game.physics.arcade.enable(this.player2);
        this.player2.body.collideWorldBounds = true;
        //----------------end
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.keyA = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.keyD = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
        this.keyW = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.keyS = this.game.input.keyboard.addKey(Phaser.Keyboard.S);

    }

    update() {
        //holes overlaps with players
        this.game.physics.arcade.overlap(this.player1, this.hole1, this.onOverlap, null, this);
        this.game.physics.arcade.overlap(this.player1, this.hole2, this.onOverlap, null, this);
        this.game.physics.arcade.overlap(this.player1, this.hole3, this.onOverlap, null, this);
        this.game.physics.arcade.overlap(this.player1, this.hole4, this.onOverlap, null, this);
        this.game.physics.arcade.overlap(this.player1, this.hole5, this.onOverlap, null, this);
        this.game.physics.arcade.overlap(this.player1, this.hole6, this.onOverlap, null, this);
        this.game.physics.arcade.overlap(this.player2, this.hole1, this.onOverlap, null, this);
        this.game.physics.arcade.overlap(this.player2, this.hole2, this.onOverlap, null, this);
        this.game.physics.arcade.overlap(this.player2, this.hole3, this.onOverlap, null, this);
        this.game.physics.arcade.overlap(this.player2, this.hole4, this.onOverlap, null, this);
        this.game.physics.arcade.overlap(this.player2, this.hole5, this.onOverlap, null, this);
        this.game.physics.arcade.overlap(this.player2, this.hole6, this.onOverlap, null, this);
        //diamonds overlaps with players
        this.game.physics.arcade.overlap(this.player1, this.diamond1, this.onOverlapDiamond1_1, null, this);
        this.game.physics.arcade.overlap(this.player1, this.diamond2, this.onOverlapDiamond1_2, null, this);
        this.game.physics.arcade.overlap(this.player1, this.diamond3, this.onOverlapDiamond1_3, null, this);
        this.game.physics.arcade.overlap(this.player1, this.diamond4, this.onOverlapDiamond1_4, null, this);
        this.game.physics.arcade.overlap(this.player1, this.diamond5, this.onOverlapDiamond1_5, null, this);
        this.game.physics.arcade.overlap(this.player2, this.diamond1, this.onOverlapDiamond2_1, null, this);
        this.game.physics.arcade.overlap(this.player2, this.diamond2, this.onOverlapDiamond2_2, null, this);
        this.game.physics.arcade.overlap(this.player2, this.diamond3, this.onOverlapDiamond2_3, null, this);
        this.game.physics.arcade.overlap(this.player2, this.diamond4, this.onOverlapDiamond2_4, null, this);
        this.game.physics.arcade.overlap(this.player2, this.diamond5, this.onOverlapDiamond2_5, null, this);
        //player 1 walk
        this.player1.body.velocity.x = 0;
        this.player1.body.velocity.y = 0;
        if (this.cursors.up.isDown) {
            this.player1.animations.play('up');
            this.player1.body.velocity.y = -100;
        } else if (this.cursors.down.isDown) {
            this.player1.animations.play('down');
            this.player1.body.velocity.y = 100;
        } else if (this.cursors.left.isDown) {
            this.player1.animations.play('left');
            this.player1.body.velocity.x = -100;
        } else if (this.cursors.right.isDown) {
            this.player1.animations.play('right');
            this.player1.body.velocity.x = 100;
        }else {
            this.player1.animations.stop();
        }
        //player 2 walk
        this.player2.body.velocity.x = 0;
        this.player2.body.velocity.y = 0;
        if (this.keyW.isDown) {
            this.player2.animations.play('W');
            this.player2.body.velocity.y = -100;
        } else if (this.keyS.isDown) {
            this.player2.animations.play('S');
            this.player2.body.velocity.y = 100;
        } else if (this.keyA.isDown) {
            this.player2.animations.play('A');
            this.player2.body.velocity.x = -100;
        } else if (this.keyD.isDown) {
            this.player2.animations.play('D');
            this.player2.body.velocity.x = 100;
        }else {
            this.player2.animations.stop();
        }
        //choose who won the game
        if(this.diamond1.exists === false && this.diamond2.exists === false && this.diamond3.exists === false && this.diamond4.exists === false && this.diamond5.exists === false){
            if(this.score1 > this.score2){
                this.loseGame2();
            }else {
                this.loseGame1();
            }
        }
    }
    ////holes overlaps functions
    onOverlap() {
    console.log("Overlap detected!");
        var playerCenterX1 = this.player1.x + this.player1.width / 2 ;
        var playerCenterY1 = this.player1.y + this.player1.height / 2;
        var playerCenterX2 = this.player2.x + this.player2.width / 2;
        var playerCenterY2 = this.player2.y + this.player2.height / 2;
        // Get the bounds of the hole sprite
        var holeBounds1 = this.hole1.getBounds();
        var holeBounds2 = this.hole2.getBounds();
        var holeBounds3 = this.hole3.getBounds();
        var holeBounds4 = this.hole4.getBounds();
        var holeBounds5 = this.hole5.getBounds();
        var holeBounds6 = this.hole6.getBounds();

        // Check if the center of the player sprite is within the bounds of the hole sprite
        if (Phaser.Rectangle.contains(holeBounds1, playerCenterX1-20, playerCenterY1)) {
            console.log("Overlap detected with center of hole!");
            this.loseGame1();
        }
        if (Phaser.Rectangle.contains(holeBounds2, playerCenterX1 -20, playerCenterY1)) {
            console.log("Overlap detected with center of hole!");
            this.loseGame1();
        }
        if (Phaser.Rectangle.contains(holeBounds3, playerCenterX1 -20, playerCenterY1)) {
            console.log("Overlap detected with center of hole!");
            this.loseGame1();
        }
        if (Phaser.Rectangle.contains(holeBounds4, playerCenterX1 -20, playerCenterY1)) {
            console.log("Overlap detected with center of hole!");
            this.loseGame1();
        }
        if (Phaser.Rectangle.contains(holeBounds5, playerCenterX1 -20, playerCenterY1)) {
            console.log("Overlap detected with center of hole!");
            this.loseGame1();
        }
        if (Phaser.Rectangle.contains(holeBounds6, playerCenterX1 -20 , playerCenterY1)) {
            console.log("Overlap detected with center of hole!");
            this.loseGame1();
        }
        if (Phaser.Rectangle.contains(holeBounds1, playerCenterX2- 20, playerCenterY2)) {
            console.log("Overlap detected with center of hole!");
            this.loseGame2();
        }
        if (Phaser.Rectangle.contains(holeBounds2, playerCenterX2-20, playerCenterY2)) {
            console.log("Overlap detected with center of hole!");
            this.loseGame2();
        }
        if (Phaser.Rectangle.contains(holeBounds3, playerCenterX2- 20, playerCenterY2)) {
            console.log("Overlap detected with center of hole!");
            this.loseGame2();
        }
        if (Phaser.Rectangle.contains(holeBounds4, playerCenterX2-20, playerCenterY2)) {
            console.log("Overlap detected with center of hole!");
            this.loseGame2();
        }
        if (Phaser.Rectangle.contains(holeBounds5, playerCenterX2-20, playerCenterY2)) {
            console.log("Overlap detected with center of hole!");
            this.loseGame2();
        }
        if (Phaser.Rectangle.contains(holeBounds6, playerCenterX2-20, playerCenterY2)) {
            console.log("Overlap detected with center of hole!");
            this.loseGame2();
        }
    }
    //overlap function diamond player1
    onOverlapDiamond1_1(){
        console.log("Overlap detected!");
            this.score1 +=10;
            this.player1Score.setText('Player1: ' + this.score1 );
            this.diamond1.kill();
            this.diamond1.exists = false;
    }
    onOverlapDiamond1_2(){
        console.log("Overlap detected!");
        this.score1 +=10;
        this.player1Score.setText('Player1: ' + this.score1 );
        this.diamond2.kill();
        this.diamond2.exists = false;
    }
    onOverlapDiamond1_3(){
        console.log("Overlap detected!");
        this.score1 +=10;
        this.player1Score.setText('Player1: ' + this.score1 );
        this.diamond3.kill();
        this.diamond3.exists = false;
    }
    onOverlapDiamond1_4(){
        console.log("Overlap detected!");
        this.score1 +=10;
        this.player1Score.setText('Player1: ' + this.score1 );
        this.diamond4.kill();
        this.diamond4.exists = false;
    }
    onOverlapDiamond1_5(){
        console.log("Overlap detected!");
        this.score1 +=10;
        this.player1Score.setText('Player1: ' + this.score1 );
        this.diamond5.kill();
        this.diamond5.exists = false;
    }


    //overlap function diamond player2
    onOverlapDiamond2_1(){
        console.log("Overlap detected!");
        this.score2 +=10;
        this.player2Score.setText('Player2: ' + this.score2 );
        this.diamond1.kill();
        this.diamond1.exists = false;
        }
    onOverlapDiamond2_2(){
        console.log("Overlap detected!");
        this.score2 +=10;
        this.player2Score.setText('Player2: ' + this.score2 );
        this.diamond2.kill();
        this.diamond2.exists = false;
    }
    onOverlapDiamond2_3(){
        console.log("Overlap detected!");
        this.score2 +=10;
        this.player2Score.setText('Player2: ' + this.score2 );
        this.diamond3.kill();
        this.diamond3.exists = false;
    }
    onOverlapDiamond2_4(){
        console.log("Overlap detected!");
        this.score2 +=10;
        this.player2Score.setText('Player2: ' + this.score2 );
        this.diamond4.kill();
        this.diamond4.exists = false;
    }
    onOverlapDiamond2_5(){
        console.log("Overlap detected!");
        this.score2 +=10;
        this.player2Score.setText('Player2: ' + this.score2 );
        this.diamond5.kill();
        this.diamond5.exists = false;
    }
    //lose games functions
    loseGame1(){
        this.game.state.start("GameOver1");
    }
    loseGame2(){
        this.game.state.start("GameOver2");
    }
}