import AddPx from 'add-px-to-style'
import Hyphenate from 'hyphenate-style-name'

const backgroundImageFadeIn = (selector, duration, extraCSS, containerStyles) => {

  if(typeof selector === 'undefined') {
    throw new Error('\nError in "background-image-fade-in"\n"selector" param is not defined')
  }

  else {

    if(typeof duration !== 'number') {
      duration = 1000
    }

    const ObjectToCss = obj => {
      let css = ''
      for(let index = 0; index < Object.keys(obj).length; index++) {
        const key = Object.keys(obj)[index]
        css += Hyphenate(key) + ':' + AddPx(key, obj[key]) + ';'
      }
      return css
    }

    const randomString = () => {
      const S4 = () => (((1+Math.random())*0x10000)|0).toString(16).substring(1)
      return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
    }
    
    const featuredImages = document.querySelectorAll(selector)

    for(let index = 0; index < featuredImages.length; index++) {

      const featuredImage = featuredImages[index]
      featuredImage.style.position = 'relative'

      const innerHTML = featuredImage.innerHTML 
      let innerStyles = `
        position: absolute; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
        z-index: 1;
      `
      if(typeof containerStyles === 'object') {
        innerStyles += ObjectToCss(containerStyles)
      }
      else if(typeof containerStyles === 'string') {
        innerStyles += containerStyles
      }
      featuredImage.innerHTML = `
        <div style="${innerStyles}">
          ${innerHTML}
        </div>
      `

      const aImage = document.createElement('img')
      aImage.className = 'image__loader'
      aImage.setAttribute('data-src', index)
      aImage.src = featuredImage.getAttribute('data-src')
      aImage.style.width = '1px'
      aImage.style.height = '1px'
      aImage.style.position = 'absolute'
      aImage.style.top = '-999999999999999px'
      aImage.style.left = '-999999999999999px'

      aImage.onload = function(event) {
        const rand = randomString()
        const index = event.target.getAttribute('data-src')
        const className = 'image__fade__in' + rand
        const transitionName = 'image__fade__in__transition' + rand
        const el = document.querySelectorAll(selector)[parseInt(index)]
        el.className = el.className + ' ' + className
        const image = el.getAttribute('data-src')

        // get extra css
        let styles;
        if(typeof extraCSS === 'string') {
          styles = extraCSS
        }
        else if (typeof extraCSS === 'object') {
          // let nonReadOnlyExtraCSS = extraCSS
          styles = ObjectToCss(extraCSS)
        }
        else {
          // default styles
          styles = `
            background-position: center center;
            background-size: cover;
          `
        }

        // create stylesheet
        const stylesheet = document.createElement('style')
        stylesheet.innerHTML = `
          .${className}:after {
            background-image: url(${image});
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
            z-index: 0;
            ${styles}
          }
          .${className}::after {
            background-image: url(${image});
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
            z-index: 0;
            ${styles}
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
}

export default backgroundImageFadeIn
