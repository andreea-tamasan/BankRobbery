var boot = function () {
    console.log('boot');
};

boot.prototype = {
    preload: function () {
        console.log('boot - preload', this);
        this.game.load.image('loading', 'images/loading.png');
    },
    create: function () {
        console.log('boot - create');
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.game.state.start('Preload');
    },
    update: function (){
        console.log('boot - update');
    }
}