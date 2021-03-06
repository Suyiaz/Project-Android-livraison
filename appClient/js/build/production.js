/*
 AngularJS v1.7.1
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(E){'use strict';function re(a){if(H(a))u(a.objectMaxDepth)&&(Wb.objectMaxDepth=Xb(a.objectMaxDepth)?a.objectMaxDepth:NaN),u(a.urlErrorParamsEnabled)&&Ia(a.urlErrorParamsEnabled)&&(Wb.urlErrorParamsEnabled=a.urlErrorParamsEnabled);else return Wb}function Xb(a){return Z(a)&&0<a}function M(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.7.1/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,
f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function la(a){if(null==a||Ya(a))return!1;if(G(a)||z(a)||A&&a instanceof A)return!0;var b="length"in Object(a)&&a.length;return Z(b)&&(0<=b&&b-1 in a||"function"===typeof a.item)}function p(a,b,d){var c,e;if(a)if(B(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(G(a)||
la(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==p)a.forEach(b,d,a);else if(Pc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)qa.call(a,c)&&b.call(d,a[c],c,a);return a}function Qc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Yb(a){return function(b,d){a(d,b)}}function se(){return++rb}
function Zb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(H(g)||B(g))for(var k=Object.keys(g),h=0,l=k.length;h<l;h++){var m=k[h],q=g[m];d&&H(q)?da(q)?a[m]=new Date(q.valueOf()):Za(q)?a[m]=new RegExp(q):q.nodeName?a[m]=q.cloneNode(!0):$b(q)?a[m]=q.clone():(H(a[m])||(a[m]=G(q)?[]:{}),Zb(a[m],[q],!0)):a[m]=q}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function Q(a){return Zb(a,wa.call(arguments,1),!1)}function te(a){return Zb(a,wa.call(arguments,1),!0)}function ea(a){return parseInt(a,
10)}function ac(a,b){return Q(Object.create(a),b)}function w(){}function Oa(a){return a}function ma(a){return function(){return a}}function bc(a){return B(a.toString)&&a.toString!==fa}function y(a){return"undefined"===typeof a}function u(a){return"undefined"!==typeof a}function H(a){return null!==a&&"object"===typeof a}function Pc(a){return null!==a&&"object"===typeof a&&!Rc(a)}function z(a){return"string"===typeof a}function Z(a){return"number"===typeof a}function da(a){return"[object Date]"===fa.call(a)}
function G(a){return Array.isArray(a)||a instanceof Array}function cc(a){switch(fa.call(a)){case "[object Error]":return!0;case "[object Exception]":return!0;case "[object DOMException]":return!0;default:return a instanceof Error}}function B(a){return"function"===typeof a}function Za(a){return"[object RegExp]"===fa.call(a)}function Ya(a){return a&&a.window===a}function $a(a){return a&&a.$evalAsync&&a.$watch}function Ia(a){return"boolean"===typeof a}function ue(a){return a&&Z(a.length)&&ve.test(fa.call(a))}
function $b(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function we(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ra(a){return J(a.nodeName||a[0]&&a[0].nodeName)}function ab(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Ea(a,b,d){function c(a,b,d){d--;if(0>d)return"...";var c=b.$$hashKey,f;if(G(a)){f=0;for(var g=a.length;f<g;f++)b.push(e(a[f],d))}else if(Pc(a))for(f in a)b[f]=e(a[f],d);else if(a&&"function"===typeof a.hasOwnProperty)for(f in a)a.hasOwnProperty(f)&&
(b[f]=e(a[f],d));else for(f in a)qa.call(a,f)&&(b[f]=e(a[f],d));c?b.$$hashKey=c:delete b.$$hashKey;return b}function e(a,b){if(!H(a))return a;var d=g.indexOf(a);if(-1!==d)return k[d];if(Ya(a)||$a(a))throw xa("cpws");var d=!1,e=f(a);void 0===e&&(e=G(a)?[]:Object.create(Rc(a)),d=!0);g.push(a);k.push(e);return d?c(a,e,b):e}function f(a){switch(fa.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(B(a.cloneNode))return a.cloneNode(!0)}
var g=[],k=[];d=Xb(d)?d:NaN;if(b){if(ue(b)||"[object ArrayBuffer]"===fa.call(b))throw xa("cpta");if(a===b)throw xa("cpi");G(b)?b.length=0:p(b,function(a,d){"$$hashKey"!==d&&delete b[d]});g.push(a);k.push(b);return c(a,b,d)}return e(a,d)}function dc(a,b){return a===b||a!==a&&b!==b}function sa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(G(a)){if(!G(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!sa(a[c],
b[c]))return!1;return!0}}else{if(da(a))return da(b)?dc(a.getTime(),b.getTime()):!1;if(Za(a))return Za(b)?a.toString()===b.toString():!1;if($a(a)||$a(b)||Ya(a)||Ya(b)||G(b)||da(b)||Za(b))return!1;d=U();for(c in a)if("$"!==c.charAt(0)&&!B(a[c])){if(!sa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&u(b[c])&&!B(b[c]))return!1;return!0}return!1}function bb(a,b,d){return a.concat(wa.call(b,d))}function cb(a,b){var d=2<arguments.length?wa.call(arguments,2):[];return!B(b)||b instanceof
RegExp?b:d.length?function(){return arguments.length?b.apply(a,bb(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Sc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Ya(b)?d="$WINDOW":b&&E.document===b?d="$DOCUMENT":$a(b)&&(d="$SCOPE");return d}function db(a,b){if(!y(a))return Z(b)||(b=b?2:null),JSON.stringify(a,Sc,b)}function Tc(a){return z(a)?JSON.parse(a):a}function ec(a,b){a=a.replace(xe,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+
a)/6E4;return $(d)?b:d}function Uc(a,b){a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function fc(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=ec(b,c);return Uc(a,d*(b-c))}function ya(a){a=A(a).clone().empty();var b=A("<div></div>").append(a).html();try{return a[0].nodeType===Ja?J(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+J(b)})}catch(d){return J(b)}}function Vc(a){try{return decodeURIComponent(a)}catch(b){}}function gc(a){var b={};p((a||"").split("&"),
function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Vc(e),u(e)&&(f=u(f)?Vc(f):!0,qa.call(b,e)?G(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function hc(a){var b=[];p(a,function(a,c){G(a)?p(a,function(a){b.push(ga(c,!0)+(!0===a?"":"="+ga(a,!0)))}):b.push(ga(c,!0)+(!0===a?"":"="+ga(a,!0)))});return b.length?b.join("&"):""}function eb(a){return ga(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ga(a,
b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ye(a,b){var d,c,e=Ka.length;for(c=0;c<e;++c)if(d=Ka[c]+b,z(d=a.getAttribute(d)))return d;return null}function ze(a,b){var d,c,e={};p(Ka,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});p(Ka,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});
d&&(Ae?(e.strictDi=null!==ye(d,"strict-di"),b(d,c?[c]:[],e)):E.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Wc(a,b,d){H(d)||(d={});d=Q({strictDi:!1},d);var c=function(){a=A(a);if(a.injector()){var c=a[0]===E.document?"document":ya(a);throw xa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",
function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=fb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;E&&e.test(E.name)&&(d.debugInfoEnabled=!0,E.name=E.name.replace(e,""));if(E&&!f.test(E.name))return c();E.name=E.name.replace(f,"");Y.resumeBootstrap=function(a){p(a,function(a){b.push(a)});return c()};B(Y.resumeDeferredBootstrap)&&
Y.resumeDeferredBootstrap()}function Be(){E.name="NG_ENABLE_DEBUG_INFO!"+E.name;E.location.reload()}function Ce(a){a=Y.element(a).injector();if(!a)throw xa("test");return a.get("$$testability")}function Xc(a,b){b=b||"_";return a.replace(De,function(a,c){return(c?b:"")+a.toLowerCase()})}function Ee(){var a;if(!Yc){var b=sb();(tb=y(b)?E.jQuery:b?E[b]:void 0)&&tb.fn.on?(A=tb,Q(tb.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData})):
A=W;a=A.cleanData;A.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=A._data(f).events)&&c.$destroy&&A(f).triggerHandler("$destroy");a(b)};Y.element=A;Yc=!0}}function gb(a,b,d){if(!a)throw xa("areq",b||"?",d||"required");return a}function ub(a,b,d){d&&G(a)&&(a=a[a.length-1]);gb(B(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function La(a,b){if("hasOwnProperty"===a)throw xa("badname",b);}function vb(a){for(var b=a[0],d=a[a.length-1],
c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=A(wa.call(a,0,e))),c.push(b);return c||a}function U(){return Object.create(null)}function ic(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!bc(a)||G(a)||da(a)?db(a):a.toString()}return a}function Fe(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=M("$injector"),c=M("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||M;return b(a,"module",function(){var a={};return function(f,g,k){var h={};
if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,f){f||(f=e);return function(){f[d||"push"]([b,c,arguments]);return v}}function b(a,c,d){d||(d=e);return function(b,e){e&&B(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return v}}if(!g)throw d("nomod",f);var e=[],n=[],s=[],D=a("$injector","invoke","push",n),v={_invokeQueue:e,_configBlocks:n,_runBlocks:s,info:function(a){if(u(a)){if(!H(a))throw c("aobj","value");h=a;return this}return h},
requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",n),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:D,run:function(a){s.push(a);return this}};k&&D(k);return v})}})}
function na(a,b){if(G(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(H(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function Ge(a,b){var d=[];Xb(b)&&(a=Y.copy(a,null,b));return JSON.stringify(a,function(a,b){b=Sc(a,b);if(H(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function He(a){Q(a,{errorHandlingConfig:re,bootstrap:Wc,copy:Ea,extend:Q,merge:te,equals:sa,element:A,forEach:p,injector:fb,noop:w,bind:cb,toJson:db,fromJson:Tc,identity:Oa,
isUndefined:y,isDefined:u,isString:z,isFunction:B,isObject:H,isNumber:Z,isElement:$b,isArray:G,version:Ie,isDate:da,callbacks:{$$counter:0},getTestability:Ce,reloadWithDebugInfo:Be,$$minErr:M,$$csp:Fa,$$encodeUriSegment:eb,$$encodeUriQuery:ga,$$lowercase:J,$$stringify:ic,$$uppercase:wb});jc=Fe(E);jc("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Je});a.provider("$compile",Zc).directive({a:Ke,input:$c,textarea:$c,form:Le,script:Me,select:Ne,option:Oe,ngBind:Pe,ngBindHtml:Qe,ngBindTemplate:Re,
ngClass:Se,ngClassEven:Te,ngClassOdd:Ue,ngCloak:Ve,ngController:We,ngForm:Xe,ngHide:Ye,ngIf:Ze,ngInclude:$e,ngInit:af,ngNonBindable:bf,ngPluralize:cf,ngRef:df,ngRepeat:ef,ngShow:ff,ngStyle:gf,ngSwitch:hf,ngSwitchWhen:jf,ngSwitchDefault:kf,ngOptions:lf,ngTransclude:mf,ngModel:nf,ngList:of,ngChange:pf,pattern:ad,ngPattern:ad,required:bd,ngRequired:bd,minlength:cd,ngMinlength:cd,maxlength:dd,ngMaxlength:dd,ngValue:qf,ngModelOptions:rf}).directive({ngInclude:sf}).directive(xb).directive(ed);a.provider({$anchorScroll:tf,
$animate:uf,$animateCss:vf,$$animateJs:wf,$$animateQueue:xf,$$AnimateRunner:yf,$$animateAsyncRun:zf,$browser:Af,$cacheFactory:Bf,$controller:Cf,$document:Df,$$isDocumentHidden:Ef,$exceptionHandler:Ff,$filter:fd,$$forceReflow:Gf,$interpolate:Hf,$interval:If,$http:Jf,$httpParamSerializer:Kf,$httpParamSerializerJQLike:Lf,$httpBackend:Mf,$xhrFactory:Nf,$jsonpCallbacks:Of,$location:Pf,$log:Qf,$parse:Rf,$rootScope:Sf,$q:Tf,$$q:Uf,$sce:Vf,$sceDelegate:Wf,$sniffer:Xf,$templateCache:Yf,$templateRequest:Zf,
$$testability:$f,$timeout:ag,$window:bg,$$rAF:cg,$$jqLite:dg,$$Map:eg,$$cookieReader:fg})}]).info({angularVersion:"1.7.1"})}function yb(a,b){return b.toUpperCase()}function zb(a){return a.replace(gg,yb)}function kc(a){a=a.nodeType;return 1===a||!a||9===a}function gd(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(lc.test(a)){d=e.appendChild(b.createElement("div"));c=(hg.exec(a)||["",""])[1].toLowerCase();c=oa[c]||oa._default;d.innerHTML=c[1]+a.replace(ig,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;
f=bb(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";p(f,function(a){e.appendChild(a)});return e}function W(a){if(a instanceof W)return a;var b;z(a)&&(a=R(a),b=!0);if(!(this instanceof W)){if(b&&"<"!==a.charAt(0))throw mc("nosel");return new W(a)}if(b){b=E.document;var d;a=(d=jg.exec(a))?[b.createElement(d[1])]:(d=gd(a,b))?d.childNodes:[];nc(this,a)}else B(a)?hd(a):nc(this,a)}function oc(a){return a.cloneNode(!0)}function Ab(a,b){!b&&
kc(a)&&A.cleanData([a]);a.querySelectorAll&&A.cleanData(a.querySelectorAll("*"))}function id(a){for(var b in a)return!1;return!0}function jd(a){var b=a.ng339,d=b&&Qa[b],c=d&&d.events,d=d&&d.data;d&&!id(d)||c&&!id(c)||(delete Qa[b],a.ng339=void 0)}function kd(a,b,d,c){if(u(c))throw mc("offargs");var e=(c=Bb(a))&&c.events,f=c&&c.handle;if(f){if(b){var g=function(b){var c=e[b];u(d)&&ab(c||[],d);u(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};p(b.split(" "),function(a){g(a);Cb[a]&&g(Cb[a])})}else for(b in e)"$destroy"!==
b&&a.removeEventListener(b,f),delete e[b];jd(a)}}function pc(a,b){var d=a.ng339;if(d=d&&Qa[d])b?delete d.data[b]:d.data={},jd(a)}function Bb(a,b){var d=a.ng339,d=d&&Qa[d];b&&!d&&(a.ng339=d=++kg,d=Qa[d]={events:{},data:{},handle:void 0});return d}function qc(a,b,d){if(kc(a)){var c,e=u(d),f=!e&&b&&!H(b),g=!b;a=(a=Bb(a,!f))&&a.data;if(e)a[zb(b)]=d;else{if(g)return a;if(f)return a&&a[zb(b)];for(c in b)a[zb(c)]=b[c]}}}function Db(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").indexOf(" "+b+" "):!1}function Eb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;p(b.split(" "),function(a){a=R(a);c=c.replace(" "+a+" "," ")});c!==d&&a.setAttribute("class",R(c))}}function Fb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;p(b.split(" "),function(a){a=R(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});c!==d&&a.setAttribute("class",R(c))}}function nc(a,b){if(b)if(b.nodeType)a[a.length++]=
b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function ld(a,b){return Gb(a,"$"+(b||"ngController")+"Controller")}function Gb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=G(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(u(d=A.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function md(a){for(Ab(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Hb(a,b){b||Ab(a);var d=a.parentNode;d&&d.removeChild(a)}
function lg(a,b){b=b||E;if("complete"===b.document.readyState)b.setTimeout(a);else A(b).on("load",a)}function hd(a){function b(){E.document.removeEventListener("DOMContentLoaded",b);E.removeEventListener("load",b);a()}"complete"===E.document.readyState?E.setTimeout(a):(E.document.addEventListener("DOMContentLoaded",b),E.addEventListener("load",b))}function nd(a,b){var d=Ib[b.toLowerCase()];return d&&od[ra(a)]&&d}function mg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};
var f=b[d||c.type],g=f?f.length:0;if(g){if(y(c.immediatePropagationStopped)){var k=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var h=f.specialHandlerWrapper||ng;1<g&&(f=na(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||h(a,c,f[l])}};d.elem=a;return d}function ng(a,b,d){d.call(a,b)}function og(a,b,
d){var c=b.relatedTarget;c&&(c===a||pg.call(a,c))||d.call(a,b)}function dg(){this.$get=function(){return Q(W,{hasClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Fb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Eb(a,b)}})}}function Ra(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||se)():d+":"+a}function pd(){this._keys=[];this._values=
[];this._lastKey=NaN;this._lastIndex=-1}function qd(a){a=Function.prototype.toString.call(a).replace(qg,"");return a.match(rg)||a.match(sg)}function tg(a){return(a=qd(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function fb(a,b){function d(a){return function(b,c){if(H(b))p(b,Yb(a));else return a(b,c)}}function c(a,b){La(a,"service");if(B(b)||G(b))b=n.instantiate(b);if(!b.$get)throw Ga("pget",a);return q[a+"Provider"]=b}function e(a,b){return function(){var c=v.invoke(b,this);if(y(c))throw Ga("undef",
a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){gb(y(a)||G(a),"modulesToLoad","not an array");var b=[],c;p(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=n.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.set(a,!0);try{z(a)?(c=jc(a),v.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):B(a)?b.push(n.invoke(a)):G(a)?b.push(n.invoke(a)):ub(a,"module")}catch(e){throw G(a)&&(a=a[a.length-1]),e.message&&
e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ga("modulerr",a,e.stack||e.message||e);}}});return b}function k(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===h)throw Ga("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=h,a[b]=c(b,e),a[b]}catch(f){throw a[b]===h&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=fb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ga("itkn",l);g.push(c&&c.hasOwnProperty(l)?
c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);G(a)&&(a=a[a.length-1]);return a.apply(b,c)},instantiate:function(a,b,c){var d=G(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:fb.$$annotate,has:function(b){return q.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var h={},l=[],m=new Jb,q={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",
function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ma(b),!1)}),constant:d(function(a,b){La(a,"constant");q[a]=b;s[a]=b}),decorator:function(a,b){var c=n.get(a+"Provider"),d=c.$get;c.$get=function(){var a=v.invoke(d,c);return v.invoke(b,null,{$delegate:a})}}}},n=q.$injector=k(q,function(a,b){Y.isString(b)&&l.push(b);throw Ga("unpr",l.join(" <- "));}),s={},D=k(s,function(a,b){var c=n.get(a+"Provider",b);return v.invoke(c.$get,c,void 0,a)}),v=D;q.$injectorProvider={$get:ma(D)};
v.modules=n.modules=U();var t=g(a),v=D.get("$injector");v.strictDi=b;p(t,function(a){a&&v.invoke(a)});v.loadNewModules=function(a){p(g(a),function(a){a&&v.invoke(a)})};return v}function tf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ra(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;B(c)?c=c():$b(c)?(c=c[0],c="fixed"!==
b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Z(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=z(a)?a:Z(a)?a.toString():d.hash();var b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||lg(function(){c.$evalAsync(g)})});return g}]}function ib(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;
G(a)&&(a=a.join(" "));G(b)&&(b=b.join(" "));return a+" "+b}function ug(a){z(a)&&(a=a.split(" "));var b=U();p(a,function(a){a.length&&(b[a]=!0)});return b}function za(a){return H(a)?a:{}}function vg(a,b,d,c){function e(a){try{a.apply(null,wa.call(arguments,1))}finally{if(D--,0===D)for(;v.length;)try{v.pop()()}catch(b){d.error(b)}}}function f(){C=null;k()}function g(){t=F();t=y(t)?null:t;sa(t,hb)&&(t=hb);P=hb=t}function k(){var a=P;g();if(K!==h.url()||a!==t)K=h.url(),P=t,p(I,function(a){a(h.url(),t)})}
var h=this,l=a.location,m=a.history,q=a.setTimeout,n=a.clearTimeout,s={};h.isMock=!1;var D=0,v=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){D++};h.notifyWhenNoOutstandingRequests=function(a){0===D?a():v.push(a)};var t,P,K=l.href,ja=b.find("base"),C=null,F=c.history?function(){try{return m.state}catch(a){}}:w;g();h.url=function(b,d,e){y(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=P===e;if(K===b&&(!c.history||f))return h;var k=
K&&aa(K)===aa(b);K=b;P=e;!c.history||k&&f?(k||(C=b),d?l.replace(b):k?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(C=b)):(m[d?"replaceState":"pushState"](e,"",b),g());C&&(C=b);return h}return C||l.href};h.state=function(){return t};var I=[],ka=!1,hb=null;h.onUrlChange=function(b){if(!ka){if(c.history)A(a).on("popstate",f);A(a).on("hashchange",f);ka=!0}I.push(b);return b};h.$$applicationDestroyed=function(){A(a).off("hashchange popstate",f)};h.$$checkUrlChange=k;h.baseHref=
function(){var a=ja.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};h.defer=function(a,b){var c;D++;c=q(function(){delete s[c];e(a)},b||0);s[c]=!0;return c};h.defer.cancel=function(a){return s[a]?(delete s[a],n(a),e(w),!0):!1}}function Af(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new vg(a,c,b,d)}]}function Bf(){this.$get=function(){function a(a,c){function e(a){a!==q&&(n?n===a&&(n=a.n):n=a,f(a.n,a.p),f(a,q),q=a,q.n=null)}function f(a,b){a!==b&&(a&&
(a.p=b),b&&(b.n=a))}if(a in b)throw M("$cacheFactory")("iid",a);var g=0,k=Q({},c,{id:a}),h=U(),l=c&&c.capacity||Number.MAX_VALUE,m=U(),q=null,n=null;return b[a]={put:function(a,b){if(!y(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in h||g++;h[a]=b;g>l&&this.remove(n.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===q&&(q=b.p);b===n&&(n=b.n);f(b.n,b.p);delete m[a]}a in
h&&(delete h[a],g--)},removeAll:function(){h=U();g=0;m=U();q=n=null},destroy:function(){m=k=h=null;delete b[a]},info:function(){return Q({},k,{size:g})}}}var b={};a.info=function(){var a={};p(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Yf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Zc(a,b){function d(a,b,c){var d=/^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,e=U();p(a,function(a,f){a=a.trim();if(a in q)e[f]=q[a];else{var g=a.match(d);
if(!g)throw ba("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(q[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==J(b))throw ba("baddir",a);if(a!==a.trim())throw ba("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!G(b)&&H(b)&&p(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,
k=/(([\w-]+)(?::([^;]+))?;?)/,h=we("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,q=U();this.directive=function K(b,d){gb(b,"name");La(b,"directive");z(b)?(c(b),gb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];p(f[b],function(f,g){try{var h=a.invoke(f);B(h)?h={compile:ma(h)}:!h.compile&&h.link&&(h.compile=ma(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=
e(h);var k=h,l=h.restrict;if(l&&(!z(l)||!/[EACM]/.test(l)))throw ba("badrestrict",l,b);k.restrict=l||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):p(b,Yb(K));return this};this.component=function ja(a,b){function c(a){function e(b){return B(b)||G(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:wg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),
transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};p(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}if(!z(a))return p(a,Yb(cb(this,ja))),this;var d=b.controller||function(){};p(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,B(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return u(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(a){return u(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var n=!0;this.debugInfoEnabled=function(a){return u(a)?(n=a,this):n};var s=!1;this.strictComponentBindingsEnabled=function(a){return u(a)?(s=a,this):s};var D=10;this.onChangesTtl=function(a){return arguments.length?(D=a,this):D};var v=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(v=a,this):v};var t=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(t=a,this):
t};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate",function(a,b,c,e,q,hb,x,S,O){function L(){try{if(!--za)throw aa=void 0,ba("infchng",D);x.$apply(function(){for(var a=0,b=aa.length;a<b;++a)try{aa[a]()}catch(d){c(d)}aa=void 0})}finally{za++}}function r(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function ha(a,b,c){xa.innerHTML="<span "+b+">";
b=xa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function u(a,b){try{a.addClass(b)}catch(c){}}function N(a,b,c,d,e){a instanceof A||(a=A(a));var f=Ma(a,b,a,c,d,e);N.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw ba("multilink");gb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=
d&&d[0])?"foreignobject"!==ra(d)&&fa.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?A(ga(g,A("<div></div>").append(a).html())):c?Pa.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);N.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Ma(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,q,n,F;if(I)for(F=Array(c.length),m=0;m<h.length;m+=3)f=h[m],F[f]=c[f];else F=c;m=0;for(q=h.length;m<q;)k=F[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),N.$$addScopeInfo(A(k),
l)):l=a,n=c.transcludeOnThisElement?Aa(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?Aa(a,b):null,c(f,l,k,d,n)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k=G(a)||a instanceof A,l,m,q,n,I,F=0;F<a.length;F++){l=new r;11===Ha&&Na(a,F,k);m=sc(a[F],[],l,0===F?d:void 0,e);(f=m.length?W(m,a[F],l,b,c,null,[],[],f):null)&&f.scope&&N.$$addScopeClass(l.$$element);l=f&&f.terminal||!(q=a[F].childNodes)||!q.length?null:Ma(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||
l)h.push(F,f,l),n=!0,I=I||f;f=null}return n?g:null}function Na(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===Ja)for(;;){f=e?d.nextSibling:a[b+1];if(!f||f.nodeType!==Ja)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function Aa(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=U(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?
Aa(a,b.$$slots[f],c):null;return d}function sc(a,b,c,d,e){var f=c.$attr,g;switch(a.nodeType){case 1:g=ra(a);V(b,ua(g),"E",d,e);for(var h,l,m,q,n=a.attributes,I=0,F=n&&n.length;I<F;I++){var v=!1,t=!1;h=n[I];l=h.name;m=h.value;h=ua(l);(q=Ka.test(h))&&(l=l.replace(rd,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));(h=h.match(La))&&X(h[1])&&(v=l,t=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));h=ua(l.toLowerCase());f[h]=l;if(q||!c.hasOwnProperty(h))c[h]=m,nd(a,h)&&(c[h]=
!0);oa(a,b,m,h,q);V(b,h,"A",d,e,v,t)}"input"===g&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!Ga)break;f=a.className;H(f)&&(f=f.animVal);if(z(f)&&""!==f)for(;a=k.exec(f);)h=ua(a[2]),V(b,h,"C",d,e)&&(c[h]=R(a[3])),f=f.substr(a.index+a[0].length);break;case Ja:da(b,a.nodeValue);break;case 8:if(!Fa)break;jb(a,b,c,d,e)}b.sort($);return b}function jb(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=ua(f[1]);V(b,h,"M",d,e)&&(c[h]=R(f[2]))}}catch(k){}}function sd(a,b,
c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ba("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return A(d)}function M(a,b,c){return function(d,e,f,g,h){e=sd(e[0],b,c);return a(d,e,f,g,h)}}function tc(a,b,c,d,e,f){var g;return a?N(b,c,d,e,f):function(){g||(g=N(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function W(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=M(a,c,d));a.require=
x.require;a.directiveName=O;if(t===x||x.$$isolateScope)a=na(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=M(b,c,d));b.require=x.require;b.directiveName=O;if(t===x||x.$$isolateScope)b=na(b,{isolateScope:!0});k.push(b)}}function q(a,e,f,g,l){function m(a,b,c,d){var e;$a(a)||(d=c,c=b,b=a,a=void 0);ka&&(e=C);c||(c=ka?L.parent():L);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,ha);if(y(f))throw ba("noslot",d,ya(L));}else return l(a,b,e,c,ha)}var n,x,s,D,ja,C,O,L;b===f?(g=d,L=d.$$element):(L=A(f),g=new r(L,
d));ja=e;t?D=e.$new(!0):I&&(ja=e.$parent);l&&(O=m,O.$$boundTransclude=l,O.isSlotFilled=function(a){return!!l.$$slots[a]});t&&(N.$$addScopeInfo(L,D,!0,!(S&&(S===t||S===t.$$originalDirective))),N.$$addScopeClass(L,!0),D.$$isolateBindings=t.$$isolateBindings,x=va(e,g,D,D.$$isolateBindings,t),x.removeWatches&&D.$on("$destroy",x.removeWatches));if(v){C=U();for(n in v){x=v[n];s={$scope:x===t||x.$$isolateScope?D:e,$element:L,$attrs:g,$transclude:O};var rc=x.controller;"@"===rc&&(rc=g[n]);s=hb(rc,s,x.controllerAs);
L.data("$"+n+"Controller",s);x=va(ja,g,s,x.$$bindings.bindToController,x);C[n]={instance:s,bindingInfo:x}}p(v,function(a,b){var c=a.require;a.bindToController&&!G(c)&&H(c)&&Q(C[b].instance,T(b,c,L,C))});p(C,function(a){var b=a.instance;if(B(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(B(b.$onInit))try{b.$onInit()}catch(e){c(e)}B(b.$doCheck)&&(ja.$watch(function(){b.$doCheck()}),b.$doCheck());B(b.$onDestroy)&&ja.$on("$destroy",function(){b.$onDestroy()})})}n=0;for(x=
h.length;n<x;n++)s=h[n],pa(s,s.isolateScope?D:e,L,g,s.require&&T(s.directiveName,s.require,L,C),O);var ha=e;t&&(t.template||null===t.templateUrl)&&(ha=D);a&&a(ha,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)s=k[n],pa(s,s.isolateScope?D:e,L,g,s.require&&T(s.directiveName,s.require,L,C),O);p(C,function(a){a=a.instance;B(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,I=l.newScopeDirective,v=l.controllerDirectives,t=l.newIsolateScopeDirective,S=l.templateDirective,s=l.nonTlbTranscludeDirective,
ja=!1,C=!1,ka=l.hasElementTranscludeDirective,D=d.$$element=A(b),x,O,L,ha=e,u,ta=!1,Ma=!1,w,z=0,Na=a.length;z<Na;z++){x=a[z];var Aa=x.$$start,jb=x.$$end;Aa&&(D=sd(b,Aa,jb));L=void 0;if(n>x.priority)break;if(w=x.scope)x.templateUrl||(H(w)?(Y("new/isolated scope",t||I,x,D),t=x):Y("new/isolated scope",t,x,D)),I=I||x;O=x.name;if(!ta&&(x.replace&&(x.templateUrl||x.template)||x.transclude&&!x.$$tlb)){for(w=z+1;ta=a[w++];)if(ta.transclude&&!ta.$$tlb||ta.replace&&(ta.templateUrl||ta.template)){Ma=!0;break}ta=
!0}!x.templateUrl&&x.controller&&(v=v||U(),Y("'"+O+"' controller",v[O],x,D),v[O]=x);if(w=x.transclude)if(ja=!0,x.$$tlb||(Y("transclusion",s,x,D),s=x),"element"===w)ka=!0,n=x.priority,L=D,D=d.$$element=A(N.$$createComment(O,d[O])),b=D[0],ia(f,wa.call(L,0),b),ha=tc(Ma,L,e,n,g&&g.name,{nonTlbTranscludeDirective:s});else{var J=U();if(H(w)){L=E.document.createDocumentFragment();var V=U(),X=U();p(w,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;V[a]=b;J[b]=null;X[b]=c});p(D.contents(),function(a){var b=
V[ua(ra(a))];b?(X[b]=!0,J[b]=J[b]||E.document.createDocumentFragment(),J[b].appendChild(a)):L.appendChild(a)});p(X,function(a,b){if(!a)throw ba("reqslot",b);});for(var $ in J)J[$]&&(J[$]=tc(Ma,J[$].childNodes,e));L=L.childNodes}else L=A(oc(b)).contents();D.empty();ha=tc(Ma,L,e,void 0,void 0,{needsNewScope:x.$$isolateScope||x.$$newScope});ha.$$slots=J}if(x.template)if(C=!0,Y("template",S,x,D),S=x,w=B(x.template)?x.template(D,d):x.template,w=Da(w),x.replace){g=x;L=lc.test(w)?td(ga(x.templateNamespace,
R(w))):[];b=L[0];if(1!==L.length||1!==b.nodeType)throw ba("tplrt",O,"");ia(f,D,b);Na={$attr:{}};w=sc(b,[],Na);var da=a.splice(z+1,a.length-(z+1));(t||I)&&Z(w,t,I);a=a.concat(w).concat(da);ca(d,Na);Na=a.length}else D.html(w);if(x.templateUrl)C=!0,Y("template",S,x,D),S=x,x.replace&&(g=x),q=ea(a.splice(z,a.length-z),D,d,f,ja&&ha,h,k,{controllerDirectives:v,newScopeDirective:I!==x&&I,newIsolateScopeDirective:t,templateDirective:S,nonTlbTranscludeDirective:s}),Na=a.length;else if(x.compile)try{u=x.compile(D,
d,ha);var aa=x.$$originalDirective||x;B(u)?m(null,cb(aa,u),Aa,jb):u&&m(cb(aa,u.pre),cb(aa,u.post),Aa,jb)}catch(fa){c(fa,ya(D))}x.terminal&&(q.terminal=!0,n=Math.max(n,x.priority))}q.scope=I&&!0===I.scope;q.transcludeOnThisElement=ja;q.templateOnThisElement=C;q.transclude=ha;l.hasElementTranscludeDirective=ka;return q}function T(a,b,c,d){var e;if(z(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";
e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw ba("ctreq",b,a);}else if(G(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=T(a,b[g],c,d);else H(b)&&(e={},p(b,function(b,f){e[f]=T(a,b,c,d)}));return e||null}function Z(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=ac(a[d],{$$isolateScope:b,$$newScope:c})}function V(b,c,e,g,h,k,l){if(c===h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var q=0,n=h.length;q<n;q++)if(c=h[q],(y(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=ac(c,
{$$start:k,$$end:l}));if(!c.$$bindings){var I=m=c,F=c.name,x={isolateScope:null,bindToController:null};H(I.scope)&&(!0===I.bindToController?(x.bindToController=d(I.scope,F,!0),x.isolateScope={}):x.isolateScope=d(I.scope,F,!1));H(I.bindToController)&&(x.bindToController=d(I.bindToController,F,!0));if(x.bindToController&&!I.controller)throw ba("noctrl",F);m=m.$$bindings=x;H(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function X(b){if(f.hasOwnProperty(b))for(var c=a.get(b+
"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function ca(a,b){var c=b.$attr,d=a.$attr;p(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});p(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ea(a,b,d,f,g,h,k,l){var m=[],q,n,x=b[0],v=a.shift(),t=ac(v,{templateUrl:null,transclude:null,replace:null,$$originalDirective:v}),s=B(v.templateUrl)?
v.templateUrl(b,d):v.templateUrl,S=v.templateNamespace;b.empty();e(s).then(function(c){var e,I;c=Da(c);if(v.replace){c=lc.test(c)?td(ga(S,R(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw ba("tplrt",v.name,s);c={$attr:{}};ia(f,b,e);var F=sc(e,[],c);H(v.scope)&&Z(F,!0);a=F.concat(a);ca(d,c)}else e=x,b.html(c);a.unshift(t);q=W(a,e,d,g,b,v,h,k,l);p(f,function(a,c){a===e&&(f[c]=b[0])});for(n=Ma(b[0].childNodes,g);m.length;){c=m.shift();I=m.shift();var D=m.shift(),C=m.shift(),F=b[0];if(!c.$$destroyed){if(I!==
x){var ja=I.className;l.hasElementTranscludeDirective&&v.replace||(F=oc(e));ia(D,A(I),F);u(A(F),ja)}I=q.transcludeOnThisElement?Aa(c,q.transclude,C):C;q(n,c,F,f,I)}}m=null}).catch(function(a){cc(a)&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(q.transcludeOnThisElement&&(a=Aa(b,q.transclude,e)),q(n,b,c,d,a)))}}function $(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Y(a,b,c,d){function e(a){return a?" (module: "+
a+")":""}if(b)throw ba("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ya(d));}function da(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&N.$$addBindingClass(a);return function(a,c){var e=c.parent();b||N.$$addBindingClass(e);N.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ga(a,b){a=J(a||"html");switch(a){case "svg":case "math":var c=E.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+
a+">";return c.childNodes[0].childNodes;default:return b}}function ma(a,b){if("srcdoc"===b)return S.HTML;var c=ra(a);if("src"===b||"ngSrc"===b)return-1===["img","video","audio","source","track"].indexOf(c)?S.RESOURCE_URL:S.MEDIA_URL;if("xlinkHref"===b)return"image"===c?S.MEDIA_URL:"a"===c?S.URL:S.RESOURCE_URL;if("form"===c&&"action"===b||"base"===c&&"href"===b||"link"===c&&"href"===b)return S.RESOURCE_URL;if("a"===c&&("href"===b||"ngHref"===b))return S.URL}function oa(a,c,d,e,f){var g=ma(a,e),k=h[e]||
f,l=b(d,!f,g,k);if(l){if("multiple"===e&&"select"===ra(a))throw ba("selmulti",ya(a));if(m.test(e))throw ba("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=U());var h=f[e];h!==d&&(l=h&&b(h,!0,g,k),d=h);l&&(f[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&f.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function ia(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=
0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=E.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);A.hasData(d)&&(A.data(c,A.data(d)),A(d).off("$destroy"));A.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function na(a,b){return Q(function(){return a.apply(null,arguments)},a,b)}function pa(a,b,d,e,f,g){try{a(b,
d,e,f,g)}catch(h){c(h,ya(d))}}function la(a,b){if(s)throw ba("missingattr",a,b);}function va(a,c,d,e,f){function g(b,c,e){B(d.$onChanges)&&!dc(c,e)&&(aa||(a.$$postDigest(L),aa=[]),m||(m={},aa.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Kb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;p(e,function(e,h){var m=e.attrName,n=e.optional,I,F,x,v;switch(e.mode){case "@":n||qa.call(c,m)||(la(m,f.name),d[h]=c[m]=void 0);n=c.$observe(m,function(a){if(z(a)||Ia(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=
a;I=c[m];z(I)?d[h]=b(I)(a):Ia(I)&&(d[h]=I);l[h]=new Kb(uc,d[h]);k.push(n);break;case "=":if(!qa.call(c,m)){if(n)break;la(m,f.name);c[m]=void 0}if(n&&!c[m])break;F=q(c[m]);v=F.literal?sa:dc;x=F.assign||function(){I=d[h]=F(a);throw ba("nonassign",c[m],m,f.name);};I=d[h]=F(a);n=function(b){v(b,d[h])||(v(b,I)?x(a,b=d[h]):d[h]=b);return I=b};n.$stateful=!0;n=e.collection?a.$watchCollection(c[m],n):a.$watch(q(c[m],n),null,F.literal);k.push(n);break;case "<":if(!qa.call(c,m)){if(n)break;la(m,f.name);c[m]=
void 0}if(n&&!c[m])break;F=q(c[m]);var t=F.literal,s=d[h]=F(a);l[h]=new Kb(uc,d[h]);n=a[e.collection?"$watchCollection":"$watch"](F,function(a,b){if(b===a){if(b===s||t&&sa(b,s))return;b=s}g(h,a,b);d[h]=a});k.push(n);break;case "&":n||qa.call(c,m)||la(m,f.name);F=c.hasOwnProperty(m)?q(c[m]):w;if(F===w&&n)break;d[h]=function(b){return F(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ea=/^\w/,xa=E.document.createElement("div"),Fa=v,Ga=
t,za=D,aa;r.prototype={$normalize:ua,$addClass:function(a){a&&0<a.length&&O.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&O.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=ud(a,b);c&&c.length&&O.addClass(this.$$element,c);(c=ud(b,a))&&c.length&&O.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=nd(this.$$element[0],a),g=vd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Xc(a,
"-"));if("img"===ra(this.$$element)&&"srcset"===a&&b){if(!z(b))throw ba("srcset",b.toString());for(var f="",g=R(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+S.getTrustedMediaUrl(R(g[m])),f=f+(" "+R(g[m+1]));g=R(g[2*l]).split(/\s/);f+=S.getTrustedMediaUrl(R(g[0]));2===g.length&&(f+=" "+R(g[1]));this[a]=b=f}!1!==d&&(null===b||y(b)?this.$$element.removeAttr(e):Ea.test(e)?this.$$element.attr(e,b):ha(this.$$element[0],
e,b));(a=this.$$observers)&&p(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=U()),e=d[a]||(d[a]=[]);e.push(b);x.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||y(c[a])||b(c[a])});return function(){ab(e,b)}}};var Ba=b.startSymbol(),Ca=b.endSymbol(),Da="{{"===Ba&&"}}"===Ca?Oa:function(a){return a.replace(/\{\{/g,Ba).replace(/}}/g,Ca)},Ka=/^ngAttr[A-Z]/,La=/^(.+)Start$/;N.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||
[];G(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:w;N.$$addBindingClass=n?function(a){u(a,"ng-binding")}:w;N.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:w;N.$$addScopeClass=n?function(a,b){u(a,b?"ng-isolate-scope":"ng-scope")}:w;N.$$createComment=function(a,b){var c="";n&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return E.document.createComment(c)};return N}]}function Kb(a,b){this.previousValue=a;this.currentValue=b}function ua(a){return a.replace(rd,
"").replace(xg,function(a,d,c){return c?d.toUpperCase():d})}function ud(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],k=0;k<e.length;k++)if(g===e[k])continue a;d+=(0<d.length?" ":"")+g}return d}function td(a){a=A(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Ja&&""===d.nodeValue.trim())&&yg.call(a,b,1)}return a}function wg(a,b){if(b&&z(b))return b;if(z(a)){var d=wd.exec(a);if(d)return d[3]}}function Cf(){var a={};
this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,d){La(b,"controller");H(b)?Q(a,b):a[b]=d};this.$get=["$injector",function(b){return function(d,c,e){var f,g;e&&z(e)&&(g=e);if(z(d)){e=d.match(wd);if(!e)throw xd("ctrlfmt",d);f=e[1];g=g||e[3];if(a.hasOwnProperty(f))d=a[f];else if(d=c.$scope,f){e=f.split(".");for(var k,h=e.length,l=0;l<h;l++)k=e[l],d&&(d=d[k])}if(!d)throw xd("ctrlreg",f);ub(d,f,!0)}e=b.instantiate(d,c,f);if(g){f=f||d.name;if(!c||!H(c.$scope))throw M("$controller")("noscp",
f,g);c.$scope[g]=e}return e}}]}function Df(){this.$get=["$window",function(a){return A(a.document)}]}function Ef(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function Ff(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function vc(a){return H(a)?da(a)?a.toISOString():db(a):a}function Kf(){this.$get=
function(){return function(a){if(!a)return"";var b=[];Qc(a,function(a,c){null===a||y(a)||B(a)||(G(a)?p(a,function(a){b.push(ga(c)+"="+ga(vc(a)))}):b.push(ga(c)+"="+ga(vc(a))))});return b.join("&")}}}function Lf(){this.$get=function(){return function(a){function b(a,e,f){G(a)?p(a,function(a,c){b(a,e+"["+(H(a)?c:"")+"]")}):H(a)&&!da(a)?Qc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):(B(a)&&(a=a()),d.push(ga(e)+"="+(null==a?"":ga(vc(a)))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}
function wc(a,b){if(z(a)){var d=a.replace(zg,"").trim();if(d){var c=b("Content-Type"),c=c&&0===c.indexOf(yd),e;(e=c)||(e=(e=d.match(Ag))&&Bg[e[0]].test(d));if(e)try{a=Tc(d)}catch(f){if(!c)return a;throw Lb("baddata",a,f);}}}return a}function zd(a){var b=U(),d;z(a)?p(a.split("\n"),function(a){d=a.indexOf(":");var e=J(R(a.substr(0,d)));a=R(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):H(a)&&p(a,function(a,d){var f=J(d),g=R(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function Ad(a){var b;return function(d){b||
(b=zd(a));return d?(d=b[J(d)],void 0===d&&(d=null),d):b}}function Bd(a,b,d,c){if(B(c))return c(a,b,d);p(c,function(c){a=c(a,b,d)});return a}function Jf(){var a=this.defaults={transformResponse:[wc],transformRequest:[function(a){return H(a)&&"[object File]"!==fa.call(a)&&"[object Blob]"!==fa.call(a)&&"[object FormData]"!==fa.call(a)?db(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:na(xc),put:na(xc),patch:na(xc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",
jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return u(a)?(b=!!a,this):b};var d=this.interceptors=[],c=this.xsrfWhitelistedOrigins=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(e,f,g,k,h,l,m,q){function n(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];a=a.then(f,g)}b.length=0;return a}function d(a,b){var c,e={};p(a,function(a,d){B(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}function f(a){var b=
Q({},a);b.data=Bd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:l.reject(b)}if(!H(b))throw M("$http")("badreq",b);if(!z(q.valueOf(b.url)))throw M("$http")("badreq",b.url);var g=Q({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},b);g.headers=function(b){var c=a.headers,e=Q({},b.headers),f,g,h,c=Q({},c.common,c[J(b.method)]);a:for(f in c){g=J(f);for(h in e)if(J(h)===
g)continue a;e[f]=c[f]}return d(e,na(b))}(b);g.method=wb(g.method);g.paramSerializer=z(g.paramSerializer)?m.get(g.paramSerializer):g.paramSerializer;e.$$incOutstandingRequestCount();var h=[],k=[];b=l.resolve(g);p(P,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&k.push(a.response,a.responseError)});b=c(b,h);b=b.then(function(b){var c=b.headers,d=Bd(b.data,Ad(c),void 0,b.transformRequest);y(d)&&p(c,function(a,b){"content-type"===J(b)&&delete c[b]});
y(b.withCredentials)&&!y(a.withCredentials)&&(b.withCredentials=a.withCredentials);return s(b,d).then(f,f)});b=c(b,k);return b=b.finally(function(){e.$$completeOutstandingRequest(w)})}function s(c,d){function e(a){if(a){var c={};p(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function k(a,c,d,e,f){function g(){m(c,a,d,e,f)}L&&(200<=a&&300>a?L.put(N,[a,c,zd(d),e,f]):L.remove(N));b?h.$applyAsync(g):(g(),h.$$phase||h.$apply())}function m(a,
b,d,e,f){b=-1<=b?b:0;(200<=b&&300>b?P.resolve:P.reject)({data:a,status:b,headers:Ad(d),config:c,statusText:e,xhrStatus:f})}function s(a){m(a.data,a.status,na(a.headers()),a.statusText,a.xhrStatus)}function x(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var P=l.defer(),O=P.promise,L,r,ha=c.headers,ta="jsonp"===J(c.method),N=c.url;ta?N=q.getTrustedResourceUrl(N):z(N)||(N=q.valueOf(N));N=D(N,c.paramSerializer(c.params));ta&&(N=v(N,c.jsonpCallbackParam));n.pendingRequests.push(c);
O.then(x,x);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(L=H(c.cache)?c.cache:H(a.cache)?a.cache:t);L&&(r=L.get(N),u(r)?r&&B(r.then)?r.then(s,s):G(r)?m(r[1],r[0],na(r[2]),r[3],r[4]):m(r,200,{},"OK","complete"):L.put(N,O));y(r)&&((r=K(c.url)?g()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(ha[c.xsrfHeaderName||a.xsrfHeaderName]=r),f(c.method,N,d,k,ha,c.timeout,c.withCredentials,c.responseType,e(c.eventHandlers),e(c.uploadEventHandlers)));return O}function D(a,b){0<b.length&&
(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function v(a,b){var c=a.split("?");if(2<c.length)throw Lb("badjsonp",a);c=gc(c[1]);p(c,function(c,d){if("JSON_CALLBACK"===c)throw Lb("badjsonp",a);if(d===b)throw Lb("badjsonp",b,a);});return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var t=k("$http");a.paramSerializer=z(a.paramSerializer)?m.get(a.paramSerializer):a.paramSerializer;var P=[];p(d,function(a){P.unshift(z(a)?m.get(a):m.invoke(a))});var K=Cg(c);n.pendingRequests=[];(function(a){p(arguments,
function(a){n[a]=function(b,c){return n(Q({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){p(arguments,function(a){n[a]=function(b,c,d){return n(Q({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Nf(){this.$get=function(){return function(){return new E.XMLHttpRequest}}}function Mf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return Dg(a,c,a.defer,b,d[0])}]}function Dg(a,b,d,c,e){function f(a,
b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",m);e.body.removeChild(f);f=null;var g=-1,s="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),s=a.type,g="error"===a.type?404:200);d&&d(g,s)};f.addEventListener("load",m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,k,h,l,m,q,n,s,D,v){function t(a){F="timeout"===
a;r&&r();C&&C.abort()}function P(a,b,c,e,f,g){u(ka)&&d.cancel(ka);r=C=null;a(b,c,e,f,g)}k=k||a.url();if("jsonp"===J(e))var K=c.createCallback(k),r=f(k,K,function(a,b){var d=200===a&&c.getResponse(K);P(l,a,d,"",b,"complete");c.removeCallback(K)});else{var C=b(e,k),F=!1;C.open(e,k,!0);p(m,function(a,b){u(a)&&C.setRequestHeader(b,a)});C.onload=function(){var a=C.statusText||"",b="response"in C?C.response:C.responseText,c=1223===C.status?204:C.status;0===c&&(c=b?200:"file"===ia(k).protocol?404:0);P(l,
c,b,C.getAllResponseHeaders(),a,"complete")};C.onerror=function(){P(l,-1,null,null,"","error")};C.ontimeout=function(){P(l,-1,null,null,"","timeout")};C.onabort=function(){P(l,-1,null,null,"",F?"timeout":"abort")};p(D,function(a,b){C.addEventListener(b,a)});p(v,function(a,b){C.upload.addEventListener(b,a)});n&&(C.withCredentials=!0);if(s)try{C.responseType=s}catch(I){if("json"!==s)throw I;}C.send(y(h)?null:h)}if(0<q)var ka=d(function(){t("timeout")},q);else q&&B(q.then)&&q.then(function(){t(u(q.$$timeoutId)?
"timeout":"abort")})}}function Hf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(q,a).replace(n,b)}function k(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function h(f,h,n,q){function P(a){try{return a=n&&!K?e.getTrusted(n,a):e.valueOf(a),q&&!u(a)?a:ic(a)}catch(b){c(Ba.interr(f,
b))}}var K=n===e.URL||n===e.MEDIA_URL;if(!f.length||-1===f.indexOf(a)){if(h&&!K)return;h=g(f);K&&(h=e.getTrusted(n,h));h=ma(h);h.exp=f;h.expressions=[];h.$$watchDelegate=k;return h}q=!!q;for(var p,C,F=0,I=[],ka,r=f.length,x=[],S=[],O;F<r;)if(-1!==(p=f.indexOf(a,F))&&-1!==(C=f.indexOf(b,p+l)))F!==p&&x.push(g(f.substring(F,p))),F=f.substring(p+l,C),I.push(F),F=C+m,S.push(x.length),x.push("");else{F!==r&&x.push(g(f.substring(F)));break}O=1===x.length&&1===S.length;var L=K&&O?void 0:P;ka=I.map(function(a){return d(a,
L)});if(!h||I.length){var w=function(a){for(var b=0,c=I.length;b<c;b++){if(q&&y(a[b]))return;x[S[b]]=a[b]}if(K)return e.getTrusted(n,O?x[0]:x.join(""));n&&1<x.length&&Ba.throwNoconcat(f);return x.join("")};return Q(function(a){var b=0,d=I.length,e=Array(d);try{for(;b<d;b++)e[b]=ka[b](a);return w(e)}catch(g){c(Ba.interr(f,g))}},{exp:f,expressions:I,$$watchDelegate:function(a,b){var c;return a.$watchGroup(ka,function(d,e){var f=w(d);b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,q=new RegExp(a.replace(/./g,
f),"g"),n=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function If(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,h,l,m){function q(){n?f.apply(null,s):f(t)}var n=4<arguments.length,s=n?wa.call(arguments,4):[],D=b.setInterval,v=b.clearInterval,t=0,P=u(m)&&!m,K=(P?c:d).defer(),p=K.promise;l=u(l)?l:0;p.$$intervalId=D(function(){P?e.defer(q):a.$evalAsync(q);K.notify(t++);0<l&&t>=l&&(K.resolve(t),
v(p.$$intervalId),delete g[p.$$intervalId]);P||a.$apply()},h);g[p.$$intervalId]=K;return p}var g={};f.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$intervalId"))throw Eg("badprom");if(!g.hasOwnProperty(a.$$intervalId))return!1;a=a.$$intervalId;var c=g[a];c.promise.$$state.pur=!0;c.reject("canceled");b.clearInterval(a);delete g[a];return!0};return f}]}function yc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=eb(a[b].replace(/%2F/g,"/"));return a.join("/")}function Cd(a,b){var d=ia(a);
b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=ea(d.port)||Fg[d.protocol]||null}function Dd(a,b,d){if(Gg.test(a))throw kb("badpath",a);var c="/"!==a.charAt(0);c&&(a="/"+a);a=ia(a);for(var c=(c&&"/"===a.pathname.charAt(0)?a.pathname.substring(1):a.pathname).split("/"),e=c.length;e--;)c[e]=decodeURIComponent(c[e]),d&&(c[e]=c[e].replace(/\//g,"%2F"));d=c.join("/");b.$$path=d;b.$$search=gc(a.search);b.$$hash=decodeURIComponent(a.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}
function zc(a,b){return a.slice(0,b.length)===b}function pa(a,b){if(zc(b,a))return b.substr(a.length)}function aa(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function lb(a){return a.replace(/(#.+)|#$/,"$1")}function Ac(a,b,d){this.$$html5=!0;d=d||"";Cd(a,this);this.$$parse=function(a){var d=pa(b,a);if(!z(d))throw kb("ipthprfx",a,b);Dd(d,this,!0);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=hc(this.$$search),d=this.$$hash?"#"+eb(this.$$hash):"";this.$$url=
yc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1);this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;u(f=pa(a,c))?(g=f,g=d&&u(f=pa(d,f))?b+(pa("/",f)||f):a+g):u(f=pa(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function Bc(a,b,d){Cd(a,this);this.$$parse=function(c){var e=pa(a,c)||pa(b,c),f;y(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",y(e)&&(a=c,this.replace())):(f=pa(d,e),y(f)&&(f=e));Dd(f,this,
!1);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;zc(f,e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=hc(this.$$search),e=this.$$hash?"#"+eb(this.$$hash):"";this.$$url=yc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"");this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(b,d){return aa(a)===aa(b)?(this.$$parse(b),!0):!1}}function Ed(a,b,d){this.$$html5=!0;Bc.apply(this,arguments);this.$$parseLinkUrl=
function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===aa(c)?f=c:(g=pa(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=hc(this.$$search),e=this.$$hash?"#"+eb(this.$$hash):"";this.$$url=yc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url;this.$$urlUpdatedByLocation=!0}}function Mb(a){return function(){return this[a]}}function Fd(a,b){return function(d){if(y(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Pf(){var a=
"!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return u(b)?(a=b,this):a};this.html5Mode=function(a){if(Ia(a))return b.enabled=a,this;if(H(a)){Ia(a.enabled)&&(b.enabled=a.enabled);Ia(a.requireBase)&&(b.requireBase=a.requireBase);if(Ia(a.rewriteLinks)||z(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function k(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,
d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function h(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var q=c.url(),n;if(b.enabled){if(!m&&b.requireBase)throw kb("nobase");n=q.substring(0,q.indexOf("/",q.indexOf("//")+2))+(m||"/");m=e.history?Ac:Ed}else n=aa(q),m=Bc;var s=n.substr(0,aa(n).lastIndexOf("/")+1);l=new m(n,s,"#"+a);l.$$parseLinkUrl(q,q);l.$$state=c.state();var p=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;
if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var g=A(a.target);"a"!==ra(g[0]);)if(g[0]===f[0]||!(g=g.parent())[0])return;if(!z(e)||!y(g.attr(e))){var e=g.prop("href"),h=g.attr("href")||g.attr("xlink:href");H(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ia(e.animVal).href);p.test(e)||!e||g.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(e,h)||(a.preventDefault(),l.absUrl()!==c.url()&&d.$apply())}}});lb(l.absUrl())!==lb(q)&&c.url(l.absUrl(),!0);var v=!0;
c.onUrlChange(function(a,b){zc(a,s)?(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=lb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,k(c,!1,e)):(v=!1,h(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(v||l.$$urlUpdatedByLocation){l.$$urlUpdatedByLocation=!1;var a=lb(c.url()),b=lb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(v||m)v=
!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&k(b,g,f===l.$$state?null:l.$$state),h(a,f)))})}l.$$replace=!1});return l}]}function Qf(){var a=!0,b=this;this.debugEnabled=function(b){return u(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){cc(a)&&(a.stack&&f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+
"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||w;return function(){var a=[];p(arguments,function(b){a.push(c(b))});return Function.prototype.apply.call(e,b,a)}}var f=Ha||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Hg(a){return a+""}function Ig(a,b){return"undefined"!==typeof a?a:b}function Gd(a,
b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Jg(a,b){switch(a.type){case r.MemberExpression:if(a.computed)return!1;break;case r.UnaryExpression:return 1;case r.BinaryExpression:return"+"!==a.operator?1:!1;case r.CallExpression:return!1}return void 0===b?Hd:b}function T(a,b,d){var c,e,f=a.isPure=Jg(a,d);switch(a.type){case r.Program:c=!0;p(a.body,function(a){T(a.expression,b,f);c=c&&a.expression.constant});a.constant=c;break;case r.Literal:a.constant=!0;a.toWatch=[];break;
case r.UnaryExpression:T(a.argument,b,f);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case r.BinaryExpression:T(a.left,b,f);T(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case r.LogicalExpression:T(a.left,b,f);T(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case r.ConditionalExpression:T(a.test,b,f);T(a.alternate,b,f);T(a.consequent,b,f);a.constant=a.test.constant&&
a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case r.Identifier:a.constant=!1;a.toWatch=[a];break;case r.MemberExpression:T(a.object,b,f);a.computed&&T(a.property,b,f);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=a.constant?[]:[a];break;case r.CallExpression:c=d=a.filter?!b(a.callee.name).$stateful:!1;e=[];p(a.arguments,function(a){T(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=d?e:[a];break;case r.AssignmentExpression:T(a.left,
b,f);T(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case r.ArrayExpression:c=!0;e=[];p(a.elements,function(a){T(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=e;break;case r.ObjectExpression:c=!0;e=[];p(a.properties,function(a){T(a.value,b,f);c=c&&a.value.constant;e.push.apply(e,a.value.toWatch);a.computed&&(T(a.key,b,!1),c=c&&a.key.constant,e.push.apply(e,a.key.toWatch))});a.constant=c;a.toWatch=e;break;case r.ThisExpression:a.constant=
!1;a.toWatch=[];break;case r.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Id(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Jd(a){return a.type===r.Identifier||a.type===r.MemberExpression}function Kd(a){if(1===a.body.length&&Jd(a.body[0].expression))return{type:r.AssignmentExpression,left:a.body[0].expression,right:{type:r.NGValueParameter},operator:"="}}function Ld(a){this.$filter=a}function Md(a){this.$filter=a}function Nb(a,b,d){this.ast=
new r(a,d);this.astCompiler=d.csp?new Md(b):new Ld(b)}function Cc(a){return B(a.valueOf)?a.valueOf():Kg.call(a)}function Rf(){var a=U(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(b,c){var d,f;switch(typeof b){case "string":return f=b=b.trim(),d=a[f],d||(d=new Ob(D),d=(new Nb(d,e,D)).parse(b),a[f]=q(d)),s(d,c);case "function":return s(b,c);default:return s(w,
c)}}function g(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=Cc(a),"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function k(a,b,c,d,e){var f=d.inputs,h;if(1===f.length){var k=g,f=f[0];return a.$watch(function(a){var b=f(a);g(b,k,f.isPure)||(h=d(a,void 0,void 0,[b]),k=b&&Cc(b));return h},b,c,e)}for(var l=[],m=[],n=0,q=f.length;n<q;n++)l[n]=g,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var k=f[c](a);if(b||(b=!g(k,l[c],f[c].isPure)))m[c]=k,l[c]=k&&Cc(k)}b&&
(h=d(a,void 0,void 0,m));return h},b,c,e)}function h(a,b,c,d,e){function f(){h(m)&&k()}function g(a,b,c,d){m=p&&d?d[0]:n(a,b,c,d);h(m)&&a.$$postDigest(f);return s(m)}var h=d.literal?l:u,k,m,n=d.$$intercepted||d,s=d.$$interceptor||Oa,p=d.inputs&&!n.inputs;g.literal=d.literal;g.constant=d.constant;g.inputs=d.inputs;q(g);return k=a.$watch(g,b,c,e)}function l(a){var b=!0;p(a,function(a){u(a)||(b=!1)});return b}function m(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function q(a){a.constant?
a.$$watchDelegate=m:a.oneTime?a.$$watchDelegate=h:a.inputs&&(a.$$watchDelegate=k);return a}function n(a,b){function c(d){return b(a(d))}c.$stateful=a.$stateful||b.$stateful;c.$$pure=a.$$pure&&b.$$pure;return c}function s(a,b){if(!b)return a;a.$$interceptor&&(b=n(a.$$interceptor,b),a=a.$$intercepted);var c=!1,d=function(d,e,f,g){d=c&&g?g[0]:a(d,e,f,g);return b(d)};d.$$intercepted=a;d.$$interceptor=b;d.literal=a.literal;d.oneTime=a.oneTime;d.constant=a.constant;b.$stateful||(c=!a.inputs,d.inputs=a.inputs?
a.inputs:[a],b.$$pure||(d.inputs=d.inputs.map(function(a){return a.isPure===Hd?function(b){return a(b)}:a})));return q(d)}var D={csp:Fa().noUnsafeEval,literals:Ea(b),isIdentifierStart:B(d)&&d,isIdentifierContinue:B(c)&&c};f.$$getAst=function(a){var b=new Ob(D);return(new Nb(b,e,D)).getAst(a).ast};return f}]}function Tf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Nd(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):
a}}function Uf(){var a=!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Nd(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):a}}function Nd(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){h(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){n(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!K&&u.length;){var a=u.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+
("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):y(c)?"undefined":"string"!==typeof c?Ge(c,void 0):c);cc(a.value)?b(a.value,c):b(c)}}}function k(c){!d||c.pending||2!==c.status||c.pur||(0===K&&0===u.length&&a(g),u.push(c));!c.processScheduled&&c.pending&&(c.processScheduled=!0,++K,a(function(){var e,f,k;k=c.pending;c.processScheduled=!1;c.pending=void 0;try{for(var l=0,n=k.length;l<n;++l){c.pur=!0;f=k[l][0];e=k[l][c.status];try{B(e)?h(f,e(c.value)):1===c.status?h(f,c.value):m(f,c.value)}catch(q){m(f,
q),q&&!0===q.$$passToExceptionHandler&&b(q)}}}finally{--K,d&&0===K&&a(g)}}))}function h(a,b){a.$$state.status||(b===a?q(a,r("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,q(a,b))}function e(b){n(a,b)}var f,g=!1;try{if(H(b)||B(b))f=b.then;B(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,k(a.$$state))}catch(h){d(h)}}function m(a,b){a.$$state.status||q(a,b)}function q(a,b){a.$$state.value=b;a.$$state.status=2;k(a.$$state)}function n(c,
d){var e=c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{n(c,B(a)?a(d):d)}catch(h){b(h)}}})}function s(a){var b=new f;m(b,a);return b}function D(a,b,c){var d=null;try{B(c)&&(d=c())}catch(e){return s(e)}return d&&B(d.then)?d.then(function(){return b(a)},s):b(a)}function v(a,b,c,d){var e=new f;h(e,a);return e.then(b,c,d)}function t(a){if(!B(a))throw r("norslvr",a);var b=new f;a(function(a){h(b,a)},function(a){m(b,a)});return b}
var r=M("$q",TypeError),K=0,u=[];Q(f.prototype,{then:function(a,b,c){if(y(a)&&y(b)&&y(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&k(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return D(b,C,a)},function(b){return D(b,s,a)},b)}});var C=v;t.prototype=f.prototype;t.defer=c;t.reject=s;t.when=v;t.resolve=C;t.all=function(a){var b=new f,c=
0,d=G(a)?[]:{};p(a,function(a,e){c++;v(a).then(function(a){d[e]=a;--c||h(b,d)},function(a){m(b,a)})});0===c&&h(b,d);return b};t.race=function(a){var b=c();p(a,function(a){v(a).then(b.resolve,b.reject)});return b.promise};return t}function cg(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:
function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function Sf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++rb;this.$$ChildScope=null;this.$$suspended=!1}b.prototype=a;return b}var b=10,d=M("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",
function(f,g,k){function h(a){a.currentScope.$$destroyed=!0}function l(a){9===Ha&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++rb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$suspended=this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=
0;this.$$isolateBindings=null}function q(a){if(r.$$phase)throw d("inprog",r.$$phase);r.$$phase=a}function n(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function D(){}function v(){for(;C.length;)try{C.shift()()}catch(a){f(a)}e=null}function t(){null===e&&(e=k.defer(function(){r.$apply(v)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):
(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",h);return d},$watch:function(a,b,d,e){var f=g(a);b=B(b)?b:w;if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:D,get:f,exp:e||a,eq:!!d};c=null;k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;
n(this,1);return function(){var a=ab(k,l);0<=a&&(n(h,-1),a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;try{k?(k=!1,b(e,e,g)):b(e,d,g)}finally{for(var f=0;f<a.length;f++)d[f]=e[f]}}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});p(a,function(a,b){var d=g.$watch(a,
function(a){e[b]=a;h||(h=!0,g.$evalAsync(c))});f.push(d)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!y(e)){if(H(e))if(la(e))for(f!==n&&(f=n,p=f.length=0,l++),a=e.length,p!==a&&(l++,f.length=p=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==q&&(f=q={},p=0,l++);a=0;for(b in e)qa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(p++,f[b]=g,l++));if(p>a)for(b in l++,f)qa.call(e,
b)||(p--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$$pure=g(a).literal;c.$stateful=!c.$$pure;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],q={},s=!0,p=0;return this.$watch(m,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(H(e))if(la(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)qa.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,h,l,m,n,s,p=b,t,C=K.length?r:this,w=[],y,A;q("$digest");k.$$checkUrlChange();this===r&&null!==e&&(k.defer.cancel(e),v());
c=null;do{s=!1;t=C;for(n=0;n<K.length;n++){try{A=K[n],l=A.fn,l(A.scope,A.locals)}catch(z){f(z)}c=null}K.length=0;a:do{if(n=!t.$$suspended&&t.$$watchers)for(n.$$digestWatchIndex=n.length;n.$$digestWatchIndex--;)try{if(a=n[n.$$digestWatchIndex])if(m=a.get,(g=m(t))!==(h=a.last)&&!(a.eq?sa(g,h):$(g)&&$(h)))s=!0,c=a,a.last=a.eq?Ea(g,null):g,l=a.fn,l(g,h===D?g:h,t),5>p&&(y=4-p,w[y]||(w[y]=[]),w[y].push({msg:B(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:h}));else if(a===c){s=!1;break a}}catch(E){f(E)}if(!(n=
!t.$$suspended&&t.$$watchersCount&&t.$$childHead||t!==C&&t.$$nextSibling))for(;t!==C&&!(n=t.$$nextSibling);)t=t.$parent}while(t=n);if((s||K.length)&&!p--)throw r.$$phase=null,d("infdig",b,w);}while(s||K.length);for(r.$$phase=null;F<u.length;)try{u[F++]()}catch(H){f(H)}u.length=F=0;k.$$checkUrlChange()},$suspend:function(){this.$$suspended=!0},$isSuspended:function(){return this.$$suspended},$resume:function(){this.$$suspended=!1},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");
this.$$destroyed=!0;this===r&&k.$$applicationDestroyed();n(this,-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=w;this.$on=
this.$watch=this.$watchGroup=function(){return w};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){r.$$phase||K.length||k.defer(function(){K.length&&r.$digest()});K.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){u.push(a)},$apply:function(a){try{q("$apply");try{return this.$eval(a)}finally{r.$$phase=null}}catch(b){f(b)}finally{try{r.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}
var c=this;a&&C.push(b);a=g(a);t()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(delete c[d],s(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=bb([h],arguments,1),l,m;do{d=
e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)break;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=bb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,
g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var r=new m,K=r.$$asyncQueue=[],u=r.$$postDigestQueue=[],C=r.$$applyAsyncQueue=[],F=0;return r}]}function Je(){var a=/^\s*(https?|s?ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return u(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return u(a)?
(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f=ia(d&&d.trim()).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Lg(a){if("self"===a)return a;if(z(a)){if(-1<a.indexOf("***"))throw va("iwcard",a);a=Od(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Za(a))return new RegExp("^"+a.source+"$");throw va("imatcher");}function Pd(a){var b=[];u(a)&&p(a,function(a){b.push(Lg(a))});return b}function Wf(){this.SCE_CONTEXTS=V;var a=["self"],
b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Pd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Pd(a));return b};this.$get=["$injector","$$sanitizeUri",function(d,c){function e(a,b){var c;"self"===a?(c=Dc(b,Qd))||(E.document.baseURI?c=E.document.baseURI:(Sa||(Sa=E.document.createElement("a"),Sa.href=".",Sa=Sa.cloneNode(!1)),c=Sa.href),c=Dc(b,c)):c=!!a.exec(b.href);return c}function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&
(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var g=function(a){throw va("unsafe");};d.has("$sanitize")&&(g=d.get("$sanitize"));var k=f(),h={};h[V.HTML]=f(k);h[V.CSS]=f(k);h[V.MEDIA_URL]=f(k);h[V.URL]=f(h[V.MEDIA_URL]);h[V.JS]=f(k);h[V.RESOURCE_URL]=f(h[V.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw va("icontext",a,b);if(null===b||y(b)||
""===b)return b;if("string"!==typeof b)throw va("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||y(f)||""===f)return f;var k=h.hasOwnProperty(d)?h[d]:null;if(k&&f instanceof k)return f.$$unwrapTrustedValue();B(f.$$unwrapTrustedValue)&&(f=f.$$unwrapTrustedValue());if(d===V.MEDIA_URL||d===V.URL)return c(f,d===V.MEDIA_URL);if(d===V.RESOURCE_URL){var k=ia(f.toString()),n,s,p=!1;n=0;for(s=a.length;n<s;n++)if(e(a[n],k)){p=!0;break}if(p)for(n=0,s=b.length;n<s;n++)if(e(b[n],k)){p=!1;break}if(p)return f;
throw va("insecurl",f.toString());}if(d===V.HTML)return g(f);throw va("unsafe");},valueOf:function(a){return a instanceof k?a.$$unwrapTrustedValue():a}}}]}function Vf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ha)throw va("iequirks");var c=na(V);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Oa);c.parseAs=
function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;p(V,function(a,b){var d=J(b);c[("parse_as_"+d).replace(Ec,yb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(Ec,yb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(Ec,yb)]=function(b){return g(a,b)}});return c}]}function Xf(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||
!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=ea((/android (\d+)/.exec(J((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},k=g.body&&g.body.style,h=!1,l=!1;k&&(h=!!("transition"in k||"webkitTransition"in k),l=!!("animation"in k||"webkitAnimation"in k));return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&Ha)return!1;if(y(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Fa(),transitions:h,
animations:l,android:e}}]}function Zf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(k,h){g.totalPendingRequests++;if(!z(k)||y(d.get(k)))k=f.getTrustedResourceUrl(k);var l=c.defaults&&c.defaults.transformResponse;G(l)?l=l.filter(function(a){return a!==wc}):l===wc&&(l=null);return c.get(k,Q({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){return d.put(k,
a.data)},function(a){h||(a=Mg("tpload",k,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=0;return g}]}function $f(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];p(a,function(a){var c=Y.element(a).data("$binding");c&&p(c,function(c){d?(new RegExp("(^|\\s)"+Od(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=
["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(d?"=":"*=")+'"'+b+'"]');if(h.length)return h}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function ag(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,h,l){B(f)||(l=h,h=f,f=w);var m=wa.call(arguments,3),q=u(l)&&!l,n=(q?c:d).defer(),s=n.promise,
p;p=b.defer(function(){try{n.resolve(f.apply(null,m))}catch(b){n.reject(b),e(b)}finally{delete g[s.$$timeoutId]}q||a.$apply()},h);s.$$timeoutId=p;g[p]=n;return s}var g={};f.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$timeoutId"))throw Ng("badprom");if(!g.hasOwnProperty(a.$$timeoutId))return!1;a=a.$$timeoutId;var c=g[a];c.promise.$$state.pur=!0;c.reject("canceled");delete g[a];return b.defer.cancel(a)};return f}]}function ia(a){if(!z(a))return a;Ha&&(X.setAttribute("href",a),a=X.href);
X.setAttribute("href",a);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function Cg(a){var b=[Qd].concat(a.map(ia));return function(a){a=ia(a);return b.some(Dc.bind(null,a))}}function Dc(a,b){a=ia(a);b=ia(b);return a.protocol===b.protocol&&a.host===b.host}function bg(){this.$get=ma(E)}
function Rd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,k,h,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=e.split("; "),c={},k=0;k<a.length;k++)g=a[k],h=g.indexOf("="),0<h&&(l=b(g.substring(0,h)),y(c[l])&&(c[l]=b(g.substring(h+1))));return c}}function fg(){this.$get=Rd}function fd(a){function b(d,c){if(H(d)){var e={};p(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=
["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Sd);b("date",Td);b("filter",Og);b("json",Pg);b("limitTo",Qg);b("lowercase",Rg);b("number",Ud);b("orderBy",Vd);b("uppercase",Sg)}function Og(){return function(a,b,d,c){if(!la(a)){if(null==a)return a;throw M("filter")("notarray",a);}c=c||"$";var e;switch(Fc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=Tg(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,
b)}}function Tg(a,b,d,c){var e=H(a)&&d in a;!0===b?b=sa:B(b)||(b=function(a,b){if(y(a))return!1;if(null===a||null===b)return a===b;if(H(b)||H(a)&&!bc(a))return!1;a=J(""+a);b=J(""+b);return-1!==a.indexOf(b)});return function(f){return e&&!H(f)?Ca(f,a[d],b,d,!1):Ca(f,a,b,d,c)}}function Ca(a,b,d,c,e,f){var g=Fc(a),k=Fc(b);if("string"===k&&"!"===b.charAt(0))return!Ca(a,b.substring(1),d,c,e);if(G(a))return a.some(function(a){return Ca(a,b,d,c,e)});switch(g){case "object":var h;if(e){for(h in a)if(h.charAt&&
"$"!==h.charAt(0)&&Ca(a[h],b,d,c,!0))return!0;return f?!1:Ca(a,b,d,c,!1)}if("object"===k){for(h in b)if(f=b[h],!B(f)&&!y(f)&&(g=h===c,!Ca(g?a:a[h],f,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function Fc(a){return null===a?"null":typeof a}function Sd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){y(c)&&(c=b.CURRENCY_SYM);y(e)&&(e=b.PATTERNS[1].maxFrac);var f=c?/\u00A4/g:/\s*\u00A4\s*/g;return null==a?a:Wd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(f,
c)}}function Ud(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Wd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Ug(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Xd))&&(a=a.replace(Xd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===Gc;e++);if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===Gc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Yd&&(d=d.splice(0,Yd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Vg(a,
b,d,c){var e=a.d,f=e.length-a.i;b=y(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Wd(a,b,d,c,e){if(!z(a)&&!Z(a)||isNaN(a))return"";
var f=!isFinite(a),g=!1,k=Math.abs(a)+"",h="";if(f)h="\u221e";else{g=Ug(k);Vg(g,e,b.minFrac,b.maxFrac);h=g.d;k=g.i;e=g.e;f=[];for(g=h.reduce(function(a,b){return a&&!b},!0);0>k;)h.unshift(0),k++;0<k?f=h.splice(k,h.length):(f=h,h=[0]);k=[];for(h.length>=b.lgSize&&k.unshift(h.splice(-b.lgSize,h.length).join(""));h.length>b.gSize;)k.unshift(h.splice(-b.gSize,h.length).join(""));h.length&&k.unshift(h.join(""));h=k.join(d);f.length&&(h+=c+f.join(""));e&&(h+="e+"+e)}return 0>a&&!g?b.negPre+h+b.negSuf:b.posPre+
h+b.posSuf}function Pb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=Gc+a;d&&(a=a.substr(a.length-b));return e+a}function ca(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Pb(f,b,c,e)}}function mb(a,b,d){return function(c,e){var f=c["get"+a](),g=wb((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Zd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function $d(a){return function(b){var d=
Zd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Pb(b,a)}}function Hc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Td(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ea(b[9]+b[10]),g=ea(b[9]+b[11]));k.call(a,ea(b[1]),ea(b[2])-1,ea(b[3]));f=ea(b[4]||0)-f;g=ea(b[5]||0)-g;k=ea(b[6]||0);b=Math.round(1E3*parseFloat("0."+
(b[7]||0)));h.call(a,f,g,k,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",k=[],h,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;z(c)&&(c=Wg.test(c)?ea(c):b(c));Z(c)&&(c=new Date(c));if(!da(c)||!isFinite(c.getTime()))return c;for(;d;)(l=Xg.exec(d))?(k=bb(k,l,1),d=k.pop()):(k.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=ec(f,m),c=fc(c,f,!0));p(k,function(b){h=Yg[b];g+=h?h(c,a.DATETIME_FORMATS,
m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Pg(){return function(a,b){y(b)&&(b=2);return db(a,b)}}function Qg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):ea(b);if($(b))return a;Z(a)&&(a=a.toString());if(!la(a))return a;d=!d||isNaN(d)?0:ea(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?Ic(a,d,d+b):0===d?Ic(a,b,a.length):Ic(a,Math.max(0,d+b),d)}}function Ic(a,b,d){return z(a)?a.slice(b,d):wa.call(a,b,d)}function Vd(a){function b(b){return b.map(function(b){var c=
1,d=Oa;if(B(b))d=b;else if(z(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,h=b.type;if(d===h){var h=a.value,l=b.value;"string"===d?(h=h.toLowerCase(),l=l.toLowerCase()):"object"===d&&(H(h)&&(h=a.index),H(l)&&(l=b.index));h!==l&&(c=
h<l?-1:1)}else c="undefined"===d?1:"undefined"===h?-1:"null"===d?1:"null"===h?-1:d<h?-1:1;return c}return function(a,f,g,k){if(null==a)return a;if(!la(a))throw M("orderBy")("notarray",a);G(f)||(f=[f]);0===f.length&&(f=["+"]);var h=b(f),l=g?-1:1,m=B(k)?k:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:h.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="null";else if("object"===c)a:{if(B(e.valueOf)&&(e=e.valueOf(),d(e)))break a;
bc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var d=0,e=h.length;d<e;d++){var f=m(a.predicateValues[d],b.predicateValues[d]);if(f)return f*h[d].descending*l}return(m(a.tieBreaker,b.tieBreaker)||c(a.tieBreaker,b.tieBreaker))*l});return a=a.map(function(a){return a.value})}}function Ta(a){B(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ma(a)}function Qb(a,b,d,c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||
b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=nb;this.$$element=a;this.$$animate=c;ae(this)}function ae(a){a.$$classCache={};a.$$classCache[be]=!(a.$$classCache[ob]=a.$$element.hasClass(ob))}function ce(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Xc(c,"-"):"";b(a,ob+
c,!0===d);b(a,be+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,k){y(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,k)):(this.$pending&&e(this.$pending,a,k),de(this.$pending)&&(this.$pending=void 0));Ia(g)?g?(e(this.$error,a,k),c(this.$$success,a,k)):(c(this.$error,a,k),e(this.$$success,a,k)):(e(this.$error,a,k),e(this.$$success,a,k));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=
de(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,g,this)}}function de(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Jc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Ua(a,b,d,c,e,f){var g=J(b[0].type);if(!e.android){var k=!1;b.on("compositionstart",function(){k=!0});b.on("compositionupdate",
function(a){if(y(a.data)||""===a.data)k=!1});b.on("compositionend",function(){k=!1;l()})}var h,l=function(a){h&&(f.defer.cancel(h),h=null);if(!k){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=R(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){h||(h=f.defer(function(){h=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||
m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut drop",m)}b.on("change",l);if(ee[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!h){var b=this.validity,c=b.badInput,d=b.typeMismatch;h=f.defer(function(){h=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Rb(a,b){return function(d,c){var e,f;if(da(d))return d;if(z(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-
1)&&(d=d.substring(1,d.length-1));if(Zg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},p(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),e=new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0),100>f.yyyy&&e.setFullYear(f.yyyy),e}return NaN}}function pb(a,b,d,c){return function(e,f,g,k,h,l,m){function q(a){return a&&
!(a.getTime&&a.getTime()!==a.getTime())}function n(a){return u(a)&&!da(a)?p(a)||void 0:a}function p(a,b){var c=k.$options.getOption("timezone");v&&v!==c&&(b=Uc(b,ec(v)));var e=d(a,b);!isNaN(e)&&c&&(e=fc(e,c));return e}Kc(e,f,g,k,a);Ua(e,f,g,k,h,l);var r,v;k.$parsers.push(function(c){if(k.$isEmpty(c))return null;if(b.test(c))return p(c,r);k.$$parserName=a});k.$formatters.push(function(a){if(a&&!da(a))throw qb("datefmt",a);if(q(a)){r=a;var b=k.$options.getOption("timezone");b&&(v=b,r=fc(r,b,!0));return m("date")(a,
c,b)}v=r=null;return""});if(u(g.min)||g.ngMin){var t;k.$validators.min=function(a){return!q(a)||y(t)||d(a)>=t};g.$observe("min",function(a){t=n(a);k.$validate()})}if(u(g.max)||g.ngMax){var P;k.$validators.max=function(a){return!q(a)||y(P)||d(a)<=P};g.$observe("max",function(a){P=n(a);k.$validate()})}}}function Kc(a,b,d,c,e){(c.$$hasNativeValidators=H(b[0].validity))&&c.$parsers.push(function(a){var d=b.prop("validity")||{};if(d.badInput||d.typeMismatch)c.$$parserName=e;else return a})}function fe(a){a.$parsers.push(function(b){if(a.$isEmpty(b))return null;
if($g.test(b))return parseFloat(b);a.$$parserName="number"});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!Z(b))throw qb("numfmt",b);b=b.toString()}return b})}function Va(a){u(a)&&!Z(a)&&(a=parseFloat(a));return $(a)?void 0:a}function Lc(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function ge(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Lc(a):0,k=e?Lc(b):0,h=f?Lc(d):0,g=Math.max(g,k,h),
g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function he(a,b,d,c,e){if(u(c)){a=a(c);if(!a.constant)throw qb("constexpr",d,c);return a(b)}return e}function Mc(a,b){function d(a,b){if(!a||!a.length)return[];if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e===b[m])continue a;c.push(e)}return c}function c(a){var b=a;G(a)?b=a.map(c).join(" "):H(a)&&(b=Object.keys(a).filter(function(b){return a[b]}).join(" "));
return b}a="ngClass"+a;var e;return["$parse",function(f){return{restrict:"AC",link:function(g,k,h){function l(a,b){var c=[];p(a,function(a){if(0<b||q[a])q[a]=(q[a]||0)+b,q[a]===+(0<b)&&c.push(a)});return c.join(" ")}function m(a){if(a===b){var c=s,c=l(c&&c.split(" "),1);h.$addClass(c)}else c=s,c=l(c&&c.split(" "),-1),h.$removeClass(c);n=a}var q=k.data("$classCounts"),n=!0,s;q||(q=U(),k.data("$classCounts",q));"ngClass"!==a&&(e||(e=f("$index",function(a){return a&1})),g.$watch(e,m));g.$watch(f(h[a],
c),function(a){if(n===b){var c=s&&s.split(" "),e=a&&a.split(" "),f=d(c,e),c=d(e,c),f=l(f,-1),c=l(c,1);h.$addClass(c);h.$removeClass(f)}s=a})}}}]}function Sb(a,b,d,c,e,f,g,k,h){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=
void 0;this.$name=h(d.name||"",!1)(a);this.$$parentForm=nb;this.$options=Tb;this.$$updateEvents="";this.$$updateEventHandler=this.$$updateEventHandler.bind(this);this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$parserName="parse";this.$$currentValidationRunId=0;this.$$scope=a;this.$$rootScope=a.$root;this.$$attr=d;
this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=k;this.$$exceptionHandler=b;ae(this);ah(this)}function ah(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);b===a.$modelValue||a.$modelValue!==a.$modelValue&&b!==b||a.$$setModelValue(b);return b})}function Nc(a){this.$$options=a}function ie(a,b){p(b,function(b,c){u(a[c])||(a[c]=b)})}function Da(a,b){a.prop("selected",b);a.attr("selected",b)}var Wb={objectMaxDepth:5,urlErrorParamsEnabled:!0},bh=/^\/(.+)\/([a-z]*)$/,qa=Object.prototype.hasOwnProperty,
J=function(a){return z(a)?a.toLowerCase():a},wb=function(a){return z(a)?a.toUpperCase():a},Ha,A,tb,wa=[].slice,yg=[].splice,ch=[].push,fa=Object.prototype.toString,Rc=Object.getPrototypeOf,xa=M("ng"),Y=E.angular||(E.angular={}),jc,rb=0;Ha=E.document.documentMode;var $=Number.isNaN||function(a){return a!==a};w.$inject=[];Oa.$inject=[];var ve=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,R=function(a){return z(a)?a.trim():a},Od=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},Fa=function(){if(!u(Fa.rules)){var a=E.document.querySelector("[ng-csp]")||E.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Fa.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Fa;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Fa.rules},sb=function(){if(u(sb.name_))return sb.name_;var a,b,d=Ka.length,
c,e;for(b=0;b<d;++b)if(c=Ka[b],a=E.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return sb.name_=e},xe=/:/g,Ka=["ng-","data-ng-","ng:","x-ng-"],Ae=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof E.HTMLScriptElement||b instanceof E.SVGScriptElement))return!1;b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=
b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}})}(E.document),De=/[A-Z]/g,Yc=!1,Ja=3,Ie={full:"1.7.1",major:1,minor:7,dot:1,codeName:"momentum-defiance"};W.expando="ng339";var Qa=W.cache={},kg=1;W._data=function(a){return this.cache[a[this.expando]]||{}};var gg=/-([a-z])/g,dh=/^-ms-/,Cb={mouseleave:"mouseout",mouseenter:"mouseover"},mc=M("jqLite"),jg=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
lc=/<|&#?\w+;/,hg=/<([\w:-]+)/,ig=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,oa={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};oa.optgroup=oa.option;oa.tbody=oa.tfoot=oa.colgroup=oa.caption=oa.thead;oa.th=oa.td;var pg=E.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&
16)},Pa=W.prototype={ready:hd,toString:function(){var a=[];p(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?A(this[a]):A(this[this.length+a])},length:0,push:ch,sort:[].sort,splice:[].splice},Ib={};p("multiple selected checked disabled readOnly required open".split(" "),function(a){Ib[J(a)]=a});var od={};p("input select option textarea button form details".split(" "),function(a){od[a]=!0});var vd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",
ngPattern:"pattern",ngStep:"step"};p({data:qc,removeData:pc,hasData:function(a){for(var b in Qa[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)pc(a[b]),kd(a[b])}},function(a,b){W[b]=a});p({data:qc,inheritedData:Gb,scope:function(a){return A.data(a,"$scope")||Gb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return A.data(a,"$isolateScope")||A.data(a,"$isolateScopeNoTemplate")},controller:ld,injector:function(a){return Gb(a,"$injector")},removeAttr:function(a,
b){a.removeAttribute(b)},hasClass:Db,css:function(a,b,d){b=zb(b.replace(dh,"ms-"));if(u(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Ja&&2!==c&&8!==c&&a.getAttribute){var c=J(b),e=Ib[c];if(u(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(u(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(y(d)){var c=a.nodeType;return 1===c||c===Ja?
a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(y(b)){if(a.multiple&&"select"===ra(a)){var d=[];p(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(y(b))return a.innerHTML;Ab(a,!0);a.innerHTML=b},empty:md},function(a,b){W.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==md&&y(2===a.length&&a!==Db&&a!==ld?b:c)){if(H(b)){for(e=0;e<g;e++)if(a===qc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=
a.$dv;g=y(e)?Math.min(g,1):g;for(f=0;f<g;f++){var k=a(this[f],b,c);e=e?e+k:k}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});p({removeData:pc,on:function(a,b,d,c){if(u(c))throw mc("onargs");if(kc(a)){c=Bb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=mg(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,k=function(b,c,g){var k=e[b];k||(k=e[b]=[],k.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));k.push(d)};g--;)b=c[g],Cb[b]?(k(Cb[b],og),k(b,void 0,!0)):k(b)}},
off:kd,one:function(a,b,d){a=A(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;Ab(a);p(new W(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];p(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new W(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},
prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;p(new W(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=A(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Hb,detach:function(a){Hb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){b=new W(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Fb,removeClass:Eb,toggleClass:function(a,b,d){b&&p(b.split(" "),function(b){var e=d;y(e)&&(e=!Db(a,b));
(e?Fb:Eb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:oc,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=Bb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===
this.immediatePropagationStopped},stopPropagation:w,type:f,target:a},b.type&&(c=Q(c,b)),b=na(g),e=d?[c].concat(d):[c],p(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){W.prototype[b]=function(b,c,e){for(var f,g=0,k=this.length;g<k;g++)y(f)?(f=a(this[g],b,c,e),u(f)&&(f=A(f))):nc(f,a(this[g],b,c,e));return u(f)?f:this}});W.prototype.bind=W.prototype.on;W.prototype.unbind=W.prototype.off;var eh=Object.create(null);pd.prototype={_idx:function(a){if(a===this._lastKey)return this._lastIndex;
this._lastKey=a;return this._lastIndex=this._keys.indexOf(a)},_transformKey:function(a){return $(a)?eh:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};
var Jb=pd,eg=[function(){this.$get=[function(){return Jb}]}],rg=/^([^(]+?)=>/,sg=/^[^(]*\(\s*([^)]*)\)/m,fh=/,/,gh=/^\s*(_?)(\S+?)\1\s*$/,qg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ga=M("$injector");fb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw z(d)&&d||(d=a.name||tg(a)),Ga("strictdi",d);b=qd(a);p(b[1].split(fh),function(a){a.replace(gh,function(a,b,d){c.push(d)})})}a.$inject=c}}else G(a)?(b=a.length-1,ub(a[b],"fn"),c=a.slice(0,b)):ub(a,"fn",
!0);return c};var je=M("$animate"),wf=function(){this.$get=w},xf=function(){var a=new Jb,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=z(b)?b.split(" "):G(b)?b:[],p(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){p(b,function(b){var c=a.get(b);if(c){var d=ug(b.attr("class")),e="",f="";p(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});p(b,function(a){e&&Fb(a,e);f&&Eb(a,f)});a.delete(b)}});b.length=0}return{enabled:w,
on:w,off:w,pin:w,push:function(g,k,h,l){l&&l();h=h||{};h.from&&g.css(h.from);h.to&&g.css(h.to);if(h.addClass||h.removeClass)if(k=h.addClass,l=h.removeClass,h=a.get(g)||{},k=e(h,k,!0),l=e(h,l,!1),k||l)a.set(g,h),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},uf=["$provide",function(a){var b=this,d=null,c=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw je("notcsel",c);var g=c+"-animation";b.$$registeredAnimations[c.substr(1)]=
g;a.factory(g,d)};this.customFilter=function(a){1===arguments.length&&(c=B(a)?a:null);return c};this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,je("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var f=d[e];if(1===f.nodeType){e=f;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):
c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.cancel&&a.cancel()},enter:function(c,d,h,l){d=d&&A(d);h=h&&A(h);d=d||h.parent();b(c,d,h);return a.push(c,"enter",za(l))},move:function(c,d,h,l){d=d&&A(d);h=h&&A(h);d=d||h.parent();b(c,d,h);return a.push(c,"move",za(l))},leave:function(b,c){return a.push(b,"leave",za(c),function(){b.remove()})},addClass:function(b,c,d){d=za(d);d.addClass=ib(d.addclass,c);return a.push(b,"addClass",d)},removeClass:function(b,c,d){d=
za(d);d.removeClass=ib(d.removeClass,c);return a.push(b,"removeClass",d)},setClass:function(b,c,d,f){f=za(f);f.addClass=ib(f.addClass,c);f.removeClass=ib(f.removeClass,d);return a.push(b,"setClass",f)},animate:function(b,c,d,f,m){m=za(m);m.from=m.from?Q(m.from,c):c;m.to=m.to?Q(m.to,d):d;m.tempClasses=ib(m.tempClasses,f||"ng-inline-animate");return a.push(b,"animate",m)}}}]}],zf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();
d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},yf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&
b(e)}var d=0,e=!0;p(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:w,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&
this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(p(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},vf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",
function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);k||h.complete();k=!0});return h}var g=e||{};g.$$prepared||(g=Ea(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var k,h=new d;return{start:f,end:f}}}]},ba=M("$compile"),uc=new function(){};Zc.$inject=["$provide","$$sanitizeUriProvider"];Kb.prototype.isFirstChange=
function(){return this.previousValue===uc};var rd=/^((?:x|data)[:\-_])/i,xg=/[:\-_]+(.)/g,xd=M("$controller"),wd=/^(\S+)(\s+as\s+([\w$]+))?$/,Gf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof A&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},yd="application/json",xc={"Content-Type":yd+";charset=utf-8"},Ag=/^\[|^\{(?!\{)/,Bg={"[":/]$/,"{":/}$/},zg=/^\)]\}',?\n/,Lb=M("$http"),Ba=Y.$interpolateMinErr=M("$interpolate");Ba.throwNoconcat=function(a){throw Ba("noconcat",
a);};Ba.interr=function(a,b){return Ba("interr",a,b.toString())};var Eg=M("$interval"),Of=function(){this.$get=function(){function a(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var b=Y.callbacks,d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},hh=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,
Fg={http:80,https:443,ftp:21},kb=M("$location"),Gg=/^\s*[\\/]{2,}/,ih={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Mb("$$absUrl"),url:function(a){if(y(a))return this.$$url;var b=hh.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Mb("$$protocol"),host:Mb("$$host"),port:Mb("$$port"),path:Fd("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;
case 1:if(z(a)||Z(a))a=a.toString(),this.$$search=gc(a);else if(H(a))a=Ea(a,{}),p(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw kb("isrcharg");break;default:y(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Fd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};p([Ed,Bc,Ac],function(a){a.prototype=Object.create(ih);a.prototype.state=function(b){if(!arguments.length)return this.$$state;
if(a!==Ac||!this.$$html5)throw kb("nostate");this.$$state=y(b)?null:b;this.$$urlUpdatedByLocation=!0;return this}});var Wa=M("$parse"),Kg={}.constructor.prototype.valueOf,Ub=U();p("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ub[a]=!0});var jh={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Ob=function(a){this.options=a};Ob.prototype={constructor:Ob,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),
'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ub[b],e=Ub[d];Ub[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",
this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=
a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;
var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=u(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Wa("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=J(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=
d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=jh[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,
value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var r=function(a,b){this.lexer=a;this.options=b};r.Program="Program";r.ExpressionStatement="ExpressionStatement";r.AssignmentExpression="AssignmentExpression";r.ConditionalExpression="ConditionalExpression";r.LogicalExpression="LogicalExpression";r.BinaryExpression="BinaryExpression";r.UnaryExpression="UnaryExpression";r.CallExpression="CallExpression";r.MemberExpression="MemberExpression";r.Identifier="Identifier";r.Literal=
"Literal";r.ArrayExpression="ArrayExpression";r.Property="Property";r.ObjectExpression="ObjectExpression";r.ThisExpression="ThisExpression";r.LocalsExpression="LocalsExpression";r.NGValueParameter="NGValueParameter";r.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),
!this.expect(";"))return{type:r.Program,body:a}},expressionStatement:function(){return{type:r.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Jd(a))throw Wa("lval");a={type:r.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),
b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:r.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:r.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:r.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),
b;b=this.expect("==","!=","===","!==");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),
b;b=this.expect("*","/","%");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:r.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Ea(this.selfReferential[this.consume().text]):
this.options.literals.hasOwnProperty(this.peek().text)?a={type:r.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:r.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:r.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):
"."===b.text?a={type:r.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:r.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",
a);return{type:r.Identifier,name:a.text}},constant:function(){return{type:r.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:r.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:r.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),
b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:r.ObjectExpression,properties:a}},throwError:function(a,b){throw Wa("syntax",b.text,a,b.index+
1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Wa("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Wa("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},
expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:r.ThisExpression},$locals:{type:r.LocalsExpression}}};var Hd=2;Ld.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};T(a,b.$filter);var d="",c;this.stage="assign";if(c=Kd(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign",
"s,v,l");c=Id(a.body);b.stage="inputs";p(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var k=b.nextId();b.recurse(a,k);b.return_(k);b.state.inputs.push({name:d,isPure:a.isPure});a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,
Hg,Ig,Gd);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;p(b,function(b){a.push("var "+b.name+"="+d.generateFunction(b.name,"s"));b.isPure&&a.push(b.name,".isPure="+JSON.stringify(b.isPure)+";")});b.length&&a.push("fn.inputs=["+b.map(function(a){return a.name}).join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;
p(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,k,h=this,l,m,q;c=c||w;if(!f&&u(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case r.Program:p(a.body,
function(b,c){h.recurse(b.expression,void 0,void 0,function(a){k=a});c!==a.body.length-1?h.current().body.push(k,";"):h.return_(k)});break;case r.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case r.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){k=a});m=a.operator+"("+this.ifDefined(k,0)+")";this.assign(b,m);c(m);break;case r.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){k=a});m="+"===a.operator?
this.plus(g,k):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(k,0):"("+g+")"+a.operator+"("+k+")";this.assign(b,m);c(m);break;case r.LogicalExpression:b=b||this.nextId();h.recurse(a.left,b);h.if_("&&"===a.operator?b:h.not(b),h.lazyRecurse(a.right,b));c(b);break;case r.ConditionalExpression:b=b||this.nextId();h.recurse(a.test,b);h.if_(b,h.lazyRecurse(a.alternate,b),h.lazyRecurse(a.consequent,b));c(b);break;case r.Identifier:b=b||this.nextId();d&&(d.context="inputs"===h.stage?"s":this.assign(this.nextId(),
this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",a.name)),function(){h.if_("inputs"===h.stage||"s",function(){e&&1!==e&&h.if_(h.isNull(h.nonComputedMember("s",a.name)),h.lazyAssign(h.nonComputedMember("s",a.name),"{}"));h.assign(b,h.nonComputedMember("s",a.name))})},b&&h.lazyAssign(b,h.nonComputedMember("l",a.name)));c(b);break;case r.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();h.recurse(a.object,
g,void 0,function(){h.if_(h.notNull(g),function(){a.computed?(k=h.nextId(),h.recurse(a.property,k),h.getStringValue(k),e&&1!==e&&h.if_(h.not(h.computedMember(g,k)),h.lazyAssign(h.computedMember(g,k),"{}")),m=h.computedMember(g,k),h.assign(b,m),d&&(d.computed=!0,d.name=k)):(e&&1!==e&&h.if_(h.isNull(h.nonComputedMember(g,a.property.name)),h.lazyAssign(h.nonComputedMember(g,a.property.name),"{}")),m=h.nonComputedMember(g,a.property.name),h.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){h.assign(b,
"undefined")});c(b)},!!e);break;case r.CallExpression:b=b||this.nextId();a.filter?(k=h.filter(a.callee.name),l=[],p(a.arguments,function(a){var b=h.nextId();h.recurse(a,b);l.push(b)}),m=k+"("+l.join(",")+")",h.assign(b,m),c(b)):(k=h.nextId(),g={},l=[],h.recurse(a.callee,k,g,function(){h.if_(h.notNull(k),function(){p(a.arguments,function(b){h.recurse(b,a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m=g.name?h.member(g.context,g.name,g.computed)+"("+l.join(",")+")":k+"("+l.join(",")+
")";h.assign(b,m)},function(){h.assign(b,"undefined")});c(b)}));break;case r.AssignmentExpression:k=this.nextId();g={};this.recurse(a.left,void 0,g,function(){h.if_(h.notNull(g.context),function(){h.recurse(a.right,k);m=h.member(g.context,g.name,g.computed)+a.operator+k;h.assign(b,m);c(b||m)})},1);break;case r.ArrayExpression:l=[];p(a.elements,function(b){h.recurse(b,a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case r.ObjectExpression:l=
[];q=!1;p(a.properties,function(a){a.computed&&(q=!0)});q?(b=b||this.nextId(),this.assign(b,"{}"),p(a.properties,function(a){a.computed?(g=h.nextId(),h.recurse(a.key,g)):g=a.key.type===r.Identifier?a.key.name:""+a.key.value;k=h.nextId();h.recurse(a.value,k);h.assign(h.member(b,g,a.computed),k)})):(p(a.properties,function(b){h.recurse(b.value,a.constant?void 0:h.nextId(),void 0,function(a){l.push(h.escape(b.key.type===r.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,
m));c(b||m);break;case r.ThisExpression:this.assign(b,"s");c(b||"s");break;case r.LocalsExpression:this.assign(b,"l");c(b||"l");break;case r.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=
this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,
b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,
stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(z(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(Z(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Wa("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};
Md.prototype={compile:function(a){var b=this;T(a,b.$filter);var d,c;if(d=Kd(a))c=this.recurse(d);d=Id(a.body);var e;d&&(e=[],p(d,function(a,c){var d=b.recurse(a);d.isPure=a.isPure;a.input=d;e.push(d);a.watchId=c}));var f=[];p(a.body,function(a){f.push(b.recurse(a.expression))});a=0===a.body.length?w:1===a.body.length?f[0]:function(a,b){var c;p(f,function(d){c=d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,
a.watchId);switch(a.type){case r.Literal:return this.value(a.value,b);case r.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case r.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case r.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case r.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),
b);case r.Identifier:return f.identifier(a.name,b,d);case r.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,e,b,d);case r.CallExpression:return g=[],p(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var q=[],n=0;n<g.length;++n)q.push(g[n](a,c,
d,f));a=e.apply(void 0,q,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var q=e(a,c,d,f),n;if(null!=q.value){n=[];for(var p=0;p<g.length;++p)n.push(g[p](a,c,d,f));n=q.value.apply(q.context,n)}return b?{value:n}:n};case r.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var q=c(a,d,f,g);a=e(a,d,f,g);q.context[q.name]=a;return b?{value:a}:a};case r.ArrayExpression:return g=[],p(a.elements,function(a){g.push(f.recurse(a))}),function(a,
c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case r.ObjectExpression:return g=[],p(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===r.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},n=0;n<g.length;++n)g[n].computed?f[g[n].key(a,c,d,e)]=g[n].value(a,c,d,e):f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case r.ThisExpression:return function(a){return b?
{value:a}:a};case r.LocalsExpression:return function(a,c){return b?{value:c}:c};case r.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=u(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=u(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,
e,f,g);k=Gd(k,c);return d?{value:k}:k}},"binary-":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=(u(k)?k:0)-(u(c)?c:0);return d?{value:k}:k}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,
f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,
g,k){e=a(e,f,g,k)?b(e,f,g,k):d(e,f,g,k);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:e}},computedMember:function(a,b,d,c){return function(e,f,g,k){var h=a(e,f,g,k),l,m;null!=h&&(l=b(e,f,g,k),l+="",c&&1!==c&&h&&!h[l]&&(h[l]={}),m=h[l]);return d?{context:h,name:l,value:m}:m}},nonComputedMember:function(a,
b,d,c){return function(e,f,g,k){e=a(e,f,g,k);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};Nb.prototype={constructor:Nb,parse:function(a){a=this.getAst(a);var b=this.astCompiler.compile(a.ast),d=a.ast;b.literal=0===d.body.length||1===d.body.length&&(d.body[0].expression.type===r.Literal||d.body[0].expression.type===r.ArrayExpression||d.body[0].expression.type===r.ObjectExpression);
b.constant=a.ast.constant;b.oneTime=a.oneTime;return b},getAst:function(a){var b=!1;a=a.trim();":"===a.charAt(0)&&":"===a.charAt(1)&&(b=!0,a=a.substring(2));return{ast:this.ast.ast(a),oneTime:b}}};var va=M("$sce"),V={HTML:"html",CSS:"css",MEDIA_URL:"mediaUrl",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Ec=/_([a-z])/g,Mg=M("$templateRequest"),Ng=M("$timeout"),X=E.document.createElement("a"),Qd=ia(E.location.href),Sa;Rd.$inject=["$document"];fd.$inject=["$provide"];var Yd=22,Xd=".",Gc="0";Sd.$inject=
["$locale"];Ud.$inject=["$locale"];var Yg={yyyy:ca("FullYear",4,0,!1,!0),yy:ca("FullYear",2,0,!0,!0),y:ca("FullYear",1,0,!1,!0),MMMM:mb("Month"),MMM:mb("Month",!0),MM:ca("Month",2,1),M:ca("Month",1,1),LLLL:mb("Month",!1,!0),dd:ca("Date",2),d:ca("Date",1),HH:ca("Hours",2),H:ca("Hours",1),hh:ca("Hours",2,-12),h:ca("Hours",1,-12),mm:ca("Minutes",2),m:ca("Minutes",1),ss:ca("Seconds",2),s:ca("Seconds",1),sss:ca("Milliseconds",3),EEEE:mb("Day"),EEE:mb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:
b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Pb(Math[0<a?"floor":"ceil"](a/60),2)+Pb(Math.abs(a%60),2))},ww:$d(2),w:$d(1),G:Hc,GG:Hc,GGG:Hc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Xg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,Wg=/^-?\d+$/;Td.$inject=["$locale"];var Rg=ma(J),Sg=ma(wb);Vd.$inject=["$parse"];var Ke=ma({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===
b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===fa.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),xb={};p(Ib,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=ua("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});xb[c]=function(){return{restrict:"A",priority:100,link:e}}}});p(vd,function(a,b){xb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===
b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(bh))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});p(["src","srcset","href"],function(a){var b=ua("ng-"+a);xb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===fa.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ha&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var nb={$addControl:w,
$$renameControl:function(a,b){a.$name=b},$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w,$setSubmitted:w,$$setSubmitted:w};Qb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Qb.prototype={$rollbackViewValue:function(){p(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){p(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){La(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$$renameControl:function(a,
b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];p(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);p(this.$error,function(b,d){this.$setValidity(d,null,a)},this);p(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);ab(this.$$controls,a);a.$$parentForm=nb},$setDirty:function(){this.$$animate.removeClass(this.$$element,Xa);this.$$animate.addClass(this.$$element,Vb);this.$dirty=!0;
this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Xa,Vb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;p(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){p(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){for(var a=this;a.$$parentForm&&a.$$parentForm!==nb;)a=a.$$parentForm;a.$$setSubmitted()},$$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");
this.$submitted=!0;p(this.$$controls,function(a){a.$$setSubmitted&&a.$$setSubmitted()})}};ce({clazz:Qb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&(ab(c,d),0===c.length&&delete a[b])}});var ke=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||w}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Qb,compile:function(d,f){d.addClass(Xa).addClass(ob);
var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var q=f[0];if(!("action"in e)){var n=function(b){a.$apply(function(){q.$commitViewValue();q.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",n);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",n)},0,!1)})}(f[1]||q.$$parentForm).$addControl(q);var p=g?c(q.$name):w;g&&(p(a,q),e.$observe(g,function(b){q.$name!==b&&(p(a,void 0),q.$$parentForm.$$renameControl(q,b),p=c(q.$name),p(a,q))}));
d.on("$destroy",function(){q.$$parentForm.$removeControl(q);p(a,void 0);Q(q,nb)})}}}}}]},Le=ke(),Xe=ke(!0),Zg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,kh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,lh=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
$g=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,le=/^(\d{4,})-(\d{2})-(\d{2})$/,me=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Oc=/^(\d{4,})-W(\d\d)$/,ne=/^(\d{4,})-(\d\d)$/,oe=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ee=U();p(["date","datetime-local","month","time","week"],function(a){ee[a]=!0});var pe={text:function(a,b,d,c,e,f){Ua(a,b,d,c,e,f);Jc(c)},date:pb("date",le,Rb(le,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":pb("datetimelocal",me,Rb(me,"yyyy MM dd HH mm ss sss".split(" ")),
"yyyy-MM-ddTHH:mm:ss.sss"),time:pb("time",oe,Rb(oe,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:pb("week",Oc,function(a,b){if(da(a))return a;if(z(a)){Oc.lastIndex=0;var d=Oc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,k=0,h=Zd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),k=b.getMilliseconds());return new Date(c,0,h.getDate()+e,d,f,g,k)}}return NaN},"yyyy-Www"),month:pb("month",ne,Rb(ne,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Kc(a,b,d,c,"number");fe(c);Ua(a,b,d,
c,e,f);var g,k;if(u(d.min)||d.ngMin)c.$validators.min=function(a,b){return c.$isEmpty(b)||y(g)||b>=g},d.$observe("min",function(a){g=Va(a);c.$validate()});if(u(d.max)||d.ngMax)c.$validators.max=function(a,b){return c.$isEmpty(b)||y(k)||b<=k},d.$observe("max",function(a){k=Va(a);c.$validate()});if(u(d.step)||d.ngStep){var h;c.$validators.step=function(a,b){return c.$isEmpty(b)||y(h)||ge(b,g||0,h)};d.$observe("step",function(a){h=Va(a);c.$validate()})}},url:function(a,b,d,c,e,f){Ua(a,b,d,c,e,f);Jc(c);
c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||kh.test(d)}},email:function(a,b,d,c,e,f){Ua(a,b,d,c,e,f);Jc(c);c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||lh.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==R(d.ngTrim);y(d.name)&&b.attr("name",++rb);b.on("change",function(a){var g;b[0].checked&&(g=d.value,e&&(g=R(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=R(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},
range:function(a,b,d,c,e,f){function g(a,c){b.attr(a,d[a]);d.$observe(a,c)}function k(a){q=Va(a);$(c.$modelValue)||(m?(a=b.val(),q>a&&(a=q,b.val(a)),c.$setViewValue(a)):c.$validate())}function h(a){n=Va(a);$(c.$modelValue)||(m?(a=b.val(),n<a&&(b.val(n),a=n<q?q:n),c.$setViewValue(a)):c.$validate())}function l(a){p=Va(a);$(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}Kc(a,b,d,c,"range");fe(c);Ua(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,q=
m?0:void 0,n=m?100:void 0,p=m?1:void 0,r=b[0].validity;a=u(d.min);e=u(d.max);f=u(d.step);var v=c.$render;c.$render=m&&u(r.rangeUnderflow)&&u(r.rangeOverflow)?function(){v();c.$setViewValue(b.val())}:v;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||y(q)||b>=q},g("min",k));e&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||y(n)||b<=n},g("max",h));f&&(c.$validators.step=m?function(){return!r.stepMismatch}:function(a,b){return c.$isEmpty(b)||
y(p)||ge(b,q||0,p)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,k){var h=he(k,a,"ngTrueValue",d.ngTrueValue,!0),l=he(k,a,"ngFalseValue",d.ngFalseValue,!1);b.on("change",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return sa(a,h)});c.$parsers.push(function(a){return a?h:l})},hidden:w,button:w,submit:w,reset:w,file:w},$c=["$browser","$sniffer","$filter","$parse",function(a,
b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,k){k[0]&&(pe[J(g.type)]||pe.text)(e,f,g,k[0],b,a,d,c)}}}}],mh=/^(true|false|\d+)$/,qf=function(){function a(a,d,c){var e=u(c)?c:9===Ha?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return mh.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Pe=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);
return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=ic(a)})}}}}],Re=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=y(a)?"":a})}}}}],Qe=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,
function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],pf=ma({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Se=Mc("",!0),Ue=Mc("Odd",0),Te=Mc("Even",1),Ve=Ta({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),We=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],
ed={},nh={blur:!0,focus:!0};p("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=ua("ng-"+a);ed[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b]);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};nh[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Ze=["$animate","$compile",function(a,b){return{multiElement:!0,
transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var k,h,l;d.$watch(e.ngIf,function(d){d?h||g(function(d,f){h=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);k={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=vb(k.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),k=null))})}}}],$e=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",
controller:Y.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",k=e.autoscroll;return function(c,e,m,q,n){var p=0,r,v,t,w=function(){v&&(v.remove(),v=null);r&&(r.$destroy(),r=null);t&&(d.leave(t).done(function(a){!1!==a&&(v=null)}),v=t,t=null)};c.$watch(f,function(f){var m=function(a){!1===a||!u(k)||k&&!c.$eval(k)||b()},v=++p;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&v===p){var b=c.$new();q.template=a;a=n(b,function(a){w();d.enter(a,null,e).done(m)});r=b;t=a;r.$emit("$includeContentLoaded",
f);c.$eval(g)}},function(){c.$$destroyed||v!==p||(w(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(w(),q.template=null)})}}}}],sf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){fa.call(d[0]).match(/SVG/)?(d.empty(),a(gd(e.template,E.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],af=Ta({priority:450,compile:function(){return{pre:function(a,
b,d){a.$eval(d.ngInit)}}}}),of=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?R(e):e;c.$parsers.push(function(a){if(!y(a)){var b=[];a&&p(a.split(g),function(a){a&&b.push(f?R(a):a)});return b}});c.$formatters.push(function(a){if(G(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",be="ng-invalid",Xa="ng-pristine",Vb="ng-dirty",qb=M("ngModel");Sb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");
Sb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);B(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){B(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw qb("nonassign",this.$$attr.ngModel,ya(this.$$element));},$render:w,$isEmpty:function(a){return y(a)||
""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Vb);this.$$animate.addClass(this.$$element,Xa)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,
Xa);this.$$animate.addClass(this.$$element,Vb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!$(this.$modelValue)){var a=
this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;p(h.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(p(h.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;p(h.$asyncValidators,function(e,
g){var h=e(a,b);if(!h||!B(h.then))throw qb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?h.$$q.all(c).then(function(){g(d)},w):g(!0)}function f(a,b){k===h.$$currentValidationRunId&&h.$setValidity(a,b)}function g(a){k===h.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var k=this.$$currentValidationRunId,h=this;(function(){var a=h.$$parserName;if(y(h.$$parserValid))f(a,null);else return h.$$parserValid||(p(h.$validators,function(a,
b){f(b,null)}),p(h.$asyncValidators,function(a,b){f(b,null)})),f(a,h.$$parserValid),h.$$parserValid;return!0})()?c()?e():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;this.$$parserValid=
y(a)?void 0:!0;this.$setValidity(this.$$parserName,null);this.$$parserName="parse";if(this.$$parserValid)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),y(a)){this.$$parserValid=!1;break}$(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=
d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue);p(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");Z(b[a])?b=b[a]:Z(b["default"])&&-1===this.$options.getOption("updateOn").indexOf(a)?
b=b["default"]:Z(b["*"])&&(b=b["*"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$rootScope.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},$overrideModelOptions:function(a){this.$options=this.$options.createChild(a);this.$$setUpdateOnEvents()},$processModelValue:function(){var a=this.$$format();this.$viewValue!==a&&(this.$$updateEmptyClasses(a),this.$viewValue=this.$$lastCommittedViewValue=
a,this.$render(),this.$$runValidators(this.$modelValue,this.$viewValue,w))},$$format:function(){for(var a=this.$formatters,b=a.length,d=this.$modelValue;b--;)d=a[b](d);return d},$$setModelValue:function(a){this.$modelValue=this.$$rawModelValue=a;this.$$parserValid=void 0;this.$processModelValue()},$$setUpdateOnEvents:function(){this.$$updateEvents&&this.$$element.off(this.$$updateEvents,this.$$updateEventHandler);if(this.$$updateEvents=this.$options.getOption("updateOn"))this.$$element.on(this.$$updateEvents,
this.$$updateEventHandler)},$$updateEventHandler:function(a){this.$$debounceViewValueCommit(a&&a.type)}};ce({clazz:Sb,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var nf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Sb,priority:1,compile:function(b){b.addClass(Xa).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=f.$options;g.$$initGetterSetters();b.$addControl(g);
e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){k.$setTouched()}var k=f[0];k.$$setUpdateOnEvents();c.on("blur",function(){k.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Tb,oh=/(\s+|^)default(\s+|$)/;Nc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=!1;a=Q({},a);p(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=
this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=R(d.replace(oh,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ie(a,this.$$options));ie(a,Tb.$$options);return new Nc(a)}};Tb=new Nc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var rf=function(){function a(a,d){this.$$attrs=a;this.$$scope=d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=
this.parentCtrl?this.parentCtrl.$options:Tb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},bf=Ta({terminal:!0,priority:1E3}),ph=M("ngOptions"),qh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
lf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!p&&la(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var q=a.match(qh);if(!q)throw ph("iexp",a,ya(b));var n=q[5]||q[7],p=q[6];a=/ as /.test(q[0])&&q[1];var r=q[9];b=d(q[2]?q[1]:n);var v=a&&d(a)||b,t=r&&d(r),u=r?function(a,b){return t(c,b)}:function(a){return Ra(a)},
w=function(a,b){return u(a,z(a,b))},y=d(q[2]||q[1]),C=d(q[3]||""),F=d(q[4]||""),I=d(q[8]),A={},z=p?function(a,b){A[p]=b;A[n]=a;return A}:function(a){A[n]=a;return A};return{trackBy:r,getTrackByValue:w,getWatchables:d(I,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var k=a===d?g:d[g],l=a[k],k=z(l,k),l=u(l,k);b.push(l);if(q[2]||q[1])l=y(c,k),b.push(l);q[4]&&(k=F(c,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},d=I(c)||[],g=f(d),k=g.length,n=0;n<k;n++){var q=d===
g?n:g[n],p=z(d[q],q),s=v(c,p),q=u(s,p),t=y(c,p),A=C(c,p),p=F(c,p),s=new e(q,s,t,A,p);a.push(s);b[q]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[w(a)]},getViewValueFromOption:function(a){return r?Ea(a.viewValue):a.viewValue}}}}}var e=E.document.createElement("option"),f=E.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=w},post:function(d,k,h,l){function m(a){var b=(a=w.getOptionFromViewValue(a))&&
a.element;b&&!b.selected&&(b.selected=!0);return a}function q(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}var n=l[0],r=l[1],D=h.multiple;l=0;for(var v=k.children(),t=v.length;l<t;l++)if(""===v[l].value){n.hasEmptyOption=!0;n.emptyOption=v.eq(l);break}k.empty();l=!!n.emptyOption;A(e.cloneNode(!1)).val("?");var w,y=c(h.ngOptions,k,d),z=b[0].createDocumentFragment();n.generateUnknownOptionValue=function(a){return"?"};D?(n.writeValue=
function(a){if(w){var b=a&&a.map(m)||[];w.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})}},n.readValue=function(){var a=k.val()||[],b=[];p(a,function(a){(a=w.selectValueMap[a])&&!a.disabled&&b.push(w.getViewValueFromOption(a))});return b},y.trackBy&&d.$watchCollection(function(){if(G(r.$viewValue))return r.$viewValue.map(function(a){return y.getTrackByValue(a)})},function(){r.$render()})):(n.writeValue=function(a){if(w){var b=k[0].options[k[0].selectedIndex],
c=w.getOptionFromViewValue(a);b&&b.removeAttribute("selected");c?(k[0].value!==c.selectValue&&(n.removeUnknownOption(),k[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):n.selectUnknownOrEmptyOption(a)}},n.readValue=function(){var a=w.selectValueMap[k.val()];return a&&!a.disabled?(n.unselectEmptyOption(),n.removeUnknownOption(),w.getViewValueFromOption(a)):null},y.trackBy&&d.$watch(function(){return y.getTrackByValue(r.$viewValue)},function(){r.$render()}));
l&&(a(n.emptyOption)(d),k.prepend(n.emptyOption),8===n.emptyOption[0].nodeType?(n.hasEmptyOption=!1,n.registerOption=function(a,b){""===b.val()&&(n.hasEmptyOption=!0,n.emptyOption=b,n.emptyOption.removeClass("ng-scope"),r.$render(),b.on("$destroy",function(){var a=n.$isEmptyOptionSelected();n.hasEmptyOption=!1;n.emptyOption=void 0;a&&r.$render()}))}):n.emptyOption.removeClass("ng-scope"));d.$watchCollection(y.getWatchables,function(){var a=w&&n.readValue();if(w)for(var b=w.items.length-1;0<=b;b--){var c=
w.items[b];u(c.group)?Hb(c.element.parentNode):Hb(c.element)}w=y.getOptions();var d={};w.items.forEach(function(a){var b;if(u(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),z.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=e.cloneNode(!1);b.appendChild(c);q(a,c)}else b=e.cloneNode(!1),z.appendChild(b),q(a,b)});k[0].appendChild(z);r.$render();r.$isEmpty(a)||(b=n.readValue(),(y.trackBy||D?sa(a,b):a===b)||(r.$setViewValue(b),r.$render()))})}}}}],cf=["$locale","$interpolate","$log",
function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,k){function h(a){g.text(a||"")}var l=k.count,m=k.$attr.when&&g.attr(k.$attr.when),q=k.offset||0,n=f.$eval(m)||{},r={},u=b.startSymbol(),v=b.endSymbol(),t=u+l+"-"+q+v,A=Y.noop,z;p(k,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+J(c[2]),n[c]=g.attr(k.$attr[b]))});p(n,function(a,d){r[d]=b(a.replace(c,t))});f.$watch(l,function(b){var c=parseFloat(b),e=$(c);e||c in n||(c=a.pluralCat(c-q));c===z||e&&$(z)||(A(),e=r[c],y(e)?(null!=
b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),A=w,h()):A=f.$watch(e,h),z=c)})}}}],qe=M("ngRef"),df=["$parse",function(a){return{priority:-1,restrict:"A",compile:function(b,d){var c=ua(ra(b)),e=a(d.ngRef),f=e.assign||function(){throw qe("nonassign",d.ngRef);};return function(a,b,h){var l;if(h.hasOwnProperty("ngRefRead"))if("$element"===h.ngRefRead)l=b;else{if(l=b.data("$"+h.ngRefRead+"Controller"),!l)throw qe("noctrl",h.ngRefRead,d.ngRef);}else l=b.data("$"+c+"Controller");l=l||b;f(a,
l);b.on("$destroy",function(){e(a)===l&&f(a,null)})}}}}],ef=["$parse","$animate","$compile",function(a,b,d){var c=M("ngRepeat"),e=function(a,b,c,d,e,m,q){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===q-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var k=g.ngRepeat,h=d.$$createComment("end ngRepeat",k),l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!l)throw c("iexp",k);var m=l[1],q=l[2],n=l[3],r=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var u=l[3]||l[1],v=l[2];if(n&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(n)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(n)))throw c("badident",n);var t,w,y,A,z={$id:Ra};r?t=a(r):(y=function(a,b){return Ra(b)},A=function(a){return a});return function(a,d,f,g,l){t&&(w=function(b,c,d){v&&(z[v]=b);z[u]=c;z.$index=
d;return t(a,z)});var m=U();a.$watchCollection(q,function(f){var g,q,r=d[0],t,s=U(),z,C,E,B,H,G,J;n&&(a[n]=f);if(la(f))H=f,q=w||y;else for(J in q=w||A,H=[],f)qa.call(f,J)&&"$"!==J.charAt(0)&&H.push(J);z=H.length;J=Array(z);for(g=0;g<z;g++)if(C=f===H?g:H[g],E=f[C],B=q(C,E,g),m[B])G=m[B],delete m[B],s[B]=G,J[g]=G;else{if(s[B])throw p(J,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",k,B,E);J[g]={id:B,scope:void 0,clone:void 0};s[B]=!0}for(t in m){G=m[t];B=vb(G.clone);b.leave(B);if(B[0].parentNode)for(g=
0,q=B.length;g<q;g++)B[g].$$NG_REMOVED=!0;G.scope.$destroy()}for(g=0;g<z;g++)if(C=f===H?g:H[g],E=f[C],G=J[g],G.scope){t=r;do t=t.nextSibling;while(t&&t.$$NG_REMOVED);G.clone[0]!==t&&b.move(vb(G.clone),null,r);r=G.clone[G.clone.length-1];e(G.scope,g,u,E,v,C,z)}else l(function(a,c){G.scope=c;var d=h.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;G.clone=a;s[G.id]=G;e(G.scope,g,u,E,v,C,z)});m=s})}}}}],ff=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,
function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ye=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],gf=Ta(function(a,b,d){a.$watchCollection(d.ngStyle,function(a,d){d&&a!==d&&p(d,function(a,c){b.css(c,"")});a&&b.css(a)})}),hf=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(d,c,e,f){var g=[],k=[],h=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){for(var d,e;h.length;)a.cancel(h.pop());d=0;for(e=l.length;d<e;++d){var r=vb(k[d].clone);l[d].$destroy();(h[d]=a.leave(r)).done(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&p(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");k.push({clone:d});a.enter(d,f.parent(),
f)})})})}}}],jf=Ta({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});p(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),kf=Ta({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),rh=M("ngTransclude"),
mf=["$compile",function(a){return{restrict:"EAC",compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,k){function h(){d(a,function(a){b.append(a)})}if(!k)throw rh("orphan",ya(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;k(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==Ja||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(h(),c.$destroy())},null,f);f&&!k.isSlotFilled(f)&&
h()}}}}],Me=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],sh={$setViewValue:w,$render:w},th=["$element","$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}var e=this,f=new Jb;e.selectValueMap={};e.ngModelCtrl=sh;
e.multiple=!1;e.unknownOption=A(E.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);Da(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Da(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+Ra(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&
e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Da(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&Da(e.emptyOption,!1)};b.$on("$destroy",function(){e.renderUnknownOption=w});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&Da(A(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=Ra(b),a.val(c in e.selectValueMap?
c:b),Da(A(a[0].options[a[0].selectedIndex]),!0)):e.selectUnknownOrEmptyOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){La(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};e.$hasEmptyOption=function(){return e.hasEmptyOption};e.$isUnknownOptionSelected=function(){return a[0].options[0]===
e.unknownOption[0]};e.$isEmptyOptionSelected=function(){return e.hasEmptyOption&&a[0].options[a[0].selectedIndex]===e.emptyOption[0]};e.selectUnknownOrEmptyOption=function(a){null==a&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(a):e.renderUnknownOption(a)};var g=!1,k=!1;e.registerOption=function(a,b,f,g,k){if(f.$attr.ngValue){var p,r=NaN;f.$observe("value",function(a){var d,f=b.prop("selected");u(r)&&(e.removeOption(p),delete e.selectValueMap[r],
d=!0);r=Ra(a);p=a;e.selectValueMap[r]=a;e.addOption(a,b);b.attr("value",r);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");u(p)&&(e.removeOption(p),d=!0);p=a;e.addOption(a,b);d&&f&&c()}):k?a.$watch(k,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});
b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Ne=function(){return{restrict:"E",require:["select","?ngModel"],controller:th,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];p(b.find("option"),function(b){b.selected&&!b.disabled&&
(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){p(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Da(A(b),c)})};var g,k=NaN;a.$watch(function(){k!==f.$viewValue||sa(g,f.$viewValue)||(g=na(f.$viewValue),f.$render());k=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=w},post:function(a,b,d,c){var e=
c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Oe=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;u(d.ngValue)||(u(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var h=b.parent();(h=h.data("$selectController")||h.parent().data("$selectController"))&&h.registerOption(a,b,d,c,e)}}}}],bd=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=
function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},ad=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){z(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw M("ngPattern")("noregexp",f,a,ya(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||y(e)||e.test(b)}}}}},dd=function(){return{restrict:"A",require:"?ngModel",
link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=ea(a);e=$(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},cd=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=ea(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};E.angular.bootstrap?E.console&&console.log("WARNING: Tried to load AngularJS more than once."):
(Ee(),He(Y),Y.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,
minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),A(function(){ze(E.document,Wc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.7.1
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,e){'use strict';function m(d,k,l){var a=l.baseHref(),h=d[0];return function(f,b,c){var d,g;c=c||{};g=c.expires;d=e.isDefined(c.path)?c.path:a;e.isUndefined(b)&&(g="Thu, 01 Jan 1970 00:00:00 GMT",b="");e.isString(g)&&(g=new Date(g));b=encodeURIComponent(f)+"="+encodeURIComponent(b);b=b+(d?";path="+d:"")+(c.domain?";domain="+c.domain:"");b+=g?";expires="+g.toUTCString():"";b+=c.secure?";secure":"";b+=c.samesite?";samesite="+c.samesite:"";c=b.length+1;4096<c&&k.warn("Cookie '"+f+"' possibly not set or overflowed because it was too large ("+
c+" > 4096 bytes)!");h.cookie=b}}e.module("ngCookies",["ng"]).info({angularVersion:"1.7.1"}).provider("$cookies",[function(){var d=this.defaults={};this.$get=["$$cookieReader","$$cookieWriter",function(k,l){return{get:function(a){return k()[a]},getObject:function(a){return(a=this.get(a))?e.fromJson(a):a},getAll:function(){return k()},put:function(a,h,f){l(a,h,f?e.extend({},d,f):d)},putObject:function(a,d,f){this.put(a,e.toJson(d),f)},remove:function(a,h){l(a,void 0,h?e.extend({},d,h):d)}}}]}]);m.$inject=
["$document","$log","$browser"];e.module("ngCookies").provider("$$cookieWriter",function(){this.$get=m})})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

/*! angular-css 1.0.8 | Copyright (c) 2016 Alex Castillo | MIT License */"use strict";!function(a){var b=a.module("angularCSS",[]);a.module("door3.css",[]).run(function(){console.error('AngularCSS: The module name "door3.css" is now deprecated. Please use "angularCSS" instead.')}),b.provider("$css",[function(){var b=this.defaults={element:"link",rel:"stylesheet",type:"text/css",container:"head",method:"append",weight:0},d=!1;this.debugMode=function(b){return a.isDefined(b)&&(d=b),d},this.$get=["$rootScope","$injector","$q","$window","$timeout","$compile","$http","$filter","$log","$interpolate",function(e,f,g,h,i,j,k,l,m,n){function o(a,b,c){c&&b.hasOwnProperty("css")&&y.bind(b.css,c)}function p(a,b,c){c&&(y.remove(y.getFromRoute(c).concat(F)),F.length=0),b&&y.add(y.getFromRoute(b))}function q(a,b,c,d){d&&(y.remove(y.getFromState(d).concat(F)),F.length=0),b&&y.add(y.getFromState(b))}function r(b){a.isDefined(D.breakpoints)&&(b.breakpoint in D.breakpoints&&(b.media=D.breakpoints[b.breakpoint]),delete b.breakpoints)}function s(b){return b?(a.isFunction(b)&&(b=a.copy(f.invoke(b))),a.isString(b)&&(b=a.extend({href:b},D)),a.isArray(b)&&a.isString(b[0])&&a.forEach(b,function(c){b=a.extend({href:c},D)}),a.isObject(b)&&!a.isArray(b)&&(b=a.extend({},D,b)),a.isArray(b)&&a.isObject(b[0])&&a.forEach(b,function(c){b=a.extend(c,D)}),r(b),b):void 0}function t(a){if(!a)return void(d&&m.error("No stylesheets provided"));var b="?cache=";-1===a.href.indexOf(b)&&(a.href=a.href+(a.bustCache?b+(new Date).getTime():""))}function u(a,b){return a&&b?l("filter")(a,function(a){return a[b]}):void(d&&m.error("filterBy: missing array or property"))}function v(a){return a?(A[a.href]=h.matchMedia(a.media),B[a.href]=function(b){i(function(){if(b.matches)e.stylesheets.push(a);else{var c=e.stylesheets.indexOf(l("filter")(e.stylesheets,{href:a.href})[0]);-1!==c&&e.stylesheets.splice(c,1)}})},A[a.href].addListener(B[a.href]),void B[a.href](A[a.href])):void(d&&m.error("No stylesheet provided"))}function w(b){return b?void(e&&a.isDefined(A)&&A[b.href]&&a.isDefined(B)&&A[b.href].removeListener(B[b.href])):void(d&&m.error("No stylesheet provided"))}function x(a){return a?!(!a.media||-1!==C.indexOf(a.media)||!h.matchMedia):void(d&&m.error("No stylesheet provided"))}var y={},z='<link ng-repeat="stylesheet in stylesheets | orderBy: \'weight\' track by $index " rel="{{ stylesheet.rel }}" type="{{ stylesheet.type }}" ng-href="{{ stylesheet.href }}" ng-attr-media="{{ stylesheet.media }}">';z=z.replace(/{{/g,n.startSymbol()).replace(/}}/g,n.endSymbol());var A={},B={},C=["print"],D=a.extend({},b),E=a.element(document.querySelector?document.querySelector(D.container):document.getElementsByTagName(D.container)[0]),F=[];return a.forEach(c,function(a,b){a.hasOwnProperty("css")&&(c[b]=s(a.css))}),e.stylesheets=[],E[D.method](j(z)(e)),e.$on("$directiveAdd",o),e.$on("$routeChangeSuccess",p),e.$on("$stateChangeSuccess",q),y.getFromRoute=function(b){if(!b)return void(d&&m.error("Get From Route: No route provided"));var c=null,e=[];return b.$$route&&b.$$route.css?c=b.$$route.css:b.css&&(c=b.css),c&&(a.isArray(c)?a.forEach(c,function(b){a.isFunction(b)&&F.push(s(b)),e.push(s(b))}):(a.isFunction(c)&&F.push(s(c)),e.push(s(c)))),e},y.getFromRoutes=function(b){if(!b)return void(d&&m.error("Get From Routes: No routes provided"));var c=[];return a.forEach(b,function(a){var b=y.getFromRoute(a);b.length&&c.push(b[0])}),c},y.getFromState=function(b){if(!b)return void(d&&m.error("Get From State: No state provided"));var c=[];if(a.isDefined(b.views)&&a.forEach(b.views,function(b){b.css&&(a.isFunction(b.css)&&F.push(s(b.css)),c.push(s(b.css)))}),a.isDefined(b.children)&&a.forEach(b.children,function(b){b.css&&(a.isFunction(b.css)&&F.push(s(b.css)),c.push(s(b.css))),a.isDefined(b.children)&&a.forEach(b.children,function(b){b.css&&(a.isFunction(b.css)&&F.push(s(b.css)),c.push(s(b.css)))})}),a.isDefined(b.css)||a.isDefined(b.data)&&a.isDefined(b.data.css)){var e=b.css||b.data.css;a.isArray(e)?a.forEach(e,function(b){a.isFunction(b)&&F.push(s(b)),c.push(s(b))}):(a.isFunction(e)&&F.push(s(e)),c.push(s(e)))}return c},y.getFromStates=function(b){if(!b)return void(d&&m.error("Get From States: No states provided"));var c=[];return a.forEach(b,function(b){var d=y.getFromState(b);a.isArray(d)?a.forEach(d,function(a){c.push(a)}):c.push(d)}),c},y.preload=function(b,e){b||(b=[],c.length&&Array.prototype.push.apply(b,c),f.has("$route")&&Array.prototype.push.apply(b,y.getFromRoutes(f.get("$route").routes)),f.has("$state")&&Array.prototype.push.apply(b,y.getFromStates(f.get("$state").get())),b=u(b,"preload")),a.isArray(b)||(b=[b]);var h=[];a.forEach(b,function(a,c){a=b[c]=s(a),h.push(k.get(a.href).error(function(b){d&&m.error("AngularCSS: Incorrect path for "+a.href)}))}),a.isFunction(e)&&g.all(h).then(function(){e(b)})},y.bind=function(b,c){if(!b||!c)return void(d&&m.error("No scope or stylesheets provided"));var e=[];a.isArray(b)?a.forEach(b,function(a){e.push(s(a))}):e.push(s(b)),y.add(e),d&&m.debug("$css.bind(): Added",e),c.$on("$destroy",function(){y.remove(e),d&&m.debug("$css.bind(): Removed",e)})},y.add=function(b,c){return b?(a.isArray(b)||(b=[b]),a.forEach(b,function(a){a=s(a),a.href&&!l("filter")(e.stylesheets,{href:a.href}).length&&(t(a),x(a)?v(a):e.stylesheets.push(a),d&&m.debug("$css.add(): "+a.href))}),void e.$broadcast("$cssAdd",b,e.stylesheets)):void(d&&m.error("No stylesheets provided"))},y.remove=function(b,c){return b?(a.isArray(b)||(b=[b]),b=l("filter")(b,function(a){return!a.persist}),a.forEach(b,function(a){a=s(a);var b=e.stylesheets.indexOf(l("filter")(e.stylesheets,{href:a.href})[0]);-1!==b&&e.stylesheets.splice(b,1),w(a),d&&m.debug("$css.remove(): "+a.href)}),void e.$broadcast("$cssRemove",b,e.stylesheets)):void(d&&m.error("No stylesheets provided"))},y.removeAll=function(){e&&e.hasOwnProperty("stylesheets")&&(e.stylesheets.length=0),d&&m.debug("all stylesheets removed")},y.preload(),y}]}]),b.filter("$cssLinks",function(){return function(b){if(!b||!a.isArray(b))return b;var c="";return a.forEach(b,function(a){c+='<link rel="'+a.rel+'" type="'+a.type+'" href="'+a.href+'"',c+=a.media?' media="'+a.media+'"':"",c+=">\n\n"}),c}}),b.run(["$css",function(a){}]);var c=[],d=a.module,e=function(a,b){return a.reduce(function(a,c){return a.push(b(c)),a},[])},f=function(a,b){return a.indexOf(b)>-1};a.module=function(){var b=d.apply(this,arguments),g=b.directive;b.directive=function(b,d){var h=a.isFunction(d)?d:d[d?d.length-1:0];try{var i=a.copy(h)();i.directiveName=b,i.hasOwnProperty("css")&&!f(e(c,function(a){return a.ddo.directiveName}),b)&&c.push({ddo:i,handled:!1})}catch(j){}return g.apply(this,arguments)};var h=b.component;return b.component=function(a,b){return b.directiveName=a,b.hasOwnProperty("css")&&!f(e(c,function(a){return a.ddo.directiveName}),a)&&c.push({ddo:b,handled:!1}),h.apply(this,arguments)},b.config(["$provide","$injector",function(b,d){a.forEach(c,function(a){if(!a.handled){var c=a.ddo,e=c.directiveName+"Directive";d.has(e)&&(a.handled=!0,b.decorator(e,["$delegate","$rootScope","$timeout",function(a,b,d){var e=a[0],f=e.compile;return e.css||(e.css=c.css),e.compile=function(){var a=f?f.apply(this,arguments):!1;return function(c){var f=arguments;d(function(){a&&a.apply(this,f)}),b.$broadcast("$directiveAdd",e,c)}},a}]))}})}]),b}}(angular);
/*
 AngularJS v1.7.1
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(J,d){'use strict';function A(d){k&&d.get("$route")}function B(t,u,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,m){function v(){l&&(g.cancel(l),l=null);p&&(p.$destroy(),p=null);q&&(l=g.leave(q),l.done(function(a){!1!==a&&(l=null)}),q=null)}function E(){var b=t.current&&t.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=t.current;q=m(b,function(b){g.enter(b,null,q||f).done(function(b){!1===b||!d.isDefined(w)||w&&!a.$eval(w)||u()});
v()});p=c.scope=b;p.$emit("$viewContentLoaded");p.$eval(k)}else v()}var p,q,l,w=b.autoscroll,k=b.onload||"";a.$on("$routeChangeSuccess",E);E()}}}function C(d,k,g){return{restrict:"ECA",priority:-400,link:function(a,f){var b=g.current,c=b.locals;f.html(c.$template);var m=d(f.contents());if(b.controller){c.$scope=a;var v=k(b.controller,c);b.controllerAs&&(a[b.controllerAs]=v);f.data("$ngControllerController",v);f.children().data("$ngControllerController",v)}a[b.resolveAs||"$resolve"]=c;m(a)}}}var x,
y,F,G,z=d.module("ngRoute",[]).info({angularVersion:"1.7.1"}).provider("$route",function(){function t(a,f){return d.extend(Object.create(a),f)}function u(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},g=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)(\*\?|[?*])?/g,function(a,b,d,c){a="?"===c||"*?"===c?"?":null;c="*"===c||"*?"===c?"*":null;g.push({name:d,optional:!!a});b=b||"";return""+(a?"":b)+"(?:"+(a?b:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([/$*])/g,
"\\$1");c.regexp=new RegExp("^"+a+"$",b?"i":"");return c}x=d.isArray;y=d.isObject;F=d.isDefined;G=d.noop;var g={};this.when=function(a,f){var b;b=void 0;if(x(f)){b=b||[];for(var c=0,m=f.length;c<m;c++)b[c]=f[c]}else if(y(f))for(c in b=b||{},f)if("$"!==c.charAt(0)||"$"!==c.charAt(1))b[c]=f[c];b=b||f;d.isUndefined(b.reloadOnUrl)&&(b.reloadOnUrl=!0);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=d.extend(b,
a&&u(a,b));a&&(c="/"===a[a.length-1]?a.substr(0,a.length-1):a+"/",g[c]=d.extend({redirectTo:a},u(c,b)));return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};k=!0;this.eagerInstantiationEnabled=function(a){return F(a)?(k=a,this):k};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce","$browser",function(a,f,b,c,m,k,u,p){function q(e){var h=s.current;n=C();(y=!D&&n&&h&&n.$$route===
h.$$route&&(!n.reloadOnUrl||!n.reloadOnSearch&&d.equals(n.pathParams,h.pathParams)))||!h&&!n||a.$broadcast("$routeChangeStart",n,h).defaultPrevented&&e&&e.preventDefault()}function l(){var e=s.current,h=n;if(y)e.params=h.params,d.copy(e.params,b),a.$broadcast("$routeUpdate",e);else if(h||e){D=!1;s.current=h;var H=c.resolve(h);p.$$incOutstandingRequestCount();H.then(w).then(z).then(function(c){return c&&H.then(A).then(function(c){h===s.current&&(h&&(h.locals=c,d.copy(h.params,b)),a.$broadcast("$routeChangeSuccess",
h,e))})}).catch(function(b){h===s.current&&a.$broadcast("$routeChangeError",h,e,b)}).finally(function(){p.$$completeOutstandingRequest(G)})}}function w(e){var a={route:e,hasRedirection:!1};if(e)if(e.redirectTo)if(d.isString(e.redirectTo))a.path=x(e.redirectTo,e.params),a.search=e.params,a.hasRedirection=!0;else{var b=f.path(),g=f.search();e=e.redirectTo(e.pathParams,b,g);d.isDefined(e)&&(a.url=e,a.hasRedirection=!0)}else if(e.resolveRedirectTo)return c.resolve(m.invoke(e.resolveRedirectTo)).then(function(e){d.isDefined(e)&&
(a.url=e,a.hasRedirection=!0);return a});return a}function z(a){var b=!0;if(a.route!==s.current)b=!1;else if(a.hasRedirection){var d=f.url(),c=a.url;c?f.url(c).replace():c=f.path(a.path).search(a.search).replace().url();c!==d&&(b=!1)}return b}function A(a){if(a){var b=d.extend({},a.resolve);d.forEach(b,function(a,e){b[e]=d.isString(a)?m.get(a):m.invoke(a,null,null,e)});a=B(a);d.isDefined(a)&&(b.$template=a);return c.all(b)}}function B(a){var b,c;d.isDefined(b=a.template)?d.isFunction(b)&&(b=b(a.params)):
d.isDefined(c=a.templateUrl)&&(d.isFunction(c)&&(c=c(a.params)),d.isDefined(c)&&(a.loadedTemplateUrl=u.valueOf(c),b=k(c)));return b}function C(){var a,b;d.forEach(g,function(c,g){var r;if(r=!b){var k=f.path();r=c.keys;var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,p=k.length;l<p;++l){var n=r[l-1],q=k[l];n&&q&&(m[n.name]=q)}r=m}else r=null;else r=null;r=a=r}r&&(b=t(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||g[null]&&t(g[null],{params:{},pathParams:{}})}function x(a,
b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var e=a.match(/(\w+)(?:[?*])?(.*)/),f=e[1];c.push(b[f]);c.push(e[2]||"");delete b[f]}});return c.join("")}var D=!1,n,y,s={routes:g,reload:function(){D=!0;var b={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=!0;D=!1}};a.$evalAsync(function(){q(b);b.defaultPrevented||l()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(x(this.current.$$route.originalPath,
a)),f.search(a);else throw I("norout");}};a.$on("$locationChangeStart",q);a.$on("$locationChangeSuccess",l);return s}]}).run(A),I=d.$$minErr("ngRoute"),k;A.$inject=["$injector"];z.provider("$routeParams",function(){this.$get=function(){return{}}});z.directive("ngView",B);z.directive("ngView",C);B.$inject=["$route","$anchorScroll","$animate"];C.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

'use strict';

/**
 * @ngdoc overview
 * @name ecApp
 * @description
 * # ecApp
 *
 * Main module of the application.
 */
angular
  .module('ecApp', [
    'ngCookies',
    'ngRoute',
    'angularCSS',
    'ArticleService',
    'BasketService',
    'CategoryService',
    'CustomerService',
    'ShippingService',
    'HomeModule',
    'ArticleModule',
    'BasketModule',
    'ShippingModule',
    'CommandConfirmationModule',
    'ecNavbar',
    'ecFooter'
  ])
  .constant('config', {
      dataPath: 'http://localhost:3000/'
  })
  .controller('AppCtrl', ['CustomerFactory', function(CustomerFactory) {

    // Client
    //CustomerFactory.getCustomerById(1);
    
  }]);

'use strict';

/**
 * E-Command - Gestion des routes
 */
angular
.module('ecApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'HomeCtrl',
        templateUrl: './app/components/home/home.template.html',
        css: './assets/styles/home.style.css'
      })
      .when('/home', {
        controller: 'HomeCtrl',
        templateUrl: './app/components/home/home.template.html',
        css: './assets/styles/home.style.css'
      })
      .when('/articles', {
          controller: 'ArticleListCtrl',
          templateUrl: './app/components/article/article.template.html',
          css: './assets/styles/article.style.css'
      })
      .when('/panier', {
        controller: 'BasketCtrl',
        templateUrl: './app/components/basket/basket.template.html',
        css: './assets/styles/basket.style.css'
      })
      .when('/livraison', {
        controller: 'ShippingCtrl',
        templateUrl: './app/components/shipping/shipping.template.html',
        css: './assets/styles/shipping.style.css'
      })
      .when('/confirmation', {
        controller: 'CommandConfirmationCtrl',
        templateUrl: './app/components/command-confirmation/command-confirmation.template.html',
        css: './assets/styles/command-confirmation.style.css'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

angular.module('ArticleService', ['ngCookies', 'BasketService', 'CategoryService'])
    .factory('ArticleModel', function(CategoryModel, BasketFactory) {

        Article.category = {};

        function getCategoryByIdArticleCallback(response) {
            /*console.log(response.data[0])
            //this.category = CategoryModel.built(response.data[0]);
            this.category.idCategory = response.data[0].idCategorie;
            this.category.nomCategory = response.data[0].nomCategorie;*/

            return response.data[0];
        }
        
        function Article(idArticle, idCategory, label, description, unitPriceExcludingTax, vatRate, categoryLabel) {
            this.idArticle = idArticle;
            this.label = label;
            this.description = description;
            this.unitPriceExcludingTax = unitPriceExcludingTax;
            this.unitPriceExcludingTaxFloatFormat = BasketFactory.getFloatPrice(unitPriceExcludingTax);
            this.vatRate = vatRate;
            this.category = {};
            this.category.idCategory = idCategory;
            this.category.label = categoryLabel;
            //CategoryModel.getCategoryByIdArticle(idCategory, getCategoryByIdArticleCallback);
            //this.category = CategoryModel.getCategoryByIdArticle(idCategory);
        }

        Article.built = function(data) {
            return new Article(
                data.idArticle,
                data.idCategory,
                data.label,
                data.description,
                data.unitPriceExcludingTax,
                data.vatRate,
                data.categoryLabel
            );
        };

        return Article;
    })
    .factory('ArticleFactory', function($http, config, BasketFactory, ArticleModel) {

        var articleService = {};
         
        articleService.getArticles = function() {
            
            var articlesList = [];
            var url = config.dataPath + 'articles';

            $http.get(url).then(function(response) {
                angular.extend(articlesList, articleService.matchEnglishNamesForVars(response.data));
            });

            return articlesList;
        };

        articleService.matchEnglishNamesForVars = function(articlesList) {

            var matchedArticlesList = [],
                matchedElement;

            articlesList.forEach(element => {
                matchedElement = {};

                matchedElement.idArticle = element.idArticle;
                matchedElement.idCategory = element.idCategorie;
                matchedElement.label = element.libelle;
                matchedElement.description = element.description;
                matchedElement.unitPriceExcludingTax = element.prixHT;
                matchedElement.vatRate = element.taux;
                matchedElement.categoryLabel = element.nomCategorie;

                matchedArticlesList.push(ArticleModel.built(matchedElement));
                
                //console.log(matchedArticlesList);
            });

            return matchedArticlesList;
        };

        articleService.getArticlesExistingTypes = function() {
            return [{idType: 1, labelType: 'Plat', plurialLabelType: 'Plats'}, {idType: 2, labelType: 'Boisson', plurialLabelType: 'Boissons'}];
        };

        return articleService;

    });
'use strict';

angular.module('BasketService', ['ngCookies'])
    .factory('BasketFactory', function($cookies, ShippingFactory) {

        var basket = [];
        var basketService = {};

        basketService.addArticleQuantity = function(article) {
            var articleIndex = basket.findIndex(basketItem => basketItem.idArticle === article.idArticle);

            // Si panier vide ou article inexistant dans panier
            if (basket.length === 0 || (articleIndex === -1)) {
                var basketLine = {};

                basketLine.idArticle = article.idArticle;
                basketLine.label = article.label;
                basketLine.description = article.description;
                basketLine.articleType = article.articleType;
                basketLine.unitPriceExcludingTax = article.unitPriceExcludingTax;
                basketLine.unitPriceExcludingTaxFloatFormat = article.unitPriceExcludingTaxFloatFormat;
                basketLine.vatRate = article.vatRate;
                basketLine.quantity = 1;

                basket.push(basketLine);
            } else {
                // Incrémentation de la quantité
                this.upQuantity(basket[articleIndex]);
            }
            $cookies.putObject('ecPanier', basket);
        };

        basketService.removeArticle = function(articleIndex, forceDelete = false) {
            basket.splice(articleIndex, 1);

            if (forceDelete) {
                $cookies.putObject('ecPanier', basket);
            }
        };

        basketService.removeArticleQuantity = function(article) {
            var articleIndex = basket.findIndex(basketItem => basketItem.idArticle === article.idArticle);

            // Si article existe dans le panier
            if (articleIndex !== (-1)) {

                // Si quantité >= 2
                if (basket[articleIndex].quantity >= 2) {
                    this.downQuantity(basket[articleIndex]);
                } else {
                    this.removeArticle(articleIndex);
                }
            }
            $cookies.putObject('ecPanier', basket);
        };

        basketService.getBasketContent = function() {
            //$cookies.remove('ecPanier');
            //$cookies.remove('ecShippingModeSelected');
            if ($cookies.getObject('ecPanier') !== undefined) {
                basket = $cookies.getObject('ecPanier');
            }
            return basket;
        };

        basketService.upQuantity = function(basketLine) {
            basketLine.quantity += 1;
        };

        basketService.downQuantity = function(basketLine) {
            basketLine.quantity -= 1;
        };

        basketService.getFloatPrice = function(price) {
          return parseFloat(price).toFixed(2);
        };
    
        basketService.getPricePrecision = function(number, precision) {
          var factor = Math.pow(Number.parseFloat(10), precision);
          return Math.round(number * factor) / factor;
        };

        basketService.getBasketArticlesQuantity = function() {
            return this.getBasketContent().length;
        };

        basketService.calculateBasketCheck = function(basketArticlesList, isIncludingTaxRequired = false) {
            var basketCheck = {};
            basketCheck.basketArticlesList = basketArticlesList;

            if (isIncludingTaxRequired) {
                basketCheck.vatPrice = 0;
            }

            basketCheck.totalBasketCheckPriceExcludingTax = 0;
            basketCheck.basketArticlesList.forEach(element => {
                element.totalPriceExcludingTax = element.quantity * element.unitPriceExcludingTax;
                element.totalPriceExcludingTaxFloatFormat = this.getFloatPrice(element.totalPriceExcludingTax);

                if (isIncludingTaxRequired) {
                    element.lineVatPrice = (element.totalPriceExcludingTax / 100 * element.vatRate);
                    basketCheck.vatPrice += element.lineVatPrice;
                }

                basketCheck.totalBasketCheckPriceExcludingTax += element.totalPriceExcludingTax;
            });
            basketCheck.totalBasketCheckPriceExcludingTaxFloatFormat = this.getFloatPrice(basketCheck.totalBasketCheckPriceExcludingTax);

            if (isIncludingTaxRequired) {
                // Frais de TVA
                basketCheck.vatPriceFloatFormat = this.getFloatPrice(basketCheck.vatPrice);

                // Frais de livraison
                var shippingModeSelected = ShippingFactory.getShippingModeSelected();
                if (shippingModeSelected.frais === "Gratuit") {
                    basketCheck.shippingPriceLabel = shippingModeSelected.frais;
                    basketCheck.shippingPrice = 0;
                } else {
                    basketCheck.shippingPriceLabel = shippingModeSelected.frais;
                    basketCheck.shippingPrice = this.getFloatPrice(shippingModeSelected.frais);
                }

                // Prix total TTC de la commande
                basketCheck.totalBasketCheckPriceIncludingTax = 0;
                basketCheck.totalBasketCheckPriceIncludingTax += parseFloat(basketCheck.vatPrice);
                basketCheck.totalBasketCheckPriceIncludingTax += parseFloat(basketCheck.totalBasketCheckPriceExcludingTax);
                basketCheck.totalBasketCheckPriceIncludingTax += parseFloat(basketCheck.shippingPrice);
                basketCheck.totalBasketCheckPriceIncludingTaxFloatFormat = this.getFloatPrice(basketCheck.totalBasketCheckPriceIncludingTax);
            }

            return basketCheck;
        };

        basketService.getBasketQuantity = function() {
            var basketQtyBeforeAddition = 0;
            this.getBasketContent().forEach(element => {
                basketQtyBeforeAddition += element.quantity;
            });
            return basketQtyBeforeAddition;
        };

        basketService.notifyQuantityChangement = function(basketQtyBeforeAddition, basketQtyAfterAddition) {
            /*if (basketQtyBeforeAddition < basketQtyAfterAddition) {
                var popup = Notifier.openPopUp(basketQtyAfterAddition - basketQtyBeforeAddition);
            }*/
            if (basketQtyBeforeAddition < basketQtyAfterAddition) {
                //
            }
            
        };

        return basketService;

    });
'use strict';

angular.module('CustomerService', [])
    .factory('CustomerModel', function() {

        function Customer(idCustomer, lastname, firstname, email, phoneNumber, idAddress) {
            this.idCustomer = idCustomer;
            this.lastname = lastname;
            this.firstname = firstname;
            this.email = email;
            this.phoneNumber = phoneNumber;
            this.idAddress = idAddress;
        }

        Customer.built = function(data)
        {
            return new Customer(
                data.idClient,
                data.nom,
                data.prenom,
                data.email,
                data.numTel,
                data.idAdresse
            );
        };

        return Customer;

    })
    .factory('CustomerFactory', function($http, config, CustomerModel) {

        var customerService = {};

        customerService.getCustomerById = function(idCustomer, callback) {
            $http.get(config.dataPath + 'client/' + idCustomer)
                .then(function(response) {
                    console.log(CustomerModel.built(response.data[0]));
                    callback(CustomerModel.built(response.data[0]));
                });
        };

        return customerService;

    });
'use strict';

angular.module('CategoryService', [])
    .factory('CategoryModel', function($http, config) {

        /**
         * Crée une catégorie
         * @param {Integer} idCategory 
         * @param {String} label 
         */
        function Category(idCategory, label) {
            this.idCategory = idCategory;
            this.label = label;
        }

        /**
         * Récupère la catégorie d'un article donné
         * @param {Integer} idCategory 
         */
        Category.getCategoryByIdArticle = function(idCategory) {
            var url = config.dataPath + 'categorie/' + idCategory;

            $http.get(url).then(function(response) {
                return response;
            });
        };

        /**
         * Transforme un paramètre en catégorie
         * @param {Object} data 
         */
        Category.built = function(data) {
            return new Category(
                data.idCategory,
                data.label
            );
        };

        return Category;
    });
'use strict';

angular.module('ShippingService', ['ngCookies'])
    .factory('ShippingFactory', function($cookies) {
        var shippingMode = [
            {idModeLivraison: 1, libelle: "Aucun", description: "Je viens chercher ma commande", frais: "Gratuit", faIcon: "fa fa-street-view", selected: false},
            {idModeLivraison: 2, libelle: "Livraison", description: "Je me fais livrer à l'adresse suivante", frais: "3.50 €", faIcon: "fa fa-motorcycle", selected: false}
        ];
        var shippingModeSelected = null;
        var shippingService = {};

        shippingService.getShippingModes = function() {
            return shippingMode;
        };

        shippingService.selectShippingMode = function(shippingMode) {
            shippingModeSelected = shippingMode;
            $cookies.putObject('ecShippingModeSelected', shippingMode);
        };

        shippingService.getShippingModeSelected = function() {
            if ($cookies.getObject('ecShippingModeSelected') !== undefined) {
                shippingModeSelected = $cookies.getObject('ecShippingModeSelected');
            }
            return shippingModeSelected;
        };

        return shippingService;

    });
'use strict';

angular
    .module('ecFooter', ['angularCSS'])
    .directive('ecFooter', function() {
        return {
            restrict: 'E',
            templateUrl: './app/shared/footer/footer.template.html',
            css: './assets/styles/footer.style.css'
        };
    });
'use strict';

angular
    .module('ecNavbar', [])
    .directive('ecNavbar', function() {
        return {
            restrict: 'E',
            templateUrl: './app/shared/navbar/navbar.template.html',
            css: './assets/styles/navbar.style.css'
        };
    })
    .controller('navbarCtrl', ['$scope', 'BasketFactory', function($scope, BasketFactory) {

        // Nombre d'articles que contient le panier
        $scope.basketArticlesQuantity = BasketFactory.getBasketArticlesQuantity();
    
    }]);
'use strict';

angular
  .module('ArticleModule', [
    'ngRoute',
    'ArticleService',
    'BasketService'
  ])
  .controller('ArticleListCtrl', ['$scope', '$rootScope', '$http', 'ArticleFactory', 'BasketFactory', function($scope, $rootScope, $http, ArticleFactory, BasketFactory) {

    $scope.articlesList = ArticleFactory.getArticles();
    $scope.articlesExistingTypes = ArticleFactory.getArticlesExistingTypes();

    $scope.addArticleInBasket = function(article) {
      var basketQtyBeforeAddition = BasketFactory.getBasketQuantity();
      //console.log(basketQtyBeforeAddition);

      BasketFactory.addArticleQuantity(article);
      var basketQtyAfterAddition = BasketFactory.getBasketQuantity();
      BasketFactory.notifyQuantityChangement(basketQtyBeforeAddition, basketQtyAfterAddition);
    };

  }]);
  
  
  
  
  
  


















  
  
  

    /**
     * Incrémente la quantité d'une ligne du panier
     * @param {*} basketLine 
     *
    $scope.upQuantity = function(basketLine) {
      if ($scope.basket.length === 0) {
        $scope.basket = [];
      }
      basketLine.quantite += 1;
    }

    /**
     * Décrémente la quantité d'une ligne du panier
     * @param {*} basketLine 
     *
    $scope.downQuantity = function(basketLine) {
      basketLine.quantite -= 1;
    }*/
  
  
  
  
  
  
  
  
  
  /*.controller('ArticleDetailsCtrl', function($scope, $http, $routeParams, ArticleFactory) {
    console.log($routeParams.articleid);
    var url = 'http://localhost:3000/article/' + $routeParams.articleid;
    $http.get(url).then(function(response) {
        $scope.article = response.data;
      });
  })*/
'use strict';

angular
  .module('BasketModule', [
    'ngRoute',
    'BasketService'
  ])
  .controller('BasketCtrl', ['$scope', 'BasketFactory', function($scope, BasketFactory) {

    $scope.basketArticlesList = BasketFactory.getBasketContent();     // Panier de commande
    $scope.totalBasketCheckPriceExcludingTax = 0;                         // Prix total HT
    $scope.totalBasketCheckPriceExcludingTaxFloatFormat = null;              // Prix total HT au format 'Float'

    $scope.$watch('basketArticlesList', function() {
      $scope.calculateBasketCheck($scope.basketArticlesList);
    });

    /**
     * Calcule le prix HT de chaque ligne et le prix total HT du panier
     */
    $scope.calculateBasketCheck = function(basketArticlesList) {
      var basketCheck = BasketFactory.calculateBasketCheck(basketArticlesList);
      
      angular.extend($scope.basketArticlesList, basketCheck.basketArticlesList);

      $scope.totalBasketCheckPriceExcludingTax = basketCheck.totalBasketCheckPriceExcludingTax;
      $scope.totalBasketCheckPriceExcludingTaxFloatFormat = basketCheck.totalBasketCheckPriceExcludingTaxFloatFormat;
    };

    $scope.upQuantity = function(articleLigne) {
      BasketFactory.addArticleQuantity(articleLigne);
      $scope.calculateBasketCheck($scope.basketArticlesList);
    };

    $scope.downQuantity = function(articleLigne) {
      BasketFactory.removeArticleQuantity(articleLigne);
      $scope.calculateBasketCheck($scope.basketArticlesList);
    };

    $scope.removeArticle = function(articleLigne) {
      var articleIndex = $scope.basketArticlesList.findIndex(basketItem => basketItem.idArticle === articleLigne.idArticle);
      BasketFactory.removeArticle(articleIndex, true);
      $scope.calculateBasketCheck($scope.basketArticlesList);
    };

  }]);
'use strict';

angular.module('HomeModule', ['ngRoute'])
  .controller('HomeCtrl', [function() {

  }]);
'use strict';

angular
    .module('ShippingModule', [
        'ngRoute',
        'ShippingService'
      ])
    .controller('ShippingCtrl', ['$scope', 'ShippingFactory', function($scope, ShippingFactory) {

        $scope.shippingModes = ShippingFactory.getShippingModes();
        $scope.shippingModeSelected = ShippingFactory.getShippingModeSelected();
        $scope.shippingPrice = 0;

        if ($scope.shippingModeSelected !== null) {
            $scope.shippingPrice = $scope.shippingModeSelected.frais;
        }

        $scope.selectShippingMode = function(shippingMode) {
            shippingMode.selected = true;
            ShippingFactory.selectShippingMode(shippingMode);
            $scope.shippingModeSelected = ShippingFactory.getShippingModeSelected();
            $scope.majInfos();
        };

        $scope.majInfos = function() {
            if ($scope.shippingModeSelected !== null) {
                $scope.shippingPrice = $scope.shippingModeSelected.frais;
            }
        };

    }]);
'use strict';

angular
    .module('CommandConfirmationModule', [
        'ngRoute',
        'BasketService'
      ])
    .controller('CommandConfirmationCtrl', ['$scope', 'BasketFactory', function($scope, BasketFactory) {

        $scope.basketArticlesList = BasketFactory.getBasketContent();     // Panier de commande
        $scope.totalBasketCheckPriceExcludingTax = 0;                         // Prix total HT
        $scope.totalBasketCheckPriceExcludingTaxFloatFormat = null;              // Prix total HT au format 'Float'
        $scope.shippingPriceLabel = '';                                   // Libellé des frais de livraison
        $scope.shippingPrice = 0;                                             // Frais de livraison
        $scope.vatPrice = 0;                                                  // Frais de TVA
        $scope.vatPriceFloatFormat = null;                                       // Frais de TVA au format 'Float'
        $scope.totalBasketCheckPriceIncludingTax = 0;                         // Prix total TTC
        $scope.totalBasketCheckPriceIncludingTaxFloatFormat = null;              // Prix total TTC au format 'Float'
        $scope.isCommandConfirmed = false;
    
        $scope.$watch('basketArticlesList', function() {
          $scope.calculateBasketCheck($scope.basketArticlesList);
        });

        /**
         * Calcule le prix HT de chaque ligne et le prix total HT du panier
         */
        $scope.calculateBasketCheck = function(basketArticlesList) {
          var basketCheck = BasketFactory.calculateBasketCheck(basketArticlesList, true);
          
          angular.extend($scope.basketArticlesList, basketCheck.basketArticlesList);
    
          $scope.totalBasketCheckPriceExcludingTax = basketCheck.totalBasketCheckPriceExcludingTax;
          $scope.totalBasketCheckPriceExcludingTaxFloatFormat = basketCheck.totalBasketCheckPriceExcludingTaxFloatFormat;
          $scope.vatPrice = basketCheck.vatPrice;
          $scope.vatPriceFloatFormat = basketCheck.vatPriceFloatFormat;
          $scope.shippingPrice = basketCheck.shippingPrice;
          $scope.shippingPriceLabel = basketCheck.shippingPriceLabel;
          $scope.totalBasketCheckPriceIncludingTax = basketCheck.totalBasketCheckPriceIncludingTax;
          $scope.totalBasketCheckPriceIncludingTaxFloatFormat = basketCheck.totalBasketCheckPriceIncludingTaxFloatFormat;
        };

        $scope.confirmCommand = function() {
            $scope.isCommandConfirmed = true;
        };
        
        /*$scope.prixTotalHT = 0;
        $scope.prixTotalHTFloat = '';
        $scope.fraisLivraisonLibelle = '';
        $scope.fraisLivraison = 0;
        $scope.fraisTVA = 0;
        $scope.fraisTVAFloat = '';
        $scope.prixTotalTTC = 0;
        $scope.prixTotalTTCFloat = '';

        $scope.basketArticlesList.forEach(element => {
            // Prix unitaire HT en Float - Format '1.00'
            element.unitPriceExcludingTaxFloatFormat = BasketFactory.getFloatPrice(element.unitPriceExcludingTax);
    
            // Prix total HT par ligne
            element.prixTotalLigne = (element.unitPriceExcludingTax * element.quantite);
            element.prixTotalLigneFloat = BasketFactory.getFloatPrice(element.prixTotalLigne);

            // Frais de TVA
            element.fraisTVALigne = (element.prixTotalLigne / 100 * element.taux);
            
            // Prix total HT du panier
            $scope.prixTotalHT += element.prixTotalLigne;
            $scope.fraisTVA += element.fraisTVALigne;

        });

        $scope.fraisTVAFloat = BasketFactory.getFloatPrice($scope.fraisTVA);
    
        // Prix total HT du panier en Float
        $scope.prixTotalHTFloat = BasketFactory.getFloatPrice($scope.prixTotalHT);

        // Frais de livraison
        if (ShippingFactory.getShippingModeSelected().frais === "Gratuit") {
            $scope.fraisLivraisonLibelle = ShippingFactory.getShippingModeSelected().frais;
            $scope.fraisLivraison = 0;
        } else {
            $scope.fraisLivraisonLibelle = ShippingFactory.getShippingModeSelected().frais;
            $scope.fraisLivraison = BasketFactory.getFloatPrice(ShippingFactory.getShippingModeSelected().frais);
        }

        $scope.prixTotalTTC += parseFloat($scope.prixTotalHT);
        $scope.prixTotalTTC += parseFloat($scope.fraisLivraison);
        $scope.prixTotalTTC += parseFloat($scope.fraisTVA);
        $scope.prixTotalTTCFloat = BasketFactory.getFloatPrice($scope.prixTotalTTC);*/

    }]);