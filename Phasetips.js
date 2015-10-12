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
        var tween;
        if (_options.animation === "fade") {
            tween = game.add.tween(_this.mainGroup).to({
                alpha: 1
            }, 300, Phaser.Easing.Linear.None, true, 0, 0, false);
        } else if (_options.animation === "slide") {

        } else if (_options.animation === "grow") {

            _this.mainGroup.pivot.setTo(_this.mainGroup.width/2,_this.mainGroup.height);
            _this.mainGroup.pivot.setTo(_this.mainGroup.width/2,_this.mainGroup.height);
            _this.mainGroup.x = _this.mainGroup.initialX + _this.mainGroup.width/2;
            _this.mainGroup.y =  _this.mainGroup.initialY +_this.mainGroup.height;
            _this.mainGroup.scale.setTo(0, 0);
            _this.mainGroup.alpha = 1;
            tween = game.add.tween(_this.mainGroup.scale).to({
                x: 1,
                y: 1
            }, 300, Phaser.Easing.Linear.None, true, 0, 0, false);
        }
        else {
            _this.mainGroup.visible = true;
            _this.mainGroup.alpha = 1;
        }
    };

    this.onHoverOut = function () {
        if (_options.animation === "fade") {
            var tween = game.add.tween(_this.mainGroup).to({
                alpha: 0
            }, 200, Phaser.Easing.Linear.None, true, 0, 0, false);
        }
        else {
            _this.mainGroup.alpha = 0;
        }
    };

    this.createTooltips = function () {

        // layout
        var _width = _options.width || "auto";
        var _height = _options.height || "auto";
        var _x = _options.x || "auto";
        var _y = _options.y || "auto";
        var _padding = _options.padding || 20;
        var _positionOffset = _options.positionOffset === undefined ? 20 : _options.positionOffset;
        var _bgColor = _options.backgroundColor || 0x000000;
        var _strokeColor = _options.strokeColor || 0xffffff;
        var _strokeWeight = _options.strokeWeight || 2;
        var _customArrow = _options.customArrow || false;
        var _customBackground = _options.customBackground || false;
        var _textStyle = _options.textStyle || {
            fontSize: 12,
            fill: "#ffffff",
            stroke: "#1e1e1e",
            strokeThickness: 1,
            wordWrap: true,
            wordWrapWidth: 200
        };

        //
        var _position = _options.position || "top"; // top, bottom, left, right, auto(?)
        var _animation = _options.animation || "fade"; // fade, slide, grow, none to manually show it
        var _content = _options.context || "Hello World"; // string, bitmapText, text, sprite, image, group
        var _object = _options.targetObject || game; // any object

        _options.animation = _animation;

        ////////////////////////////////////////////////////////////////////////////////////

        _this.mainGroup = game.add.group();
        var mainGroup = _this.mainGroup;

        // add content first to calculate width & height in case of auto
        var type = typeof _content;

        if (type === "string") {
            tooltipContent = new Phaser.Text(game, _padding / 2, _padding / 2, _content, _textStyle);
            tooltipContent.updateText();
            tooltipContent.update();
        } else if (type === "object") {
            tooltipContent = _content;
        }

        if (_width !== "auto" && _height !== "auto") {
            mainGroup.width = _width;
            mainGroup.height = _height;
        } else {
            if(_customBackground === false){
                mainGroup.width = tooltipContent.width + _padding;
                mainGroup.height = tooltipContent.height + _padding;
            }
            else {

                if(_customBackground.width > tooltipContent.width){
                    mainGroup.width = _customBackground.width;
                    mainGroup.height = _customBackground.height;
                }
                else {
                    mainGroup.width = tooltipContent.width;
                    mainGroup.height = tooltipContent.height;
                }
            }
        }

        // Making it invisible
        mainGroup.alpha = 0;
        //////////////////////

        if (_x !== "auto" && _y !== "auto") {
            mainGroup.x = _x;
            mainGroup.y = _y;

        } else {

            // sanity check
            if (_position === "bottom") {
                if (Math.round(_object.y + _object.height + (_positionOffset)) + mainGroup._height > game.height) {
                    _position = "top";
                }
            } else if (_position === "top") {
                if (Math.round(_object.y - (_positionOffset + mainGroup._height)) < 0) {
                    _position = "bottom";
                }
            }

            if (_position === "top") {
                mainGroup.x = Math.round(_object.x + ((_object.width / 2) - (mainGroup._width / 2)));
                mainGroup.y = Math.round(_object.y - (_positionOffset + mainGroup._height));
            } else if (_position === "bottom") {
                mainGroup.x = Math.round(_object.x + ((_object.width / 2) - (mainGroup._width) / 2));
                mainGroup.y = Math.round(_object.y + _object.height + (_positionOffset));
            } else if (_position === "left") {
                mainGroup.x = Math.round(_object.x - (_positionOffset + _object.width));
                mainGroup.y = Math.round((_object.y + _object.height / 2) - (mainGroup._height/2));
            } else if (_position === "right") {
                mainGroup.x = Math.round(_object.x + _object.width + _positionOffset);
                mainGroup.y = Math.round((_object.y + _object.height / 2) - (mainGroup._height/2));
            }
        }

        mainGroup.initialX = mainGroup.x;
        mainGroup.initialY = mainGroup.y;

        ///////////////////////////////////////////////////////////////////////////////////

        var tooltipBG;
        var tooltipContent;
        var tooltipArrow;

        if (_customBackground === false) {
            /// create bg
            tooltipBG = game.add.graphics(tooltipContent.width, tooltipContent.height);
            tooltipBG.beginFill(_bgColor, 1);
            tooltipBG.x = 0;
            tooltipBG.y = 0;
            tooltipBG.lineStyle(_strokeWeight, _strokeColor, 1);
            tooltipBG.drawRect(0, 0, tooltipContent.width + _padding, tooltipContent.height + _padding, 1);
        } else {
            tooltipBG = _customBackground;
        }

        // add all to group
        mainGroup.add(tooltipBG);
        mainGroup.add(tooltipContent);


        // add event listener
        _object.inputEnabled = true;
        _object.events.onInputOver.add(_this.onHoverOver, this);
        _object.events.onInputOut.add(_this.onHoverOut, this);
    };

    this.createTooltips();

    return {
        printOptions: function () {
            _this.printOptions();
        },
        updatePosition: function (x, y) {
            _this.mainGroup.x = x;
            _this.mainGroup.y = y;
        },
        destroy: function () {
            _this.mainGroup.removeChildren();
            _this.mainGroup.destroy();
        },
        hideTooltip: function () {
            _this.mainGroup.visible = false;
            _this.mainGroup.alpha = 0;
        },
        showTooltip: function () {
            _this.mainGroup.visible = true;
            _this.mainGroup.alpha = 1;
        }
    };
};