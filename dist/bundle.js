"use strict";function randomString(){var a=function(){return(0|65536*(1+Math.random())).toString(16).substring(1)};return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}module.exports=function(a,b){for(var e,c=document.querySelectorAll(a),d=0;d<c.length;d++){e=c[d],e.style.position="relative";var f=document.createElement("img");f.className="image__loader",f.setAttribute("data-src",d),f.src=e.getAttribute("data-src"),f.style.width="1px",f.style.height="1px",f.style.position="absolute",f.style.top="-999999999999999px",f.style.left="-999999999999999px",f.onload=function(g){var h=randomString(),i=g.target.getAttribute("data-src"),j="image__fade__in"+h,k="image__fade__in__transition"+h,l=document.querySelectorAll(a)[parseInt(i)];l.className=l.className+" "+j;var m=l.getAttribute("data-src"),n=document.createElement("style");n.innerHTML="\n        ."+j+":after {\n          background-image: url("+m+");\n          background-position: center center;\n          background-size: cover;\n          content: ' ';\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          opacity: 0;\n          animation-duration: "+b+"ms;\n          animation-fill-mode: both;\n          animation-name: "+k+";\n        }\n        ."+j+"::after {\n          background-image: url("+m+");\n          background-position: center center;\n          background-size: cover;\n          content: ' ';\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          height: 100%;\n          opacity: 0;\n          animation-duration: "+b+"ms;\n          animation-fill-mode: both;\n          animation-name: "+k+";\n        }\n        @keyframes "+k+" {\n          from {\n            opacity: 0;\n          }\n          to {\n            opacity: 1;\n          }\n        }\n      ",document.getElementsByTagName("head")[0].appendChild(n),g.target.parentNode.removeChild(g.target)},document.body.appendChild(f)}};