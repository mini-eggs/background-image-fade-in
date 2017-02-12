function randomString() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

module.exports = function(selector, duration) {

  var featuredImages = document.querySelectorAll(selector)

  for(var index = 0; index < featuredImages.length; index++) {
    var featuredImage = featuredImages[index]

    featuredImage.style.position = 'relative'

    var aImage = document.createElement('img')
    aImage.className = 'image__loader'
    aImage.setAttribute('data-src', index)
    aImage.src = featuredImage.getAttribute('data-src')
    aImage.style.width = '1px'
    aImage.style.height = '1px'
    aImage.style.position = 'absolute'
    aImage.style.top = '-999999999999999px'
    aImage.style.left = '-999999999999999px'

    aImage.onload = function(event) {

      var rand = randomString()
      var index = event.target.getAttribute('data-src')
      var className = 'image__fade__in' + rand
      var transitionName = 'image__fade__in__transition' + rand
      var el = document.querySelectorAll(selector)[parseInt(index)]
      el.className = el.className + ' ' + className
      var image = el.getAttribute('data-src')

      // create stylesheet
      var stylesheet = document.createElement('style')
      stylesheet.innerHTML = `
        .${className}:after {
          background-image: url(${image});
          background-position: center center;
          background-size: cover;
          content: ' ';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          animation-duration: ${duration}ms;
          animation-fill-mode: both;
          animation-name: ${transitionName};
        }
        .${className}::after {
          background-image: url(${image});
          background-position: center center;
          background-size: cover;
          content: ' ';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          animation-duration: ${duration}ms;
          animation-fill-mode: both;
          animation-name: ${transitionName};
        }
        @keyframes ${transitionName} {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `

      // append stylesheet
      document.getElementsByTagName('head')[0].appendChild(stylesheet)

      // destroy loader element
      event.target.parentNode.removeChild(event.target)
    }

    document.body.appendChild(aImage)
  }
}
