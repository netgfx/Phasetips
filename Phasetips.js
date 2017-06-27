/**
 * PHASETIPS is a tooltip plugin for Phaser.io HTML5 game framework
 *
 * COPYRIGHT-2015
 * AUTHOR: MICHAEL DOBEKIDIS (NETGFX.COM)
 *
 **/

var Phasetips = function(localGame, options) {

    var _this = this;
    var _options = options || {};
    var game = localGame || game; // it looks for a game object or falls back to the global one

    this.printOptions = function() {
        window.console.log(_options);
    };

    this.onHoverOver = function() {
        if (_this.tweenObj) {
            _this.tweenObj.stop();
        }
        if (_options.animation === "fade") {
            _this.tweenObj = game.add.tween(_this.mainGroup).to({
                alpha: 1
            }, _options.animationSpeedShow, Phaser.Easing.Linear.None, true, _options.animationDelay, 0, false);
        } else if (_options.animation === "slide") {

        } else if (_options.animation === "grow") {

            _this.mainGroup.pivot.setTo(_this.mainGroup.width / 2, _this.mainGroup.height);
            _this.mainGroup.pivot.setTo(_this.mainGroup.width / 2, _this.mainGroup.height);
            _this.mainGroup.x = _this.mainGroup.initialX + _this.mainGroup.width / 2;
            _this.mainGroup.y = _this.mainGroup.initialY + _this.mainGroup.height;
            _this.mainGroup.scale.setTo(0, 0);
            _this.mainGroup.alpha = 1;
            _this.tweenObj = game.add.tween(_this.mainGroup.scale).to({
                x: 1,
                y: 1
            }, _options.animationSpeedShow, Phaser.Easing.Linear.None, true, _options.animationDelay, 0, false);
        } else {
            _this.mainGroup.visible = true;
            _this.mainGroup.alpha = 1;
        }

        if (_options.onHoverCallback) {
            _options.onHoverCallback(_this);
        }
    };

    this.onHoverOut = function() {
        if (_this.tweenObj) {
            _this.tweenObj.stop();
        }

        if (_options.animation === "fade") {
            _this.tweenObj = game.add.tween(_this.mainGroup).to({
                alpha: 0
            }, _options.animationSpeedHide, Phaser.Easing.Linear.None, true, 0, 0, false);
        } else {
            _this.mainGroup.alpha = 0;
        }

        if (_options.onOutCallback) {
            _options.onOutCallback(_this);
        }
    };

    this.createTooltips = function() {

        // layout
        var _width = _options.width || "auto";
        var _height = _options.height || "auto";
        var _x = _options.x === undefined ? "auto" : _options.x;
        var _y = _options.y === undefined ? "auto" : _options.y;
        var _padding = _options.padding === undefined ? 20 : _options.padding;
        var _positionOffset = _options.positionOffset === undefined ? 20 : _options.positionOffset;
        var _bgColor = _options.backgroundColor || 0x000000;
        var _strokeColor = _options.strokeColor || 0xffffff;
        var _strokeWeight = _options.strokeWeight || 2;
        var _customArrow = _options.customArrow || false;
        var _enableCursor = _options.enableCursor || false;
        var _customBackground = _options.customBackground || false;
        var _fixedToCamera = _options.fixedToCamera || false;
        // Option for rounded corners
        var _roundedCornersRadius = _options.roundedCornersRadius || 1;
        // Option for font style
        var _font = _options.font || '';
        var _fontSize = _options.fontSize || 12;
        var _fontFill = _options.fontFill || "#ffffff";
        var _fontStroke = _options.fontStroke || "#1e1e1e";
        var _fontStrokeThickness = _options.fontStrokeThickness || 1;
        var _fontWordWrap = _options.fontWordWrap || true;
        var _fontWordWrapWidth = _options.fontWordWrapWidth || 200;
        // Text style properties
        var _textStyle = _options.textStyle || {
            font: _font,
            fontSize: _fontSize,
            fill: _fontFill,
            stroke: _fontStroke,
            strokeThickness: _fontStrokeThickness,
            wordWrap: _fontWordWrap,
            wordWrapWidth: _fontWordWrapWidth
        };

        //
        var _position = _options.position || "top"; // top, bottom, left, right, auto(?)
        var _animation = _options.animation || "fade"; // fade, slide, grow, none to manually show it
        var _animationDelay = _options.animationDelay || 0;
        var _content = _options.context || "Hello World"; // string, bitmapText, text, sprite, image, group
        var _object = _options.targetObject || game; // any object
        var _animationSpeedShow = _options.animationSpeedShow || 300;
        var _animationSpeedHide = _options.animationSpeedHide || 200;
        var _onHoverCallback = _options.onHoverCallback || function() {};
        var _onOutCallback = _options.onOutCallback || function() {};
        // If alwaysOn option is set to true, the tooltip will not fade in or out upon hover.
        var _initialOn = _options.initialOn || false;

        // If disableInputEvents option is set to true, PHASETIPS will not add input events.
        // Use simulateOnHoverOver, simulateOnHoverOut, hideTooltip or showTooltip methods to manually control the visibility.
        var _disableInputEvents = _options.disableInputEvents || false;

        _options.animation = _animation;
        _options.animationDelay = _animationDelay;
        _options.animationSpeedShow = _animationSpeedShow;
        _options.animationSpeedHide = _animationSpeedHide;
        _options.onHoverCallback = _onHoverCallback;
        _options.onOutCallback = _onOutCallback;

        ////////////////////////////////////////////////////////////////////////////////////
        var tooltipBG;
        var tooltipContent;
        var tooltipArrow;

        _this.mainGroup = game.add.group();
        var mainGroup = _this.mainGroup;

        // add content first to calculate width & height in case of auto
        var type = typeof _content;

        if (type === "string" || type === "number") {
            tooltipContent = new Phaser.Text(game, _padding / 2, _padding / 2, String(_content), _textStyle);
            tooltipContent.lineSpacing = _textStyle.lineSpacing || 0;
            tooltipContent.updateText();
            tooltipContent.update();
            tooltipContent.x = _padding / 2;
            tooltipContent.y = _padding / 2;
            var bounds = tooltipContent.getBounds();
            /* window.console.log(bounds);
             var debug = game.add.graphics(bounds.width, bounds.height);
             debug.x = _padding/2;
             debug.y = _padding/2;
             debug.beginFill(0xff0000, 0.6);
             debug.drawRect(0, 0, bounds.width, bounds.height, 1);
             window.console.log(debug.x)*/
        } else if (type === "object") {
            tooltipContent = _content;
        }

        if (_width !== "auto" && _height !== "auto") {
            mainGroup.width = _width;
            mainGroup.height = _height;
        } else {
            if (_customBackground === false) {
                mainGroup.width = tooltipContent.width + _padding;
                mainGroup.height = tooltipContent.height + _padding;
            } else {

                if (_customBackground.width > tooltipContent.width) {
                    mainGroup.width = _customBackground.width;
                    mainGroup.height = _customBackground.height;
                } else {
                    mainGroup.width = tooltipContent.width;
                    mainGroup.height = tooltipContent.height;
                }
            }
        }

        // Making it invisible
        if(_initialOn !== true) {
            mainGroup.alpha = 0;
        }
        //////////////////////
        function updatePosition() {
            var _origPosition = _position;
            if (_x !== "auto" && _y !== "auto") {
                var worldPos = _options.targetObject ? _options.targetObject.world : game.world;
                mainGroup.x = _x;
                mainGroup.y = _y;
                if (_fixedToCamera == true) {
                    mainGroup.fixedToCamera = true;
                    mainGroup.cameraOffset.setTo(mainGroup.x, mainGroup.y);
                }
            } else {
                var worldPos = _options.targetObject ? _options.targetObject.world : game.world;
                objectX = worldPos.x || _options.targetObject.x;
                objectY = worldPos.y || _options.targetObject.y;

                // sanity check
                if (_position === "bottom") {
                    if (Math.round(objectY + _object.height + (_positionOffset)) + mainGroup._height > game.height) {
                        _position = "top";
                    }
                } else if (_position === "top") {
                    if (Math.round(objectY - (_positionOffset + mainGroup._height)) < 0) {
                        _position = "bottom";
                    }
                }

                if (_position === "top") {
                    mainGroup.x = Math.round(objectX + ((_object.width / 2) - (mainGroup._width / 2)));
                    mainGroup.y = Math.round(objectY - (_positionOffset + mainGroup._height));
                } else if (_position === "bottom") {
                    mainGroup.x = Math.round(objectX + ((_object.width / 2) - (mainGroup._width) / 2));
                    mainGroup.y = Math.round(objectY + _object.height + (_positionOffset));
                } else if (_position === "left") {
                    mainGroup.x = Math.round(objectX - (_positionOffset + mainGroup._width));
                    mainGroup.y = Math.round((objectY + _object.height / 2) - (mainGroup._height / 2));
                    // mainGroup.scale.x = -1;
                } else if (_position === "right") {
                    mainGroup.x = Math.round(objectX + _object.width + _positionOffset);
                    mainGroup.y = Math.round((objectY + _object.height / 2) - (mainGroup._height / 2));
                }

                if (_fixedToCamera == true) {
                    mainGroup.fixedToCamera = true;
                    mainGroup.cameraOffset.setTo(mainGroup.x, mainGroup.y);
                }
            }

            // clone world position
            mainGroup.initialWorldX = worldPos.x;
            mainGroup.initialWorldY = worldPos.y;

            mainGroup.initialX = mainGroup.x;
            mainGroup.initialY = mainGroup.y;

            // if the world position changes, there might be space for the tooltip
            // to be in the original position.
            _position = _origPosition;
        }

        updatePosition();

        ///////////////////////////////////////////////////////////////////////////////////



        if (_customBackground === false) {
            /// create bg
            tooltipBG = game.add.graphics(tooltipContent.width, tooltipContent.height);
            tooltipBG.beginFill(_bgColor, 1);
            tooltipBG.x = 0;
            tooltipBG.y = 0;
            tooltipBG.lineStyle(_strokeWeight, _strokeColor, 1);

            // if roundedCornersRadius option is set to 1, drawRect will be used.
            if( _roundedCornersRadius == 1 ) {
                tooltipBG.drawRect(0, 0, tooltipContent.width + _padding, tooltipContent.height + _padding, 1);
            } else {
                tooltipBG.drawRoundedRect(0, 0, tooltipContent.width + _padding, tooltipContent.height + _padding, _roundedCornersRadius);
            }
        } else {
            tooltipBG = _customBackground;
        }

        // add all to group
        mainGroup.add(tooltipBG);
        mainGroup.add(tooltipContent);
        //if(debug)
        //mainGroup.add(debug);

        // add event listener
        // if "disableInputEvents" option is set to true, the followings are ignored.
        if(_disableInputEvents !== true) {
            _object.inputEnabled = true;
            if (_enableCursor) {
                _object.input.useHandCursor = true;
            }
            _object.events.onInputOver.add(_this.onHoverOver, this);
            _object.events.onInputDown.add(_this.onHoverOver, this);
            _object.events.onInputOut.add(_this.onHoverOut, this);
            _object.events.onInputUp.add(_this.onHoverOut, this);
        }

        mainGroup.update = function() {
            var worldPos = _options.targetObject ? _options.targetObject.world : game.world;
            if (worldPos.x !== mainGroup.initialWorldX) {
                updatePosition();
            }
        }
    };

    this.createTooltips();

    return {
        printOptions: function() {
            _this.printOptions();
        },
        updatePosition: function(x, y) {
            _this.mainGroup.x = x;
            _this.mainGroup.y = y;
        },
        destroy: function() {
            _this.mainGroup.removeChildren();
            _this.mainGroup.destroy();
        },
        hideTooltip: function() {
            _this.mainGroup.visible = false;
            _this.mainGroup.alpha = 0;
        },
        showTooltip: function() {
            _this.mainGroup.visible = true;
            _this.mainGroup.alpha = 1;
        },
        simulateOnHoverOver: function () {
            _this.onHoverOver();
        },
        simulateOnHoverOut: function () {
            _this.onHoverOut();
        }
    };
};

if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = Phasetips;
}
