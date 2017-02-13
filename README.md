# Background image fade in #

Fades in background with use of `::after` + `:after`. Supports ES6 modules and module.exports.

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
* CSS string/Javascript style object 
  * default: 'background-size: cover; background-position: center center;'
  * typeL string or object
