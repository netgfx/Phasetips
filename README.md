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

<!--<strong>View examples:</strong>-->

  <hr>

<strong>General Options:</strong>

<ul>
	<li><strong>context:</strong> The information inside the tooltip, can be String, Number, Sprite, Phaser.Text, Phaser.BitmapText, Phaser.Group, Phaser.Image</li>
	<li><strong>width:</strong> The width of the tooltip (default: auto)</li>
  <li><strong>height:</strong> The height of the tooltip (default: auto)</li>
  <li><strong>x</strong> The x position of the tooltip (default: auto based on position)</li>
	<li><strong>y</strong> The y position of the tooltip (default: auto based on position)</li>
	<li><strong>targetObject</strong> The actual object in which the tooltip will appear on hover (default: Game)</li>
	<li><strong>animation: </strong> The animation effect (default: fade, options:fade, grow, none)</li>
	<li><strong>padding: </strong> The padding that the context keeps from the tooltip bounds (default: 20)</li>
    <li><strong>positionOffset: </strong> The position offset that the tooltip keeps from the targetObject (default: 20)</li>
    <li><strong>strokeColor: </strong> The color of tooltip stroke (default: 0xffffff)</li>
    <li><strong>strokeWeight: </strong> The line weight of the tooltip stroke (default: 2)</li>
    <li><strong>customBackground: </strong> If the tooltip will use a custom background (default: false)</li>
    <li><strong>position: </strong> The position of the tooltip based on the targetObject (default: top, options: top, bottom, left, right)</li>

</ul>

<strong>API Functions</strong>

<ul>
    <li><strong>printOptions: </strong> Prints the options specified in the constructor on the console</li>
    <li><strong>updatePosition: </strong> Change the x, y of the tooltip</li>
    <li><strong>destroy: </strong> Destroys the tooltip and all its children</li>
    <li><strong>hideTooltip: </strong> Hide the tooltip</li>
    <li><strong>showTooltip: </strong> Show the tooltip</li>
</ul>

<i>
</i>

<hr>

<strong>Buy me a coffee or tea!</strong>
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHLwYJKoZIhvcNAQcEoIIHIDCCBxwCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYBjD02XOv7MvNxJ2ZhYp4k9N3jrlWOOQdMGe+ujsSRgxkRJJUHMEKmP775ojELAH/LRb1p7qbSTGTNrz/HCD2IlO9+pWWoxP3ZmnAnjkJsBvFvb4EvfkYzL64ZzwVN0nm7QjqEMqZNKE/YoPpiJ/3Sa30xXy3/4fqHl73vCbEy5pzELMAkGBSsOAwIaBQAwgawGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQIfNwT2E96GjaAgYhR5G6b1mRVxdSwC9vTwAPpyKkzp9l8hZkIzT4TsjxzVlytNGhWtREO/gtrAmp5N5GL9y6axAQhwkmsf/YJcytwBzdftzH2If84GmrN/SQ3Mciwck7P0W6Yp2/wcHT4et4Vn8SydwaKMOj/4CCTVzywIC4oIMO9gKScrAsCeFvQ/f7JxtWpWOkHoIIDhzCCA4MwggLsoAMCAQICAQAwDQYJKoZIhvcNAQEFBQAwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMB4XDTA0MDIxMzEwMTMxNVoXDTM1MDIxMzEwMTMxNVowgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBR07d/ETMS1ycjtkpkvjXZe9k+6CieLuLsPumsJ7QC1odNz3sJiCbs2wC0nLE0uLGaEtXynIgRqIddYCHx88pb5HTXv4SZeuv0Rqq4+axW9PLAAATU8w04qqjaSXgbGLP3NmohqM6bV9kZZwZLR/klDaQGo1u9uDb9lr4Yn+rBQIDAQABo4HuMIHrMB0GA1UdDgQWBBSWn3y7xm8XvVk/UtcKG+wQ1mSUazCBuwYDVR0jBIGzMIGwgBSWn3y7xm8XvVk/UtcKG+wQ1mSUa6GBlKSBkTCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb22CAQAwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOBgQCBXzpWmoBa5e9fo6ujionW1hUhPkOBakTr3YCDjbYfvJEiv/2P+IobhOGJr85+XHhN0v4gUkEDI8r2/rNk1m0GA8HKddvTjyGw/XqXa+LSTlDYkqI8OwR8GEYj4efEtcRpRYBxV8KxAW93YDWzFGvruKnnLbDAF6VR5w/cCMn5hzGCAZowggGWAgEBMIGUMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMTUxMDEyMDk0NTEwWjAjBgkqhkiG9w0BCQQxFgQU03iqMlND2tC44nXyOFZVFOQmIIwwDQYJKoZIhvcNAQEBBQAEgYBtHSeOFlfNPE1RqYXqGmH6iTM4QTsddLMoDjfz4Eb02+hkNDHoREQe1y22WPCPMzvAdKOC7fO8rQW1eD93gir/NX26YdNQ654RQa7GWqBFRMsnFqwyp8N84V7tbwAI9k1+IIk20c5XN+9YwQuZqxNOg7rZqXvylVaJg3dC8BClJg==-----END PKCS7-----
">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>


<hr>

>The TODO list is diminising!

>Please let me know if you come across some bug or have something to contribute





