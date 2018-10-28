/**
 * skylark-utils-dom - An Elegant HTML5 DOM utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./langx","./browser","./styler"],function(e,t,n,r){function o(e,n){return t.isArrayLike(e)||(e=[e]),n&&(e=J.call(e,function(e){return e.cloneNode(!0)})),t.flatten(e)}function i(e,t){var n=e.nodeName&&e.nodeName.toLowerCase();return void 0!==t?n===t.toLowerCase():n}function a(e){e=e||document;var t;try{t=e.activeElement}catch(n){t=e.body}return t||(t=e.body),t.nodeName||(t=e.body),t}function d(e,t,n){var r=e,i=r.parentNode;if(i)for(var a=o(t,n),r=r.nextSibling,d=0;d<a.length;d++)r?i.insertBefore(a[d],r):i.appendChild(a[d]);return this}function c(e,t,n){for(var r=e,i=o(t,n),a=0;a<i.length;a++)r.appendChild(i[a]);return this}function l(e,t,n){var r=e,i=r.parentNode;if(i)for(var a=o(t,n),d=0;d<a.length;d++)i.insertBefore(a[d],r);return this}function u(e){return i(e,"iframe")?e.contentDocument:e.childNodes}function s(e,t,n){var r=document.createElement(e);if(t)for(var o in t)r.setAttribute(o,t[o]);return n&&c(n,r),r}function f(e){if(e=t.trim(e),R.test(e))return[s(RegExp.$1)];var n=z.test(e)&&RegExp.$1;n in _||(n="*");var r=_[n];return r.innerHTML=""+e,dom=K.call(r.childNodes),dom.forEach(function(e){r.removeChild(e)}),dom}function m(e,t){var n,r=this;return!P||1!==e.nodeType||t?e.cloneNode(t):t?void 0:(n=document.createElement(e.nodeName),each(r.getAttribs(e),function(t){r.setAttrib(n,t.nodeName,r.getAttrib(e,t.nodeName))}),n)}function h(e,t){return C(t,e)}function p(e){return document.createTextNode(e)}function v(){return document}function N(e){for(;e.hasChildNodes();){var t=e.firstChild;e.removeChild(t)}return this}function b(e){if(e===!1)n.exitFullScreen.apply(document);else{if(!e)return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;n.requestFullScreen.apply(e),Q=e}}function y(e,t){var n,r,o,i,a,d=e.nodeName.toLowerCase();return"area"===d?(n=e.parentNode,r=n.name,!(!e.href||!r||"map"!==n.nodeName.toLowerCase())&&(o=$("img[usemap='#"+r+"']"),o.length>0&&o.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(d)?(i=!e.disabled,i&&(a=$(e).closest("fieldset")[0],a&&(i=!a.disabled))):i="a"===d?e.href||t:t,i&&$(e).is(":visible")&&visible($(e)))}function g(e,n){if(void 0===n)return e.innerHTML;if(this.empty(e),n=n||"",t.isString(n)&&(n=n.replace(X,"<$1></$2>")),t.isString(n)||t.isNumber(n))e.innerHTML=n;else if(t.isArrayLike(n))for(var r=0;r<n.length;r++)e.appendChild(n[r]);else e.appendChild(n)}function C(e,t,n){if(n)return e.parentNode===t;if(document.documentElement.contains)return t.contains(e);for(;e;){if(t===e)return!0;e=e.parentNode}return!1}function w(e){return null!=e&&e.nodeType==e.DOCUMENT_NODE}function E(e){return e?9==e.nodeType?e:e.ownerDocument:document}function x(e){var t=E(e);return t.defaultView||t.parentWindow}function T(e,t,n){for(var r=e,i=r.firstChild,a=o(t,n),d=0;d<a.length;d++)i?r.insertBefore(a[d],i):r.appendChild(a[d]);return this}function A(e){for(var t=e.offsetParent||document.body;t&&!G.test(t.nodeName)&&"static"==r.css(t,"position");)t=t.offsetParent;return t}function L(e,t){var n=s("div",t);return r.css(n,{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:2147483647,opacity:.7}),e.appendChild(n),n}function S(e){if(e&&e.parentNode)try{e.parentNode.removeChild(e)}catch(t){console.warn("The node is already removed",t)}return this}function k(e,n){t.isArrayLike(n)||(n=[n]);for(var r=0;r<n.length;r++)e.removeChild(n[r]);return this}function D(e,t){return t.parentNode.replaceChild(e,t),this}function F(e,t){t=t||{};var n,r=this,o=t.text,i=t.style,a=t.time,d=t.callback,c=this.createElement("div",{className:t.className||"throbber",style:i}),l=(L(c,{className:"overlay fade"}),this.createElement("div",{className:"throb"})),u=this.createTextNode(o||""),s=function(){n&&(clearTimeout(n),n=null),c&&(r.remove(c),c=null)},f=function(e){e&&e.text&&c&&(u.nodeValue=e.text)};l.appendChild(u),c.appendChild(l),e.appendChild(c);var m=function(){s(),d&&d()};return a&&(n=setTimeout(m,a)),{remove:s,update:f}}function B(e,t){t(e);for(var n=0,r=e.childNodes.length;n<r;n++)B(e.childNodes[n],t);return this}function M(e){for(var t=e.firstChild,n=e.children.length-1;n>0;n--)if(n>0){var r=e.children[n];e.insertBefore(r,t)}}function W(e,n){t.isString(n)&&(n=this.createFragment(n).firstChild),e.parentNode.insertBefore(n,e),n.appendChild(e)}function H(e,t){var n=K.call(e.childNodes);e.appendChild(t);for(var r=0;r<n.length;r++)t.appendChild(n[r]);return this}function I(e){var t=e.parentNode;if(t){if(this.isDoc(t.parentNode))return;t.parentNode.insertBefore(e,t)}}function O(){return O}var P=!!navigator.userAgent.match(/Trident/g)||!!navigator.userAgent.match(/MSIE/g),z=/^\s*<(\w+|!)[^>]*>/,R=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,V=document.createElement("div"),j=document.createElement("table"),q=document.createElement("tbody"),U=document.createElement("tr"),_={tr:q,tbody:j,thead:j,tfoot:j,td:U,th:U,"*":V},G=/^(?:body|html)$/i,J=Array.prototype.map,K=Array.prototype.slice,Q=null,X=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;return t.mixin(O,{active:a,blur:function(e){e.blur()},body:function(){return document.body},clone:m,contents:u,createElement:s,createFragment:f,contains:h,createTextNode:p,doc:v,empty:N,fullScreen:b,focusable:y,html:g,isChildOf:C,isDoc:w,isWindow:t.isWindow,offsetParent:A,ownerDoc:E,ownerWindow:x,after:d,before:l,prepend:T,append:c,remove:S,removeChild:k,replace:D,throb:F,traverse:B,reverse:M,wrapper:W,wrapperInner:H,unwrap:I}),e.noder=O});
//# sourceMappingURL=sourcemaps/noder.js.map
