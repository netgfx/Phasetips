# PhaseTips New Features(?) Proposal

Added options:
- Rounded corners
  - roundedCorderRadius
- font styles
  - fontSize
  - fontStroke
  - fontFill
- roundedCorderRadius (always show tips. control with methods to show and hide)

Please see the source code at : https://github.com/BeFiveINFO/Phasetips/blob/master/Phasetips.js

Example:

```
this.tooltip_enter_name = new Phasetips(Game, {
	targetObject: Register.spriteInstances.name_input_text_field_backpanel,
	context: "Please enter your nickname to start game.",
	fontSize: "24px Josefin Sans",
	width: 180,
	fontStroke: "#f45212",
	fontFill: "#f8ce18",
	backgroundColor: 0xf45212,
	strokeColor: 0xf8ce18,
	strokeWeight: 5,
	roundedCorderRadius: 10,
	position: "left",
	alwaysOn: true,
```

Original: https://github.com/netgfx/Phasetips
