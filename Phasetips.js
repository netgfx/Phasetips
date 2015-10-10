/**
 * PHASETIPS is a tooltip plugin for Phaser.io HTML5 game framework
 *
 * COPYRIGHT-2015
 * AUTHOR: MICHAEL DOBEKIDIS (NETGFX.COM)
 *
 **/

var Phasetips = function (options) {

    var _this = this;
    var _options = options || {};

    this.printOptions = function () {
        window.console.log(_options);
    };

    this.onHoverOver = function () {
        window.console.log("hover over");
        window.console.log(_options.animation);
        if (_options.animation === "fade") {
            var tween = game.add.tween(_this.mainGroup).to({
                alpha: 1
            }, 300, Phaser.Easing.Linear.None, true, 0, 0, false);
        } else if (_options.animation === "slide") {

        } else if (_options.animation === "grow") {

        }
    };

    this.onHoverOut = function () {
        window.console.log("hover out");
        if (_options.animation === "fade") {
            var tween = game.add.tween(_this.mainGroup).to({
                alpha: 0
            }, 200, Phaser.Easing.Linear.None, true, 0, 0, false);
        }
    };

    this.createTooltips = function () {

        // layout
        var _width = _options.width || "auto";
        var _height = _options.height || "auto";
        var _x = _options.x || "auto";
        var _y = _options.y || "auto";
        var _padding = _options.padding || 20;
        var _positionOffset = _options.positionOffset || 20;
        var _bgColor = _options.backgroundColor || 0x000000;
        var _strokeColor = _options.strokeColor || 0xffffff;
        var _strokeWeight = _options.strokeWeight || 2;
        var _customArrow = _options.customArrow || false;
        var _customBackground = _options.customBackground || false;
        var _textStyle = _options.textStyle || {
            fontSize: 12,
            fill: "#ffffff",
            stroke: "#1e1e1e",
            strokeThickness: 1
        };

        //
        var _position = _options.position || "top"; // top, bottom, left, right, auto(?)
        var _animation = _options.animation || "fade"; // fade, slide, grow
        var _content = _options.context || "Hello World"; // string, bitmapText, text, sprite, image, group
        var _object = _options.targetObject || game; // any object

        _options.animation = _animation;

        ////////////////////////////////////////////////////////////////////////////////////

        _this.mainGroup = game.add.group();
        var mainGroup = _this.mainGroup;

        // add content first to calculate width & height in case of auto
        var type = typeof _content;

        if (type === "string") {
            tooltipContent = new Phaser.Text(game, _padding/2, _padding/2, _content, _textStyle);
            tooltipContent.updateText();
            tooltipContent.update();
        }

        if (_width !== "auto" && _height !== "auto") {
            mainGroup.width = _width;
            mainGroup.height = _height;
        } else {
            mainGroup.width = tooltipContent.width + _padding;
            mainGroup.height = tooltipContent.height + _padding;
        }
        mainGroup.alpha = 0;
        if (_x !== "auto" && _y !== "auto") {
            window.console.log("not auto");
            mainGroup.x = _x;
            mainGroup.y = _y;

        } else {
            window.console.log("auto",mainGroup._width, mainGroup._height);
            if (_position === "top") {
                mainGroup.x = _object.x + ((_object.width / 2) - (mainGroup._width) / 2);
                mainGroup.y = (_object.y - (_positionOffset+mainGroup._height));
            } else if (_position === "bottom") {

            } else if (_position === "left") {

            } else if (_position === "right") {

            }

        }

        ///////////////////////////////////////////////////////////////////////////////////

        var tooltipBG;
        var tooltipContent;
        var tooltipArrow;

        if (_customBackground === false) {
            window.console.log("not custom bg",tooltipContent.width, tooltipContent.height, _bgColor, _strokeWeight, _strokeColor);
            /// create bg
            tooltipBG = game.add.graphics(tooltipContent.width, tooltipContent.height);
            tooltipBG.beginFill(_bgColor, 1);
            tooltipBG.x = 0;
            tooltipBG.y = 0;
            tooltipBG.lineStyle(_strokeWeight, _strokeColor,1);
            tooltipBG.drawRect(0, 0, tooltipContent.width+_padding, tooltipContent.height+_padding,1);
        }
        else {

        }
        // TODO:make arrow
        //  You can also create an empty Polygon:
        /*var poly = new Phaser.Polygon();

        //  And then populate it via setTo, using any combination of values as above
        poly.setTo([ new Phaser.Point(200, 100), new Phaser.Point(350, 100), new Phaser.Point(375, 200), new Phaser.Point(150, 200) ]);

        tooltipArrow = game.add.graphics(0, 0);

        tooltipArrow.beginFill(0xFF33ff);
        tooltipArrow.drawPolygon(poly.points);
        tooltipArrow.endFill();*/

        window.console.log(_this.mainGroup, mainGroup);

        // add all to group
        mainGroup.add(tooltipBG);
        mainGroup.add(tooltipContent);


        // add event listener
        _object.inputEnabled = true;
        window.console.log(_object);
        _object.events.onInputOver.add(_this.onHoverOver, this);
        _object.events.onInputOut.add(_this.onHoverOut, this);
    };

    this.createTooltips();

    return {
        printOptions: function () {
            _this.printOptions();
        }
    };
};