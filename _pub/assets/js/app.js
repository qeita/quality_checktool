!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=3)}([function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),i=function(){function e(n){o(this,e),this.name=n,this.init()}return r(e,[{key:"init",value:function(){this.sayGoodBye(this.name)}},{key:"sayGoodBye",value:function(e){console.log("Hi, GoodBye "+e+"."),console.log("See you tomorrow.")}}]),e}();n["default"]=i},function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),i=function(){function e(n){o(this,e),this.name=n,this.init()}return r(e,[{key:"init",value:function(){this.sayHello(this.name)}},{key:"sayHello",value:function(e){console.log("Hi, hello "+e),console.log("How do you do?")}}]),e}();n["default"]=i},function(e,n){},function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(1),i=o(r),u=t(0),a=o(u),c=t(2);o(c);!function(){console.log("checktool initialize..."),new i["default"]("Yoko"),new a["default"]("Taro")}()}]);