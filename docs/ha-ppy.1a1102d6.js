parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"TqC0":[function(require,module,exports) {

},{}],"Yw6J":[function(require,module,exports) {
"use strict";require("./style.styl");var e=2,n=document.querySelectorAll(".eyeball"),t=document.querySelector("#frog"),r=!1;function i(n,t){return function(i,o){var s=+!r&&2*e*n-e,c=+!r&&2*e*t-e;i.style.marginLeft=s+"px",i.style.marginTop=c+"px"}}document.addEventListener("mousemove",function(e){var t=window.innerHeight,r=window.innerWidth,o=e.clientX/r,s=e.clientY/t;n.forEach(i(o,s))}),t.addEventListener("mousedown",function(e){r=!0,n.forEach(i(0,0)),t.classList.add("happy")}),t.addEventListener("mouseup",function(e){r=!1,t.classList.remove("happy")});
},{"./style.styl":"TqC0"}]},{},["Yw6J"], null)
//# sourceMappingURL=/ha-ppy.1a1102d6.map