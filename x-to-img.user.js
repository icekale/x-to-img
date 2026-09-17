// ==UserScript==
// @name         X 贴文转图卡
// @name:en      X Post to Image Card
// @name:zh-CN   X 贴文转图卡
// @namespace    https://github.com/icekale/x-to-img
// @version      0.6.5
// @description  分享旁边出图卡，还能藏黄推广告、下原图视频、揭开年龄遮罩、整页聚光跟帖
// @description:en Click next to Share for a card. Hide adult spam and ads, download photos and videos, lift age covers, whole-page tweet spotlight
// @description:zh-CN 分享旁边出图卡，还能藏黄推广告、下原图视频、揭开年龄遮罩、整页聚光跟帖
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
// @grant        GM_getValue
// @grant        GM_setValue
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

/* bundled qrcode-generator@1.4.4 (MIT, https://github.com/kazuhikoarase/qrcode-generator) */
(function (root) {
  var define, module, exports;
var qrcode=function(){var t=function(t,r){var e=t,n=g[r],o=null,i=0,a=null,u=[],f={},c=function(t,r){o=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(i=4*e+17),l(0,0),l(i-7,0),l(0,i-7),s(),h(),d(t,r),e>=7&&v(t),null==a&&(a=p(e,n,u)),w(a,r)},l=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||i<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||i<=r+n||(o[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},h=function(){for(var t=8;t<i-8;t+=1)null==o[t][6]&&(o[t][6]=t%2==0);for(var r=8;r<i-8;r+=1)null==o[6][r]&&(o[6][r]=r%2==0)},s=function(){for(var t=B.getPatternPosition(e),r=0;r<t.length;r+=1)for(var n=0;n<t.length;n+=1){var i=t[r],a=t[n];if(null==o[i][a])for(var u=-2;u<=2;u+=1)for(var f=-2;f<=2;f+=1)o[i+u][a+f]=-2==u||2==u||-2==f||2==f||0==u&&0==f}},v=function(t){for(var r=B.getBCHTypeNumber(e),n=0;n<18;n+=1){var a=!t&&1==(r>>n&1);o[Math.floor(n/3)][n%3+i-8-3]=a}for(n=0;n<18;n+=1){a=!t&&1==(r>>n&1);o[n%3+i-8-3][Math.floor(n/3)]=a}},d=function(t,r){for(var e=n<<3|r,a=B.getBCHTypeInfo(e),u=0;u<15;u+=1){var f=!t&&1==(a>>u&1);u<6?o[u][8]=f:u<8?o[u+1][8]=f:o[i-15+u][8]=f}for(u=0;u<15;u+=1){f=!t&&1==(a>>u&1);u<8?o[8][i-u-1]=f:u<9?o[8][15-u-1+1]=f:o[8][15-u-1]=f}o[i-8][8]=!t},w=function(t,r){for(var e=-1,n=i-1,a=7,u=0,f=B.getMaskFunction(r),c=i-1;c>0;c-=2)for(6==c&&(c-=1);;){for(var g=0;g<2;g+=1)if(null==o[n][c-g]){var l=!1;u<t.length&&(l=1==(t[u]>>>a&1)),f(n,c-g)&&(l=!l),o[n][c-g]=l,-1==(a-=1)&&(u+=1,a=7)}if((n+=e)<0||i<=n){n-=e,e=-e;break}}},p=function(t,r,e){for(var n=A.getRSBlocks(t,r),o=b(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var u=0;for(i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),u=0;u<r.length;u+=1){var f=r[u].dataCount,c=r[u].totalCount-f;n=Math.max(n,f),o=Math.max(o,c),i[u]=new Array(f);for(var g=0;g<i[u].length;g+=1)i[u][g]=255&t.getBuffer()[g+e];e+=f;var l=B.getErrorCorrectPolynomial(c),h=k(i[u],l.getLength()-1).mod(l);for(a[u]=new Array(l.getLength()-1),g=0;g<a[u].length;g+=1){var s=g+h.getLength()-a[u].length;a[u][g]=s>=0?h.getAt(s):0}}var v=0;for(g=0;g<r.length;g+=1)v+=r[g].totalCount;var d=new Array(v),w=0;for(g=0;g<n;g+=1)for(u=0;u<r.length;u+=1)g<i[u].length&&(d[w]=i[u][g],w+=1);for(g=0;g<o;g+=1)for(u=0;u<r.length;u+=1)g<a[u].length&&(d[w]=a[u][g],w+=1);return d}(o,n)};f.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=M(t);break;case"Alphanumeric":e=x(t);break;case"Byte":e=m(t);break;case"Kanji":e=L(t);break;default:throw"mode:"+r}u.push(e),a=null},f.isDark=function(t,r){if(t<0||i<=t||r<0||i<=r)throw t+","+r;return o[t][r]},f.getModuleCount=function(){return i},f.make=function(){if(e<1){for(var t=1;t<40;t++){for(var r=A.getRSBlocks(t,n),o=b(),i=0;i<u.length;i++){var a=u[i];o.put(a.getMode(),4),o.put(a.getLength(),B.getLengthInBits(a.getMode(),t)),a.write(o)}var g=0;for(i=0;i<r.length;i++)g+=r[i].dataCount;if(o.getLengthInBits()<=8*g)break}e=t}c(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){c(!0,e);var n=B.getLostPoint(f);(0==e||t>n)&&(t=n,r=e)}return r}())},f.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<f.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<f.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=f.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},f.createSvgTag=function(t,r,e,n){var o={};"object"==typeof arguments[0]&&(t=(o=arguments[0]).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,c,g=f.getModuleCount()*t+2*r,l="";for(c="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",l+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',l+=o.scalable?"":' width="'+g+'px" height="'+g+'px"',l+=' viewBox="0 0 '+g+" "+g+'" ',l+=' preserveAspectRatio="xMinYMin meet"',l+=n.text||e.text?' role="img" aria-labelledby="'+y([n.id,e.id].join(" ").trim())+'"':"",l+=">",l+=n.text?'<title id="'+y(n.id)+'">'+y(n.text)+"</title>":"",l+=e.text?'<description id="'+y(e.id)+'">'+y(e.text)+"</description>":"",l+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',l+='<path d="',a=0;a<f.getModuleCount();a+=1)for(u=a*t+r,i=0;i<f.getModuleCount();i+=1)f.isDark(a,i)&&(l+="M"+(i*t+r)+","+u+c);return l+='" stroke="transparent" fill="black"/>',l+="</svg>"},f.createDataURL=function(t,r){t=t||2,r=void 0===r?4*t:r;var e=f.getModuleCount()*t+2*r,n=r,o=e-r;return I(e,e,(function(r,e){if(n<=r&&r<o&&n<=e&&e<o){var i=Math.floor((r-n)/t),a=Math.floor((e-n)/t);return f.isDark(a,i)?0:1}return 1}))},f.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=f.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=f.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=y(e),o+='"'),o+="/>"};var y=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r};return f.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var r,e,n,o,i,a=1*f.getModuleCount()+2*t,u=t,c=a-t,g={"██":"█","█ ":"▀"," █":"▄","  ":" "},l={"██":"▀","█ ":"▀"," █":" ","  ":" "},h="";for(r=0;r<a;r+=2){for(n=Math.floor((r-u)/1),o=Math.floor((r+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<c&&u<=r&&r<c&&f.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<c&&u<=r+1&&r+1<c&&f.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",h+=t<1&&r+1>=c?l[i]:g[i];h+="\n"}return a%2&&t>0?h.substring(0,h.length-a-1)+Array(a+1).join("▀"):h.substring(0,h.length-1)}(r);t-=1,r=void 0===r?2*t:r;var e,n,o,i,a=f.getModuleCount()*t+2*r,u=r,c=a-r,g=Array(t+1).join("██"),l=Array(t+1).join("  "),h="",s="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/t),s="",n=0;n<a;n+=1)i=1,u<=n&&n<c&&u<=e&&e<c&&f.isDark(o,Math.floor((n-u)/t))&&(i=0),s+=i?g:l;for(o=0;o<t;o+=1)h+=s+"\n"}return h.substring(0,h.length-1)},f.renderTo2dContext=function(t,r){r=r||2;for(var e=f.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=f.isDark(n,o)?"black":"white",t.fillRect(n*r,o*r,r,r)},f};t.stringToBytes=(t.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,t.createStringToBytes=function(t,r){var e=function(){for(var e=S(t),n=function(){var t=e.read();if(-1==t)throw"eof";return t},o=0,i={};;){var a=e.read();if(-1==a)break;var u=n(),f=n()<<8|n();i[String.fromCharCode(a<<8|u)]=f,o+=1}if(o!=r)throw o+" != "+r;return i}(),n="?".charCodeAt(0);return function(t){for(var r=[],o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)r.push(i);else{var a=e[t.charAt(o)];"number"==typeof a?(255&a)==a?r.push(a):(r.push(a>>>8),r.push(255&a)):r.push(n)}}return r}};var r,e,n,o,i,a=1,u=2,f=4,c=8,g={L:1,M:0,Q:3,H:2},l=0,h=1,s=2,v=3,d=4,w=5,p=6,y=7,B=(r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,n=7973,i=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r},(o={}).getBCHTypeInfo=function(t){for(var r=t<<10;i(r)-i(e)>=0;)r^=e<<i(r)-i(e);return 21522^(t<<10|r)},o.getBCHTypeNumber=function(t){for(var r=t<<12;i(r)-i(n)>=0;)r^=n<<i(r)-i(n);return t<<12|r},o.getPatternPosition=function(t){return r[t-1]},o.getMaskFunction=function(t){switch(t){case l:return function(t,r){return(t+r)%2==0};case h:return function(t,r){return t%2==0};case s:return function(t,r){return r%3==0};case v:return function(t,r){return(t+r)%3==0};case d:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case w:return function(t,r){return t*r%2+t*r%3==0};case p:return function(t,r){return(t*r%2+t*r%3)%2==0};case y:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},o.getErrorCorrectPolynomial=function(t){for(var r=k([1],0),e=0;e<t;e+=1)r=r.multiply(k([1,C.gexp(e)],0));return r},o.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case a:return 10;case u:return 9;case f:case c:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case a:return 12;case u:return 11;case f:return 16;case c:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case a:return 14;case u:return 13;case f:return 16;case c:return 12;default:throw"mode:"+t}}},o.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);var g=0;for(o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(g+=1);return e+=Math.abs(100*g/r/r-50)/5*10},o),C=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;e<255;e+=1)r[t[e]]=e;var n={glog:function(t){if(t<1)throw"glog("+t+")";return r[t]},gexp:function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t[r]}};return n}();function k(t,r){if(void 0===t.length)throw t.length+"/"+r;var e=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var n=new Array(t.length-e+r),o=0;o<t.length-e;o+=1)n[o]=t[o+e];return n}(),n={getAt:function(t){return e[t]},getLength:function(){return e.length},multiply:function(t){for(var r=new Array(n.getLength()+t.getLength()-1),e=0;e<n.getLength();e+=1)for(var o=0;o<t.getLength();o+=1)r[e+o]^=C.gexp(C.glog(n.getAt(e))+C.glog(t.getAt(o)));return k(r,0)},mod:function(t){if(n.getLength()-t.getLength()<0)return n;for(var r=C.glog(n.getAt(0))-C.glog(t.getAt(0)),e=new Array(n.getLength()),o=0;o<n.getLength();o+=1)e[o]=n.getAt(o);for(o=0;o<t.getLength();o+=1)e[o]^=C.gexp(C.glog(t.getAt(o))+r);return k(e,0).mod(t)}};return n}var A=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},e={};return e.getRSBlocks=function(e,n){var o=function(r,e){switch(e){case g.L:return t[4*(r-1)+0];case g.M:return t[4*(r-1)+1];case g.Q:return t[4*(r-1)+2];case g.H:return t[4*(r-1)+3];default:return}}(e,n);if(void 0===o)throw"bad rs block @ typeNumber:"+e+"/errorCorrectionLevel:"+n;for(var i=o.length/3,a=[],u=0;u<i;u+=1)for(var f=o[3*u+0],c=o[3*u+1],l=o[3*u+2],h=0;h<f;h+=1)a.push(r(c,l));return a},e}(),b=function(){var t=[],r=0,e={getBuffer:function(){return t},getAt:function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},put:function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},getLengthInBits:function(){return r},putBit:function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1}};return e},M=function(t){var r=a,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+2<r.length;)t.put(o(r.substring(n,n+3)),10),n+=3;n<r.length&&(r.length-n==1?t.put(o(r.substring(n,n+1)),4):r.length-n==2&&t.put(o(r.substring(n,n+2)),7))}},o=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+i(t.charAt(e));return r},i=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return n},x=function(t){var r=u,e=t,n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=e,n=0;n+1<r.length;)t.put(45*o(r.charAt(n))+o(r.charAt(n+1)),11),n+=2;n<r.length&&t.put(o(r.charAt(n)),6)}},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return n},m=function(r){var e=f,n=t.stringToBytes(r),o={getMode:function(){return e},getLength:function(t){return n.length},write:function(t){for(var r=0;r<n.length;r+=1)t.put(n[r],8)}};return o},L=function(r){var e=c,n=t.stringToBytesFuncs.SJIS;if(!n)throw"sjis not supported.";!function(){var t=n("友");if(2!=t.length||38726!=(t[0]<<8|t[1]))throw"sjis not supported."}();var o=n(r),i={getMode:function(){return e},getLength:function(t){return~~(o.length/2)},write:function(t){for(var r=o,e=0;e+1<r.length;){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return i},D=function(){var t=[],r={writeByte:function(r){t.push(255&r)},writeShort:function(t){r.writeByte(t),r.writeByte(t>>>8)},writeBytes:function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},writeString:function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+="]"}};return r},S=function(t){var r=t,e=0,n=0,o=0,i={read:function(){for(;o<8;){if(e>=r.length){if(0==o)return-1;throw"unexpected end of file./"+o}var t=r.charAt(e);if(e+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|a(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return i},I=function(t,r,e){for(var n=function(t,r){var e=t,n=r,o=new Array(t*r),i={setPixel:function(t,r,n){o[r*e+t]=n},write:function(t){t.writeString("GIF87a"),t.writeShort(e),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(e),t.writeShort(n),t.writeByte(0);var r=a(2);t.writeByte(2);for(var o=0;r.length-o>255;)t.writeByte(255),t.writeBytes(r,o,255),o+=255;t.writeByte(r.length-o),t.writeBytes(r,o,r.length-o),t.writeByte(0),t.writeString(";")}},a=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,i=u(),a=0;a<r;a+=1)i.add(String.fromCharCode(a));i.add(String.fromCharCode(r)),i.add(String.fromCharCode(e));var f,c,g,l=D(),h=(f=l,c=0,g=0,{write:function(t,r){if(t>>>r!=0)throw"length over";for(;c+r>=8;)f.writeByte(255&(t<<c|g)),r-=8-c,t>>>=8-c,g=0,c=0;g|=t<<c,c+=r},flush:function(){c>0&&f.writeByte(g)}});h.write(r,n);var s=0,v=String.fromCharCode(o[s]);for(s+=1;s<o.length;){var d=String.fromCharCode(o[s]);s+=1,i.contains(v+d)?v+=d:(h.write(i.indexOf(v),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(v+d)),v=d)}return h.write(i.indexOf(v),n),h.write(e,n),h.flush(),l.toByteArray()},u=function(){var t={},r=0,e={add:function(n){if(e.contains(n))throw"dup key:"+n;t[n]=r,r+=1},size:function(){return r},indexOf:function(r){return t[r]},contains:function(r){return void 0!==t[r]}};return e};return i}(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=D();n.write(a);for(var u=function(){var t=0,r=0,e=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return o.writeByte=function(n){for(t=t<<8|255&n,r+=8,e+=1;r>=6;)i(t>>>r-6),r-=6},o.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o}(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return t}();qrcode.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||n>=57344?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)},function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports&&(module.exports=t())}((function(){return qrcode}));
  root.qrcode = qrcode;
})(typeof globalThis !== "undefined" ? globalThis : this);
/* /qrcode */


(function () {
  "use strict";

  const HOST_ID = "x2img-host";
  const CARD_WIDTH = 600;
  const EXPORT_SCALE = 2;
  const JPEG_QUALITY = 0.95;
  const PHOTO_MAX = 2048;
  const AVATAR_MAX = 400;
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
    download: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 21.41 6.3 15.7l1.41-1.42L11 17.59V8h2v9.59l3.29-3.3 1.42 1.42L12 21.41zM3 9l.02-3.51C3.02 4.11 4.14 3 5.52 3H18.5C19.88 3 21 4.12 21 5.5V9h-2V5.5c0-.28-.22-.5-.5-.5H5.52c-.28 0-.5.22-.5.5L5 9H3z"/></svg>`,
    band: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" opacity=".38" d="M5 3.75h14c.69 0 1.25.56 1.25 1.25v2.25H3.75V5c0-.69.56-1.25 1.25-1.25zm-1.25 12.5H20.25V19c0 .69-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25v-2.75z"/><path fill="currentColor" d="M3.75 8.75h16.5v6.5H3.75z"/></svg>`,
    navSpot: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 4.75h18v2.5H3v-2.5zm0 12h18v2.5H3v-2.5zM3.5 9.25h17A1.5 1.5 0 0 1 22 10.75v2.5a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 13.25v-2.5A1.5 1.5 0 0 1 3.5 9.25z"/></svg>`,
  };

  const PAGE_CSS = `
    [data-x2img-tools]{display:inline-flex;align-items:center;align-self:center;vertical-align:middle;flex:0 0 auto;line-height:0;}
    [data-x2img-action],[data-x2img-download],[data-x2img-read]{display:flex;align-items:center;justify-content:center;width:34.75px;height:34.75px;margin:0;line-height:0;flex:0 0 auto;}
    [data-x2img-tools] button{width:34.75px;height:34.75px;border:0;padding:0;background:transparent;border-radius:999px;color:inherit;cursor:pointer;display:flex;align-items:center;justify-content:center;}
    [data-x2img-tools] button svg{width:18.75px;height:18.75px;display:block;}
    [data-x2img-tools] button:hover{background:rgba(29,155,240,.1);color:rgb(29,155,240);}
    [data-x2img-tools] button:focus-visible{outline:2px solid rgba(29,155,240,.6);outline-offset:0;}
    [data-x2img-tools] button[data-busy="1"]{cursor:wait;opacity:.75;}
    [data-x2img-tools] .x2img-spin{transform-origin:center;animation:x2img-rot .7s linear infinite;}
    @keyframes x2img-rot{to{transform:rotate(360deg);}}
    #x2img-toast{position:fixed;left:50%;bottom:28px;transform:translate(-50%,12px);z-index:2147483647;padding:10px 14px;border-radius:999px;background:#0f1419;color:#fff;font:650 13px/1.2 TwitterChirp,-apple-system,"PingFang SC",sans-serif;opacity:0;pointer-events:none;transition:opacity .18s,transform .18s;}
    #x2img-toast[data-show="1"]{opacity:1;transform:translate(-50%,0);}
    #x2img-toast[data-kind="err"]{background:#9f1239;}
    [data-x2img-hide="1"]{display:none !important;}
    html[data-x2img-grid="1"] article[data-x2img-grid] nav[role="navigation"]{overflow:visible !important;}
    html[data-x2img-grid="1"] article[data-x2img-grid] [data-testid="ScrollSnap-List"]{display:grid !important;gap:2px;transform:none !important;width:100% !important;}
    html[data-x2img-grid="1"] article[data-x2img-grid="2"] [data-testid="ScrollSnap-List"]{grid-template-columns:1fr 1fr;}
    html[data-x2img-grid="1"] article[data-x2img-grid="3"] [data-testid="ScrollSnap-List"]{grid-template-columns:1.15fr 1fr;grid-template-rows:1fr 1fr;}
    html[data-x2img-grid="1"] article[data-x2img-grid="3"] [data-testid="ScrollSnap-List"] > :first-child{grid-row:1 / span 2;}
    html[data-x2img-grid="1"] article[data-x2img-grid="4"] [data-testid="ScrollSnap-List"]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;}
    html[data-x2img-grid="1"] article[data-x2img-grid] [data-testid="ScrollSnap-List"] > [role="presentation"]{width:auto !important;min-width:0 !important;}
    html[data-x2img-unmask="1"] .x2img-age-cover{display:none !important;}
    html[data-x2img-unmask="1"] [data-testid="previewInterstitial"] [style*="blur"]{filter:none !important;}
    #x2img-panel{position:fixed;right:18px;bottom:18px;z-index:2147483646;width:min(380px,calc(100vw - 24px));max-height:min(84vh,720px);display:flex;flex-direction:column;overflow:hidden;padding:0;border-radius:16px;background:#15202b;color:#e7e9ea;box-shadow:0 16px 48px rgba(0,0,0,.38);font:13px/1.45 TwitterChirp,-apple-system,"PingFang SC",sans-serif;}
    #x2img-panel[data-light="1"]{background:#fff;color:#0f1419;box-shadow:0 16px 48px rgba(15,20,25,.16);}
    #x2img-panel .head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 16px 10px;flex-shrink:0;}
    #x2img-panel h2{margin:0;font-size:17px;font-weight:700;}
    #x2img-panel .x{width:32px;height:32px;border:0;border-radius:999px;background:transparent;color:inherit;cursor:pointer;font:700 20px/1 TwitterChirp,sans-serif;}
    #x2img-panel .x:hover{background:rgba(239,243,244,.1);}
    #x2img-panel[data-light="1"] .x:hover{background:rgba(15,20,25,.08);}
    #x2img-panel .body{flex:1;min-height:0;overflow:auto;padding:0 16px 8px;}
    #x2img-panel h3{margin:16px 0 8px;font-size:13px;font-weight:700;color:#8b98a5;}
    #x2img-panel .body h3:first-child{margin-top:4px;}
    #x2img-panel label.row{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:8px 0;}
    #x2img-panel select,#x2img-panel input[type="text"],#x2img-panel textarea{width:100%;margin:4px 0 8px;padding:8px 10px;border:1px solid #38444d;border-radius:10px;background:#0f1419;color:#e7e9ea;font:inherit;}
    #x2img-panel[data-light="1"] select,#x2img-panel[data-light="1"] input[type="text"],#x2img-panel[data-light="1"] textarea{background:#f7f9f9;border-color:#cfd9de;color:#0f1419;}
    #x2img-panel textarea{min-height:72px;resize:vertical;}
    #x2img-panel .papers,#x2img-spot .papers{display:flex;align-items:center;gap:8px;flex-wrap:wrap;}
    #x2img-panel .papers{margin:8px 0 12px;}
    #x2img-panel .pchip,#x2img-spot .pchip{width:22px;height:22px;padding:0;border:0;border-radius:50%;cursor:pointer;box-shadow:inset 0 0 0 1px rgba(15,20,25,.16);}
    #x2img-panel .pchip[aria-pressed="true"],#x2img-spot .pchip[aria-pressed="true"]{box-shadow:0 0 0 2px #1d9bf0;transform:scale(1.12);}
    #x2img-panel .pchip[data-mix="1"],#x2img-spot .pchip[data-mix="1"]{box-shadow:0 0 0 2px #c6a48f;}
    #x2img-panel .pchip[aria-pressed="true"][data-mix="1"],#x2img-spot .pchip[aria-pressed="true"][data-mix="1"]{box-shadow:0 0 0 2px #1d9bf0,0 0 0 4px #c6a48f;}
    #x2img-panel .slide{display:flex;align-items:center;gap:10px;margin:8px 0 12px;}
    #x2img-panel input[type="range"]{flex:1;accent-color:#1d9bf0;}
    #x2img-panel .slide b{min-width:3.6em;text-align:right;color:#8b98a5;font-weight:650;}
    #x2img-panel button.link{border:0;background:transparent;color:#1d9bf0;cursor:pointer;padding:0 0 8px;font:650 12px/1.4 TwitterChirp,sans-serif;}
    #x2img-panel .hint{color:#8b98a5;font-size:12px;margin:0 0 8px;}
    #x2img-panel .bar{display:flex;gap:8px;margin:0;padding:12px 16px 14px;flex-shrink:0;border-top:1px solid #38444d;background:inherit;}
    #x2img-panel[data-light="1"] .bar{border-top-color:#eff3f4;}
    #x2img-panel button.act{flex:1;border:0;border-radius:999px;padding:9px 12px;font:700 13px/1 TwitterChirp,sans-serif;cursor:pointer;}
    #x2img-panel button.pri{background:#1d9bf0;color:#fff;}
    #x2img-panel button.ghost{background:transparent;color:#1d9bf0;box-shadow:inset 0 0 0 1px #38444d;}
    @property --x2img-t{syntax:"<length>";inherits:true;initial-value:0px;}
    @property --x2img-b{syntax:"<length>";inherits:true;initial-value:112px;}
    #x2img-spot{position:fixed;inset:0;z-index:2147483644;pointer-events:none;color:#8b98a5;--pf:0,0,0;--dim:.86;--f:130px;--band:rgba(255,255,255,.075);--snap:.18s;--x2img-gl:0px;--x2img-gr:10px;}
    #x2img-spot[data-light="1"]{color:#536471;}
    #x2img-spot .veil{position:absolute;inset:0;z-index:2;pointer-events:none;background:linear-gradient(to bottom,rgba(var(--pf),var(--dim)) 0,rgba(var(--pf),var(--dim)) max(0px,calc(var(--x2img-t) - var(--f))),rgba(var(--pf),0) var(--x2img-t),rgba(var(--pf),0) var(--x2img-b),rgba(var(--pf),var(--dim)) calc(var(--x2img-b) + var(--f)),rgba(var(--pf),var(--dim)) 100%);}
    #x2img-spot .bandbox{position:absolute;left:var(--x2img-gl);right:var(--x2img-gr);top:var(--x2img-t);height:calc(var(--x2img-b) - var(--x2img-t));z-index:1;background:var(--band);border-radius:12px;pointer-events:none;-webkit-mask-image:linear-gradient(transparent 0,#000 8px,#000 calc(100% - 8px),transparent 100%);mask-image:linear-gradient(transparent 0,#000 8px,#000 calc(100% - 8px),transparent 100%);}
    #x2img-spot .grip{position:absolute;right:var(--x2img-gr);top:var(--x2img-t);height:calc(var(--x2img-b) - var(--x2img-t));width:30px;z-index:3;display:flex;align-items:center;justify-content:center;pointer-events:auto;cursor:grab;touch-action:none;}
    #x2img-spot .grip::before{content:"";width:4px;height:34px;border-radius:99px;background:currentColor;opacity:.4;}
    #x2img-spot .grip:active{cursor:grabbing;}
    #x2img-spot .grip:active::before{opacity:.75;}
    #x2img-spot.is-follow .grip{opacity:0;pointer-events:none;}
    #x2img-spot.is-snap{transition:--x2img-t var(--snap) ease-out,--x2img-b var(--snap) ease-out;}
    #x2img-spot.is-snap .bandbox,#x2img-spot.is-snap .grip{transition:top var(--snap) ease-out,height var(--snap) ease-out,right var(--snap) ease-out;}
    #x2img-spot.is-drag,#x2img-spot.is-drag .bandbox,#x2img-spot.is-drag .grip{transition:none;}
    #x2img-spot .dock{position:absolute;left:0;right:0;bottom:0;z-index:4;display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:6px 14px max(8px,env(safe-area-inset-bottom));pointer-events:auto;background:rgba(var(--pf),.92);color:inherit;border-top:1px solid rgba(255,255,255,.08);font:12px/1.3 TwitterChirp,"PingFang SC",sans-serif;}
    #x2img-spot[data-light="1"] .dock{border-top-color:rgba(15,20,25,.1);}
    #x2img-spot .dock .hint{flex:1;min-width:120px;color:inherit;opacity:.5;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
    #x2img-spot .dock button.tbtn{border:0;border-radius:999px;padding:6px 11px;background:transparent;color:inherit;cursor:pointer;box-shadow:inset 0 0 0 1px rgba(139,152,165,.45);font:650 12px/1 TwitterChirp,"PingFang SC",sans-serif;}
    #x2img-spot .dock button.tbtn[aria-pressed="true"]{background:currentColor;}
    #x2img-spot .dock button.tbtn[data-follow][aria-pressed="true"]{background:#1d9bf0;color:#fff;box-shadow:none;}
    #x2img-spot .tune{display:none;position:absolute;left:12px;right:12px;bottom:58px;z-index:4;max-width:420px;margin:0 auto;padding:14px 16px 12px;border-radius:14px;pointer-events:auto;background:rgba(var(--pf),.96);box-shadow:0 10px 28px rgba(0,0,0,.28);font:12px/1.4 TwitterChirp,"PingFang SC",sans-serif;}
    #x2img-spot .tune.on{display:block;}
    #x2img-spot .tune .row{display:flex;align-items:center;gap:10px;}
    #x2img-spot .tune input[type="range"]{flex:1;accent-color:#1d9bf0;}
    #x2img-spot .tune b{min-width:3.6em;text-align:right;opacity:.7;}
    #x2img-spot .tune .link{margin-top:10px;border:0;background:transparent;color:#1d9bf0;cursor:pointer;padding:0;font:650 12px/1 TwitterChirp,sans-serif;}
    [data-x2img-nav-spot]{cursor:pointer;}
    [data-x2img-nav-spot] a,[data-x2img-nav-spot] button{color:inherit;text-decoration:none;}
    [data-x2img-nav-spot][data-on="1"],[data-x2img-nav-spot][data-on="1"] span{font-weight:700;}
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
    .who{display:block;min-width:0;flex:1;}
    .name-row{display:block;line-height:28px;min-width:0;}
    .name{display:inline;font-size:18px;line-height:28px;font-weight:700;color:#0e1c71;}
    .handle{display:inline;font-size:14px;line-height:20px;color:#94a3b8;white-space:nowrap;margin-left:6px;}
    .time{display:block;margin-top:2px;font-size:14px;line-height:20px;color:#94a3b8;white-space:nowrap;}
    .badge{display:inline-block;width:20px;height:20px;vertical-align:middle;margin:0 4px;}
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
    .foot{margin-top:20px;display:flex;align-items:flex-end;justify-content:space-between;gap:16px;}
    .stats{margin-top:20px;display:flex;align-items:center;flex-wrap:wrap;gap:24px;color:#64748b;}
    .foot .stats{margin-top:0;flex:1;min-width:0;}
    .stat{display:flex;align-items:center;gap:6px;flex-shrink:0;white-space:nowrap;}
    .stat svg{width:20px;height:20px;display:block;}
    .stat b{font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;word-break:keep-all;}
    .qr{width:60px;height:60px;padding:5px;box-sizing:border-box;flex-shrink:0;margin-left:auto;background:#fff;border:1px solid #e2e8f0;border-radius:10px;}
    .qr svg,.qr img{width:100%;height:100%;display:block;shape-rendering:crispEdges;}
    .card.is-dark .name,.card.is-dark .quote-name,.card.is-dark .linkcard-title,.card.is-dark .poll-pct{color:#e7e9ea;}
    .card.is-dark .text,.card.is-dark .poll-inner{color:#e7e9ea;}
    .card.is-dark .handle,.card.is-dark .time{color:#8b98a5;}
    .card.is-dark .stats,.card.is-dark .xmark{color:#8b98a5;}
    .card.is-dark .media,.card.is-dark .media img,.card.is-dark .media .poster,.card.is-dark .quote-media,.card.is-dark .linkcard-img{background:#273340;}
    .card.is-dark .quote,.card.is-dark .linkcard,.card.is-dark .poll-row,.card.is-dark .qr{border-color:#38444d;}
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

  function pagePaperRGB() {
    const nodes = [
      document.querySelector('[data-testid="primaryColumn"]'),
      document.querySelector(".rail"),
      document.body,
      document.documentElement,
    ].filter(Boolean);
    for (const el of nodes) {
      const bg = getComputedStyle(el).backgroundColor || "";
      const m = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/.exec(bg);
      if (!m) continue;
      if (m[4] != null && Number(m[4]) < 0.5) continue;
      return [Number(m[1]), Number(m[2]), Number(m[3])];
    }
    return pageIsDark() ? [0, 0, 0] : [255, 255, 255];
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

  function tweetPermalink(tweet) {
    const handle = String(tweet?.handle || "").replace(/^@/, "");
    const id = String(tweet?.id || tweetIdFromHref(tweet?.url) || "");
    if (handle && /^\d+$/.test(id)) return `https://x.com/${handle}/status/${id}`;
    const raw = String(tweet?.url || "").split(/[?#]/)[0];
    if (/^https?:\/\/(?:www\.)?(?:x|twitter)\.com\//i.test(raw)) {
      return raw.replace(/^(https?:\/\/)(?:www\.)?twitter\.com/i, "$1x.com");
    }
    return raw;
  }

  function makeQr(text) {
    if (!text || typeof globalThis.qrcode !== "function") return "";
    try {
      const qr = globalThis.qrcode(0, "M");
      qr.addData(text);
      qr.make();
      return qr.createSvgTag({ cellSize: 2, margin: 0, scalable: true });
    } catch {
      return "";
    }
  }

  function qrHtml(tweet) {
    const url = tweetPermalink(tweet);
    const svg = makeQr(url);
    if (!url || !svg.startsWith("<svg")) return "";
    return `<div class="qr">${svg}</div>`;
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
    const upgraded = upgradePbsUrl(url);
    const src = (await toDataUrl(upgraded)) || (upgraded !== String(url || "") ? await toDataUrl(url) : "");
    if (!src) return "";
    try {
      const img = await loadImage(src);
      const longest = Math.max(img.naturalWidth, img.naturalHeight);
      if (!longest || longest <= maxEdge) return src;
      const scale = maxEdge / longest;
      const width = Math.max(1, Math.round(img.naturalWidth * scale));
      const height = Math.max(1, Math.round(img.naturalHeight * scale));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, width, height);
      return src.startsWith("data:image/png")
        ? canvas.toDataURL("image/png")
        : canvas.toDataURL("image/jpeg", JPEG_QUALITY);
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

  function imageSource(img) {
    if (!img) return "";
    const listed = unique([
      ...(img.getAttribute("srcset") || img.srcset || "")
        .split(",")
        .map((part) => part.trim().split(/\s+/)[0]),
      img.currentSrc,
      img.src,
    ]);
    return (
      listed.find((src) => /(?:[?&]name=|:)(large|orig)\b/i.test(src)) ||
      listed[0] ||
      ""
    );
  }

  function upgradePbsUrl(url) {
    if (!url) return "";
    const raw = String(url);
    if (raw.startsWith("data:")) return raw;
    if (raw.startsWith("blob:")) return "";
    try {
      const parsed = new URL(raw, location.href);
      if (!/(^|\.)twimg\.com$/i.test(parsed.hostname)) return raw;
      parsed.pathname = parsed.pathname.replace(/:(tiny|thumb|small|medium|large|orig|\d+x\d+)$/i, "");
      const name = parsed.searchParams.get("name") || "";
      if (!/^(large|orig)$/i.test(name)) parsed.searchParams.set("name", "large");
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

  function escapeRegExp(value) {
    return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function normalizePersonName(raw, handle) {
    let name = String(raw || "").replace(/\s+/g, " ").trim();
    if (!name) return "";
    if (handle) {
      name = name.replace(new RegExp(`(?:^|\\s)@${escapeRegExp(handle)}\\b.*$`, "i"), "").trim();
    }
    name = name.replace(/\s*[·•|].*$/, "").trim();
    name = name.replace(/[.…]+$/u, "").trim();
    return name;
  }

  function profileNameLinks(nameRoot) {
    return [...(nameRoot?.querySelectorAll('a[href^="/"]') || [])].filter((a) => {
      const href = a.getAttribute("href") || "";
      return !/\/status\//.test(href) && !a.querySelector("time");
    });
  }

  function displayNameFrom(nameRoot, handle) {
    const links = profileNameLinks(nameRoot);
    const nameLink =
      links.find((a) => !/^@/.test((a.textContent || "").trim())) ||
      links[0] ||
      nameRoot?.querySelector('a[role="link"]');
    const aria = normalizePersonName(nameLink?.getAttribute("aria-label") || "", handle);
    const candidates = [];
    if (nameLink) {
      for (const node of [nameLink, ...nameLink.querySelectorAll("span")]) {
        const text = normalizePersonName(node.textContent, handle);
        if (text && text.length < 80 && !/^@/.test(text) && text.toLowerCase() !== String(handle || "").toLowerCase()) {
          candidates.push(text);
        }
      }
    }
    const uniqueNames = [...new Set(candidates)].sort((a, b) => a.length - b.length);
    const shortest = uniqueNames[0] || "";
    if (aria && shortest && aria.length > shortest.length && aria.toLowerCase().startsWith(shortest.toLowerCase())) {
      return aria;
    }
    return shortest || aria || normalizePersonName(nameRoot?.querySelector("span")?.textContent, handle);
  }

  function parseAuthor(nameRoot) {
    const href = (nameRoot?.querySelector('a[href^="/"]')?.getAttribute("href") || "")
      .replace(/^\//, "")
      .split("/")[0];
    const handleMatch = (nameRoot?.innerText || "").match(/@([A-Za-z0-9_]+)/);
    const handle = href || (handleMatch ? handleMatch[1] : "");
    return { name: displayNameFrom(nameRoot, handle), handle };
  }

  function authorFromBlock(root) {
    return parseAuthor(root.querySelector('[data-testid="User-Name"]') || root);
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
        .map((img) => upgradePbsUrl(imageSource(img)))
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
    const image = upgradePbsUrl(imageSource(img));
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
      sources.push(video?.poster, imageSource(img), bg?.[2]);
    }
    for (const video of article.querySelectorAll("video")) {
      if (isInsideQuote(video, article) || isInsideCardOrPoll(video, article)) continue;
      sources.push(video.poster);
    }
    return upgradePbsUrl(sources.find((src) => src && !String(src).startsWith("blob:")) || "");
  }

  function collectPhotos(article) {
    return unique(
      [...article.querySelectorAll('[data-testid="tweetPhoto"]')]
        .filter((box) => !isInsideQuote(box, article) && !isInsideCardOrPoll(box, article) && !box.querySelector("video"))
        .flatMap((box) =>
          [...box.querySelectorAll("img")].map((img) => upgradePbsUrl(imageSource(img)))
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
    const button = el.closest?.("button");
    if (button && !showMoreNavigates(button)) return button;
    const roleButton = el.closest?.("[role='button']");
    if (roleButton && !showMoreNavigates(roleButton)) return roleButton;
    const link = el.closest?.("a[href]") || (el.tagName === "A" ? el : null);
    if (link && !showMoreNavigates(link)) return link;
    return el;
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
    const nameRoot =
      [...article.querySelectorAll('[data-testid="User-Name"]')].find((el) => ownedByArticle(el, article)) ||
      article.querySelector('[data-testid="User-Name"]');
    const { name: displayName, handle } = parseAuthor(nameRoot);
    const nameLink = profileNameLinks(nameRoot)[0] || nameRoot?.querySelector('a[role="link"]');
    const time = article.querySelector("time");
    const createdAt = time?.getAttribute("datetime") || "";
    const statusAnchor = time?.closest("a") || article.querySelector('a[href*="/status/"]') || nameLink;
    const url = statusAnchor?.href || (handle ? `https://x.com/${handle}` : location.href);
    const textEl = [...article.querySelectorAll('[data-testid="tweetText"]')].find((el) => ownedByArticle(el, article));
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
            ${cardFootHtml(tweet, opts)}
          </div>
        </div>
      </div>
    `;
  }

  function cardFootHtml(tweet, options) {
    const stats = statsHtml(tweet, options);
    const qr = qrHtml(tweet);
    if (!stats && !qr) return "";
    return `<div class="foot">${stats || "<div></div>"}${qr}</div>`;
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

  function ensureToolsWrap(article, anchor) {
    let tools = article.querySelector("[data-x2img-tools]");
    if (tools && tools.previousElementSibling === anchor) return tools;
    const card = tools?.querySelector("[data-x2img-action]");
    const download = tools?.querySelector("[data-x2img-download]");
    const read = tools?.querySelector("[data-x2img-read]");
    tools?.remove();
    tools = document.createElement("div");
    tools.dataset.x2imgTools = "1";
    if (card) tools.appendChild(card);
    if (download) tools.appendChild(download);
    if (read) tools.appendChild(read);
    const shareCell = wrappingCell(findShareButton(article));
    if (shareCell) {
      const height = getComputedStyle(shareCell).height;
      if (height && height !== "auto") tools.style.height = height;
    }
    if (anchor.matches?.('[role="group"]') && !findShareButton(article)) anchor.appendChild(tools);
    else anchor.after(tools);
    return tools;
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
    const tools = ensureToolsWrap(article, anchor);
    let wrap = tools.querySelector("[data-x2img-action]");
    if (wrap && wrap.dataset.tweetId === id) return;
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
    tools.prepend(wrap);
  }

  function injectAll() {
    applyTimelineExtras();
    mountNavSpot();
    document.querySelectorAll('article[data-testid="tweet"]').forEach((article) => {
      mountButton(article);
      mountDownload(article);
      mountRead(article);
    });
  }

  const SETTINGS_KEY = "x2img-settings-v1";
  const MEDIA_FETCH_MAX = 80 * 1024 * 1024;
  const DEFAULT_SETTINGS = {
    hideAdult: true,
    hideAds: true,
    adultLevel: "balanced",
    skipFollowing: true,
    customWords: [],
    whitelist: [],
    mediaDownload: true,
    zipMulti: true,
    fileName: "{handle}_{id}",
    mediaGrid: true,
    unmaskAge: true,
    readingBand: true,
    spotPaperLight: "moss",
    spotPaperDark: "night",
    spotHeight: 112,
    spotFollow: false,
    spotMix: [],
  };
  const SPOT_PAPERS = [
    { id: "butter", name: "米黄", pf: "247,241,227", paper: "#F7F1E3", ink2: "#6E695E", band: "rgba(226,190,110,.30)", dim: ".84" },
    { id: "rose", name: "晨粉", pf: "249,240,238", paper: "#F9F0EE", ink2: "#736765", band: "rgba(226,164,158,.26)", dim: ".84" },
    { id: "lilac", name: "淡紫", pf: "244,241,247", paper: "#F4F1F7", ink2: "#6C6672", band: "rgba(180,164,214,.26)", dim: ".84" },
    { id: "mist", name: "雾蓝", pf: "240,243,246", paper: "#F0F3F6", ink2: "#666E73", band: "rgba(150,186,219,.28)", dim: ".84" },
    { id: "moss", name: "苔绿", pf: "236,243,235", paper: "#ECF3EB", ink2: "#5F6B5E", band: "rgba(140,182,140,.32)", dim: ".84" },
    { id: "ash", name: "雾灰", pf: "242,242,241", paper: "#F2F2F1", ink2: "#6B6B6A", band: "rgba(120,120,118,.14)", dim: ".84" },
    { id: "night", name: "夜色", pf: "24,23,22", paper: "#181716", ink2: "#948D85", band: "rgba(255,255,255,.075)", dim: ".88" },
  ];
  const SPOT_PAPER_IDS = SPOT_PAPERS.map((item) => item.id);
  const ADULT_STRONG = [
    "onlyfans", "fansly", "fanvue", "justforfans", "porn", "nudes", "nudeleak",
    "约炮", "约啪", "援交", "裸聊", "福利姬", "黄片", "外围", "包夜", "无套",
    "裸照", "成人视频", "成人影片", "sex video",
  ];
  const ADULT_BAIT = ["看置顶", "看主页", "进裙", "加我", "私信看", "免费看", "福利来了", "dm me", "link in bio"];
  const ADULT_CONTACT = ["telegram", "t.me/", "whatsapp", "飞机号", "vx:", "微信", "wechat"];
  const ADULT_SOFT = ["反差", "黑丝", "白丝", "巨乳", "少妇", "学生妹", "涩涩", "纯欲", "调教", "炮友"];
  const AD_LABELS = new Set(["推荐", "廣告", "广告", "Promoted", "Ad", "プロモーション", "Promoted by"]);
  const AGE_WARN_RE =
    /年龄限制|年齡限制|成人内容|成人內容|敏感内容|敏感內容|敏感媒体|敏感媒體|可能不适合|可能不適合|验证.{0,6}年龄|驗證.{0,6}年齡|age[- ]?restricted|adult content|sensitive (?:media|content)|might not be suitable|verify your age|潛在的敏感/i;
  const PROFILE_GATE_BTN_RE =
    /^(?:是[，,]\s*查看(?:個人|个人)(?:資料|资料)|Yes,?\s*view profile|はい[、,]?\s*プロフィールを(?:表示|見る))$/i;
  const AGE_VIEW_BTN_RE =
    /^(?:查看|查看内容|查看內容|查看媒體|查看媒体|查看圖片|查看图片|显示|顯示|View|View media|View image|View photo|View content|Show|Show media)$/i;
  const AGE_MEDIA_RE = '[data-testid="videoPlayer"], [data-testid="videoComponent"], [data-testid="tweetPhoto"], video';
  let settings = { ...DEFAULT_SETTINGS };

  function readStore(key, fallback) {
    try {
      if (typeof GM_getValue === "function") {
        const value = GM_getValue(key, null);
        if (value != null) return value;
      }
    } catch {
      /* grant missing */
    }
    try {
      const raw = localStorage.getItem(key);
      return raw == null ? fallback : raw;
    } catch {
      return fallback;
    }
  }

  function writeStore(key, value) {
    try {
      if (typeof GM_setValue === "function") GM_setValue(key, value);
    } catch {
      /* grant missing */
    }
    try {
      localStorage.setItem(key, value);
    } catch {
      /* private mode */
    }
  }

  function normalizeList(value) {
    return unique(
      (Array.isArray(value) ? value : String(value || "").split(/[\n,]+/))
        .map((item) => String(item || "").replace(/^@/, "").trim())
        .filter(Boolean)
    ).slice(0, 80);
  }

  function loadSettings() {
    let parsed = {};
    try {
      parsed = JSON.parse(readStore(SETTINGS_KEY, "") || "{}") || {};
    } catch {
      parsed = {};
    }
    settings = {
      ...DEFAULT_SETTINGS,
      ...parsed,
      adultLevel: parsed.adultLevel === "conservative" ? "conservative" : "balanced",
      customWords: normalizeList(parsed.customWords),
      whitelist: normalizeList(parsed.whitelist).map((item) => item.toLowerCase()),
      fileName: String(parsed.fileName || DEFAULT_SETTINGS.fileName).slice(0, 180) || DEFAULT_SETTINGS.fileName,
      spotPaperLight: SPOT_PAPER_IDS.includes(parsed.spotPaperLight) ? parsed.spotPaperLight : DEFAULT_SETTINGS.spotPaperLight,
      spotPaperDark: SPOT_PAPER_IDS.includes(parsed.spotPaperDark) ? parsed.spotPaperDark : DEFAULT_SETTINGS.spotPaperDark,
      spotHeight: clampSpotHeight(parsed.spotHeight),
      spotFollow: Boolean(parsed.spotFollow),
      spotMix: normalizeList(parsed.spotMix).filter((id) => SPOT_PAPER_IDS.includes(id)).slice(0, 3),
    };
    return settings;
  }

  function clampSpotHeight(value) {
    const n = Math.round(Number(value));
    if (!Number.isFinite(n)) return DEFAULT_SETTINGS.spotHeight;
    return Math.max(56, Math.min(260, n));
  }

  function saveSettings(next) {
    settings = { ...loadSettings(), ...next };
    settings.customWords = normalizeList(settings.customWords);
    settings.whitelist = normalizeList(settings.whitelist).map((item) => item.toLowerCase());
    settings.spotPaperLight = SPOT_PAPER_IDS.includes(settings.spotPaperLight) ? settings.spotPaperLight : DEFAULT_SETTINGS.spotPaperLight;
    settings.spotPaperDark = SPOT_PAPER_IDS.includes(settings.spotPaperDark) ? settings.spotPaperDark : DEFAULT_SETTINGS.spotPaperDark;
    settings.spotHeight = clampSpotHeight(settings.spotHeight);
    settings.spotFollow = Boolean(settings.spotFollow);
    settings.spotMix = normalizeList(settings.spotMix).filter((id) => SPOT_PAPER_IDS.includes(id)).slice(0, 3);
    writeStore(SETTINGS_KEY, JSON.stringify(settings));
    applyTimelineExtras();
    return settings;
  }

  function compactText(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/\s+/g, "");
  }

  function countTerms(hay, terms) {
    return terms.reduce((sum, term) => (hay.includes(compactText(term)) ? sum + 1 : sum), 0);
  }

  function fiberFollowing(article, handle) {
    const want = String(handle || "").toLowerCase();
    if (!want || !article) return false;
    function fiberOf(node) {
      if (!node) return null;
      try {
        for (const key in node) {
          if (key.startsWith("__reactFiber$") || key.startsWith("__reactInternalInstance$")) return node[key];
        }
      } catch {
        /* xray */
      }
      return null;
    }
    function hunt(value, depth, seen) {
      if (!value || typeof value !== "object" || depth > 5 || seen.has(value)) return false;
      seen.add(value);
      try {
        const screen = String(value.screen_name || value.screenName || value.username || "").toLowerCase();
        if (screen === want && (value.following === true || value.legacy?.following === true)) return true;
        const kids = Array.isArray(value) ? value.slice(0, 20) : Object.values(value).slice(0, 24);
        return kids.some((kid) => hunt(kid, depth + 1, seen));
      } catch {
        return false;
      }
    }
    let fiber = fiberOf(article);
    for (let hop = 0; hop < 40 && fiber; hop += 1) {
      if (hunt(fiber.memoizedProps || fiber.pendingProps, 0, new Set())) return true;
      fiber = fiber.return;
    }
    return false;
  }

  function adultCorpus(article, tweet) {
    const ownedText = [...article.querySelectorAll('[data-testid="tweetText"]')].find((el) => ownedByArticle(el, article));
    const ownedName = [...article.querySelectorAll('[data-testid="User-Name"]')].find((el) => ownedByArticle(el, article));
    return [tweet.name, tweet.handle, tweet.text, ownedText?.innerText, ownedName?.innerText].filter(Boolean).join("\n");
  }

  function isWhitelistedHandle(handle) {
    const want = String(handle || "").toLowerCase();
    return Boolean(want && settings.whitelist.includes(want));
  }

  function scoreAdult(article, tweet) {
    const handle = String(tweet.handle || "").toLowerCase();
    if (isWhitelistedHandle(handle)) return { hide: false, reason: "whitelist" };
    const text = adultCorpus(article, tweet);
    const compact = compactText(text);
    const customHit = settings.customWords.find((word) => compact.includes(compactText(word)));
    if (customHit) return { hide: true, reason: "custom" };
    if (!settings.hideAdult) return { hide: false, reason: "" };
    if (settings.skipFollowing && fiberFollowing(article, handle)) {
      return { hide: false, reason: "following" };
    }
    const strong = countTerms(compact, ADULT_STRONG);
    const bait = countTerms(compact, ADULT_BAIT);
    const contact = countTerms(compact, ADULT_CONTACT);
    const soft = countTerms(compact, ADULT_SOFT);
    const emoji = (text.match(/[🔞💦🍑👅]/gu) || []).length;
    let score = strong * 8 + bait * 3 + contact * 3 + soft * 2 + (emoji >= 2 ? 3 : 0);
    if (strong) score += 4;
    if (bait && contact) score += 6;
    const threshold = settings.adultLevel === "conservative" ? 10 : 7;
    const anchored = strong > 0 || (bait > 0 && contact > 0) || (settings.adultLevel === "balanced" && soft >= 2 && (bait || contact));
    return { hide: anchored && score >= threshold, reason: anchored ? "adult" : "" };
  }

  function isOrganicMediaTracking(node) {
    return Boolean(
      node?.querySelector?.(
        '[data-testid="videoPlayer"], [data-testid="videoComponent"], [data-testid="tweetPhoto"], video'
      )
    );
  }

  function isAdArticle(article) {
    const cell = article.closest('[data-testid="cellInnerDiv"]') || article;
    if (cell.querySelector?.('[data-testid$="impression-pixel"]')) return true;
    for (const el of article.querySelectorAll("span, div[dir='ltr']")) {
      if (el.closest('[data-testid="tweetText"]')) continue;
      const label = (el.textContent || "").trim();
      if (label && label.length <= 14 && AD_LABELS.has(label)) return true;
    }
    return false;
  }

  function hideNode(el, on) {
    if (!el) return;
    if (on) el.setAttribute("data-x2img-hide", "1");
    else el.removeAttribute("data-x2img-hide");
  }

  function sweepAds() {
    document.querySelectorAll('[data-testid="placementTracking"], aside[role="complementary"]').forEach((node) => {
      if (!settings.hideAds || isOrganicMediaTracking(node)) {
        hideNode(node, false);
        return;
      }
      if (node.matches("aside") && !node.querySelector('a[href*="/i/premium_sign_up"]')) return;
      hideNode(node, true);
    });
  }

  function hideArticle(article) {
    const cell = article.closest('[data-testid="cellInnerDiv"]') || article;
    const tweet = parseTweet(article);
    const adult = scoreAdult(article, tweet);
    const ad = settings.hideAds && isAdArticle(article);
    hideNode(cell, Boolean(adult.hide || ad));
    return { adult, ad };
  }

  function collectFiberMediaRaw(article, wantId) {
    const found = { photos: [], videos: [], gifs: [] };
    wantId = String(wantId || "");

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

    function tweetIdFromHref(href) {
      const match = String(href || "").match(/status\/(\d+)/);
      return match ? match[1] : "";
    }

    function tweetIdOf(value) {
      if (!value || typeof value !== "object") return "";
      return String(value.rest_id || value.restId || value.legacy?.id_str || value.legacy?.idStr || "");
    }

    function variantsOf(item) {
      return item?.video_info?.variants || item?.videoInfo?.variants || [];
    }

    function takeItem(item, allowUnbound) {
      if (!item || typeof item !== "object" || isNode(item)) return;
      const bound = tweetIdFromHref(item.expanded_url || item.expandedUrl || item.url || "");
      if (wantId && bound && bound !== wantId) return;
      if (wantId && !bound && !allowUnbound) return;
      const type = String(item.type || item.media_type || "");
      const mp4s = variantsOf(item)
        .filter((row) => /mp4/i.test(row.content_type || row.contentType || "") && row.url)
        .sort((a, b) => (b.bitrate || 0) - (a.bitrate || 0));
      const modest = mp4s.filter((row) => (row.bitrate || 0) > 0 && row.bitrate <= 2176000);
      const picked = (modest[0] || mp4s[mp4s.length - 1] || {}).url;
      if (picked) {
        if (type === "animated_gif") found.gifs.push(picked);
        else found.videos.push(picked);
        return;
      }
      if (type === "video" || type === "animated_gif") return;
      const photo = item.media_url_https || item.mediaUrlHttps || item.media_url;
      if (photo) found.photos.push(photo);
    }

    function unwrap(value, depth) {
      if (!value || typeof value !== "object" || isNode(value) || depth > 6) return null;
      if (value.legacy?.extended_entities?.media || value.legacy?.extendedEntities?.media || value.legacy?.entities?.media) {
        return value;
      }
      return (
        unwrap(value.result, depth + 1) ||
        unwrap(value.tweet, depth + 1) ||
        unwrap(value.tweetResult, depth + 1) ||
        unwrap(value.tweet_results, depth + 1) ||
        unwrap(value.tweetResults, depth + 1)
      );
    }

    function take(value, allowUnbound) {
      if (variantsOf(value).length || /^(video|animated_gif|photo)$/i.test(String(value.type || value.media_type || ""))) {
        takeItem(value, allowUnbound);
      }
      const tweet = unwrap(value, 0);
      if (!tweet) return;
      const id = tweetIdOf(tweet);
      if (wantId && id && id !== wantId) return;
      const media =
        tweet.legacy?.extended_entities?.media ||
        tweet.legacy?.extendedEntities?.media ||
        tweet.legacy?.entities?.media ||
        [];
      for (const item of media) takeItem(item, true);
    }

    function search(root, allowUnbound) {
      const seen = new Set();
      const queue = [[root, 0]];
      let steps = 0;
      while (queue.length && steps < 240) {
        const [value, depth] = queue.shift();
        steps += 1;
        if (!value || typeof value !== "object" || isNode(value) || seen.has(value)) continue;
        seen.add(value);
        take(value, allowUnbound);
        if (depth >= 8) continue;
        let kids = [];
        try {
          kids = Array.isArray(value) ? value.slice(0, 24) : Object.values(value).slice(0, 40);
        } catch {
          kids = [];
        }
        for (const kid of kids) queue.push([kid, depth + 1]);
      }
    }

    function walkNode(node, hops, allowUnbound) {
      let fiber = fiberOf(node);
      for (let hop = 0; hop < hops && fiber; hop += 1) {
        search(fiber.memoizedProps || fiber.pendingProps, allowUnbound && hop < 8);
        fiber = fiber.return;
      }
    }

    walkNode(article, 50, true);
    try {
      const players = article.querySelectorAll(
        '[data-testid="videoPlayer"], [data-testid="videoComponent"], [data-testid="tweetPhoto"], video'
      );
      for (const player of players) walkNode(player, 24, true);
    } catch {
      /* sandbox */
    }
    return found;
  }

  function collectFiberMedia(article, wantId) {
    const merged = { photos: [], videos: [], gifs: [] };
    const source = collectFiberMediaRaw.toString();
    const runners = [];
    try {
      if (typeof unsafeWindow !== "undefined" && typeof unsafeWindow.Function === "function") {
        runners.push(unsafeWindow.Function("return (" + source + ").apply(null, arguments)"));
      }
    } catch {
      /* sandbox */
    }
    runners.push(collectFiberMediaRaw);
    const nodes = [article, article?.wrappedJSObject].filter(Boolean);
    for (const node of nodes) {
      for (const run of runners) {
        try {
          const got = run(node, wantId || "");
          if (!got) continue;
          merged.photos.push(...(got.photos || []));
          merged.videos.push(...(got.videos || []));
          merged.gifs.push(...(got.gifs || []));
        } catch {
          /* fiber shape drifted */
        }
      }
    }
    return {
      photos: unique(merged.photos),
      videos: unique(merged.videos),
      gifs: unique(merged.gifs),
    };
  }

  function collectDownloadMedia(article) {
    const tweet = parseTweet(article);
    const fiber = collectFiberMedia(article, tweet.id);
    const photos = unique(
      [...(tweet.photos || []), ...fiber.photos].map((url) => upgradePbsUrl(url)).filter((url) => isAllowedImageUrl(url))
    );
    const domMedia = [];
    for (const el of article.querySelectorAll("video, source")) {
      if (!ownedByArticle(el, article)) continue;
      domMedia.push(el.currentSrc || "", el.src || "", el.getAttribute("src") || "");
    }
    for (const el of article.querySelectorAll("[href], [poster]")) {
      if (!ownedByArticle(el, article)) continue;
      domMedia.push(el.getAttribute("href") || "", el.getAttribute("poster") || "");
    }
    const videos = unique(
      [
        ...fiber.videos,
        ...domMedia.filter((src) => /video\.twimg\.com\/[^\s"'<>]+?\.mp4(?:$|[?#])/i.test(src)),
      ].filter((url) => isAllowedImageUrl(url))
    );
    const gifs = unique(
      [
        ...fiber.gifs,
        ...[...article.querySelectorAll("video[poster], img[src*='tweet_video_thumb']")].flatMap((el) => {
          if (!ownedByArticle(el, article)) return [];
          const match = String(el.getAttribute("poster") || el.getAttribute("src") || "").match(/tweet_video_thumb\/([A-Za-z0-9_-]+)/);
          return match ? [`https://video.twimg.com/tweet_video/${match[1]}.mp4`] : [];
        }),
        ...domMedia.filter((src) => /video\.twimg\.com\/tweet_video\//i.test(src)),
      ].filter((url) => isAllowedImageUrl(url))
    );
    return {
      tweet,
      items: [
        ...photos.map((url) => ({ url, kind: "photo", ext: "jpg" })),
        ...gifs.map((url) => ({ url, kind: "gif", ext: "mp4" })),
        ...videos.map((url) => ({ url, kind: "video", ext: "mp4" })),
      ],
    };
  }

  function expandFileName(template, tweet, index, total) {
    const date = (tweet.createdAt || "").slice(0, 10) || "date";
    let name = String(template || DEFAULT_SETTINGS.fileName)
      .replace(/\{handle\}/gi, tweet.handle || "x")
      .replace(/\{id\}/gi, tweet.id || "card")
      .replace(/\{name\}/gi, tweet.name || "user")
      .replace(/\{date\}/gi, date)
      .replace(/\{n\}/gi, String(index + 1));
    if (total > 1 && !/\{n\}/i.test(template || "")) name += `_${index + 1}`;
    return name.replace(/[\\/:*?"<>|]+/g, "_").replace(/\s+/g, " ").trim() || "media";
  }

  function crc32Of(bytes) {
    let crc = 0xffffffff;
    for (let i = 0; i < bytes.length; i += 1) {
      crc ^= bytes[i];
      for (let j = 0; j < 8; j += 1) crc = crc & 1 ? (crc >>> 1) ^ 0xedb88320 : crc >>> 1;
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function u16(value) {
    return Uint8Array.of(value & 255, (value >>> 8) & 255);
  }

  function u32(value) {
    return Uint8Array.of(value & 255, (value >>> 8) & 255, (value >>> 16) & 255, (value >>> 24) & 255);
  }

  function zipStore(files) {
    const chunks = [];
    const centrals = [];
    let offset = 0;
    for (const file of files) {
      const nameBytes = new TextEncoder().encode(file.name);
      const data = file.data;
      const crc = crc32Of(data);
      const local = new Uint8Array([
        ...Uint8Array.of(0x50, 0x4b, 0x03, 0x04),
        ...u16(20),
        ...u16(0),
        ...u16(0),
        ...u16(0),
        ...u16(0),
        ...u32(crc),
        ...u32(data.length),
        ...u32(data.length),
        ...u16(nameBytes.length),
        ...u16(0),
      ]);
      chunks.push(local, nameBytes, data);
      const central = new Uint8Array([
        ...Uint8Array.of(0x50, 0x4b, 0x01, 0x02),
        ...u16(20),
        ...u16(20),
        ...u16(0),
        ...u16(0),
        ...u16(0),
        ...u16(0),
        ...u32(crc),
        ...u32(data.length),
        ...u32(data.length),
        ...u16(nameBytes.length),
        ...u16(0),
        ...u16(0),
        ...u16(0),
        ...u16(0),
        ...u32(0),
        ...u32(offset),
      ]);
      centrals.push(central, nameBytes);
      offset += local.length + nameBytes.length + data.length;
    }
    const centralSize = centrals.reduce((sum, part) => sum + part.length, 0);
    const end = new Uint8Array([
      ...Uint8Array.of(0x50, 0x4b, 0x05, 0x06),
      ...u16(0),
      ...u16(0),
      ...u16(files.length),
      ...u16(files.length),
      ...u32(centralSize),
      ...u32(offset),
      ...u16(0),
    ]);
    return new Blob([...chunks, ...centrals, end], { type: "application/zip" });
  }

  async function fetchMediaBlob(url) {
    if (!isAllowedImageUrl(url)) throw new Error("媒体地址不可用");
    if (typeof GM_xmlhttpRequest === "function") {
      const blob = await new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          method: "GET",
          url,
          responseType: "blob",
          anonymous: true,
          timeout: 60000,
          onload: (res) => {
            if (res.status < 200 || res.status >= 300 || !res.response) {
              reject(new Error(String(res.status)));
              return;
            }
            if (res.response.size > MEDIA_FETCH_MAX) {
              reject(new Error("too-large"));
              return;
            }
            resolve(res.response);
          },
          onerror: () => reject(new Error("network")),
          ontimeout: () => reject(new Error("timeout")),
        });
      });
      return blob;
    }
    const res = await fetch(url, { mode: "cors", credentials: "omit" });
    if (!res.ok) throw new Error(String(res.status));
    const blob = await res.blob();
    if (blob.size > MEDIA_FETCH_MAX) throw new Error("too-large");
    return blob;
  }

  async function downloadTweetMedia(article) {
    const { tweet, items } = collectDownloadMedia(article);
    if (!items.length) throw new Error("没有可下载的图片或视频");
    const files = [];
    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];
      const blob = await fetchMediaBlob(item.url);
      const name = `${expandFileName(settings.fileName, tweet, i, items.length)}.${item.ext}`;
      files.push({ name, data: new Uint8Array(await blob.arrayBuffer()), blob });
    }
    if (settings.zipMulti && files.length > 1) {
      const zip = zipStore(files);
      downloadBlob(zip, `${expandFileName(settings.fileName, tweet, 0, 1)}.zip`);
      toast(`已打包 ${files.length} 个文件`);
      return;
    }
    files.forEach((file) => downloadBlob(file.blob, file.name));
    toast(files.length > 1 ? `已下载 ${files.length} 个文件` : "已开始下载");
  }

  function mountDownload(article) {
    if (!settings.mediaDownload) {
      article.querySelector("[data-x2img-download]")?.remove();
      const tools = article.querySelector("[data-x2img-tools]");
      if (tools && !tools.querySelector("[data-x2img-action], [data-x2img-read]")) tools.remove();
      return;
    }
    if (article.parentElement?.closest('article[data-testid="tweet"]')) return;
    const id =
      tweetIdFromHref(article.querySelector('a[href*="/status/"]')?.href || "") ||
      article.querySelector("time")?.dateTime ||
      "x";
    const anchor = findMountAnchor(article);
    if (!anchor) return;
    const tools = ensureToolsWrap(article, anchor);
    let wrap = tools.querySelector("[data-x2img-download]");
    if (wrap && wrap.dataset.tweetId === id) return;
    wrap?.remove();
    wrap = document.createElement("div");
    wrap.dataset.x2imgDownload = "1";
    wrap.dataset.tweetId = id;
    const colorSource = tools.querySelector("[data-x2img-action]") || findShareButton(article);
    if (colorSource) wrap.style.color = getComputedStyle(colorSource).color;
    wrap.innerHTML = `<button type="button" aria-label="下载媒体" title="下载媒体">${ICONS.download}</button>`;
    wrap.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        const button = wrap.querySelector("button");
        if (button.dataset.busy === "1") return;
        button.dataset.busy = "1";
        button.innerHTML = ICONS.spin;
        downloadTweetMedia(article)
          .catch((err) => toast(err.message || "下载失败", "err"))
          .finally(() => {
            button.dataset.busy = "0";
            button.innerHTML = ICONS.download;
          });
      },
      true
    );
    tools.appendChild(wrap);
  }

  function findPrimaryNav() {
    return (
      document.querySelector('header[role="banner"] nav') ||
      document.querySelector('nav[aria-label="Primary"]') ||
      document.querySelector('[data-testid="sidebarColumn"] nav')
    );
  }

  function isMoreNavItem(el) {
    if (!el || el.closest("[data-x2img-nav-spot]")) return false;
    const testid = el.getAttribute("data-testid") || "";
    if (/AppTabBar_More_Menu/i.test(testid)) return true;
    const aria = String(el.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim();
    if (/^(更多|更多菜单|More|More menu|もっと見る)$/i.test(aria)) return true;
    const text = String(el.textContent || "").replace(/\s+/g, "").trim();
    return text === "更多" || text === "More" || text === "もっと見る";
  }

  function findMoreNavItem() {
    const scope = findPrimaryNav();
    if (!scope) return null;
    return [...scope.querySelectorAll("a, button, [role='link'], [role='button']")].find(isMoreNavItem) || null;
  }

  function navItemRoot(el) {
    let node = el;
    while (node.parentElement) {
      const siblings = [...node.parentElement.children].filter(
        (child) => child.matches?.("a, button, [role='link'], [role='button']") || child.querySelector?.("a, button, [role='link'], [role='button']")
      );
      if (siblings.length >= 3) return node;
      node = node.parentElement;
    }
    return el;
  }

  function navControl(root) {
    return root.matches?.("a, button, [role='link'], [role='button']")
      ? root
      : root.querySelector("a, button, [role='link'], [role='button']");
  }

  function replaceNavIcon(root) {
    const svg = root.querySelector("svg");
    if (!svg) return;
    const box = document.createElement("span");
    box.innerHTML = ICONS.navSpot;
    const next = box.firstElementChild;
    if (!next) return;
    next.setAttribute("aria-hidden", "true");
    if (svg.getAttribute("class")) next.setAttribute("class", svg.getAttribute("class"));
    if (svg.getAttribute("width")) next.setAttribute("width", svg.getAttribute("width"));
    if (svg.getAttribute("height")) next.setAttribute("height", svg.getAttribute("height"));
    if (svg.style.cssText) next.style.cssText = svg.style.cssText;
    svg.replaceWith(next);
  }

  function replaceNavLabel(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) {
      if (/更多菜单|More menu|更多|More|もっと見る/.test(node.nodeValue)) nodes.push(node);
    }
    for (const item of nodes) {
      item.nodeValue = item.nodeValue.replace(/更多菜单|More menu|更多|More|もっと見る/g, "聚光");
    }
  }

  function syncNavSpot() {
    document.querySelectorAll("[data-x2img-nav-spot]").forEach((root) => {
      const on = Boolean(spot.root);
      root.dataset.on = on ? "1" : "0";
      const control = navControl(root);
      if (!control) return;
      control.setAttribute("aria-pressed", on ? "true" : "false");
      control.setAttribute("aria-label", "聚光");
      control.setAttribute("title", "聚光");
    });
  }

  function mountNavSpot() {
    const existing = document.querySelector("[data-x2img-nav-spot]");
    if (!settings.readingBand) {
      existing?.remove();
      return;
    }
    const more = findMoreNavItem();
    if (!more) return;
    const moreRoot = navItemRoot(more);
    if (existing) {
      if (existing.nextElementSibling !== moreRoot) moreRoot.parentElement?.insertBefore(existing, moreRoot);
      syncNavSpot();
      return;
    }
    const root = moreRoot.cloneNode(true);
    root.dataset.x2imgNavSpot = "1";
    replaceNavIcon(root);
    replaceNavLabel(root);
    const control = navControl(root);
    if (control) {
      control.removeAttribute("href");
      control.removeAttribute("data-testid");
      control.removeAttribute("aria-haspopup");
      control.removeAttribute("aria-expanded");
      if (control.tagName === "A") control.setAttribute("role", "button");
      control.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          toggleSpot();
        },
        true
      );
    }
    moreRoot.parentElement?.insertBefore(root, moreRoot);
    syncNavSpot();
  }

  function mountRead(article) {
    if (!settings.readingBand) {
      article.querySelector("[data-x2img-read]")?.remove();
      const tools = article.querySelector("[data-x2img-tools]");
      if (tools && !tools.querySelector("[data-x2img-action], [data-x2img-download]")) tools.remove();
      return;
    }
    if (article.parentElement?.closest('article[data-testid="tweet"]')) return;
    const id =
      tweetIdFromHref(article.querySelector('a[href*="/status/"]')?.href || "") ||
      article.querySelector("time")?.dateTime ||
      "x";
    const anchor = findMountAnchor(article);
    if (!anchor) return;
    const tools = ensureToolsWrap(article, anchor);
    let wrap = tools.querySelector("[data-x2img-read]");
    if (wrap && wrap.dataset.tweetId === id) return;
    wrap?.remove();
    wrap = document.createElement("div");
    wrap.dataset.x2imgRead = "1";
    wrap.dataset.tweetId = id;
    const colorSource = tools.querySelector("[data-x2img-action], [data-x2img-download]") || findShareButton(article);
    if (colorSource) wrap.style.color = getComputedStyle(colorSource).color;
    wrap.innerHTML = `<button type="button" aria-label="对准这张帖" title="对准这张帖">${ICONS.band}</button>`;
    wrap.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (spot.root && spot.sourceEl === article) {
          closeSpot();
          return;
        }
        openSpot();
        snapToArticle(article);
      },
      true
    );
    tools.appendChild(wrap);
  }

  function applyMediaGrid(article) {
    if (!settings.mediaGrid) {
      article.removeAttribute("data-x2img-grid");
      return;
    }
    const list = article.querySelector('[data-testid="ScrollSnap-List"]');
    const items = list ? [...list.children].filter((child) => child.getAttribute("role") === "presentation") : [];
    if (items.length >= 2) article.setAttribute("data-x2img-grid", String(Math.min(items.length, 4)));
    else article.removeAttribute("data-x2img-grid");
  }

  function controlLabel(el) {
    return String(el?.textContent || el?.getAttribute?.("aria-label") || "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function findAgeViewControl(cover) {
    if (!cover) return null;
    for (const el of cover.querySelectorAll("button, [role='button']")) {
      const label = controlLabel(el);
      if (!label || label.length > 28) continue;
      if (SHOW_MORE_RE.test(label) || PROFILE_GATE_BTN_RE.test(label)) continue;
      if (AGE_VIEW_BTN_RE.test(label)) return el;
    }
    return null;
  }

  function findSensitiveProfileGate() {
    const root = document.querySelector("main") || document.body;
    if (!root) return null;
    const labeled = (el) => {
      if (el.closest('article[data-testid="tweet"]')) return false;
      const label = controlLabel(el);
      return Boolean(label && label.length <= 48 && PROFILE_GATE_BTN_RE.test(label));
    };
    for (const el of root.querySelectorAll("button, [role='button']")) {
      if (labeled(el)) return el;
    }
    for (const el of root.querySelectorAll("span")) {
      if (!labeled(el)) continue;
      const button = el.closest("button, [role='button']");
      if (button && !button.closest('article[data-testid="tweet"]')) return button;
    }
    return null;
  }

  const profileGateState = { path: "", clicks: 0 };

  function dismissSensitiveProfileGate() {
    if (!settings.unmaskAge) {
      profileGateState.path = "";
      profileGateState.clicks = 0;
      return;
    }
    const path = location.pathname.replace(/\/+$/, "") || "/";
    if (profileGateState.path !== path) {
      profileGateState.path = path;
      profileGateState.clicks = 0;
    }
    if (profileGateState.clicks >= 2) return;
    const button = findSensitiveProfileGate();
    if (!button) return;
    profileGateState.clicks += 1;
    button.click();
  }

  function findAgeWarnNode(article) {
    const candidates = [...article.querySelectorAll("span, div")].filter((el) => {
      if (el.closest('[data-testid="tweetText"]')) return false;
      if (el.querySelector(AGE_MEDIA_RE)) return false;
      const text = (el.textContent || "").trim();
      return text && text.length <= 180 && AGE_WARN_RE.test(text);
    });
    if (!candidates.length) return null;
    return candidates.reduce((best, el) => {
      const len = (el.textContent || "").trim().length;
      return !best || len < (best.textContent || "").trim().length ? el : best;
    }, null);
  }

  function applyAgeUnmask(article) {
    const tweet = parseTweet(article);
    if (!settings.unmaskAge && !isWhitelistedHandle(tweet.handle)) return;
    const warn = findAgeWarnNode(article);
    if (!warn) return;
    let cover = warn;
    for (let i = 0; i < 10 && cover.parentElement && cover.parentElement !== article; i += 1) {
      const parent = cover.parentElement;
      if (parent.querySelector(`[data-testid="tweetText"], ${AGE_MEDIA_RE}`)) break;
      cover = parent;
    }
    if (cover.querySelector(AGE_MEDIA_RE)) cover = warn;
    cover.classList.add("x2img-age-cover");
    if (article.querySelector("[data-x2img-unlocked]") || article.dataset.x2imgUnmaskPending === "1") return;
    const nativeMedia = [...article.querySelectorAll('[data-testid="tweetPhoto"] img, [data-testid="videoPlayer"] video, video')].filter(
      (el) => !el.closest("[data-x2img-unlocked]")
    );
    const alreadyShown = nativeMedia.some((el) => {
      const src = el.currentSrc || el.src || "";
      return src && !/abs\.twimg\.com|placeholder/i.test(src);
    });
    if (alreadyShown) return;
    const { items } = collectDownloadMedia(article);
    if (!items.length) {
      const view = findAgeViewControl(cover);
      if (!view) return;
      article.dataset.x2imgUnmaskPending = "1";
      view.click();
      return;
    }
    if (nativeMedia.length) return;
    const box = document.createElement("div");
    box.dataset.x2imgUnlocked = "1";
    box.style.cssText = "display:grid;gap:2px;border-radius:12px;overflow:hidden;margin-top:8px;";
    if (items.length === 2) box.style.gridTemplateColumns = "1fr 1fr";
    if (items.length === 3) box.style.gridTemplateColumns = "1.15fr 1fr";
    if (items.length >= 4) box.style.gridTemplateColumns = "1fr 1fr";
    items.slice(0, 4).forEach((item, index) => {
      if (item.kind === "photo") {
        const img = document.createElement("img");
        img.src = item.url;
        img.alt = "";
        img.style.cssText = `width:100%;height:100%;object-fit:cover;${items.length === 3 && index === 0 ? "grid-row:1 / span 2;" : ""}`;
        box.appendChild(img);
      } else {
        const video = document.createElement("video");
        video.src = item.url;
        video.controls = item.kind === "video";
        video.autoplay = item.kind === "gif";
        video.loop = item.kind === "gif";
        video.muted = true;
        video.playsInline = true;
        video.style.cssText = "width:100%;display:block;";
        box.appendChild(video);
      }
    });
    cover.after(box);
  }

  function applyTimelineExtras() {
    loadSettings();
    document.documentElement.dataset.x2imgGrid = settings.mediaGrid ? "1" : "0";
    document.documentElement.dataset.x2imgUnmask = settings.unmaskAge || settings.whitelist.length ? "1" : "0";
    dismissSensitiveProfileGate();
    sweepAds();
    document.querySelectorAll('article[data-testid="tweet"]').forEach((article) => {
      hideArticle(article);
      applyMediaGrid(article);
      applyAgeUnmask(article);
    });
  }

  const spot = {
    root: null,
    follow: false,
    drag: null,
    bandTop: 0,
    bandH: 112,
    sourceEl: null,
    snapTimer: 0,
    lastLine: null,
    scrollTick: 0,
    windowed: false,
  };

  function isSpotChrome(node) {
    return Boolean(node?.closest?.("#x2img-spot, #x2img-panel, #x2img-toast, [data-x2img-tools], [data-x2img-nav-spot]"));
  }

  function isRootTweet(article) {
    return Boolean(
      article?.matches?.('article[data-testid="tweet"]') &&
        !article.parentElement?.closest('article[data-testid="tweet"]')
    );
  }

  function rootTweetFrom(node) {
    const article = node?.closest?.('article[data-testid="tweet"]');
    if (!article) return null;
    return article.parentElement?.closest('article[data-testid="tweet"]') || article;
  }

  function ownTweetEl(article, selector) {
    if (!article) return null;
    return (
      [...article.querySelectorAll(selector)].find((el) => el.closest('article[data-testid="tweet"]') === article) || null
    );
  }

  function mainTweetText(article) {
    return ownTweetEl(article, '[data-testid="tweetText"]');
  }

  function tweetActionTop(article) {
    const reply = ownTweetEl(article, '[data-testid="reply"]');
    const group = reply?.closest('[role="group"]') || reply?.closest(".bar");
    const box = (group || reply)?.getBoundingClientRect();
    return box && box.height ? box.top : 0;
  }

  function tweetContentRect(article) {
    if (!article) return null;
    const box = article.getBoundingClientRect();
    if (box.width < 8 || box.height < 8) return null;
    const actionTop = tweetActionTop(article);
    const bottom = actionTop > box.top + 36 ? actionTop : box.bottom;
    return { top: box.top, bottom, left: box.left, right: box.right };
  }

  function listRootTweets() {
    return [...document.querySelectorAll('article[data-testid="tweet"]')].filter((article) => {
      if (!isRootTweet(article)) return false;
      const box = article.getBoundingClientRect();
      return box.width > 8 && box.height > 8;
    });
  }

  function tweetVisibleScore(article) {
    const rect = tweetContentRect(article);
    if (!rect) return 0;
    const top = Math.max(rect.top, 48);
    const bottom = Math.min(rect.bottom, window.innerHeight - 36);
    return Math.max(0, bottom - top);
  }

  function tweetStillFocused(article) {
    const rect = tweetContentRect(article);
    if (!rect) return false;
    const mid = window.innerHeight * 0.42;
    return rect.top < mid + 40 && rect.bottom > mid - 40 && tweetVisibleScore(article) >= 48;
  }

  function isLongTweet(article) {
    const textH = mainTweetText(article)?.getBoundingClientRect().height || 0;
    const rect = tweetContentRect(article);
    const h = rect ? rect.bottom - rect.top : 0;
    return textH >= 160 || h > Math.min(window.innerHeight * 0.55, 380);
  }

  function caretFromPoint(x, y) {
    if (document.caretRangeFromPoint) return document.caretRangeFromPoint(x, y);
    const pos = document.caretPositionFromPoint?.(x, y);
    if (!pos?.offsetNode) return null;
    const range = document.createRange();
    range.setStart(pos.offsetNode, pos.offset);
    range.collapse(true);
    return range;
  }

  function readingRootFrom(node) {
    return mainTweetText(rootTweetFrom(node));
  }

  function textNodesIn(root) {
    const out = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.nodeValue && node.nodeValue.replace(/\s+/g, "")
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
    });
    let node;
    while ((node = walker.nextNode())) out.push(node);
    return out;
  }

  function locateOffset(parts, index) {
    const last = parts[parts.length - 1];
    if (!last) return null;
    if (index <= 0) return { node: parts[0].node, offset: 0 };
    for (const part of parts) {
      if (index <= part.start + part.text.length) {
        return { node: part.node, offset: Math.max(0, index - part.start) };
      }
    }
    return { node: last.node, offset: last.text.length };
  }

  function sentenceBounds(text, index) {
    const i = Math.max(0, Math.min(index, text.length));
    let start = 0;
    for (let k = i - 1; k >= 0; k -= 1) {
      const ch = text[k];
      if (/[。！？!?…]/.test(ch) || (ch === "." && /\s/.test(text[k + 1] || ""))) {
        start = k + 1;
        while (start < text.length && /\s/.test(text[start])) start += 1;
        break;
      }
      if (ch === "\n" && text[k + 1] === "\n") {
        start = k + 2;
        break;
      }
    }
    let end = text.length;
    for (let k = i; k < text.length; k += 1) {
      const ch = text[k];
      if (/[。！？!?…]/.test(ch)) {
        end = k + 1;
        break;
      }
      if (ch === "." && /["”’)]*(?:\s|$)/.test(text.slice(k + 1, k + 3))) {
        end = k + 1;
        while (end < text.length && /["”’)]/.test(text[end])) end += 1;
        break;
      }
      if (ch === "\n" && text[k + 1] === "\n") {
        end = k;
        break;
      }
    }
    if (end <= start) return { start: 0, end: text.length };
    return { start, end };
  }

  function unionRect(range) {
    const rects = [...range.getClientRects()].filter((r) => r.width && r.height);
    if (!rects.length) {
      const box = range.getBoundingClientRect();
      if (!box.width && !box.height) return null;
      return box;
    }
    return {
      top: Math.min(...rects.map((r) => r.top)),
      bottom: Math.max(...rects.map((r) => r.bottom)),
      left: Math.min(...rects.map((r) => r.left)),
      right: Math.max(...rects.map((r) => r.right)),
    };
  }

  function lineRectFromCaret(caret, y) {
    const node = caret?.startContainer;
    if (!node || node.nodeType !== Node.TEXT_NODE) return null;
    const range = document.createRange();
    range.selectNodeContents(node);
    const rects = [...range.getClientRects()].filter((r) => r.width && r.height);
    return rects.find((r) => y >= r.top - 4 && y <= r.bottom + 4) || rects[0] || null;
  }

  function sentenceRectFromPoint(x, y) {
    const caret = caretFromPoint(x, y);
    if (!caret) return null;
    const root = readingRootFrom(caret.startContainer);
    const line = lineRectFromCaret(caret, y);
    if (!root) return line;
    const nodes = textNodesIn(root);
    if (!nodes.length) return line;
    const parts = [];
    let offset = 0;
    let caretOffset = -1;
    for (const node of nodes) {
      parts.push({ node, start: offset, text: node.nodeValue });
      if (node === caret.startContainer) caretOffset = offset + caret.startOffset;
      offset += node.nodeValue.length;
    }
    if (caretOffset < 0) return line;
    const full = parts.map((p) => p.text).join("");
    const bounds = sentenceBounds(full, caretOffset);
    const a = locateOffset(parts, bounds.start);
    const b = locateOffset(parts, bounds.end);
    if (!a || !b) return line;
    const range = document.createRange();
    range.setStart(a.node, a.offset);
    range.setEnd(b.node, b.offset);
    const rect = unionRect(range);
    if (!rect) return line;
    if (rect.bottom - rect.top > Math.min(window.innerHeight * 0.32, 220)) return line || rect;
    return rect;
  }

  function spotLane() {
    const col =
      document.querySelector('[data-testid="primaryColumn"]') ||
      document.querySelector(".rail") ||
      document.querySelector('[role="main"]');
    if (!col) return { left: 0, right: 10 };
    const box = col.getBoundingClientRect();
    return {
      left: Math.max(0, Math.round(box.left)),
      right: Math.max(0, Math.round(window.innerWidth - box.right)),
    };
  }

  function spotThemeDark() {
    const [r, g, b] = pagePaperRGB();
    return r * 299 + g * 587 + b * 114 < 128000;
  }

  function currentSpotPaper() {
    const id = spotThemeDark() ? settings.spotPaperDark : settings.spotPaperLight;
    return SPOT_PAPERS.find((item) => item.id === id) || SPOT_PAPERS[spotThemeDark() ? 6 : 4];
  }

  function paperButtonsHtml() {
    const current = currentSpotPaper().id;
    return SPOT_PAPERS.map((item, index) => {
      const mix = settings.spotMix.includes(item.id) ? "1" : "0";
      const on = item.id === current ? "true" : "false";
      return `<button type="button" class="pchip" data-paper="${item.id}" aria-label="${item.name}" title="${index + 1} ${item.name}" aria-pressed="${on}" data-mix="${mix}" style="background:${item.paper}"></button>`;
    }).join("");
  }

  function applySpotBand(root) {
    const box = root.querySelector(".bandbox");
    if (!box) return;
    const mix = settings.spotMix.map((id) => SPOT_PAPERS.find((item) => item.id === id)).filter(Boolean);
    if (mix.length < 2) {
      box.style.background = "";
      return;
    }
    const stops = [];
    mix.forEach((item, i) => {
      stops.push(`${item.band} ${((i / mix.length) * 100).toFixed(2)}%`);
      stops.push(`${item.band} ${(((i + 1) / mix.length) * 100).toFixed(2)}%`);
    });
    box.style.background = `linear-gradient(to bottom,${stops.join(",")})`;
  }

  function applySpotPaper(root) {
    const paper = currentSpotPaper();
    const [r, g, b] = paper.pf.split(",").map((n) => Number(n));
    const dark = r * 299 + g * 587 + b * 114 < 128000;
    root.style.setProperty("--pf", paper.pf);
    root.style.setProperty("--dim", paper.dim);
    root.style.setProperty("--band", paper.band);
    root.style.color = paper.ink2;
    if (dark) delete root.dataset.light;
    else root.dataset.light = "1";
    applySpotBand(root);
  }

  function persistSpot(patch) {
    saveSettings(patch);
    paintSpot();
    syncSpotChrome();
    syncSettingsSpotControls();
  }

  function setSpotPaper(id, mix) {
    if (!SPOT_PAPER_IDS.includes(id)) return;
    if (mix) {
      const next = settings.spotMix.includes(id)
        ? settings.spotMix.filter((item) => item !== id)
        : [...settings.spotMix, id].slice(-3);
      persistSpot({ spotMix: next });
      return;
    }
    persistSpot(spotThemeDark() ? { spotPaperDark: id } : { spotPaperLight: id });
  }

  function setSpotHeight(value) {
    const next = clampSpotHeight(value);
    persistSpot({ spotHeight: next });
    if (spot.root) {
      spot.windowed = true;
      spot.bandH = next;
      paintSpot();
    }
  }

  function resetSpotSettings() {
    persistSpot({
      spotPaperLight: DEFAULT_SETTINGS.spotPaperLight,
      spotPaperDark: DEFAULT_SETTINGS.spotPaperDark,
      spotHeight: DEFAULT_SETTINGS.spotHeight,
      spotFollow: DEFAULT_SETTINGS.spotFollow,
      spotMix: [],
    });
    if (spot.root) {
      spot.follow = false;
      spot.windowed = false;
      const tweet = spot.sourceEl || firstVisibleTweet();
      if (tweet) applyTweetBand(tweet, { snap: true });
      else paintSpot();
    }
  }

  function pulseSpotSnap() {
    const root = spot.root;
    if (!root || spot.drag) return;
    root.classList.add("is-snap");
    clearTimeout(spot.snapTimer);
    spot.snapTimer = setTimeout(() => root.classList.remove("is-snap"), 260);
  }

  function paintSpot() {
    const root = spot.root;
    if (!root) return;
    const h = window.innerHeight;
    spot.bandH = Math.max(40, Math.min(spot.bandH, Math.round(h * 0.82)));
    spot.bandTop = Math.max(8, Math.min(spot.bandTop, h - spot.bandH - 8));
    const lane = spotLane();
    root.style.setProperty("--x2img-t", `${spot.bandTop}px`);
    root.style.setProperty("--x2img-b", `${spot.bandTop + spot.bandH}px`);
    root.style.setProperty("--x2img-gl", `${lane.left}px`);
    root.style.setProperty("--x2img-gr", `${lane.right}px`);
    root.classList.toggle("is-follow", spot.follow);
    root.classList.toggle("is-drag", Boolean(spot.drag));
    applySpotPaper(root);
  }

  function snapToRect(rect) {
    if (!rect) return;
    const height = Math.max(40, Math.round((rect.bottom - rect.top) + 14));
    const maxH = Math.min(260, Math.round(window.innerHeight * 0.5));
    spot.bandH = Math.min(height, maxH);
    spot.bandTop = Math.round(rect.top) - 7;
    pulseSpotSnap();
    paintSpot();
  }

  function spotPad() {
    const dock = spot.root?.querySelector(".dock");
    const dockH = dock ? Math.ceil(dock.getBoundingClientRect().height) : 0;
    return { top: 56, bottom: Math.max(16, dockH + 4) };
  }

  function ensureTweetInView(article) {
    const rect = tweetContentRect(article);
    if (!rect) return;
    const pad = spotPad();
    const viewH = window.innerHeight - pad.top - pad.bottom;
    if (rect.top >= pad.top && rect.bottom <= window.innerHeight - pad.bottom) return;
    if (rect.bottom - rect.top > viewH) {
      (mainTweetText(article) || article).scrollIntoView({ block: "start", behavior: "instant" });
      return;
    }
    article.scrollIntoView({ block: "center", behavior: "instant" });
  }

  function applyTweetBand(article, { snap = true, scroll = false } = {}) {
    if (!article || !spot.root) return;
    if (scroll) ensureTweetInView(article);
    const rect = tweetContentRect(article);
    if (!rect) return;
    spot.sourceEl = article;
    const pad = spotPad();
    const viewTop = pad.top;
    const viewBot = window.innerHeight - pad.bottom;
    const maxH = Math.round(window.innerHeight * 0.78);
    if (spot.windowed) {
      spot.bandH = clampSpotHeight(settings.spotHeight);
      spot.bandTop = Math.round(Math.max(viewTop, Math.min(rect.top - 6, viewBot - spot.bandH)));
      if (snap) pulseSpotSnap();
      paintSpot();
      return;
    }
    const rawH = rect.bottom - rect.top;
    if (rawH <= maxH) {
      spot.bandH = Math.max(56, Math.round(rawH + 10));
      spot.bandTop = Math.round(rect.top) - 5;
    } else {
      const top = Math.max(rect.top, viewTop);
      const bottom = Math.min(rect.bottom, viewBot);
      if (bottom - top >= 56) {
        spot.bandTop = Math.round(top) - 4;
        spot.bandH = Math.round(bottom - top + 8);
      } else {
        spot.bandH = maxH;
        spot.bandTop = Math.round(rect.top) - 5;
      }
    }
    if (snap) pulseSpotSnap();
    paintSpot();
  }

  function snapToArticle(article) {
    if (!article || !spot.root) return;
    spot.windowed = false;
    applyTweetBand(article, { snap: true, scroll: true });
  }

  function pickFocusedTweet() {
    const tweets = listRootTweets();
    if (!tweets.length) return null;
    if (spot.sourceEl?.isConnected && tweets.includes(spot.sourceEl) && tweetStillFocused(spot.sourceEl)) {
      return spot.sourceEl;
    }
    const bandMid = spot.bandTop + spot.bandH / 2;
    let best = null;
    let bestScore = -Infinity;
    for (const tweet of tweets) {
      const rect = tweetContentRect(tweet);
      if (!rect) continue;
      const visible = tweetVisibleScore(tweet);
      if (visible < 24) continue;
      const mid = (rect.top + rect.bottom) / 2;
      const score = visible - Math.abs(mid - bandMid) * 0.2;
      if (score > bestScore) {
        bestScore = score;
        best = tweet;
      }
    }
    return best || tweets[0];
  }

  function tweetOverlappingBand() {
    const tweets = listRootTweets();
    const top = spot.bandTop;
    const bottom = spot.bandTop + spot.bandH;
    let best = null;
    let bestOverlap = 0;
    for (const tweet of tweets) {
      const rect = tweetContentRect(tweet);
      if (!rect) continue;
      const overlap = Math.min(rect.bottom, bottom) - Math.max(rect.top, top);
      if (overlap > bestOverlap) {
        bestOverlap = overlap;
        best = tweet;
      }
    }
    return best;
  }

  function syncSpotChrome() {
    const root = spot.root;
    if (!root) return;
    const paper = currentSpotPaper();
    root.querySelectorAll("[data-paper]").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.paper === paper.id ? "true" : "false");
      btn.dataset.mix = settings.spotMix.includes(btn.dataset.paper) ? "1" : "0";
    });
    const followBtn = root.querySelector("[data-follow]");
    if (followBtn) {
      followBtn.setAttribute("aria-pressed", spot.follow ? "true" : "false");
      followBtn.textContent = spot.follow ? "跟随中" : "跟随鼠标";
    }
    const height = root.querySelector("[data-bh]");
    if (height) height.value = String(settings.spotHeight);
    const label = root.querySelector("[data-hv]");
    if (label) label.textContent = `${settings.spotHeight}px`;
  }

  function syncSettingsSpotControls() {
    const panel = document.getElementById("x2img-panel");
    if (!panel) return;
    const paper = currentSpotPaper();
    panel.querySelectorAll("[data-paper]").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.paper === paper.id ? "true" : "false");
      btn.dataset.mix = settings.spotMix.includes(btn.dataset.paper) ? "1" : "0";
    });
    const height = panel.querySelector('[data-k="spotHeight"]');
    if (height) height.value = String(settings.spotHeight);
    const label = panel.querySelector("[data-hv]");
    if (label) label.textContent = `${settings.spotHeight}px`;
    const follow = panel.querySelector('[data-k="spotFollow"]');
    if (follow) follow.checked = settings.spotFollow;
  }

  function setFollow(on) {
    spot.follow = Boolean(on);
    spot.lastLine = null;
    persistSpot({ spotFollow: spot.follow });
  }

  function spotScroller() {
    const start = document.querySelector('article[data-testid="tweet"]') || document.body;
    let node = start;
    while (node && node !== document.documentElement) {
      const style = getComputedStyle(node);
      if (/(auto|scroll)/.test(style.overflowY) && node.scrollHeight > node.clientHeight + 20) return node;
      node = node.parentElement;
    }
    return document.scrollingElement || document.documentElement;
  }

  function stepTweet(dir) {
    spot.windowed = false;
    const tweets = listRootTweets();
    if (!tweets.length) return;
    let idx = spot.sourceEl ? tweets.indexOf(spot.sourceEl) : -1;
    if (idx < 0) {
      const current = pickFocusedTweet();
      idx = current ? tweets.indexOf(current) : 0;
    }
    const next = tweets[idx + dir];
    if (!next) {
      spotScroller().scrollBy({ top: dir * Math.round(window.innerHeight * 0.55), left: 0, behavior: "instant" });
      const again = listRootTweets();
      const fallback = again[Math.max(0, Math.min(again.length - 1, idx + dir))] || pickFocusedTweet();
      if (fallback) applyTweetBand(fallback, { snap: true, scroll: true });
      return;
    }
    applyTweetBand(next, { snap: true, scroll: true });
  }

  function syncSpotToTimeline() {
    if (!spot.root || spot.drag || spot.follow) {
      if (spot.root && !spot.drag) paintSpot();
      return;
    }
    const tweet = pickFocusedTweet();
    if (tweet !== spot.sourceEl) spot.windowed = false;
    if (tweet) applyTweetBand(tweet, { snap: false });
    else paintSpot();
  }

  function onSpotScroll() {
    if (!spot.root) return;
    if (spot.scrollTick) return;
    spot.scrollTick = requestAnimationFrame(() => {
      spot.scrollTick = 0;
      syncSpotToTimeline();
    });
  }

  function onSpotPointerMove(e) {
    if (spot.drag) {
      spot.bandTop = spot.drag.top + (e.clientY - spot.drag.y);
      paintSpot();
      return;
    }
    if (!spot.follow || !spot.root || e.pointerType !== "mouse") return;
    if (e.target.closest?.(".dock,.tune,.grip")) return;
    const article = rootTweetFrom(document.elementFromPoint(e.clientX, e.clientY));
    if (!article || isSpotChrome(article)) return;
    if (article === spot.sourceEl) return;
    spot.windowed = false;
    applyTweetBand(article, { snap: true });
  }

  function onSpotPointerUp() {
    if (!spot.drag) return;
    spot.drag = null;
    spot.windowed = false;
    const tweet = tweetOverlappingBand() || pickFocusedTweet();
    if (tweet) applyTweetBand(tweet, { snap: true });
    else paintSpot();
  }

  function onSpotClick(e) {
    if (!spot.root || spot.drag || spot.follow) return;
    if (e.button !== 0 || !e.shiftKey) return;
    if (isSpotChrome(e.target)) return;
    const article = rootTweetFrom(e.target);
    if (!article) return;
    e.preventDefault();
    e.stopPropagation();
    if (isLongTweet(article) && e.target.closest?.('[data-testid="tweetText"]')) {
      const rect = sentenceRectFromPoint(e.clientX, e.clientY);
      if (rect) {
        spot.sourceEl = article;
        spot.windowed = true;
        snapToRect(rect);
        return;
      }
    }
    spot.windowed = false;
    applyTweetBand(article, { snap: true });
  }

  function onSpotKey(e) {
    if (!spot.root || e.isComposing) return;
    if (e.key === "Escape") {
      e.preventDefault();
      const tune = spot.root.querySelector(".tune.on");
      if (tune) {
        tune.classList.remove("on");
        return;
      }
      closeSpot();
      return;
    }
    const typing =
      /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName || "") ||
      document.activeElement?.isContentEditable;
    if (typing) return;
    if ((e.key === "f" || e.key === "F") && !e.altKey && !e.metaKey && !e.ctrlKey) {
      e.preventDefault();
      setFollow(!spot.follow);
      return;
    }
    if (e.key === "j" || e.key === "J" || e.key === "ArrowDown") {
      e.preventDefault();
      stepTweet(1);
      return;
    }
    if (e.key === "k" || e.key === "K" || e.key === "ArrowUp") {
      e.preventDefault();
      stepTweet(-1);
      return;
    }
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (/^[1-7]$/.test(e.key)) {
      e.preventDefault();
      setSpotPaper(SPOT_PAPER_IDS[Number(e.key) - 1], e.shiftKey);
    }
  }

  function bindSpotChrome(root) {
    root.querySelector(".grip")?.addEventListener("pointerdown", (e) => {
      if (e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      if (spot.follow) setFollow(false);
      spot.drag = { y: e.clientY, top: spot.bandTop };
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {}
      paintSpot();
    });
    root.querySelectorAll("[data-paper]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        setSpotPaper(btn.dataset.paper, e.shiftKey);
      });
    });
    root.querySelector("[data-follow]")?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      setFollow(!spot.follow);
    });
    root.querySelector("[data-tune]")?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      root.querySelector(".tune")?.classList.toggle("on");
    });
    root.querySelector("[data-close]")?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeSpot();
    });
    root.querySelector("[data-bh]")?.addEventListener("input", (e) => {
      setSpotHeight(e.target.value);
    });
    root.querySelector("[data-spot-reset]")?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      resetSpotSettings();
    });
  }

  function openSpot() {
    if (spot.root) {
      paintSpot();
      return;
    }
    const root = document.createElement("div");
    root.id = "x2img-spot";
    root.setAttribute("role", "region");
    root.setAttribute("aria-label", "聚光阅读");
    root.innerHTML = `
      <div class="veil" aria-hidden="true"></div>
      <div class="bandbox" aria-hidden="true"></div>
      <div class="grip" aria-hidden="true"></div>
      <div class="tune">
        <div class="row">
          <span>高度</span>
          <input type="range" data-bh min="56" max="260" value="${settings.spotHeight}" aria-label="光带高度">
          <b data-hv>${settings.spotHeight}px</b>
        </div>
        <button type="button" class="link" data-spot-reset>恢复默认</button>
      </div>
      <div class="dock">
        <div class="papers">${paperButtonsHtml()}</div>
        <button type="button" class="tbtn" data-tune>高度</button>
        <button type="button" class="tbtn" data-follow aria-pressed="false">跟随鼠标</button>
        <span class="hint">j/k 换帖 · Shift 点帖对准 · F 跟随 · Esc 关</span>
        <button type="button" class="tbtn" data-close>退出</button>
      </div>
    `;
    spot.root = root;
    spot.follow = settings.spotFollow;
    spot.drag = null;
    spot.sourceEl = null;
    spot.lastLine = null;
    spot.windowed = false;
    document.documentElement.appendChild(root);
    bindSpotChrome(root);
    spot.bandH = settings.spotHeight;
    spot.bandTop = Math.round(window.innerHeight * 0.42) - Math.round(settings.spotHeight / 2);
    paintSpot();
    syncSpotChrome();
    window.addEventListener("pointermove", onSpotPointerMove);
    window.addEventListener("pointerup", onSpotPointerUp);
    window.addEventListener("pointercancel", onSpotPointerUp);
    window.addEventListener("keydown", onSpotKey, true);
    window.addEventListener("resize", paintSpot);
    window.addEventListener("scroll", onSpotScroll, true);
    document.addEventListener("click", onSpotClick, true);
    syncNavSpot();
  }

  function closeSpot() {
    if (!spot.root) return;
    window.removeEventListener("pointermove", onSpotPointerMove);
    window.removeEventListener("pointerup", onSpotPointerUp);
    window.removeEventListener("pointercancel", onSpotPointerUp);
    window.removeEventListener("keydown", onSpotKey, true);
    window.removeEventListener("resize", paintSpot);
    window.removeEventListener("scroll", onSpotScroll, true);
    document.removeEventListener("click", onSpotClick, true);
    if (spot.scrollTick) cancelAnimationFrame(spot.scrollTick);
    clearTimeout(spot.snapTimer);
    spot.root.remove();
    spot.root = null;
    spot.follow = false;
    spot.drag = null;
    spot.sourceEl = null;
    spot.lastLine = null;
    spot.scrollTick = 0;
    spot.windowed = false;
    syncNavSpot();
  }

  function firstVisibleTweet() {
    const tweets = listRootTweets();
    const mid = window.innerHeight * 0.42;
    let best = null;
    let bestDist = Infinity;
    for (const article of tweets) {
      const rect = tweetContentRect(article);
      if (!rect) continue;
      if (rect.bottom < 72 || rect.top > window.innerHeight - 72) continue;
      const dist = Math.abs((rect.top + rect.bottom) / 2 - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = article;
      }
    }
    return best || tweets[0] || null;
  }

  function toggleSpot() {
    if (spot.root) {
      closeSpot();
      return;
    }
    openSpot();
    const article = firstVisibleTweet();
    if (article) snapToArticle(article);
  }

  function closeSettingsPanel() {
    document.getElementById("x2img-panel")?.remove();
  }

  function openSettingsPanel() {
    loadSettings();
    closeSettingsPanel();
    const panel = document.createElement("div");
    panel.id = "x2img-panel";
    if (!pageIsDark()) panel.dataset.light = "1";
    panel.innerHTML = `
      <div class="head">
        <h2>设置</h2>
        <button type="button" class="x" data-close aria-label="关闭" title="关闭">×</button>
      </div>
      <div class="body">
      <h3>内容净化</h3>
      <label class="row">隐藏黄推 / 引流机器人 <input type="checkbox" data-k="hideAdult" ${settings.hideAdult ? "checked" : ""}></label>
      <label class="row">隐藏广告 / Premium 推销 <input type="checkbox" data-k="hideAds" ${settings.hideAds ? "checked" : ""}></label>
      <label class="row">已关注的不藏 <input type="checkbox" data-k="skipFollowing" ${settings.skipFollowing ? "checked" : ""}></label>
      <div class="hint">按账号是否已关注，不按 Following 时间线整页放行</div>
      <div class="hint">强度</div>
      <select data-k="adultLevel">
        <option value="balanced" ${settings.adultLevel === "balanced" ? "selected" : ""}>均衡</option>
        <option value="conservative" ${settings.adultLevel === "conservative" ? "selected" : ""}>保守</option>
      </select>
      <div class="hint">自定义屏蔽词，一行一个</div>
      <textarea data-k="customWords">${escapeHtml(settings.customWords.join("\n"))}</textarea>
      <div class="hint">账号白名单，一行一个，如 swa2880。不当黄推藏，成人内容提示也会揭开</div>
      <textarea data-k="whitelist">${escapeHtml(settings.whitelist.join("\n"))}</textarea>
      <h3>媒体</h3>
      <label class="row">一键下载图片 / 视频 / GIF <input type="checkbox" data-k="mediaDownload" ${settings.mediaDownload ? "checked" : ""}></label>
      <label class="row">多个媒体打成 ZIP <input type="checkbox" data-k="zipMulti" ${settings.zipMulti ? "checked" : ""}></label>
      <div class="hint">文件名，可用 {handle} {id} {name} {date} {n}</div>
      <input type="text" data-k="fileName" value="${escapeHtml(settings.fileName)}">
      <label class="row">多媒体网格视图 <input type="checkbox" data-k="mediaGrid" ${settings.mediaGrid ? "checked" : ""}></label>
      <label class="row">本地去掉年龄遮罩 <input type="checkbox" data-k="unmaskAge" ${settings.unmaskAge ? "checked" : ""}></label>
      <div class="hint">帖内年龄遮罩，以及个人资料敏感提示。只作用于当前页，不改 X 账号设置。</div>
      <h3>阅读</h3>
      <label class="row">整页聚光 <input type="checkbox" data-k="readingBand" ${settings.readingBand ? "checked" : ""}></label>
      <div class="hint">左侧栏「更多」上面进入。光带跟当前帖走，周围纸色降对比。点赞、进帖都还能用。浅色页和深色页各记一张纸。</div>
      <div class="hint">纸色 · 1–7 换纸，按住 Shift 点色点可叠最多三种</div>
      <div class="papers">${paperButtonsHtml()}</div>
      <div class="hint">长帖开窗高度。短帖跟帖走，不按这个裁。</div>
      <label class="slide"><input type="range" data-k="spotHeight" min="56" max="260" value="${settings.spotHeight}"><b data-hv>${settings.spotHeight}px</b></label>
      <label class="row">跟随鼠标 <input type="checkbox" data-k="spotFollow" ${settings.spotFollow ? "checked" : ""}></label>
      <button type="button" class="link" data-spot-reset>恢复聚光默认</button>
      <div class="hint">j/k 换帖，Shift 点帖对准，长帖 Shift 点句开窗，F 跟随，Esc 关。Alt+S 也能开。</div>
      </div>
      <div class="bar">
        <button type="button" class="act pri" data-save>保存</button>
        <button type="button" class="act ghost" data-close>关闭</button>
      </div>
    `;
    panel.querySelector("[data-save]").addEventListener("click", () => {
      const read = (key) => panel.querySelector(`[data-k="${key}"]`);
      saveSettings({
        hideAdult: read("hideAdult").checked,
        hideAds: read("hideAds").checked,
        skipFollowing: read("skipFollowing").checked,
        adultLevel: read("adultLevel").value,
        customWords: read("customWords").value,
        whitelist: read("whitelist").value,
        mediaDownload: read("mediaDownload").checked,
        zipMulti: read("zipMulti").checked,
        fileName: read("fileName").value,
        mediaGrid: read("mediaGrid").checked,
        unmaskAge: read("unmaskAge").checked,
        readingBand: read("readingBand").checked,
        spotHeight: read("spotHeight").value,
        spotFollow: read("spotFollow").checked,
        spotPaperLight: settings.spotPaperLight,
        spotPaperDark: settings.spotPaperDark,
        spotMix: settings.spotMix,
      });
      if (spot.root) spot.bandH = settings.spotHeight;
      closeSettingsPanel();
      toast("设置已保存");
      if (!settings.readingBand) closeSpot();
      else paintSpot();
      injectAll();
    });
    panel.querySelectorAll("[data-paper]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        setSpotPaper(btn.dataset.paper, e.shiftKey);
      });
    });
    panel.querySelector('[data-k="spotHeight"]')?.addEventListener("input", (e) => {
      setSpotHeight(e.target.value);
    });
    panel.querySelector('[data-k="spotFollow"]')?.addEventListener("change", (e) => {
      setFollow(e.target.checked);
    });
    panel.querySelector("[data-spot-reset]")?.addEventListener("click", (e) => {
      e.preventDefault();
      resetSpotSettings();
    });
    panel.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeSettingsPanel));
    document.documentElement.appendChild(panel);
  }

  function boot() {
    loadSettings();
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
    document.addEventListener("keydown", (e) => {
      if (e.isComposing) return;
      const typing =
        /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName || "") ||
        document.activeElement?.isContentEditable;
      if (typing || e.metaKey || e.ctrlKey) return;
      if (e.altKey && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
        toggleSpot();
      }
    });
    if (typeof GM_registerMenuCommand === "function") {
      GM_registerMenuCommand("设置", openSettingsPanel);
      GM_registerMenuCommand("聚光", toggleSpot);
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
  if (preview) {
    window.X2IMG = {
      generateCard,
      parseTweet,
      sampleTweet,
      renderCard,
      tweetPermalink,
      makeQr,
      injectAll,
      renderCanvas,
      hydrateTweet,
      completeTweet,
      loadSettings,
      saveSettings,
      scoreAdult,
      isAdArticle,
      collectDownloadMedia,
      expandFileName,
      zipStore,
      applyTimelineExtras,
      openSettingsPanel,
      dismissSensitiveProfileGate,
      openSpot,
      closeSpot,
      toggleSpot,
    };
  }
})();
