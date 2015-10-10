// Copyright © 2015 Michael Dobekidis
// Licensed under the terms of the MIT License
var reg = {};
var GameState = function (game) {};
var slider;
// Load images and sounds
GameState.prototype.preload = function () {
  this.load.image('bg', "http://i221.photobucket.com/albums/dd22/djmid71/bg1_zpsxrhh1f86.jpg");
  this.load.image("char", "assets/char1.png");

  //

};

// Setup the example
GameState.prototype.create = function () {
  // Set stage background to something sky colored
  this.game.stage.backgroundColor = 0xcdcdcd;
  this.add.image(0, 0, "bg");

  /*var tooltipBG = game.add.graphics(200, 50);
            tooltipBG.beginFill("#000000", 1);
            tooltipBG.x = 0;
            tooltipBG.y = 0;
            tooltipBG.lineStyle(2, "#ff0000");
            tooltipBG.drawRect(0, 0, 200, 50,1);*/


  var block1 = game.add.image(400, 150, "char");
  block1.scale.setTo(0.5, 0.5);
  window.console.log(block1);
  var tip1 = new Phasetips({
    targetObject: block1,
    context: "A cute bunny!",
    strokeColor: 0xff0000
  });

  tip1.printOptions();

  window.console.log(game, slider);
};



// The update() method is called every frame
GameState.prototype.update = function () {

};

var game = new Phaser.Game(1024, 691, Phaser.CANVAS, 'game');
game.state.add('game', GameState, true);