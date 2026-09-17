// ==UserScript==
// @name         X 贴文转图卡
// @name:en      X Post to Image Card
// @name:zh-CN   X 贴文转图卡
// @namespace    https://github.com/icekale/x-to-img
// @version      0.4.5
// @description  分享旁边点一下，把帖做成图，拿去微信粘
// @description:en Click next to Share and get a picture of the post you can paste
// @description:zh-CN 分享旁边点一下，把帖做成图，拿去微信粘
// @author       Kale
// @homepageURL  https://github.com/icekale/x-to-img
// @supportURL   https://github.com/icekale/x-to-img/issues
// @license      MIT
// @compatible   chrome
// @compatible   firefox
// @compatible   edge
// @match        https://x.com/*
// @match        https://twitter.com/*
// @match        https://mobile.x.com/*
// @match        https://mobile.twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=x.com
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        unsafeWindow
// @connect      pbs.twimg.com
// @connect      video.twimg.com
// @connect      abs.twimg.com
// @connect      abs-0.twimg.com
// @connect      ton.twitter.com
// @connect      *.twimg.com
// @run-at       document-idle
// ==/UserScript==

/* bundled html-to-image@1.11.13 (MIT, https://github.com/bubkoo/html-to-image) */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).htmlToImage={})}(this,(function(t){"use strict";function e(t,e,n,r){return new(n||(n=Promise))((function(i,o){function u(t){try{a(r.next(t))}catch(t){o(t)}}function c(t){try{a(r.throw(t))}catch(t){o(t)}}function a(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,c)}a((r=r.apply(t,e||[])).next())}))}function n(t,e){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(u=0)),u;)try{if(n=1,r&&(i=2&c[0]?r.return:c[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;switch(r=0,i&&(c=[2&c[0],i.value]),c[0]){case 0:case 1:i=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!i||c[1]>i[0]&&c[1]<i[3])){u.label=c[1];break}if(6===c[0]&&u.label<i[1]){u.label=i[1],i=c;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(c);break}i[2]&&u.ops.pop(),u.trys.pop();continue}c=e.call(t,u)}catch(t){c=[6,t],r=0}finally{n=i=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}var r,i=(r=0,function(){return r+=1,"u".concat("0000".concat((Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)).concat(r)});function o(t){for(var e=[],n=0,r=t.length;n<r;n++)e.push(t[n]);return e}var u=null;function c(t){return void 0===t&&(t={}),u||(u=t.includeStyleProperties?t.includeStyleProperties:o(window.getComputedStyle(document.documentElement)))}function a(t,e){var n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return n?parseFloat(n.replace("px","")):0}function s(t,e){void 0===e&&(e={});var n,r,i,o=e.width||(r=a(n=t,"border-left-width"),i=a(n,"border-right-width"),n.clientWidth+r+i),u=e.height||function(t){var e=a(t,"border-top-width"),n=a(t,"border-bottom-width");return t.clientHeight+e+n}(t);return{width:o,height:u}}var l=16384;function f(t,e){return void 0===e&&(e={}),t.toBlob?new Promise((function(n){t.toBlob(n,e.type?e.type:"image/png",e.quality?e.quality:1)})):new Promise((function(n){for(var r=window.atob(t.toDataURL(e.type?e.type:void 0,e.quality?e.quality:void 0).split(",")[1]),i=r.length,o=new Uint8Array(i),u=0;u<i;u+=1)o[u]=r.charCodeAt(u);n(new Blob([o],{type:e.type?e.type:"image/png"}))}))}function h(t){return new Promise((function(e,n){var r=new Image;r.onload=function(){r.decode().then((function(){requestAnimationFrame((function(){return e(r)}))}))},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t}))}function d(t){return e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Promise.resolve().then((function(){return(new XMLSerializer).serializeToString(t)})).then(encodeURIComponent).then((function(t){return"data:image/svg+xml;charset=utf-8,".concat(t)}))]}))}))}function v(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u;return n(this,(function(n){return e="http://www.w3.org/2000/svg",o=document.createElementNS(e,"svg"),u=document.createElementNS(e,"foreignObject"),o.setAttribute("width","".concat(r)),o.setAttribute("height","".concat(i)),o.setAttribute("viewBox","0 0 ".concat(r," ").concat(i)),u.setAttribute("width","100%"),u.setAttribute("height","100%"),u.setAttribute("x","0"),u.setAttribute("y","0"),u.setAttribute("externalResourcesRequired","true"),o.appendChild(u),u.appendChild(t),[2,d(o)]}))}))}var p=function(t,e){if(t instanceof e)return!0;var n=Object.getPrototypeOf(t);return null!==n&&(n.constructor.name===e.name||p(n,e))};function g(t,e,n,r){var i=".".concat(t,":").concat(e),o=n.cssText?function(t){var e=t.getPropertyValue("content");return"".concat(t.cssText," content: '").concat(e.replace(/'|"/g,""),"';")}(n):function(t,e){return c(e).map((function(e){var n=t.getPropertyValue(e),r=t.getPropertyPriority(e);return"".concat(e,": ").concat(n).concat(r?" !important":"",";")})).join(" ")}(n,r);return document.createTextNode("".concat(i,"{").concat(o,"}"))}function m(t,e,n,r){var o=window.getComputedStyle(t,n),u=o.getPropertyValue("content");if(""!==u&&"none"!==u){var c=i();try{e.className="".concat(e.className," ").concat(c)}catch(t){return}var a=document.createElement("style");a.appendChild(g(c,n,o,r)),e.appendChild(a)}}var w="application/font-woff",y="image/jpeg",b={woff:w,woff2:w,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:y,jpeg:y,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function S(t){var e=function(t){var e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}(t).toLowerCase();return b[e]||""}function E(t){return-1!==t.search(/^(data:)/)}function x(t,e){return"data:".concat(e,";base64,").concat(t)}function C(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){switch(n.label){case 0:return[4,fetch(t,r)];case 1:if(404===(e=n.sent()).status)throw new Error('Resource "'.concat(e.url,'" not found'));return[4,e.blob()];case 2:return o=n.sent(),[2,new Promise((function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(){try{t(i({res:e,result:r.result}))}catch(t){n(t)}},r.readAsDataURL(o)}))]}}))}))}var P={};function R(t,r,i){return e(this,void 0,void 0,(function(){var e,o,u,c,a;return n(this,(function(n){switch(n.label){case 0:if(e=function(t,e,n){var r=t.replace(/\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),e?"[".concat(e,"]").concat(r):r}(t,r,i.includeQueryParams),null!=P[e])return[2,P[e]];i.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime()),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,C(t,i.fetchRequestInit,(function(t){var e=t.res,n=t.result;return r||(r=e.headers.get("Content-Type")||""),function(t){return t.split(/,/)[1]}(n)}))];case 2:return u=n.sent(),o=x(u,r),[3,4];case 3:return c=n.sent(),o=i.imagePlaceholder||"",a="Failed to fetch resource: ".concat(t),c&&(a="string"==typeof c?c:c.message),a&&console.warn(a),[3,4];case 4:return P[e]=o,[2,o]}}))}))}function T(t){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){return"data:,"===(e=t.toDataURL())?[2,t.cloneNode(!1)]:[2,h(e)]}))}))}function A(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return t.currentSrc?(e=document.createElement("canvas"),i=e.getContext("2d"),e.width=t.clientWidth,e.height=t.clientHeight,null==i||i.drawImage(t,0,0,e.width,e.height),[2,h(e.toDataURL())]):(o=t.poster,u=S(o),[4,R(o,u,r)]);case 1:return[2,h(n.sent())]}}))}))}function k(t,r){var i;return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),(null===(i=null==t?void 0:t.contentDocument)||void 0===i?void 0:i.body)?[4,I(t.contentDocument.body,r,!0)]:[3,2];case 1:return[2,e.sent()];case 2:return[3,4];case 3:return e.sent(),[3,4];case 4:return[2,t.cloneNode(!1)]}}))}))}var L=function(t){return null!=t.tagName&&"SVG"===t.tagName.toUpperCase()};function N(t,e,n){return p(e,Element)&&(function(t,e,n){var r=e.style;if(r){var i=window.getComputedStyle(t);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):c(n).forEach((function(n){var o=i.getPropertyValue(n);if("font-size"===n&&o.endsWith("px")){var u=Math.floor(parseFloat(o.substring(0,o.length-2)))-.1;o="".concat(u,"px")}p(t,HTMLIFrameElement)&&"display"===n&&"inline"===o&&(o="block"),"d"===n&&e.getAttribute("d")&&(o="path(".concat(e.getAttribute("d"),")")),r.setProperty(n,o,i.getPropertyPriority(n))}))}}(t,e,n),function(t,e,n){m(t,e,":before",n),m(t,e,":after",n)}(t,e,n),function(t,e){p(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),p(t,HTMLInputElement)&&e.setAttribute("value",t.value)}(t,e),function(t,e){if(p(t,HTMLSelectElement)){var n=e,r=Array.from(n.children).find((function(e){return t.value===e.getAttribute("value")}));r&&r.setAttribute("selected","")}}(t,e)),e}function I(t,r,i){return e(this,void 0,void 0,(function(){return n(this,(function(u){return i||!r.filter||r.filter(t)?[2,Promise.resolve(t).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){return p(t,HTMLCanvasElement)?[2,T(t)]:p(t,HTMLVideoElement)?[2,A(t,r)]:p(t,HTMLIFrameElement)?[2,k(t,r)]:[2,t.cloneNode(L(t))]}))}))}(t,r)})).then((function(i){return function(t,r,i){var u,c;return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return L(r)?[2,r]:(e=[],0===(e=null!=(a=t).tagName&&"SLOT"===a.tagName.toUpperCase()&&t.assignedNodes?o(t.assignedNodes()):p(t,HTMLIFrameElement)&&(null===(u=t.contentDocument)||void 0===u?void 0:u.body)?o(t.contentDocument.body.childNodes):o((null!==(c=t.shadowRoot)&&void 0!==c?c:t).childNodes)).length||p(t,HTMLVideoElement)?[2,r]:[4,e.reduce((function(t,e){return t.then((function(){return I(e,i)})).then((function(t){t&&r.appendChild(t)}))}),Promise.resolve())]);case 1:return n.sent(),[2,r]}var a}))}))}(t,i,r)})).then((function(e){return N(t,e,r)})).then((function(t){return function(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c,a,s,l,f,h,d,v,p;return n(this,(function(n){switch(n.label){case 0:if(0===(e=t.querySelectorAll?t.querySelectorAll("use"):[]).length)return[2,t];i={},p=0,n.label=1;case 1:return p<e.length?(o=e[p],(u=o.getAttribute("xlink:href"))?(c=t.querySelector(u),a=document.querySelector(u),c||!a||i[u]?[3,3]:(s=i,l=u,[4,I(a,r,!0)])):[3,3]):[3,4];case 2:s[l]=n.sent(),n.label=3;case 3:return p++,[3,1];case 4:if((f=Object.values(i)).length){for(h="http://www.w3.org/1999/xhtml",(d=document.createElementNS(h,"svg")).setAttribute("xmlns",h),d.style.position="absolute",d.style.width="0",d.style.height="0",d.style.overflow="hidden",d.style.display="none",v=document.createElementNS(h,"defs"),d.appendChild(v),p=0;p<f.length;p++)v.appendChild(f[p]);t.appendChild(d)}return[2,t]}}))}))}(t,r)}))]:[2,null]}))}))}var D=/url\((['"]?)([^'"]+?)\1\)/g,H=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,M=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function F(t,r,i,o,u){return e(this,void 0,void 0,(function(){var e,c,a,s;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),e=i?function(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;var n=document.implementation.createHTMLDocument(),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),e&&(r.href=e),i.href=t,i.href}(r,i):r,c=S(r),a=void 0,u?[4,u(e)]:[3,2];case 1:return s=n.sent(),a=x(s,c),[3,4];case 2:return[4,R(e,c,o)];case 3:a=n.sent(),n.label=4;case 4:return[2,t.replace((l=r,f=l.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1"),new RegExp("(url\\(['\"]?)(".concat(f,")(['\"]?\\))"),"g")),"$1".concat(a,"$3"))];case 5:return n.sent(),[3,6];case 6:return[2,t]}var l,f}))}))}function V(t){return-1!==t.search(D)}function q(t,r,i){return e(this,void 0,void 0,(function(){var e,o;return n(this,(function(n){return V(t)?(e=function(t,e){var n=e.preferredFontFormat;return n?t.replace(M,(function(t){for(;;){var e=H.exec(t)||[],r=e[0],i=e[2];if(!i)return"";if(i===n)return"src: ".concat(r,";")}})):t}(t,i),o=function(t){var e=[];return t.replace(D,(function(t,n,r){return e.push(r),t})),e.filter((function(t){return!E(t)}))}(e),[2,o.reduce((function(t,e){return t.then((function(t){return F(t,e,r,i)}))}),Promise.resolve(e))]):[2,t]}))}))}function U(t,r,i){var o;return e(this,void 0,void 0,(function(){var e,u;return n(this,(function(n){switch(n.label){case 0:return(e=null===(o=r.style)||void 0===o?void 0:o.getPropertyValue(t))?[4,q(e,null,i)]:[3,2];case 1:return u=n.sent(),r.style.setProperty(t,u,r.style.getPropertyPriority(t)),[2,!0];case 2:return[2,!1]}}))}))}function j(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,U("background",t,r)];case 1:return n.sent()?[3,3]:[4,U("background-image",t,r)];case 2:n.sent(),n.label=3;case 3:return[4,U("mask",t,r)];case 4:return(i=n.sent())?[3,6]:[4,U("-webkit-mask",t,r)];case 5:i=n.sent(),n.label=6;case 6:return(e=i)?[3,8]:[4,U("mask-image",t,r)];case 7:e=n.sent(),n.label=8;case 8:return e?[3,10]:[4,U("-webkit-mask-image",t,r)];case 9:n.sent(),n.label=10;case 10:return[2]}}))}))}function O(t,r){return e(this,void 0,void 0,(function(){var e,i,o;return n(this,(function(n){switch(n.label){case 0:return(e=p(t,HTMLImageElement))&&!E(t.src)||p(t,SVGImageElement)&&!E(t.href.baseVal)?[4,R(i=e?t.src:t.href.baseVal,S(i),r)]:[2];case 1:return o=n.sent(),[4,new Promise((function(n,i){t.onload=n,t.onerror=r.onImageErrorHandler?function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{n(r.onImageErrorHandler.apply(r,t))}catch(t){i(t)}}:i;var u=t;u.decode&&(u.decode=n),"lazy"===u.loading&&(u.loading="eager"),e?(t.srcset="",t.src=o):t.href.baseVal=o}))];case 2:return n.sent(),[2]}}))}))}function B(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return e=o(t.childNodes),i=e.map((function(t){return z(t,r)})),[4,Promise.all(i).then((function(){return t}))];case 1:return n.sent(),[2]}}))}))}function z(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return p(t,Element)?[4,j(t,r)]:[3,4];case 1:return e.sent(),[4,O(t,r)];case 2:return e.sent(),[4,B(t,r)];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))}var W={};function $(t){return e(this,void 0,void 0,(function(){var e,r;return n(this,(function(n){switch(n.label){case 0:return null!=(e=W[t])?[2,e]:[4,fetch(t)];case 1:return[4,n.sent().text()];case 2:return r=n.sent(),e={url:t,cssText:r},W[t]=e,[2,e]}}))}))}function G(t,r){return e(this,void 0,void 0,(function(){var i,o,u,c,a=this;return n(this,(function(s){return i=t.cssText,o=/url\(["']?([^"')]+)["']?\)/g,u=i.match(/url\([^)]+\)/g)||[],c=u.map((function(u){return e(a,void 0,void 0,(function(){var e;return n(this,(function(n){return(e=u.replace(o,"$1")).startsWith("https://")||(e=new URL(e,t.url).href),[2,C(e,r.fetchRequestInit,(function(t){var e=t.result;return i=i.replace(u,"url(".concat(e,")")),[u,e]}))]}))}))})),[2,Promise.all(c).then((function(){return i}))]}))}))}function _(t){if(null==t)return[];for(var e=[],n=t.replace(/(\/\*[\s\S]*?\*\/)/gi,""),r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");;){if(null===(u=r.exec(n)))break;e.push(u[0])}n=n.replace(r,"");for(var i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,o=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");;){var u;if(null===(u=i.exec(n))){if(null===(u=o.exec(n)))break;i.lastIndex=o.lastIndex}else o.lastIndex=i.lastIndex;e.push(u[0])}return e}function J(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){return e=[],i=[],t.forEach((function(e){if("cssRules"in e)try{o(e.cssRules||[]).forEach((function(t,n){if(t.type===CSSRule.IMPORT_RULE){var o=n+1,u=$(t.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){try{e.insertRule(t,t.startsWith("@import")?o+=1:e.cssRules.length)}catch(e){console.error("Error inserting rule from remote css",{rule:t,error:e})}}))})).catch((function(t){console.error("Error loading remote css",t.toString())}));i.push(u)}}))}catch(o){var n=t.find((function(t){return null==t.href}))||document.styleSheets[0];null!=e.href&&i.push($(e.href).then((function(t){return G(t,r)})).then((function(t){return _(t).forEach((function(t){n.insertRule(t,n.cssRules.length)}))})).catch((function(t){console.error("Error loading remote stylesheet",t)}))),console.error("Error inlining remote css file",o)}})),[2,Promise.all(i).then((function(){return t.forEach((function(t){if("cssRules"in t)try{o(t.cssRules||[]).forEach((function(t){e.push(t)}))}catch(e){console.error("Error while reading CSS rules from ".concat(t.href),e)}})),e}))]}))}))}function Q(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return V(t.style.getPropertyValue("src"))}))}function X(t,r){return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:if(null==t.ownerDocument)throw new Error("Provided element is not within a Document");return[4,J(o(t.ownerDocument.styleSheets),r)];case 1:return[2,Q(e.sent())]}}))}))}function K(t){return t.trim().replace(/["']/g,"")}function Y(t,r){return e(this,void 0,void 0,(function(){var e,i;return n(this,(function(n){switch(n.label){case 0:return[4,X(t,r)];case 1:return e=n.sent(),i=function(t){var e=new Set;return function t(n){(n.style.fontFamily||getComputedStyle(n).fontFamily).split(",").forEach((function(t){e.add(K(t))})),Array.from(n.children).forEach((function(e){e instanceof HTMLElement&&t(e)}))}(t),e}(t),[4,Promise.all(e.filter((function(t){return i.has(K(t.style.fontFamily))})).map((function(t){var e=t.parentStyleSheet?t.parentStyleSheet.href:null;return q(t.cssText,e,r)})))];case 2:return[2,n.sent().join("\n")]}}))}))}function Z(t,r){return e(this,void 0,void 0,(function(){var e,i,o,u,c;return n(this,(function(n){switch(n.label){case 0:return null==r.fontEmbedCSS?[3,1]:(i=r.fontEmbedCSS,[3,5]);case 1:return r.skipFonts?(o=null,[3,4]):[3,2];case 2:return[4,Y(t,r)];case 3:o=n.sent(),n.label=4;case 4:i=o,n.label=5;case 5:return(e=i)&&(u=document.createElement("style"),c=document.createTextNode(e),u.appendChild(c),t.firstChild?t.insertBefore(u,t.firstChild):t.appendChild(u)),[2]}}))}))}function tt(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,I(t,r,!0)];case 1:return[4,Z(u=n.sent(),r)];case 2:return n.sent(),[4,z(u,r)];case 3:return n.sent(),function(t,e){var n=t.style;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width="".concat(e.width,"px")),e.height&&(n.height="".concat(e.height,"px"));var r=e.style;null!=r&&Object.keys(r).forEach((function(t){n[t]=r[t]}))}(u,r),[4,v(u,i,o)];case 4:return[2,n.sent()]}}))}))}function et(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u,c,a,f,d,v;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,tt(t,r)];case 1:return[4,h(n.sent())];case 2:return u=n.sent(),c=document.createElement("canvas"),a=c.getContext("2d"),f=r.pixelRatio||function(){var t,e;try{e=process}catch(t){}var n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}(),d=r.canvasWidth||i,v=r.canvasHeight||o,c.width=d*f,c.height=v*f,r.skipAutoScale||function(t){(t.width>l||t.height>l)&&(t.width>l&&t.height>l?t.width>t.height?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l):t.width>l?(t.height*=l/t.width,t.width=l):(t.width*=l/t.height,t.height=l))}(c),c.style.width="".concat(d),c.style.height="".concat(v),r.backgroundColor&&(a.fillStyle=r.backgroundColor,a.fillRect(0,0,c.width,c.height)),a.drawImage(u,0,0,c.width,c.height),[2,c]}}))}))}t.getFontEmbedCSS=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,Y(t,r)]}))}))},t.toBlob=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[4,f(e.sent())];case 2:return[2,e.sent()]}}))}))},t.toCanvas=et,t.toJpeg=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL("image/jpeg",r.quality||1)]}}))}))},t.toPixelData=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){var e,i,o,u;return n(this,(function(n){switch(n.label){case 0:return e=s(t,r),i=e.width,o=e.height,[4,et(t,r)];case 1:return u=n.sent(),[2,u.getContext("2d").getImageData(0,0,i,o).data]}}))}))},t.toPng=function(t,r){return void 0===r&&(r={}),e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return[4,et(t,r)];case 1:return[2,e.sent().toDataURL()]}}))}))},t.toSvg=tt}));
/* /bundled */

(function () {
  "use strict";

  const HOST_ID = "x2img-host";
  const CARD_WIDTH = 600;
  const EXPORT_SCALE = 2;
  const JPEG_QUALITY = 0.92;
  const PHOTO_MAX = 960;
  const AVATAR_MAX = 128;
  const FETCH_MAX = 8 * 1024 * 1024;
  const IMAGE_HOSTS = [/(^|\.)twimg\.com$/i, /^ton\.twitter\.com$/i];
  const PREVIEW_IMAGE_HOSTS = [/(^|\.)unsplash\.com$/i, /(^|\.)primefaces\.org$/i];
  const SHOW_MORE_RE =
    /^(Show more|Show More|显示更多|顯示更多|展開|展开|もっと見る|더 보기|Mostrar más|Mostrar mais|Afficher plus|Mehr anzeigen)$/i;

  const OPTIONS = {
    showAvatar: true,
    showTime: true,
    showStats: true,
    verified: false,
  };

  const ICONS = {
    card: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3zm.5 12.05 3.22-3.22a1.4 1.4 0 0 1 1.98 0L13.4 14.53l2.42-2.42a1.4 1.4 0 0 1 1.98 0L19 13.3V5.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9.55zM8.75 9.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5z"/></svg>`,
    spin: `<svg class="x2img-spin" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3.25a8.75 8.75 0 1 1-8.75 8.75h2.1A6.65 6.65 0 1 0 12 5.35V3.25z"/></svg>`,
    like: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.7 4.8c-1.5 0-2.8.8-3.5 2-.7-1.2-2-2-3.5-2C7.2 4.8 5.2 6.9 5.2 9.4c0 4.4 6.2 8.6 6.8 9 .6-.4 6.8-4.6 6.8-9 0-2.5-2-4.6-4.1-4.6z" fill="currentColor"/></svg>`,
    retweet: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 9.2l3.2-3.2v2.1c5.1 0 7.6 1.7 8.7 5.1-.9-1.4-2.6-2.2-5.2-2.2H7.7v2.1L4.5 9.2zm15 5.6l-3.2 3.2v-2.1c-5.1 0-7.6-1.7-8.7-5.1.9 1.4 2.6 2.2 5.2 2.2h3.5v-2.1l3.2 3.9z" fill="currentColor"/></svg>`,
    reply: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.8c-5 0-8.8 3.4-8.8 7.4 0 2.3 1.3 4.4 3.4 5.7v2.7l2.5-1.4c.9.2 1.9.4 2.9.4 5 0 8.8-3.4 8.8-7.4S17 4.8 12 4.8z" fill="currentColor"/></svg>`,
    bookmark: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 4.6h9.6c.8 0 1.4.6 1.4 1.4v13.2l-6.2-3.4-6.2 3.4V6c0-.8.6-1.4 1.4-1.4z" fill="currentColor"/></svg>`,
    views: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 18.2V13h2.4v5.2H4.5zm6.3 0V6h2.4v12.2h-2.4zm6.3 0v-8h2.4v8h-2.4z" fill="currentColor"/></svg>`,
    verified: `<svg viewBox="0 0 22 22" aria-hidden="true"><path d="M11 1.6l2.1 1.5 2.5-.4 1.2 2.3 2.3 1.2-.4 2.5L20.2 11l-1.5 2.1.4 2.5-2.3 1.2-1.2 2.3-2.5-.4L11 20.4l-2.1-1.5-2.5.4-1.2-2.3-2.3-1.2.4-2.5L1.8 11l1.5-2.1L2.9 6.4l2.3-1.2 1.2-2.3 2.5.4L11 1.6z" fill="#60a5fa"/><path d="M9.4 11.6l-1.5-1.5-1.1 1.1 2.6 2.6 5.1-5.1-1.1-1.1-4 4z" fill="#fff"/></svg>`,
    xlogo: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 10.3L22 2h-2.2l-6 6.9L8.8 2H2l7.7 10.9L2 22h2.2l6.6-7.6L15.2 22H22l-7.3-11.7zm-2.3 2.7l-.8-1.1L4.8 3.5h2.6l5.1 7.3.8 1.1 6.7 9.6h-2.6l-5.4-7.5z" fill="currentColor"/></svg>`,
  };

  const PAGE_CSS = `
    [data-x2img-action]{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;margin-left:2px;}
    [data-x2img-action] button{width:34.75px;height:34.75px;border:0;padding:0;background:transparent;border-radius:999px;color:inherit;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;}
    [data-x2img-action] button svg{width:18.75px;height:18.75px;display:block;}
    [data-x2img-action] button:hover{background:rgba(29,155,240,.1);color:rgb(29,155,240);}
    [data-x2img-action] button:focus-visible{outline:2px solid rgba(29,155,240,.6);outline-offset:0;}
    [data-x2img-action] button[data-busy="1"]{cursor:wait;opacity:.75;}
    [data-x2img-action] .x2img-spin{transform-origin:center;animation:x2img-rot .7s linear infinite;}
    @keyframes x2img-rot{to{transform:rotate(360deg);}}
    #x2img-toast{position:fixed;left:50%;bottom:28px;transform:translate(-50%,12px);z-index:2147483647;padding:10px 14px;border-radius:999px;background:#0f1419;color:#fff;font:650 13px/1.2 TwitterChirp,-apple-system,"PingFang SC",sans-serif;opacity:0;pointer-events:none;transition:opacity .18s,transform .18s;}
    #x2img-toast[data-show="1"]{opacity:1;transform:translate(-50%,0);}
    #x2img-toast[data-kind="err"]{background:#9f1239;}
  `;

  const CARD_CSS = `
    :host{all:initial;}
    *{box-sizing:border-box;}
    .stage{width:${CARD_WIDTH}px;font-family:Outfit,TwitterChirp,Chirp,-apple-system,BlinkMacSystemFont,"PingFang SC","Hiragino Sans GB","Noto Sans SC","Microsoft YaHei",sans-serif;}
    .card{width:${CARD_WIDTH}px;background:#fff;color:#0e1c71;overflow:hidden;}
    .card.is-dark{background:#15202b;color:#e7e9ea;}
    .main{display:flex;gap:16px;padding:32px;}
    .avatar{width:56px;height:56px;border-radius:12px;overflow:hidden;flex-shrink:0;background:#e5e7eb;}
    .avatar img{width:100%;height:100%;object-fit:cover;display:block;}
    .avatar-fallback{width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:20px;background:#d6c7f0;color:#3d2a6b;}
    .card.is-dark .avatar-fallback{background:#31404e;color:#e7e9ea;}
    .col{flex:1;min-width:0;display:flex;flex-direction:column;}
    .head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;}
    .who{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1;}
    .name-row{display:flex;align-items:center;gap:4px;min-width:0;}
    .name{font-size:18px;line-height:28px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#0e1c71;}
    .handle,.time{font-size:14px;line-height:20px;color:#94a3b8;white-space:nowrap;}
    .badge{width:20px;height:20px;flex-shrink:0;display:block;}
    .badge svg{width:20px;height:20px;display:block;}
    .xmark{width:24px;height:24px;color:#9ca3af;flex-shrink:0;}
    .xmark svg{width:24px;height:24px;display:block;}
    .text{margin-top:12px;font-size:16px;line-height:24px;color:#0f172a;white-space:pre-wrap;word-break:break-word;}
    .entity{color:#1d9bf0;}
    .media{margin-top:16px;display:grid;gap:2px;border-radius:12px;overflow:hidden;background:#f3f4f6;}
    .media img,.media .poster{width:100%;height:100%;object-fit:cover;display:block;background:#f3f4f6;}
    .media.n1{grid-template-columns:1fr;}
    .media.n1 img,.media.n1 .poster{max-height:480px;object-fit:contain;height:auto;}
    .media.n2{grid-template-columns:1fr 1fr;min-height:200px;}
    .media.n2 > *{min-height:200px;}
    .media.n3{grid-template-columns:1.15fr 1fr;grid-template-rows:1fr 1fr;min-height:248px;}
    .media.n3 > :first-child{grid-row:1 / span 2;min-height:248px;}
    .media.n3 > :not(:first-child){min-height:123px;}
    .media.n4{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;min-height:248px;}
    .media.n4 > *{min-height:123px;}
    .poster{position:relative;}
    .poster img{width:100%;height:100%;object-fit:cover;}
    .play{position:absolute;inset:0;margin:auto;width:48px;height:48px;border-radius:999px;background:rgba(15,23,42,.62);color:#fff;display:flex;align-items:center;justify-content:center;}
    .play::after{content:"";width:0;height:0;border-left:14px solid #fff;border-top:9px solid transparent;border-bottom:9px solid transparent;margin-left:4px;}
    .quote{margin-top:16px;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;}
    .quote-pad{padding:12px 14px;}
    .quote-name{font-size:13px;font-weight:700;color:#0e1c71;}
    .quote-handle{font-weight:400;color:#94a3b8;margin-left:6px;}
    .quote-text{margin-top:6px;font-size:14px;line-height:20px;color:#334155;}
    .quote-media{margin-top:8px;border-radius:8px;overflow:hidden;background:#f3f4f6;}
    .quote-media img{width:100%;max-height:180px;object-fit:cover;display:block;}
    .linkcard{margin-top:16px;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;}
    .linkcard-img{width:100%;max-height:220px;object-fit:cover;display:block;background:#f3f4f6;}
    .linkcard-meta{padding:10px 12px;}
    .linkcard-domain{font-size:12px;line-height:16px;color:#94a3b8;}
    .linkcard-title{margin-top:2px;font-size:14px;line-height:20px;font-weight:650;color:#0e1c71;}
    .poll{margin-top:16px;display:flex;flex-direction:column;gap:8px;}
    .poll-row{position:relative;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;min-height:36px;}
    .poll-bar{position:absolute;inset:0 auto 0 0;background:#e8f4fd;}
    .poll-row.is-win .poll-bar{background:#cde8fb;}
    .poll-inner{position:relative;display:flex;justify-content:space-between;align-items:center;gap:12px;padding:8px 12px;font-size:14px;line-height:20px;color:#0f172a;}
    .poll-pct{font-weight:700;color:#0e1c71;flex-shrink:0;}
    .poll-foot{font-size:13px;line-height:18px;color:#94a3b8;}
    .stats{margin-top:20px;display:flex;align-items:center;gap:24px;color:#64748b;}
    .stat{display:flex;align-items:center;gap:6px;}
    .stat svg{width:20px;height:20px;display:block;}
    .stat b{font-size:14px;line-height:20px;font-weight:500;}
    .card.is-dark .name,.card.is-dark .quote-name,.card.is-dark .linkcard-title,.card.is-dark .poll-pct{color:#e7e9ea;}
    .card.is-dark .text,.card.is-dark .poll-inner{color:#e7e9ea;}
    .card.is-dark .handle,.card.is-dark .time{color:#8b98a5;}
    .card.is-dark .stats,.card.is-dark .xmark{color:#8b98a5;}
    .card.is-dark .media,.card.is-dark .media img,.card.is-dark .media .poster,.card.is-dark .quote-media,.card.is-dark .linkcard-img{background:#273340;}
    .card.is-dark .quote,.card.is-dark .linkcard,.card.is-dark .poll-row{border-color:#38444d;}
    .card.is-dark .quote-text{color:#c8d0d8;}
    .card.is-dark .linkcard-domain,.card.is-dark .poll-foot{color:#8b98a5;}
    .card.is-dark .poll-bar{background:#1e3a4c;}
    .card.is-dark .poll-row.is-win .poll-bar{background:#1d4f6e;}
  `;

  function injectPageStyle(css, id) {
    if (id && document.getElementById(id)) return;
    const style = document.createElement("style");
    if (id) style.id = id;
    style.textContent = css;
    document.documentElement.appendChild(style);
    if (typeof GM_addStyle === "function" && !id) GM_addStyle(css);
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatCount(n) {
    const num = Number(n) || 0;
    if (num <= 0) return "";
    if (num < 10000) return String(num);
    const v = num / 10000;
    if (num < 100000000) return (v >= 100 ? Math.round(v) : v.toFixed(1).replace(/\.0$/, "")) + "万";
    return (num / 100000000).toFixed(1).replace(/\.0$/, "") + "亿";
  }

  function parseCompactNumber(raw) {
    if (raw == null) return 0;
    const text = String(raw).replace(/,/g, "").trim();
    if (!text) return 0;
    const zh = text.match(/([\d.]+)\s*万/);
    if (zh) return Math.round(parseFloat(zh[1]) * 10000);
    const yi = text.match(/([\d.]+)\s*亿/);
    if (yi) return Math.round(parseFloat(yi[1]) * 1e8);
    const k = text.match(/([\d.]+)\s*[Kk]/);
    if (k) return Math.round(parseFloat(k[1]) * 1000);
    const m = text.match(/([\d.]+)\s*[Mm]/);
    if (m) return Math.round(parseFloat(m[1]) * 1e6);
    const digits = text.match(/(\d+)/);
    return digits ? parseInt(digits[1], 10) : 0;
  }

  function pageIsDark() {
    const scheme = `${getComputedStyle(document.documentElement).colorScheme} ${document.documentElement.style.colorScheme}`;
    if (/\bdark\b/i.test(scheme) && !/\blight\b/i.test(scheme)) return true;
    if (/\blight\b/i.test(scheme) && !/\bdark\b/i.test(scheme)) return false;
    for (const el of [document.body, document.documentElement]) {
      if (!el) continue;
      const bg = getComputedStyle(el).backgroundColor || "";
      const m = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/.exec(bg);
      if (!m || (m[4] != null && Number(m[4]) === 0)) continue;
      return Number(m[1]) * 299 + Number(m[2]) * 587 + Number(m[3]) * 114 < 128000;
    }
    return false;
  }

  function wantsDarkCard(options) {
    if (options && options.darkCard != null) return Boolean(options.darkCard);
    return pageIsDark();
  }

  function formatStamp(iso) {
    if (!iso) return "";
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return String(iso);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}, ${hours}:${minutes} ${ampm}`;
  }

  function biggerAvatar(url) {
    if (!url) return "";
    return url.replace(/_(normal|x96|bigger)\.(jpg|png|webp)/, "_400x400.$2");
  }

  function tweetIdFromHref(href) {
    const match = String(href || "").match(/status\/(\d+)/);
    return match ? match[1] : "";
  }

  async function ensureLibs() {
    if (globalThis.htmlToImage?.toCanvas) return;
    throw new Error("导出库未内置，请重新安装脚本");
  }

  function isPrivateHost(host) {
    const name = String(host || "").toLowerCase();
    if (name === "localhost" || name.endsWith(".localhost") || name === "127.0.0.1" || name === "0.0.0.0" || name === "::1") {
      return true;
    }
    const ip = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.exec(name);
    if (!ip) return false;
    const a = Number(ip[1]);
    const b = Number(ip[2]);
    return a === 10 || a === 127 || (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168);
  }

  function isAllowedImageUrl(url) {
    const raw = String(url || "");
    if (!raw) return false;
    if (raw.startsWith("data:")) return /^data:image\/(jpeg|jpg|png|webp|gif)[;,]/i.test(raw);
    if (raw.startsWith("blob:")) return false;
    let parsed;
    try {
      parsed = new URL(raw, location.href);
    } catch {
      return false;
    }
    if (parsed.protocol !== "https:" || parsed.username || parsed.password) return false;
    if (isPrivateHost(parsed.hostname)) return false;
    if (IMAGE_HOSTS.some((re) => re.test(parsed.hostname))) return true;
    return document.documentElement.dataset.x2imgPreview === "1" && PREVIEW_IMAGE_HOSTS.some((re) => re.test(parsed.hostname));
  }

  async function blobLooksLikeImage(blob) {
    const type = String(blob.type || "").toLowerCase();
    if (/^image\/(jpeg|jpg|png|webp|gif)$/.test(type)) return true;
    const bytes = new Uint8Array(await blob.slice(0, 16).arrayBuffer());
    if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return true;
    if (bytes.length >= 4 && bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) return true;
    if (bytes.length >= 3 && bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46) return true;
    if (
      bytes.length >= 12 &&
      bytes[0] === 0x52 &&
      bytes[1] === 0x49 &&
      bytes[2] === 0x46 &&
      bytes[3] === 0x46 &&
      bytes[8] === 0x57 &&
      bytes[9] === 0x45 &&
      bytes[10] === 0x42 &&
      bytes[11] === 0x50
    ) {
      return true;
    }
    return false;
  }

  function gmRequest(url) {
    return new Promise((resolve, reject) => {
      if (typeof GM_xmlhttpRequest !== "function") {
        reject(new Error("no-gm"));
        return;
      }
      GM_xmlhttpRequest({
        method: "GET",
        url,
        responseType: "blob",
        anonymous: true,
        timeout: 15000,
        onload: (res) => {
          const blob = res.response;
          if (res.status < 200 || res.status >= 300 || !blob) {
            reject(new Error(String(res.status)));
            return;
          }
          if (blob.size > FETCH_MAX) {
            reject(new Error("too-large"));
            return;
          }
          resolve(blob);
        },
        onerror: () => reject(new Error("network")),
        ontimeout: () => reject(new Error("timeout")),
      });
    });
  }

  function blobToDataUrl(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(String(reader.result || ""));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
  }

  async function readImageBlob(url) {
    try {
      const blob = await gmRequest(url);
      if (await blobLooksLikeImage(blob)) return blob;
    } catch {
      /* fall through to page fetch */
    }
    try {
      const res = await fetch(url, { mode: "cors", credentials: "omit" });
      if (!res.ok) return null;
      const blob = await res.blob();
      if (blob.size > FETCH_MAX) return null;
      if (!(await blobLooksLikeImage(blob))) return null;
      return blob;
    } catch {
      return null;
    }
  }

  async function toDataUrl(url) {
    if (!isAllowedImageUrl(url)) return "";
    if (String(url).startsWith("data:")) return String(url);
    const blob = await readImageBlob(url);
    return blob ? blobToDataUrl(blob) : "";
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error("图片无法解码"));
      img.src = src;
    });
  }

  async function fitImage(url, maxEdge) {
    const src = await toDataUrl(url);
    if (!src) return "";
    try {
      const img = await loadImage(src);
      const longest = Math.max(img.naturalWidth, img.naturalHeight);
      const scale = Math.min(1, maxEdge / longest);
      const width = Math.max(1, Math.round(img.naturalWidth * scale));
      const height = Math.max(1, Math.round(img.naturalHeight * scale));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, width, height);
      return canvas.toDataURL("image/jpeg", 0.9);
    } catch {
      return "";
    }
  }

  function isShowMoreLabel(value) {
    return SHOW_MORE_RE.test(String(value || "").replace(/\s+/g, " ").trim());
  }

  function extractRichText(el) {
    if (!el) return { html: "", text: "" };
    const clone = el.cloneNode(true);
    clone.querySelectorAll('[data-testid="tweet-text-show-more-link"]').forEach((node) => node.remove());
    clone.querySelectorAll("a, button, [role='button']").forEach((node) => {
      if (isShowMoreLabel(node.textContent)) node.remove();
    });
    clone.querySelectorAll("img").forEach((img) => {
      const span = document.createElement("span");
      span.textContent = img.alt || "";
      img.replaceWith(span);
    });
    clone.querySelectorAll("a").forEach((a) => {
      const span = document.createElement("span");
      span.className = "entity";
      span.textContent = a.textContent || "";
      a.replaceWith(span);
    });
    const html = [...clone.childNodes]
      .map((node) => {
        if (node.nodeType === Node.TEXT_NODE) return escapeHtml(node.textContent);
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.classList.contains("entity")) {
            return `<span class="entity">${escapeHtml(node.textContent)}</span>`;
          }
          return escapeHtml(node.textContent);
        }
        return "";
      })
      .join("");
    return { html, text: clone.textContent || "" };
  }

  function decoratePlainText(text) {
    return escapeHtml(text).replace(
      /(https?:\/\/[^\s]+|@[\w_]+|#[^\s#@]+)/g,
      (m) => `<span class="entity">${m}</span>`
    );
  }

  function cardTextHtml(tweet) {
    const html = tweet?.textHtml;
    if (html && /^(?:[^<]|<span class="entity">[^<]*<\/span>)*$/.test(html)) return html;
    return decoratePlainText(tweet?.text || "");
  }

  function pickStat(article, testId) {
    const el = article.querySelector(`[data-testid="${testId}"]`);
    if (!el) return 0;
    const label = el.getAttribute("aria-label") || "";
    return parseCompactNumber(label) || parseCompactNumber((el.textContent || "").trim());
  }

  function unique(list) {
    return [...new Set(list.filter(Boolean))];
  }

  function closestOwned(el, article, selector) {
    const hit = el?.closest?.(selector);
    return hit && hit !== article && article.contains(hit) ? hit : null;
  }

  function isInsideQuote(el, article) {
    if (closestOwned(el, article, '[data-testid="quoteTweet"]')) return true;
    const nested = el?.closest?.('article[data-testid="tweet"]');
    return Boolean(nested && nested !== article);
  }

  function isInsideCardOrPoll(el, article) {
    return Boolean(
      closestOwned(el, article, '[data-testid="card.wrapper"]') ||
        closestOwned(el, article, '[data-testid="cardPoll"], [data-testid="pollResults"]')
    );
  }

  function upgradePbsUrl(url, bumpThumbs) {
    if (!url) return "";
    const raw = String(url);
    if (raw.startsWith("data:")) return raw;
    if (raw.startsWith("blob:")) return "";
    if (!bumpThumbs) return raw;
    try {
      const parsed = new URL(raw, location.href);
      if (/(^|\.)twimg\.com$/i.test(parsed.hostname) && parsed.searchParams.has("name")) {
        const name = parsed.searchParams.get("name") || "";
        if (/^(tiny|thumb|120x120|240x240|360x360|small)$/i.test(name)) {
          parsed.searchParams.set("name", "medium");
        }
      }
      return parsed.toString();
    } catch {
      return raw;
    }
  }

  function hostnameOf(href) {
    try {
      return new URL(href, location.href).hostname.replace(/^www\./, "");
    } catch {
      return "";
    }
  }

  function authorFromBlock(root) {
    const nameRoot = root.querySelector('[data-testid="User-Name"]');
    const name = nameRoot?.querySelector("span")?.textContent?.trim() || "";
    const href = nameRoot?.querySelector('a[href^="/"]')?.getAttribute("href") || "";
    const handleFromLink = href.replace(/^\//, "").split("/")[0];
    const handleMatch = (nameRoot?.innerText || "").match(/@([A-Za-z0-9_]+)/);
    return { name, handle: handleFromLink || (handleMatch ? handleMatch[1] : "") };
  }

  function parseQuote(article) {
    const byTestId = article.querySelector('[data-testid="quoteTweet"]');
    const nestedTweet = [...article.querySelectorAll('article[data-testid="tweet"]')].find((node) => node !== article);
    const byLink = [...article.querySelectorAll('div[role="link"]')].find((node) => {
      if (node.closest('[data-testid="placementTracking"], [data-testid="card.wrapper"], [data-testid="cardPoll"]')) {
        return false;
      }
      return Boolean(node.querySelector('[data-testid="User-Name"]') && node.querySelector('[data-testid="tweetText"]'));
    });
    const nested = byTestId || nestedTweet || byLink;
    if (!nested || !article.contains(nested) || nested === article) return null;
    const { name, handle } = authorFromBlock(nested);
    const textEl = nested.querySelector('[data-testid="tweetText"]');
    const photos = unique(
      [...nested.querySelectorAll('[data-testid="tweetPhoto"] img')]
        .filter((img) => !img.closest("video"))
        .map((img) => upgradePbsUrl(img.currentSrc || img.src, false))
    ).slice(0, 1);
    const text = textEl ? textEl.innerText.trim() : "";
    if (!name && !handle && !text && !photos.length) return null;
    return { name, handle, text, photos };
  }

  function parseLinkCard(article) {
    const wrap = [...article.querySelectorAll('[data-testid="card.wrapper"]')].find((node) => {
      if (isInsideQuote(node, article)) return false;
      return !node.querySelector('[data-testid="cardPoll"], [data-testid="pollResults"], [role="radio"]');
    });
    if (!wrap) return null;
    const img = wrap.querySelector(
      '[data-testid="card.layoutLarge.media"] img, [data-testid="card.layoutSmall.media"] img, [data-testid$=".media"] img, img'
    );
    const anchor = wrap.querySelector("a[href]") || wrap.closest("a[href]");
    const href = anchor?.href || "";
    const detail =
      wrap.querySelector(
        '[data-testid="card.layoutLarge.detail"], [data-testid="card.layoutSmall.detail"], [data-testid$=".detail"]'
      ) || wrap;
    const lines = [];
    for (const span of detail.querySelectorAll("span")) {
      const line = (span.textContent || "").trim();
      if (line.length < 2) continue;
      if (lines.some((existing) => existing === line || existing.includes(line))) continue;
      lines.push(line);
    }
    const domainGuess = hostnameOf(href);
    const domainLine = lines.find((line) => /^[a-z0-9.-]+\.[a-z]{2,}$/i.test(line) || line === domainGuess);
    const domain = (domainGuess || domainLine || "").replace(/^www\./, "");
    const title =
      lines.find((line) => line !== domainLine && line !== domain && line.length > 6) ||
      lines.find((line) => line !== domainLine && line !== domain) ||
      "";
    const image = upgradePbsUrl(img?.currentSrc || img?.src || "", true);
    if (!title && !image && !domain) return null;
    return { title, domain, url: href, image };
  }

  function parsePoll(article) {
    const root =
      [...article.querySelectorAll('[data-testid="cardPoll"], [data-testid="pollResults"]')].find(
        (node) => !isInsideQuote(node, article)
      ) ||
      [...article.querySelectorAll('[role="radiogroup"]')].find((node) => !isInsideQuote(node, article));
    if (!root) return null;

    const options = [];
    const pushOpt = (label, percent) => {
      const clean = String(label || "").replace(/\s+/g, " ").trim();
      if (!clean || options.some((item) => item.label === clean)) return;
      const value = percent == null || Number.isNaN(Number(percent)) ? null : Number(percent);
      options.push({ label: clean, percent: value });
    };

    const rows = [...root.querySelectorAll('[role="radio"], [data-testid^="pollChoice"]')];
    if (rows.length >= 2) {
      for (const row of rows) {
        const aria = row.getAttribute("aria-label") || "";
        const ariaPct = aria.match(/(\d+(?:\.\d+)?)\s*%/);
        const ariaName = aria
          .replace(/[,.]?\s*\d+(?:\.\d+)?\s*%.*$/u, "")
          .replace(/^(Choice\s*\d+:|选项\s*\d+[：:])\s*/i, "")
          .trim();
        const pctEl = row.querySelector('[data-testid="pollPercentage"]');
        const textPct = (row.textContent || "").match(/(\d+(?:\.\d+)?)\s*%/);
        const percent = pctEl
          ? parseFloat((pctEl.textContent || "").replace("%", ""))
          : ariaPct
            ? parseFloat(ariaPct[1])
            : textPct
              ? parseFloat(textPct[1])
              : null;
        const label =
          ariaName ||
          (row.querySelector("span")?.textContent || "").trim() ||
          (row.textContent || "").replace(/(\d+(?:\.\d+)?)\s*%/g, "").trim();
        pushOpt(label, percent);
      }
    } else {
      const leaves = [...root.querySelectorAll("div")].filter((el) => {
        const text = (el.textContent || "").trim();
        if (!/\d+\s*%/.test(text)) return false;
        return ![...el.querySelectorAll("div")].some((child) => {
          const childText = (child.textContent || "").trim();
          return childText && childText !== text && /\d+\s*%/.test(childText);
        });
      });
      for (const row of leaves) {
        const match = (row.textContent || "").match(/(\d+(?:\.\d+)?)\s*%/);
        pushOpt((row.textContent || "").replace(/(\d+(?:\.\d+)?)\s*%/g, "").trim(), match ? parseFloat(match[1]) : null);
      }
    }

    if (options.length < 2) return null;
    const votes =
      root.querySelector('[data-testid="pollTotalVotes"]')?.textContent?.trim() ||
      ((root.textContent || "").match(/([\d,.]+)\s*(votes?|票|人投票)/i) || [])[0] ||
      "";
    const remain =
      root.querySelector('[data-testid="pollTimeRemaining"]')?.textContent?.trim() ||
      ((root.textContent || "").match(/(\d+\s*(?:hours?|days?|minutes?|小时|天|分钟).*|Final results|已结束)/i) ||
        [])[0] ||
      "";
    return { options: options.slice(0, 4), footer: [votes, remain].filter(Boolean).join(" · ") };
  }

  function parseVideoPoster(article) {
    const players = [
      ...article.querySelectorAll(
        '[data-testid="videoPlayer"], [data-testid="videoComponent"], [data-testid="previewInterstitial"]'
      ),
    ].filter((node) => !isInsideQuote(node, article) && !isInsideCardOrPoll(node, article));
    const sources = [];
    for (const player of players) {
      const video = player.querySelector("video");
      const img = player.querySelector("img");
      const styled = [...player.querySelectorAll("[style]")].find((el) =>
        /background-image/i.test(el.getAttribute("style") || "")
      );
      const bg = (styled?.getAttribute("style") || "").match(/url\((['"]?)([^"')]+)\1\)/);
      sources.push(video?.poster, img?.currentSrc, img?.src, bg?.[2]);
    }
    for (const video of article.querySelectorAll("video")) {
      if (isInsideQuote(video, article) || isInsideCardOrPoll(video, article)) continue;
      sources.push(video.poster);
    }
    return upgradePbsUrl(sources.find((src) => src && !String(src).startsWith("blob:")) || "", true);
  }

  function collectPhotos(article) {
    return unique(
      [...article.querySelectorAll('[data-testid="tweetPhoto"]')]
        .filter((box) => !isInsideQuote(box, article) && !isInsideCardOrPoll(box, article) && !box.querySelector("video"))
        .flatMap((box) =>
          [...box.querySelectorAll("img")].map((img) => upgradePbsUrl(img.currentSrc || img.src, false))
        )
    ).slice(0, 4);
  }

  function ownedByArticle(el, article) {
    return Boolean(el && article.contains(el) && !isInsideQuote(el, article) && !isInsideCardOrPoll(el, article));
  }

  function findShowMoreControl(article) {
    const byTestId = [...article.querySelectorAll('[data-testid="tweet-text-show-more-link"]')].find((el) =>
      ownedByArticle(el, article)
    );
    if (byTestId) return byTestId;
    const textEl = [...article.querySelectorAll('[data-testid="tweetText"]')].find((el) => ownedByArticle(el, article));
    const scope = textEl?.parentElement || article;
    return (
      [...scope.querySelectorAll("a, button, [role='button'], span")].find((el) => {
        if (!ownedByArticle(el, article)) return false;
        const label = (el.textContent || "").trim();
        return isShowMoreLabel(label) && label.length <= 16;
      }) || null
    );
  }

  function isTruncated(article) {
    return Boolean(findShowMoreControl(article));
  }

  function showMoreNavigates(el) {
    if (!el) return false;
    const link = el.closest?.("a[href]") || (el.tagName === "A" ? el : null);
    if (!link) return false;
    const raw = link.getAttribute("href") || "";
    if (!raw || raw === "#" || /^javascript:/i.test(raw)) return false;
    const id = tweetIdFromHref(link.href || raw);
    const here = tweetIdFromHref(location.href);
    if (id && here && id === here) return false;
    return Boolean(id) || /\/status\//.test(raw);
  }

  function expandTarget(el) {
    if (!el || showMoreNavigates(el)) return null;
    const button = el.closest?.("button, [role='button']");
    if (button && !showMoreNavigates(button)) return button;
    if (!el.closest?.("a[href]")) return el;
    return null;
  }

  function canExpandInPlace(article) {
    return Boolean(expandTarget(findShowMoreControl(article)));
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function expandTweetText(article) {
    const target = expandTarget(findShowMoreControl(article));
    if (!target) return false;
    const before = [...article.querySelectorAll('[data-testid="tweetText"]')].find((el) =>
      ownedByArticle(el, article)
    )?.innerText || "";
    target.click();
    const start = Date.now();
    while (Date.now() - start < 900) {
      if (!isTruncated(article)) return true;
      const after = [...article.querySelectorAll('[data-testid="tweetText"]')].find((el) =>
        ownedByArticle(el, article)
      )?.innerText || "";
      if (after.length > before.length + 8) return true;
      await sleep(50);
    }
    return !isTruncated(article);
  }

  function readNoteTextRaw(article, wantId) {
    wantId = String(wantId || "");
    if (!article) return "";

    function fiberOf(node) {
      if (!node) return null;
      let names = [];
      try {
        names = Object.getOwnPropertyNames(node);
      } catch {
        names = [];
      }
      for (const key of names) {
        if (key.startsWith("__reactFiber$") || key.startsWith("__reactInternalInstance$")) {
          try {
            return node[key];
          } catch {
            /* xray */
          }
        }
      }
      try {
        for (const key in node) {
          if (key.startsWith("__reactFiber$") || key.startsWith("__reactInternalInstance$")) return node[key];
        }
      } catch {
        /* xray */
      }
      return null;
    }

    function isNode(value) {
      return Boolean(value && (value.nodeType === 1 || value.nodeType === 3 || value.nodeType === 9 || value.nodeType === 11));
    }

    function tweetIdOf(value) {
      if (!value || typeof value !== "object") return "";
      if (value.rest_id) return String(value.rest_id);
      if (value.restId) return String(value.restId);
      if (value.legacy?.id_str) return String(value.legacy.id_str);
      if (value.legacy?.idStr) return String(value.legacy.idStr);
      return "";
    }

    function noteFrom(value) {
      if (!value || typeof value !== "object") return null;
      const block = value.note_tweet || value.noteTweet;
      if (!block) return null;
      const results = block.note_tweet_results || block.noteTweetResults;
      return results?.result || null;
    }

    function unwrapTweet(value, depth) {
      if (!value || typeof value !== "object" || isNode(value) || depth > 6) return null;
      if (noteFrom(value)) return value;
      return (
        unwrapTweet(value.result, depth + 1) ||
        unwrapTweet(value.tweet, depth + 1) ||
        unwrapTweet(value.tweetResult, depth + 1) ||
        unwrapTweet(value.tweet_results, depth + 1) ||
        unwrapTweet(value.tweetResults, depth + 1) ||
        null
      );
    }

    function textOf(value) {
      const tweet = unwrapTweet(value, 0);
      if (!tweet) return "";
      const id = tweetIdOf(tweet);
      if (wantId && id && id !== wantId) return "";
      return String(noteFrom(tweet)?.text || "").trim();
    }

    function search(root) {
      const seen = new Set();
      const queue = [[root, 0]];
      let steps = 0;
      while (queue.length && steps < 100) {
        const [value, depth] = queue.shift();
        steps += 1;
        if (!value || typeof value !== "object" || isNode(value) || seen.has(value)) continue;
        seen.add(value);
        const text = textOf(value);
        if (text) return text;
        if (depth >= 5) continue;
        let kids = [];
        try {
          kids = Array.isArray(value) ? value.slice(0, 16) : Object.values(value).slice(0, 28);
        } catch {
          kids = [];
        }
        for (const kid of kids) queue.push([kid, depth + 1]);
      }
      return "";
    }

    let fiber = fiberOf(article);
    for (let hop = 0; hop < 60 && fiber; hop += 1) {
      const text = search(fiber.memoizedProps || fiber.pendingProps);
      if (text) return text;
      fiber = fiber.return;
    }
    return "";
  }

  function fullTextFromPage(article, wantId) {
    const nodes = [article, article?.wrappedJSObject].filter(Boolean);
    const source = readNoteTextRaw.toString();
    const runners = [];
    try {
      if (typeof unsafeWindow !== "undefined" && typeof unsafeWindow.Function === "function") {
        runners.push(unsafeWindow.Function("return (" + source + ").apply(null, arguments)"));
      }
    } catch {
      /* sandbox */
    }
    runners.push(readNoteTextRaw);
    for (const node of nodes) {
      for (const run of runners) {
        try {
          const text = String(run(node, wantId || "") || "").trim();
          if (text) return text;
        } catch {
          /* fiber shape drifted */
        }
      }
    }
    return "";
  }

  function shouldUseFullText(full, current) {
    const a = String(full || "").replace(/\s+/g, " ").trim();
    const b = String(current || "")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/[.…]+$/u, "")
      .trim();
    if (a.length <= b.length + 8) return false;
    if (!b) return a.length > 0;
    return a.startsWith(b.slice(0, Math.min(32, b.length))) || a.length >= b.length * 1.25;
  }

  function hydrateTweet(article) {
    const tweet = parseTweet(article);
    const full = fullTextFromPage(article, tweet.id);
    if (!shouldUseFullText(full, tweet.text)) return tweet;
    return {
      ...tweet,
      text: full,
      textHtml: decoratePlainText(full),
      truncated: false,
    };
  }

  async function completeTweet(article) {
    let tweet = hydrateTweet(article);
    if (!tweet.truncated || !canExpandInPlace(article)) return tweet;
    await expandTweetText(article);
    return hydrateTweet(article);
  }

  function copiedMessage(tweet, downloaded) {
    if (tweet.truncated) {
      return downloaded
        ? "已下载。正文可能不完整，打开贴文详情再复制"
        : "已复制。正文可能被截断，打开贴文详情可复制全文";
    }
    return downloaded ? "无法复制，已改为下载" : "已复制，去微信粘贴即可";
  }

  function parseTweet(article) {
    const nameRoot = article.querySelector('[data-testid="User-Name"]');
    const nameLink = nameRoot?.querySelector('a[role="link"]');
    const displayName =
      nameRoot?.querySelector("span")?.textContent?.trim() ||
      nameLink?.textContent?.trim() ||
      "";
    const handleFromLink = (nameRoot?.querySelector('a[href^="/"]')?.getAttribute("href") || "")
      .replace(/^\//, "")
      .split("/")[0];
    const handleText = (nameRoot?.innerText || "").match(/@([A-Za-z0-9_]+)/);
    const handle = handleFromLink || (handleText ? handleText[1] : "");
    const time = article.querySelector("time");
    const createdAt = time?.getAttribute("datetime") || "";
    const statusAnchor = time?.closest("a") || article.querySelector('a[href*="/status/"]') || nameLink;
    const url = statusAnchor?.href || (handle ? `https://x.com/${handle}` : location.href);
    const textEl = article.querySelector('[data-testid="tweetText"]');
    const rich = extractRichText(textEl);
    const avatarEl =
      article.querySelector('[data-testid="Tweet-User-Avatar"] img, img[src*="profile_images"]') ||
      article.querySelector("img[src]");
    const photos = collectPhotos(article);
    const poll = parsePoll(article);
    const viewsEl = article.querySelector('a[href$="/analytics"]');
    return {
      id: tweetIdFromHref(url),
      url: url.split("?")[0],
      name: displayName,
      handle,
      verified: Boolean(
        nameRoot?.querySelector('[data-testid="icon-verified"], svg[aria-label*="Verified"], svg[aria-label*="认证"]')
      ),
      createdAt,
      text: rich.text,
      textHtml: rich.html,
      avatar: biggerAvatar(avatarEl?.currentSrc || avatarEl?.src || ""),
      photos,
      videoPoster: parseVideoPoster(article),
      likes: pickStat(article, "like"),
      retweets: pickStat(article, "retweet"),
      replies: pickStat(article, "reply"),
      bookmarks: pickStat(article, "bookmark"),
      views: parseCompactNumber(viewsEl?.getAttribute("aria-label") || viewsEl?.textContent || ""),
      quote: parseQuote(article),
      linkCard: poll ? null : parseLinkCard(article),
      poll,
      truncated: isTruncated(article),
    };
  }

  function sampleTweet() {
    return {
      id: "1802505706295455785",
      url: "https://x.com/shunyadezain/status/1802505706295455785",
      name: "Heisenberg",
      handle: "heisenberg",
      verified: true,
      createdAt: "2021-11-11T21:38:00",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum praesent commodo cum at ipsum magna conubia faucibus dignissim in dictumst conubia. Lorem taciti vel cras felis ligula ipsum erat sem enim risus pharetra egestas.",
      textHtml: "",
      avatar: "https://primefaces.org/cdn/primevue/images/organization/walter.jpg",
      photos: ["https://images.unsplash.com/photo-1718040506078-5a7b90746511?q=80&w=1777&auto=format&fit=crop"],
      videoPoster: "",
      likes: 14,
      retweets: 77,
      replies: 988,
      bookmarks: 0,
      views: 0,
      quote: null,
      linkCard: null,
      poll: null,
      truncated: false,
    };
  }

  function mediaHtml(tweet) {
    const shots = (tweet.photos || []).filter(Boolean).slice(0, 4);
    if (!shots.length && tweet.videoPoster) {
      return `<div class="media n1"><div class="poster"><img alt="" src="${escapeHtml(tweet.videoPoster)}"><div class="play"></div></div></div>`;
    }
    if (!shots.length) return "";
    const n = Math.min(4, shots.length);
    return `<div class="media n${n}">${shots.map((src) => `<img alt="" src="${escapeHtml(src)}">`).join("")}</div>`;
  }

  function statsHtml(tweet, options) {
    if (!options.showStats) return "";
    const items = [
      [ICONS.like, tweet.likes],
      [ICONS.retweet, tweet.retweets],
      [ICONS.reply, tweet.replies],
      [ICONS.bookmark, tweet.bookmarks],
      [ICONS.views, tweet.views],
    ]
      .map(([icon, count]) => {
        const label = formatCount(count);
        return label ? `<div class="stat">${icon}<b>${escapeHtml(label)}</b></div>` : "";
      })
      .filter(Boolean)
      .join("");
    return items ? `<div class="stats">${items}</div>` : "";
  }

  function quoteHtml(quote) {
    if (!quote || (!quote.text && !quote.photos?.length && !quote.name && !quote.handle)) return "";
    const photo = quote.photos?.[0]
      ? `<div class="quote-media"><img alt="" src="${escapeHtml(quote.photos[0])}"></div>`
      : "";
    return `<div class="quote"><div class="quote-pad"><div class="quote-name">${escapeHtml(quote.name || "")}<span class="quote-handle">${quote.handle ? "@" + escapeHtml(quote.handle) : ""}</span></div>${quote.text ? `<div class="quote-text">${escapeHtml(quote.text)}</div>` : ""}${photo}</div></div>`;
  }

  function linkCardHtml(card) {
    if (!card || (!card.title && !card.image && !card.domain)) return "";
    return `<div class="linkcard">${card.image ? `<img class="linkcard-img" alt="" src="${escapeHtml(card.image)}">` : ""}<div class="linkcard-meta">${card.domain ? `<div class="linkcard-domain">${escapeHtml(card.domain)}</div>` : ""}${card.title ? `<div class="linkcard-title">${escapeHtml(card.title)}</div>` : ""}</div></div>`;
  }

  function pollHtml(poll) {
    if (!poll?.options?.length) return "";
    const scored = poll.options.filter((item) => item.percent != null);
    const top = scored.length ? Math.max(...scored.map((item) => item.percent)) : -1;
    const rows = poll.options
      .map((item) => {
        const win = item.percent != null && item.percent === top && top >= 0;
        const width = item.percent == null ? 0 : Math.max(0, Math.min(100, item.percent));
        const pct = item.percent == null ? "" : `<span class="poll-pct">${escapeHtml(String(Math.round(item.percent)))}%</span>`;
        return `<div class="poll-row${win ? " is-win" : ""}">${width ? `<div class="poll-bar" style="width:${width}%"></div>` : ""}<div class="poll-inner"><span>${escapeHtml(item.label)}</span>${pct}</div></div>`;
      })
      .join("");
    return `<div class="poll">${rows}${poll.footer ? `<div class="poll-foot">${escapeHtml(poll.footer)}</div>` : ""}</div>`;
  }

  function renderCard(tweet, options) {
    const opts = { ...OPTIONS, ...options, verified: options.verified ?? tweet.verified };
    const initial = (tweet.name || tweet.handle || "X").slice(0, 1).toUpperCase();
    const avatar = opts.showAvatar
      ? `<div class="avatar">${tweet.avatar ? `<img alt="" src="${escapeHtml(tweet.avatar)}">` : `<div class="avatar-fallback">${escapeHtml(initial)}</div>`}</div>`
      : "";
    const body = cardTextHtml(tweet);
    return `
      <div class="card${opts.darkCard ? " is-dark" : ""}" data-card-root>
        <div class="main">
          ${avatar}
          <div class="col">
            <div class="head">
              <div class="who">
                <div class="name-row">
                  <div class="name">${escapeHtml(tweet.name || "")}</div>
                  ${opts.verified ? `<span class="badge">${ICONS.verified}</span>` : ""}
                  <div class="handle">${tweet.handle ? "@" + escapeHtml(tweet.handle) : ""}</div>
                </div>
                ${opts.showTime ? `<div class="time">${escapeHtml(formatStamp(tweet.createdAt))}</div>` : ""}
              </div>
              <div class="xmark">${ICONS.xlogo}</div>
            </div>
            <div class="text">${body}</div>
            ${mediaHtml(tweet)}
            ${quoteHtml(tweet.quote)}
            ${linkCardHtml(tweet.linkCard)}
            ${pollHtml(tweet.poll)}
            ${statsHtml(tweet, opts)}
          </div>
        </div>
      </div>
    `;
  }

  function toast(message, kind) {
    let el = document.getElementById("x2img-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "x2img-toast";
      document.documentElement.appendChild(el);
    }
    el.textContent = message;
    el.dataset.kind = kind || "ok";
    el.dataset.show = "1";
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      el.dataset.show = "0";
    }, kind === "err" || message.length > 16 ? 3600 : 2400);
  }

  function renderer() {
    let host = document.getElementById(HOST_ID);
    if (host) return host.shadowRoot;
    host = document.createElement("div");
    host.id = HOST_ID;
    host.style.cssText = "position:fixed;left:-12000px;top:0;width:600px;pointer-events:none;";
    const shadow = host.attachShadow({ mode: "open" });
    shadow.innerHTML = `<style>${CARD_CSS}</style><div class="stage"></div>`;
    document.documentElement.appendChild(host);
    return shadow;
  }

  function waitForImages(root) {
    return Promise.all(
      [...root.querySelectorAll("img")].map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.onload = img.onerror = () => resolve();
            })
      )
    );
  }

  async function resolveTweet(tweet) {
    const [avatar, photos, videoPoster, quotePhotos, linkImage] = await Promise.all([
      tweet.avatar ? fitImage(tweet.avatar, AVATAR_MAX) : "",
      Promise.all((tweet.photos || []).map((src) => fitImage(src, PHOTO_MAX))),
      tweet.videoPoster ? fitImage(tweet.videoPoster, PHOTO_MAX) : "",
      Promise.all((tweet.quote?.photos || []).map((src) => fitImage(src, PHOTO_MAX))),
      tweet.linkCard?.image ? fitImage(tweet.linkCard.image, PHOTO_MAX) : "",
    ]);
    return {
      ...tweet,
      avatar,
      photos: photos.filter(Boolean),
      videoPoster,
      quote: tweet.quote ? { ...tweet.quote, photos: quotePhotos.filter(Boolean) } : null,
      linkCard: tweet.linkCard ? { ...tweet.linkCard, image: linkImage } : null,
      textHtml: cardTextHtml(tweet),
    };
  }

  function hasCardContent(tweet) {
    return Boolean(
      tweet.text ||
        tweet.photos?.length ||
        tweet.videoPoster ||
        tweet.quote ||
        tweet.linkCard ||
        tweet.poll
    );
  }

  function canvasToBlob(canvas, type, quality) {
    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => (blob ? resolve(blob) : reject(new Error("导出失败"))),
        type,
        quality
      );
    });
  }

  async function renderCanvas(tweet, options) {
    await ensureLibs();
    const resolved = await resolveTweet(tweet);
    const darkCard = wantsDarkCard(options);
    const shadow = renderer();
    shadow.querySelector(".stage").innerHTML = renderCard(resolved, { verified: resolved.verified, darkCard });
    await waitForImages(shadow);
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    const node = shadow.querySelector("[data-card-root]");
    if (!node) throw new Error("图卡没有渲染出来");
    const exportOptions = {
      pixelRatio: EXPORT_SCALE,
      skipFonts: true,
      width: CARD_WIDTH,
      backgroundColor: darkCard ? "#15202b" : "#ffffff",
      fetchRequestInit: { mode: "cors", credentials: "omit" },
    };
    if (!globalThis.htmlToImage?.toCanvas) throw new Error("导出库未加载");
    return globalThis.htmlToImage.toCanvas(node, exportOptions);
  }

  function renderPngBlob(tweet, options) {
    return renderCanvas(tweet, options).then((canvas) => canvasToBlob(canvas, "image/png"));
  }

  function downloadBlob(blob, filename) {
    const href = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = href;
    a.download = filename;
    a.click();
    setTimeout(() => URL.revokeObjectURL(href), 2000);
  }

  function pageClipboard() {
    const root = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
    return {
      clipboard: root.navigator?.clipboard,
      ClipboardItem: root.ClipboardItem || window.ClipboardItem,
    };
  }

  async function copyPng(pngPromise) {
    const { clipboard, ClipboardItem: Item } = pageClipboard();
    if (!clipboard?.write || !Item) throw new Error("clipboard-unavailable");
    await clipboard.write([new Item({ "image/png": pngPromise })]);
  }

  async function generateCard(tweet, options) {
    const blob = await renderPngBlob(tweet, options);
    try {
      await copyPng(Promise.resolve(blob));
      toast(copiedMessage(tweet, false));
    } catch {
      downloadBlob(blob, `${tweet.handle || "x"}-${tweet.id || "card"}.png`);
      toast(copiedMessage(tweet, true));
    }
    return blob;
  }

  function findShareButton(article) {
    const byId = article.querySelector('[data-testid="share"]');
    if (byId) return byId;
    return [...article.querySelectorAll("button, [role='button']")].find((el) => {
      const label = `${el.getAttribute("aria-label") || ""} ${el.getAttribute("title") || ""}`;
      return /分享帖子|^分享$|Share post|^Share$/i.test(label.trim());
    });
  }

  function wrappingCell(el) {
    if (!el) return null;
    let cell = el;
    for (let i = 0; i < 8 && cell.parentElement; i += 1) {
      const parent = cell.parentElement;
      if (parent.matches?.('article, [data-testid="tweet"]')) break;
      if (parent.children.length > 1) return cell;
      cell = parent;
    }
    return el;
  }

  function findMountAnchor(article) {
    const share = findShareButton(article);
    if (share) return wrappingCell(share);
    const bookmark = article.querySelector('[data-testid="bookmark"]');
    if (bookmark) return wrappingCell(bookmark);
    const reply = article.querySelector('[data-testid="reply"]');
    return reply?.closest('[role="group"]') || null;
  }

  function beginExport(tweet, button) {
    if (tweet.truncated) {
      toast("正文折叠了，点进帖再出", "err");
      return;
    }
    if (!hasCardContent(tweet)) {
      toast("没有读到贴文内容", "err");
      return;
    }
    const pngPromise = renderPngBlob(tweet);
    let copied = Promise.reject(new Error("clipboard-unavailable"));
    try {
      copied = copyPng(pngPromise);
    } catch {
      copied = Promise.reject(new Error("clipboard-unavailable"));
    }
    button.dataset.busy = "1";
    button.innerHTML = ICONS.spin;
    Promise.allSettled([pngPromise, copied]).then(([pngResult, copyResult]) => {
      if (copyResult.status === "fulfilled") {
        toast(copiedMessage(tweet, false));
        return;
      }
      if (pngResult.status === "fulfilled") {
        downloadBlob(pngResult.value, `${tweet.handle || "x"}-${tweet.id || "card"}.png`);
        toast(copiedMessage(tweet, true));
        return;
      }
      toast(pngResult.reason?.message || "生成失败，请再试一次", "err");
    }).finally(() => {
      button.dataset.busy = "0";
      button.innerHTML = ICONS.card;
    });
  }

  function startCopyFromClick(article, button) {
    if (button.dataset.busy === "1") return;
    const tweet = hydrateTweet(article);
    if (!tweet.truncated) {
      beginExport(tweet, button);
      return;
    }
    if (!canExpandInPlace(article)) {
      toast("正文折叠了，点进帖再出", "err");
      return;
    }
    button.dataset.busy = "1";
    button.innerHTML = ICONS.spin;
    expandTweetText(article)
      .then(() => {
        const next = hydrateTweet(article);
        if (next.truncated) {
          toast("正文折叠了，点进帖再出", "err");
          return;
        }
        if (!hasCardContent(next)) {
          toast("没有读到贴文内容", "err");
          return;
        }
        return generateCard(next);
      })
      .catch((err) => toast(err.message || "生成失败，请再试一次", "err"))
      .finally(() => {
        button.dataset.busy = "0";
        button.innerHTML = ICONS.card;
      });
  }

  function mountButton(article) {
    if (article.parentElement?.closest('article[data-testid="tweet"]')) return;
    const id =
      tweetIdFromHref(article.querySelector('a[href*="/status/"]')?.href || "") ||
      article.querySelector("time")?.dateTime ||
      "x";
    const anchor = findMountAnchor(article);
    if (!anchor) return;
    let wrap = article.querySelector("[data-x2img-action]");
    if (wrap && wrap.dataset.tweetId === id && wrap.previousElementSibling === anchor) return;
    wrap?.remove();
    wrap = document.createElement("div");
    wrap.dataset.x2imgAction = "1";
    wrap.dataset.tweetId = id;
    const colorSource = (findShareButton(article) || article.querySelector('[data-testid="bookmark"], [data-testid="reply"]'))?.querySelector("svg");
    if (colorSource) wrap.style.color = getComputedStyle(colorSource).color;
    wrap.innerHTML = `<button type="button" aria-label="复制图卡" title="复制图卡">${ICONS.card}</button>`;
    wrap.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        startCopyFromClick(article, wrap.querySelector("button"));
      },
      true
    );
    if (anchor.matches?.('[role="group"]') && !findShareButton(article)) anchor.appendChild(wrap);
    else anchor.after(wrap);
  }

  function injectAll() {
    document.querySelectorAll('article[data-testid="tweet"]').forEach(mountButton);
  }

  function boot() {
    injectPageStyle(PAGE_CSS, "x2img-page-style");
    let timer = 0;
    const schedule = () => {
      clearTimeout(timer);
      timer = setTimeout(injectAll, 120);
    };
    if (document.body) {
      new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
    }
    injectAll();
    if (typeof GM_registerMenuCommand === "function") {
      GM_registerMenuCommand("将当前贴文转成图卡", () => {
        const article = document.querySelector('article[data-testid="tweet"]');
        if (!article) {
          toast("没有读到贴文内容", "err");
          return;
        }
        completeTweet(article)
          .then((tweet) => {
            if (tweet.truncated) throw new Error("正文折叠了，点进帖再出");
            if (!hasCardContent(tweet)) throw new Error("没有读到贴文内容");
            return generateCard(tweet);
          })
          .catch((err) => toast(err.message, "err"));
      });
    }
  }

  const onX = /(?:^|\.)(?:x|twitter)\.com$/i.test(location.hostname);
  const preview = document.documentElement.dataset.x2imgPreview === "1";
  if (onX || preview) boot();
  if (preview) window.X2IMG = { generateCard, parseTweet, sampleTweet, renderCard, injectAll, renderCanvas, hydrateTweet, completeTweet };
})();
