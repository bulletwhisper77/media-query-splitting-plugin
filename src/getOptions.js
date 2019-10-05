"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}var getPrefetchOption=function(a){var b=a.prefetch,c=a.mediaKeys,d=Array.isArray(b)?b:[b],e=d.filter(function(a){return!c.includes(a)});return e.length?(console.error("\n      Wrong prefetch values passed to \"prefetch\" parameter: ".concat(e.join(", "),"\n      Allowed values: ").concat(c.join(", "),"\n    ")),[]):d},getMediaOptions=function(a){var b={},c=Object.keys(a);return c.forEach(function(d){var e=a[d];"common"===d?console.error("\n        Wrong media key \"common\", this key is used for styles without media query or with unmatched query\n      "):"string"==typeof e?b[d]={query:e,exact:!1}:"object"===_typeof(e)&&e.query?(b[d]={},e.query instanceof RegExp||"string"==typeof e.query?b[d].query=e.query:console.error("\n          Wrong mediaQuery value \"".concat(JSON.stringify(e),"\" passed to config for media \"").concat(d,"\",\n          ").concat(e.query," is not a String or RegExp\n        ")),b[d]={exact:e.query instanceof RegExp||!1!==e.exact,prefetch:getPrefetchOption({prefetch:e.prefetch,mediaKeys:c})}):console.error("\n        Wrong mediaQuery value \"".concat(JSON.stringify(e),"\" passed to config for media \"").concat(d,"\",\n        allowed types: String, RegExp or Object with params: query, exact and prefetch\n      "))}),b},getOptions=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.media,c=void 0===b?{}:b,d=a.units,e=void 0===d?"px":d,f=a.minify,g=!(void 0!==f)||f,h=a.splitTablet,i=!0;if(i)return{isOldConfig:i,units:e,minify:g,media:{mobileEnd:c.mobileEnd||568,tabletPortraitStart:c.mobileEnd?c.mobileEnd+1:569,tabletPortraitEnd:c.tabletPortraitEnd||768,tabletLandscapeStart:c.tabletPortraitEnd?c.tabletPortraitEnd+1:769,tabletLandscapeEnd:c.tabletLandscapeEnd||1024,desktopStart:c.tabletLandscapeEnd?c.tabletLandscapeEnd+1:1025},splitTablet:!1!==h};return{isOldConfig:i,minify:g,media:getMediaOptions(c||{mobile:"(max-width: 568px)",tabletPortrait:"(min-width: 569px) and (max-width: 768px)",tabletLandscape:"(min-width: 769px) and (max-width: 1024px)",desktop:"(min-width: 1025px)"})}},_default=getOptions;exports.default=_default;