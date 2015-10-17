// Copyright © 2015 Michael Dobekidis
// Licensed under the terms of the MIT License
var reg = {};
var GameState = function (game) {};
var slider;
// Load images and sounds
GameState.prototype.preload = function () {
  this.load.image('bg', "http://i221.photobucket.com/albums/dd22/djmid71/bg1_zpsxrhh1f86.jpg");
  this.load.image("char", "assets/char1.png");
  this.load.image("char2", "assets/char2.png");
  this.load.image("customTip", "assets/customTip.png");

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

  var block2 = game.add.text(10, 10, "Another tooltip with Phaser.Text content & animation delay", {
    fontSize: 12,
    fill: "#ffffff",
    stroke: "#1e1e1e",
    strokeThickness: 1,
    wordWrap: true,
    wordWrapWidth: 200
  });

  var block3 = game.add.image(0, 0, "customTip");

  var block4 = game.add.group();
  var img = game.add.image(10, 40, "char2");
  img.scale.setTo(0.3, 0.3);

  var txt = game.add.text(10, 10, "This looks better!", {
    fontSize: 12,
    fill: "#ffffff",
    stroke: "#1e1e1e",
    strokeThickness: 1,
    wordWrap: true,
    wordWrapWidth: 200
  });

  block4.add(img);
  block4.add(txt);

  ///////////////////////// TOOLTIPS ///////////////////////////////////////////////////////

  var tip1 = new Phasetips({
    targetObject: block1,
    context: "A cute bunny but with a lot of text, that needs to wrap!",
    strokeColor: 0xff0000,
    position: "right"
  });

  var tip2 = new Phasetips({
    targetObject: block1,
    context: block2,
    strokeColor: 0xfec72c,
    position: "bottom",
    animationDelay: 500,
    enableCursor: true,
    padding: 20
  });

  var tip3 = new Phasetips({
    targetObject: block1,
    context: "This is a custom tip with custom background, oh yeah!",
    position: "top",
    positionOffset: 0,
    customBackground: block3,
    animation: "grow"
  });

  var tip4 = new Phasetips({
    targetObject: block1,
    context: block4,
    position: "left"
  });

  tip1.printOptions();

  window.console.log(game, slider);
};



// The update() method is called every frame
GameState.prototype.update = function () {

};

var game = new Phaser.Game(1024, 691, Phaser.CANVAS, 'game');
game.state.add('game', GameState, true);