# Background image fade in #

Fades in background with use of `::after` + `:after`. Supports ES6 modules (import) and CommonJS (require) and browser use. For browser use: use the bundle within the browser folder--using the function `backgroundImageFadeIn`.


![gif example](https://i.imgur.com/rOovj6Q.gif)

![code example](https://i.imgur.com/s433bE3.png)

## How to use ###

HTML
```
<div class="featured__image" data-src="imageone.png">
<div class="featured__image" data-src="imagetwo.png">
...
<div class="featured__image" data-src="imagefive.png">
```

Javascript
```
var BackgroundImageFadeIn = require('background-image-fade-in')
BackgroundImageFadeIn('.featured__image', 1000)
```

### or ###

HTML
```
<div class="featured__image" data-src="imageone.png">
<div class="featured__image" data-src="imagetwo.png">
...
<div class="featured__image" data-src="imagefive.png">
```

Javascript
```
import BackgroundImageFadeIn from 'background-image-fade-in'
BackgroundImageFadeIn('.featured__image', 1000)
```

### extra ###

Pass CSS string or Javascript style object
```
import BackgroundImageFadeIn from 'background-image-fade-in'
BackgroundImageFadeIn('.featured__image', 1000, { backgroundColor: 'purple' })
```
```
import BackgroundImageFadeIn from 'background-image-fade-in'
BackgroundImageFadeIn('.featured__image', 1000, 'background-color: purple;')
```
## Available parameters ##

* Selector *required*
  * type: string
* Animation duration milliseconds
  * default: 1000
  * type: int
* CSS string/Javascript style object for ::after/:after
  * default: 'background-size: cover; background-position: center center;'
  * typeL string or object
* CSS string/Javascript style object for container
  * default: 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;'
  * type: string or object
