// Copyright © 2015 Michael Dobekidis
// Licensed under the terms of the MIT License
var reg = {};
var GameState = function (game) {};
var slider;
// Load images and sounds
GameState.prototype.preload = function () {
  this.load.image('bg', "http://i221.photobucket.com/albums/dd22/djmid71/bg1_zpsxrhh1f86.jpg");
  this.load.image("char", "assets/char1.png");
  this.load.image("char-stroke", "assets/char1-stroke.png");
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


  var block1 = _game.add.image(400, 150, "char");
  block1.scale.setTo(0.5, 0.5);
  window.console.log(block1);

  var block2 = _game.add.text(10, 10, "Another tooltip with Phaser.Text content & animation delay", {
    fontSize: 12,
    fill: "#ffffff",
    stroke: "#1e1e1e",
    strokeThickness: 1,
    wordWrap: true,
    wordWrapWidth: 200
  });

  var block3 = _game.add.image(0, 0, "customTip");

  var block4 = _game.add.group();
  var img = _game.add.image(10, 40, "char2");
  img.scale.setTo(0.3, 0.3);

  var txt = _game.add.text(10, 10, "This looks better!", {
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

  var tip1 = new Phasetips(_game, {
    targetObject: block1,
    context: "A cute bunny but with a lot of text, that needs to wrap!",
    strokeColor: 0xff0000,
    position: "right",
    onHoverCallback: function() {
      block1.loadTexture("char-stroke");
    },
    onOutCallback: function() {
      block1.loadTexture("char");
    }
  });

    var testtip = new Phasetips(_game, {
      context: "Please enter your nickname to start game.",
      font: "Josefin Sans",
      fontSize: 24,
      width: 180,
      fontStroke: "#f45212",
      fontFill: "#f8ce18",
      backgroundColor: 0xf45212,
      strokeColor: 0xf8ce18,
      strokeWeight: 5,
      roundedCornersRadius: 10,
      x: 100,
      y: 100,
      disableInputEvents: true,
      alwaysOn: false
    });

  var tip2 = new Phasetips(_game, {
    targetObject: block1,
    context: block2,
    strokeColor: 0xfec72c,
    position: "bottom",
    animationDelay: 500,
    enableCursor: true,
    padding: 20
  });

  var tip3 = new Phasetips(_game, {
    targetObject: block1,
    context: "This is a custom tip with custom background, oh yeah!",
    position: "top",
    positionOffset: 0,
    customBackground: block3,
    animation: "grow"
  });

  var tip4 = new Phasetips(_game, {
    targetObject: block1,
    context: block4,
    position: "left"
  });

  tip1.printOptions();

  window.console.log(_game, slider);
};



// The update() method is called every frame
GameState.prototype.update = function () {

};

var _game = new Phaser.Game(1024, 691, Phaser.CANVAS, 'game');
_game.state.add('game', GameState, true);