/**
 * skylark-utils-dom - An Elegant HTML5 DOM utility Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,o){var s=o.define,n=o.require,t="function"==typeof s&&s.amd,e=!t&&"undefined"!=typeof exports;if(!t&&!s){var l={};s=o.define=function(r,o,s){"function"==typeof s?(l[r]={factory:s,deps:o.map(function(o){return function(r,o){if("."!==r[0])return r;var s=o.split("/"),n=r.split("/");s.pop();for(var t=0;t<n.length;t++)"."!=n[t]&&(".."==n[t]?s.pop():s.push(n[t]));return s.join("/")}(o,r)}),resolved:!1,exports:null},n(r)):l[r]={factory:null,resolved:!0,exports:s}},n=o.require=function(r){if(!l.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var s=l[r];if(!s.resolved){var t=[];s.deps.forEach(function(r){t.push(n(r))}),s.exports=s.factory.apply(o,t)||null,s.resolved=!0}return s.exports}}if(!s)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,o){r("skylark-utils-dom/skylark",["skylark-langx/skylark"],function(r){return r}),r("skylark-utils-dom/dom",["./skylark"],function(r){return r.dom=r.attach("dom",{})}),r("skylark-utils-dom/browser",["./dom","skylark-domx-browser"],function(r,o){"use strict";return r.browser=o}),r("skylark-utils-dom/css",["./dom","skylark-domx-css"],function(r,o){"use strict";return r.css=o}),r("skylark-utils-dom/datax",["./dom","skylark-domx-data"],function(r,o){return r.datax=o}),r("skylark-utils-dom/eventer",["./dom","skylark-domx-eventer"],function(r,o){return r.eventer=o}),r("skylark-utils-dom/finder",["./dom","skylark-domx-finder"],function(r,o){return r.finder=o}),r("skylark-utils-dom/fx",["./dom","skylark-domx-fx"],function(r,o){return r.fx=o}),r("skylark-utils-dom/geom",["./dom","skylark-domx-geom"],function(r,o){return r.geom=o}),r("skylark-utils-dom/images",["./dom","skylark-domx-images"],function(r,o){return r.images=o}),r("skylark-utils-dom/noder",["./dom","skylark-domx-noder"],function(r,o){return r.noder=o}),r("skylark-utils-dom/plugins",["./dom","skylark-domx-plugins"],function(r,o){"use strict";return r.plugins=o}),r("skylark-utils-dom/query",["./dom","skylark-domx-query"],function(r,o){return r.query=o}),r("skylark-utils-dom/scripter",["./dom","skylark-domx-scripter"],function(r,o){return r.scripter=o}),r("skylark-utils-dom/styler",["./dom","skylark-domx-styler"],function(r,o){return r.styler=o}),r("skylark-utils-dom/transforms",["./dom","skylark-domx-transforms"],function(r,o){return r.transforms=o}),r("skylark-utils-dom/langx",["skylark-langx/langx"],function(r){return r}),r("skylark-utils-dom/elmx",["./dom","skylark-domx-velm"],function(r,o){return r.elmx=o}),r("skylark-utils-dom/main",["./dom","./browser","./css","./datax","./eventer","./finder","./fx","./geom","./images","./noder","./plugins","./query","./scripter","./styler","./transforms","./langx","./elmx"],function(r){return r}),r("skylark-utils-dom",["skylark-utils-dom/main"],function(r){return r})}(s),!t){var u=n("skylark-langx/skylark");e?module.exports=u:o.skylarkjs=u}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-utils-dom.js.map
