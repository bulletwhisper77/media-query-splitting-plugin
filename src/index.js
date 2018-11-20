"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var splitByMediaQuery=require("./splitByMediaQuery");module.exports=function(){function a(b){_classCallCheck(this,a);var c=b||{},d=c.media,e=void 0===d?{}:d,f=c.splitTablet;this.options={media:{mobileEnd:e.mobileEnd||568,tabletPortraitStart:e.mobileEnd?e.mobileEnd+1:569,tabletPortraitEnd:e.tabletPortraitEnd||768,tabletLandscapeStart:e.tabletPortraitEnd?e.tabletPortraitEnd+1:769,tabletLandscapeEnd:e.tabletLandscapeEnd||1024,desktopStart:e.tabletLandscapeEnd?e.tabletLandscapeEnd+1:1025},splitTablet:!1!==f}}return _createClass(a,[{key:"apply",value:function(a){var b=this.options,c=b.media,d=b.splitTablet,e="media-query-splitting-plugin";a.hooks.thisCompilation.tap(e,function(a){a.mainTemplate.hooks.requireEnsure.tap(e,function(a){var b=/mini-css-extract-plugin CSS loading/.test(a);if(b){var e="\n            // matchMedia polyfill\n            window.matchMedia||(window.matchMedia=function(){\"use strict\";var e=window.styleMedia||window.media;if(!e){var t,d=document.createElement(\"style\"),i=document.getElementsByTagName(\"script\")[0];d.type=\"text/css\",d.id=\"matchmediajs-test\",i?i.parentNode.insertBefore(d,i):document.head.appendChild(d),t=\"getComputedStyle\"in window&&window.getComputedStyle(d,null)||d.currentStyle,e={matchMedium:function(e){var i=\"@media \"+e+\"{ #matchmediajs-test { width: 1px; } }\";return d.styleSheet?d.styleSheet.cssText=i:d.textContent=i,\"1px\"===t.width}}}return function(t){return{matches:e.matchMedium(t||\"all\"),media:t||\"all\"}}}());\n            \n            // Define current mediaType\n            var getMediaType = function() {\n              return {\n                isMobile: window.matchMedia('(max-width: ".concat(c.mobileEnd,"px)').matches,\n                isTabletPortrait: window.matchMedia('(min-width: ").concat(c.tabletPortraitStart,"px) and (max-width: ").concat(c.tabletPortraitEnd,"px)').matches,\n                isTabletLandscape: window.matchMedia('(min-width: ").concat(c.tabletLandscapeStart,"px) and (max-width: ").concat(c.tabletLandscapeEnd,"px)').matches,\n                isDesktop: window.matchMedia('(min-width: ").concat(c.desktopStart,"px)').matches,\n              }\n            };\n\n            var mediaType                = getMediaType();\n            var currentMediaType         = 'desktop';\n\n            if (mediaType.isMobile) {\n              currentMediaType           = 'mobile'\n            }\n            ").concat(d?"\n                else if (mediaType.isTabletPortrait) {\n                  currentMediaType       = 'tabletPortrait'\n                }\n                else if (mediaType.isTabletLandscape) {\n                  currentMediaType       = 'tabletLandscape'\n                }":"\n                else if (mediaType.isTabletPortrait || mediaType.isTabletLandscape) {\n                  currentMediaType       = 'tablet'\n                }\n              ","\n\n            var tryAppendNewMedia = function() {\n              var linkElements           = document.getElementsByTagName('link');\n              var chunkIds               = {};\n              \n              for (var i = 0; i < linkElements.length; i++) {\n                var chunkHref            = linkElements[i].href.replace(/.*\\//, '');\n                \n                if (/(mobile|tablet|desktop).*\\.css$/.test(chunkHref)) {\n                  var chunkId            = chunkHref.replace(/\\..*/, '');\n                  var chunkMediaType     = chunkHref.replace(chunkId + '.', '').replace(/\\..*/, '');\n                  var chunkHash          = chunkHref.replace(/\\.css$/, '').replace('' + chunkId + '.' + chunkMediaType + '.', '');\n                  var chunkHrefPrefix    = linkElements[i].href.replace('' + chunkId + '.' + chunkMediaType + '.' + chunkHash + '.css', '');\n  \n                  if (!chunkIds[chunkId]) {\n                    chunkIds[chunkId]    = {\n                      mediaTypes: [ chunkMediaType ],\n                      hash: chunkHash,\n                      prefix: chunkHrefPrefix,\n                    }\n                  }\n                  else {\n                    chunkIds[chunkId].mediaTypes.push(chunkMediaType);\n                  }\n                }\n              }\n\n              for (var i in chunkIds) {\n                if (chunkIds.hasOwnProperty(i)) {\n                  var isTablet           = /tablet/.test(currentMediaType);\n                  var hasTablet          = chunkIds[i].mediaTypes.indexOf('tablet') !== -1;\n                  var _hasCurrentMedia   = chunkIds[i].mediaTypes.indexOf(currentMediaType) !== -1;\n                  var hasCurrentMedia    = isTablet ? hasTablet || _hasCurrentMedia : _hasCurrentMedia;\n                  \n                  if (!hasCurrentMedia) {\n                    var fullhref         = '' + chunkIds[i].prefix + '' + i + '.' + currentMediaType + '.' + chunkIds[i].hash + '.css';\n                    var linkTag          = document.createElement('link');\n                    var header           = document.getElementsByTagName('head')[0];\n\n                    linkTag.rel          = 'stylesheet';\n                    linkTag.type         = 'text/css';\n                    linkTag.href         = fullhref;\n\n                    header.appendChild(linkTag);\n                  }\n                }\n              }\n            };\n\n            var resize = function() {\n              var newMediaType\n              var mediaType              = getMediaType();\n\n              if (mediaType.isMobile) {\n                newMediaType             = 'mobile'\n              }\n              ").concat(d?"\n                  else if (mediaType.isTabletPortrait) {\n                    newMediaType         = 'tabletPortrait'\n                  }\n                  else if (mediaType.isTabletLandscape) {\n                    newMediaType         = 'tabletLandscape'\n                  }":"else if (mediaType.isTabletPortrait || mediaType.isTabletLandscape) {\n                    newMediaType         = 'tablet'\n                  }","\n              else {\n                newMediaType             = 'desktop'\n              }\n\n              if (currentMediaType !== newMediaType) {\n                currentMediaType         = newMediaType;\n              }\n              \n              tryAppendNewMedia()\n            };\n\n            document.addEventListener('DOMContentLoaded', function() {\n              window.addEventListener('resize', resize);\n              resize();\n            });\n          "),f=/head\.appendChild\(linkTag\);(.|\n)*}\)\.then/;return a.replace("promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {","".concat(e).concat("promises.push(installedCssChunks[chunkId] = Promise.all([ 'common', currentMediaType ]\n            .map((mediaType) => new Promise(function(resolve, reject) {\n              \n              // Don't load tabletPortrait or tabletLandscape if there is tablet style\n              if (/tablet/.test(mediaType)) {\n                var linkElements         = document.getElementsByTagName('link');\n                var hasTabletStyle       = false;\n\n                for (var i = 0; i < linkElements.length; i++) {\n                  var chunkHref          = linkElements[i].href.replace(/.*\\//, '');\n                  var currentChunkRegExp = new RegExp('^' + chunkId + '\\\\' + '.tablet' + '\\\\' + '.') \n                  \n                  if (currentChunkRegExp.test(chunkHref)) {\n                    mediaType            = 'tablet';\n                    break;\n                  }\n                }\n              }\n          ")).replace("var href = \"\" + chunkId + \".\" + ","var href = \"\" + chunkId + (mediaType !== \"common\" ? \".\"  + mediaType : \"\") + \".\" +").replace(f,"head.appendChild(linkTag);resize();\n})\n)).then")}throw new Error("No chunk loading found! Use mini-css-extract-plugin v0.4.3 to handle this error")})}),a.plugin("emit",function(a,b){var e=Object.keys(a.assets).filter(function(a){return /\.css$/.test(a)});console.log("SRC",{asset:a.assets[e[0]]}),e.forEach(function(b){var e=a.assets[b],f=e.children&&e.children[0],g=(f||e)._value,h=splitByMediaQuery({cssFile:g,mediaOptions:c}),i=b.replace(/\.css$/,"").replace(/.*\./,""),j=b.replace(/\..*/,"");Object.keys(h).forEach(function(c){var e=h[c];if(d||!/tablet(Portrait|Landscape)/.test(c)){var f="common"===c?b:"".concat(j,".").concat(c,".").concat(i,".css");a.assets[f]={size:function(){return Buffer.byteLength(e,"utf8")},source:function(){return new Buffer(e)}}}})}),b()})}}]),a}();