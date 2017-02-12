# Background image fade in

## fades in background with use of ::after + :after

## how to use:

```
<div class="featured__image" data-src="http://i.imgur.com/1ovu4Dl.jpg">
```

```
var backgroundImageFadeIn = require('background-image-fade-in')
backgroundImageFadeIn('.featured__image', 1000)
```

> First param must be classname of element with data-src attribute of the image

> Second param is fade in duration