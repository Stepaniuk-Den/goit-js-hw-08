!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,y=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var o,i,u,f,a,c,l=0,d=!1,s=!1,b=!0;if("function"!=typeof e)throw new TypeError(r);function j(t){var n=o,r=i;return o=i=void 0,l=t,f=e.apply(r,n)}function O(e){return l=e,a=setTimeout(T,t),d?j(e):f}function S(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function T(){var e=p();if(S(e))return h(e);a=setTimeout(T,function(e){var n=t-(e-c);return s?y(n,u-(e-l)):n}(e))}function h(e){return a=void 0,b&&o?j(e):(o=i=void 0,f)}function w(){var e=p(),n=S(e);if(o=arguments,i=this,c=e,n){if(void 0===a)return O(c);if(s)return a=setTimeout(T,t),j(c)}return void 0===a&&(a=setTimeout(T,t)),f}return t=g(t)||0,m(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(g(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=i=a=void 0},w.flush=function(){return void 0===a?f:h(p())},w}function m(e){var r=void 0===e?"undefined":t(n)(e);return!!e&&("object"==r||"function"==r)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(m(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=m(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var c=u.test(e);return c||f.test(e)?a(e.slice(2),c?2:8):i.test(e)?NaN:+e}var j=document.querySelector(".feedback-form"),O=j.querySelector("input"),S=j.querySelector("textarea"),T="feedback-form-state",h={};O.addEventListener("input",(function(e){h.email=e.currentTarget.value,localStorage.setItem(T,JSON.stringify(h))})),S.addEventListener("input",(function(e){h.message=e.currentTarget.value,localStorage.setItem(T,JSON.stringify(h))}))}();
//# sourceMappingURL=03-feedback.08e7eb36.js.map
