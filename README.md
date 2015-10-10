# PhaseSlider
A tooltips UI component for Phaser.io Javascript library

<h3>Initialize the tooltip anywhere in your game</h3>
```
var myTooltip = new Phasetips(options);
```
pass necesery options like: context (the object that launches the tooltip)

```
new Phasetips({
    targetObject: myObj,
    context: "Hello tooltip",
    strokeColor: 0xff0000
  });
```

<strong>View examples:</strong>
<a href="http://www.netgfx.com/trunk/games/libs/phaseslider/examples/example1.html">Advanced example</a> |
<a href="http://www.netgfx.com/trunk/games/libs/phaseslider/examples/index.html">Simple example</a>

  <hr>

<strong>General Options:</strong>

<ul>
	<li><strong>context:</strong> The information inside the tooltip, can be String, Number, Sprite, Phaser.Text, Phaser.BitmapText, Phaser.Group, Phaser.Image</li>
	<li><strong>width:</strong> The width of the tooltip (default auto)</li>
  <li><strong>height:</strong> The height of the tooltip (default auto)</li>
  <li><strong>x</strong> The x position of the tooltip (default auto based on position)</li>
	<li><strong>y</strong> The y position of the tooltip (default auto based on position)</li>
	<li><strong>targetObject</strong> The actual object in which the tooltip will appear on hover (default Game)</li>
	<li><strong>animation: </strong> The animation effect (default: fade)</li>
	<li><strong>padding: </strong> The padding that the context keeps from the tooltip bounds (default: 20)</li>
    <li><strong>positionOffset: </strong> The position offset that the tooltip keeps from the targetObject (default: 20)</li>
    <li><strong>strokeColor: </strong> The color of tooltip stroke (default: 0xffffff)</li>
    <li><strong>strokeWeight: </strong> The line weight of the tooltip stroke (default: 2)</li>
    <li><strong>customBackground: </strong> If the tooltip will use a custom background (default: false)</li>
    <li><strong>position: </strong> The position of the tooltip based on the targetObject (default: top)</li>

</ul>

<strong>API Functions</strong>

<ul>
	<li><strong>createSlider</strong> | Creates the slider object and the slides</li>
	<li><strong>startSlider</strong> | Starts the automatic rotation of the slider if autoAnimate is set to true</li>
	<li><strong>stopSlider</strong> | Stops the automatic rotation of slides</li>
	<li><strong>moveToSlide</strong> | Navigate to specific slide index (args: index:Number, animated:Boolean)</li>
	<li><strong>goToNext</strong> | Navigate to the next slide</li>
	<li><strong>goToPrev</strong> | Navigate to the previous slide</li>
	<li><strong>getCurrentIndex</strong> | Receive the current slide index</li>
	<li><strong>hideSlider</strong> | Render the slider not visible (the slider will not be able to receive input events)</li>
	<li><strong>showSlider</strong> | Render the slider visible</li>
</ul>

<i>
*Note: When automatic rotation has started, navigating from the control arrows (next, prev) will stop the auto animation
</i>

<hr>

>Please let me know if you come across some bug or have something to contribute





